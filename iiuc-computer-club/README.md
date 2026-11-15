# IIUC Computer Club Website

A responsive landing page for the IIUC Computer Club (International Islamic University Chittagong), built with **HTML5, Tailwind CSS (Play CDN) and vanilla JavaScript**. Course: Software Development I (CSE-2340), Mini Project 2.

## Structure

```
iiuc-computer-club/
├── index.html      # All sections: nav, hero, about, activities, events, join, team, contact, footer
├── js/script.js    # Mobile menu, active nav link, form validation
├── assets/
│   ├── images/     # Put real photos here
│   └── icons/      # Put logo / icons here
└── README.md
```

## Run locally (VS Code + Live Server)

1. Install [VS Code](https://code.visualstudio.com/).
2. Open the `iiuc-computer-club` folder (File > Open Folder).
3. Open the Extensions panel, search for **Live Server** (Ritwick Dey) and install it.
4. Right-click `index.html` and choose **Open with Live Server**.
5. The site opens at `http://127.0.0.1:5500` and reloads when you save.

You need an internet connection: Tailwind and the Google Fonts load from a CDN.

## Publish with GitHub Pages

1. Create a new public repository on GitHub (e.g. `iiuc-computer-club`).
2. In the project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: IIUC Computer Club website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/iiuc-computer-club.git
   git push -u origin main
   ```
3. On GitHub open **Settings > Pages**.
4. Under **Build and deployment**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.
5. After a minute the site is live at `https://YOUR-USERNAME.github.io/iiuc-computer-club/`.

## Replace the placeholder content

- Events, team names, email, Facebook and LinkedIn links are **placeholders**. Search `index.html` for "placeholder" and "to be announced".
- Add real photos to `assets/images/` and swap them in for the icon banners.
- The contact form only validates in the browser. To receive messages, connect a form service such as Formspree.
- For a production site, replace the Tailwind Play CDN with a Tailwind CLI build.

## Assignment checklist (MP2)

- [x] Navigation bar and more than two content sections
- [x] Tailwind CSS styling (colors, spacing, typography)
- [x] Responsive layout for mobile and desktop
- [x] Interactive elements: hamburger menu, hover effects, active nav link, form validation
- [ ] Submit the GitHub repository URL and a ZIP file of this folder
