# English Boost 2.0 — Android PWA and AI chat setup

## A. Update the app already on your phone

Your current GitHub Pages website uses the subfolder `English_Boost_Android_PWA` in the `English_Application` repository.

**Important: preserve that same folder name and same published URL.**

1. Export your progress from the existing app first: `Export progress`.
2. Extract this ZIP on your computer.
3. In the GitHub repository, open `English_Boost_Android_PWA` and update **only** its `index.html`, `sw.js`, `manifest.webmanifest` and `icons/` with the versions in this archive. Do **not** upload the ZIP as a file, and do **not** upload the parent `English_Boost_v2` folder as an additional nested folder.
4. Commit the file changes. GitHub Pages will redeploy the existing website.
5. Open the already installed Android app and close/reopen it when the deployment completes. Use the **Progress → Check for an app update** button if an old version remains visible.
6. Your previous completed days and notes use the original browser storage key and are retained when the app URL/origin stay the same. Export a backup before upgrades and do not clear Chrome storage or uninstall the app without backups.

If you have a different GitHub username, use the actual live Pages URL rather than a guessed one.

## B. AI coach — optional secure backend

The Coach has **guided practice** without a backend, but that offline mode does not generate personalized AI answers. To enable true AI answers:

1. Create a Cloudflare account and a **Worker** (Dashboard → Workers & Pages → Create). Paste the included `ai-backend/worker.js` as its source and deploy.
2. In Worker **Settings → Variables and Secrets**, add `OPENAI_API_KEY` as a **secret** (an OpenAI API key that you created), `COACH_PASSCODE` as a **secret** (a long private passcode), and `ALLOWED_ORIGIN` with the exact site origin, for example `https://bilellouati.github.io` (without the repository path).
3. In English Boost → English Coach → AI connection settings, enter the deployed `https://....workers.dev` URL and Save URL.
4. Enter your private passcode in the coach input each time you reopen the app (it is not saved). Try a question such as `Correct this sentence: I am interesting by AI.`
5. API usage may incur charges. **Important security:** restricting CORS origins is not authentication. The passcode is required by the Worker; share neither passcode nor API key. For a widely shared public app, implement additional rate limiting and abuse prevention on the Worker.

Never paste the OpenAI API key into GitHub, an HTML file or the app settings. If you do not want API costs, keep the local guided coach and/or open ChatGPT separately for AI conversations.

The app cannot reliably deliver its own daily background notifications via ordinary GitHub Pages hosting. Your previously scheduled 20:00 ChatGPT reminder remains separate.

## C. About the lessons

All 60 days and 63 previously collected YouTube URLs are preserved. Link formatting and association with the community study index were checked in earlier work, but the current video titles, publishers and playback have **not** been independently verified for all 63 videos. The app does not claim otherwise.

## D. Backup

- Plan tab → `Export progress`: saves your original completion and daily notes data.
- Progress tab → `Export new features backup`: saves vocabulary, written explanations, speaking notes/minutes and coach conversation text.
- Voice recordings must be downloaded individually after recording; they are not saved to local storage or included in backups.
