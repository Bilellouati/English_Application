ENGLISH BOOST – ANDROID INSTALLATION

1. Extract the ZIP archive. Keep index.html, manifest.webmanifest, sw.js, and icons/ together.
2. Publish the whole folder on HTTPS. Easy option: create a public GitHub repository, put the folder contents at repository root, then Settings > Pages > Deploy from branch > main / root. Wait for the GitHub Pages URL. Alternatively deploy the extracted folder on Netlify.
3. On Android open the HTTPS page in Chrome, tap the three dots menu, choose Install app (or Add to Home screen), and accept.
4. Launch English Boost from its home-screen icon. Check the lessons, save vocabulary notes, and track completed days. Video playback needs internet; the interface can work offline after first load.
5. DAILY REMINDERS: A ChatGPT recurring reminder is scheduled for 20:00 Europe/Paris. Enable ChatGPT notification permissions on Android and notifications in the ChatGPT app to receive it. Android Settings > Apps > ChatGPT > Notifications > Allow. Reminders do not originate from this PWA and are not linked to your completion data.
6. PROGRESS: The browser version and installed app may use separate local storage on some Android configurations. Export progress as JSON from the old page, then import into the installed version. Keep periodic backups.

Important: Do not open index.html from a local file and expect PWA installation, service worker/offline behavior, or background notifications. HTTPS (or localhost for development) is required. YouTube video title/uploader/current availability for all 63 videos remains unverified; source is a community-created public Level 2 index: https://github.com/elsheraey/zamerican-english-30-day-plan/blob/master/english-learning-plan-L2.md
