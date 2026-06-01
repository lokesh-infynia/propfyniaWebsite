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
- Authentication uses GitHub OIDC with Google Workload Identity Federation, so no service account JSON key is required.

One-time Google Cloud setup:

```bash
gcloud auth login
gcloud config set project propfynia-app
gcloud services enable iamcredentials.googleapis.com sts.googleapis.com

gcloud iam service-accounts create github-firebase-hosting \
  --display-name="GitHub Firebase Hosting deployer"

gcloud projects add-iam-policy-binding propfynia-app \
  --member="serviceAccount:github-firebase-hosting@propfynia-app.iam.gserviceaccount.com" \
  --role="roles/firebasehosting.admin"

gcloud iam workload-identity-pools create github-actions \
  --project="propfynia-app" \
  --location="global" \
  --display-name="GitHub Actions"

gcloud iam workload-identity-pools providers create-oidc github \
  --project="propfynia-app" \
  --location="global" \
  --workload-identity-pool="github-actions" \
  --display-name="GitHub" \
  --issuer-uri="https://token.actions.githubusercontent.com" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.ref=assertion.ref" \
  --attribute-condition="attribute.repository == 'lokesh-infynia/propfyniaWebsite'"

gcloud iam service-accounts add-iam-policy-binding \
  github-firebase-hosting@propfynia-app.iam.gserviceaccount.com \
  --project="propfynia-app" \
  --role="roles/iam.workloadIdentityUser" \
  --member="principalSet://iam.googleapis.com/projects/282468806996/locations/global/workloadIdentityPools/github-actions/attribute.repository/lokesh-infynia/propfyniaWebsite"
```

## Notes

- Public app CTA links point to `https://app.propfynia.com`.
- The website is marketing-only and does not implement login or app functionality.
- PropFynia logo assets are stored in `public/logos`.
