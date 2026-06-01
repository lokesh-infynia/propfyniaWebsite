# PropFynia Marketing Website

A responsive Vite React TypeScript landing page for PropFynia, styled with Tailwind CSS and animated with Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deployment

This site is configured for Firebase Hosting:

```bash
npm run deploy
```

The Firebase project is `propfynia-app`, and the Hosting site is `propfynia-website`.

## CI/CD

GitHub Actions deploys Firebase Hosting from `.github/workflows/firebase-hosting.yml`.

- Pull requests to `main` or `master` create Firebase preview channels.
- Pushes to `main` or `master` deploy the live site.
- Add the GitHub Actions secret `FIREBASE_SERVICE_ACCOUNT_PROPFYNIA_APP` with a Firebase service account JSON for project `propfynia-app`.

## Notes

- Public app CTA links point to `https://app.propfynia.com`.
- The website is marketing-only and does not implement login or app functionality.
- PropFynia logo assets are stored in `public/logos`.
