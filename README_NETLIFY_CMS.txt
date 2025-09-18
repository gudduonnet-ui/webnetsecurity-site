Netlify CMS setup (Git-based) - Instructions
-------------------------------------------

This package is prepared to work with Netlify CMS. Follow these steps to enable the in-browser admin UI and allow non-developers to add/edit Projects.

1) Push this repo to GitHub
   - Create a new GitHub repository (e.g., webnetsecurity-site)
   - Push all files from this folder (including 'admin/' and 'content/') to the repo

2) Connect the repo to Netlify
   - In Netlify, create a new site -> Import from GitHub -> select this repository -> Deploy
   - In Netlify site settings, enable "Identity" and "Git Gateway":
     - Go to Settings > Identity > Enable Identity
     - Under Identity > Services (Git Gateway) click "Enable Git Gateway"
     - You may be asked to confirm repository access

3) Configure registration (optional)
   - You can allow open signup or invite users manually from Netlify Identity settings.

4) Using the CMS
   - Visit https://<your-site>/.netlify/functions/git-gateway or /admin to access the CMS
   - Login with Netlify Identity (email) and you can create/edit Projects via the UI
   - Uploaded images will be placed under `static/uploads` and committed to repo

Notes:
- Make sure admin/config.yml backend points to 'git-gateway' and branch 'main'.
- If you prefer, you can use 'backend: github' with a personal access token, but git-gateway + Netlify Identity is recommended.
