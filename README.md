# Portfolio

Personal portfolio site for Bryan Kristofferson, built with Astro.

**Live:** [bryankristofferson.com](https://bryankristofferson.com)

## About

A minimal, Wikipedia-inspired portfolio showcasing backend engineering projects and skills. Built for simplicity and fast loading - no JavaScript required on the client.

## Tech Stack

- **Framework:** [Astro](https://astro.build) - static site generator
- **Runtime:** [Bun](https://bun.sh) - fast JavaScript runtime
- **Hosting:** GitHub Pages
- **Domain:** Route 53 DNS

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main`.

The workflow:
1. Builds the site with Bun
2. Uploads artifacts to GitHub Pages
3. Deploys to custom domain

## Project Structure

```
├── src/
│   └── pages/
│       └── index.astro    # Main portfolio page
├── public/
│   └── CNAME              # Custom domain config
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
└── astro.config.mjs       # Astro configuration
```
