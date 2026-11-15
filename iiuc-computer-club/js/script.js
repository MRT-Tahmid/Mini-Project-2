// IIUC Computer Club: interactions (menu, active link, form validation)
document.addEventListener('DOMContentLoaded', () => {
  /* ---------- 1. Mobile menu ---------- */
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');

  function setMenu(open) {
    menu.classList.toggle('hidden', !open);
    iconOpen.classList.toggle('hidden', open);
    iconClose.classList.toggle('hidden', !open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', () => setMenu(menu.classList.contains('hidden')));
  // Close the menu after tapping a link, or pressing Escape
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  /* ---------- 2. Header shadow once the page is scrolled ---------- */
  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('shadow-md', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 3. Highlight the nav link of the section in view ---------- */
  const links = document.querySelectorAll('.nav-link');
  const sections = [...document.querySelectorAll('main section[id]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        const active = link.getAttribute('href') === '#' + entry.target.id;
        link.classList.toggle('text-royal', active);
        link.classList.toggle('font-bold', active);
        if (active) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' }); // a section counts when it crosses the middle of the screen
  sections.forEach(s => observer.observe(s));

  /* ---------- 4. Contact form validation (frontend only) ---------- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Each rule returns an error message, or '' when the field is valid
  const rules = {
    name:    v => v.trim().length < 2 ? 'Enter your name (at least 2 characters).' : '',
    email:   v => !emailPattern.test(v.trim()) ? 'Enter a valid email address, like name@example.com.' : '',
    message: v => v.trim().length < 10 ? 'Write a message of at least 10 characters.' : ''
  };

  function showError(field, msg) {
    const out = form.querySelector(`.err[data-for="${field.id}"]`);
    out.textContent = msg;
    out.classList.toggle('hidden', !msg);
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
    field.classList.toggle('border-red-500', Boolean(msg));
  }

  // Validate a field when the user leaves it
  Object.keys(rules).forEach(id => {
    const field = form.elements[id];
    field.addEventListener('blur', () => showError(field, rules[id](field.value)));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    status.classList.add('hidden');
    let firstBad = null;
    Object.keys(rules).forEach(id => {
      const field = form.elements[id];
      const msg = rules[id](field.value);
      showError(field, msg);
      if (msg && !firstBad) firstBad = field;
    });
    if (firstBad) return firstBad.focus();

    // No backend yet: connect a service (e.g. Formspree) to really deliver messages.
    status.textContent = 'Thanks! Your message passed validation. (Demo form: nothing was sent.)';
    status.classList.remove('hidden');
    form.reset();
  });

  /* ---------- 5. Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
});
