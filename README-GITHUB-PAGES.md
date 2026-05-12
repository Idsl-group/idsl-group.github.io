# GitHub Pages Deployment Guide

This project is configured for deployment to GitHub Pages instead of Vercel.

## Configuration Changes Made

### 1. Next.js Configuration
- **Static Export**: Added `output: 'export'` to `next.config.js`
- **Trailing Slashes**: Enabled `trailingSlash: true` for proper routing
- **Image Optimization**: Disabled `unoptimized: true` (required for static export)
- **Base Path**: Set to `/IDSL-1` for production deployment
- **Asset Prefix**: Configured for GitHub Pages subdirectory

### 2. Package.json Scripts
- Added `export` script for building static files
- Added `deploy` script for manual deployment using gh-pages

### 3. GitHub Actions Workflow
- Automatic deployment on push to main branch
- Builds and deploys to GitHub Pages
- Located in `.github/workflows/deploy.yml`

## Deployment Methods

### Automatic Deployment (Recommended)
1. Push changes to the main branch
2. GitHub Actions will automatically build and deploy
3. Visit your GitHub Pages settings to ensure Pages is enabled
4. Select the `gh-pages` branch as the source

### Manual Deployment
```bash
# Install dependencies
npm install

# Build and deploy manually
npm run deploy
```

## Important Notes

### API Routes
- API routes are not compatible with static export
- The `/api/insights` route has been removed
- Consider migrating API functionality to client-side data fetching or serverless functions

### Dynamic Routes
- All dynamic routes now include `generateStaticParams()` for static generation
- The `/news/[id]` route is pre-rendered for all available news items

### Images
- Image optimization is disabled for static export
- All images are served as-is
- Consider using external image optimization services if needed

### Base Path Configuration
The project is configured to work from the `/IDSL-1` subdirectory. If you change the repository name, update the `basePath` and `assetPrefix` in `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

## Local Development

For local development, run:
```bash
npm run dev
```

The development server will work normally without the base path restrictions.

## Build Output

The static build is generated in the `out/` directory and contains:
- Static HTML files for all pages
- CSS and JavaScript bundles
- Static assets (images, fonts, etc.)

## Troubleshooting

### 404 Errors on GitHub Pages
- Ensure `trailingSlash: true` is set in `next.config.js`
- Check that the base path matches your repository name
- Verify GitHub Pages is configured to use the `gh-pages` branch

### Build Failures
- Remove any API routes from the `app/api/` directory
- Ensure all dynamic routes have `generateStaticParams()`
- Check that all imports are compatible with static export

### Image Issues
- Use the `unoptimized: true` setting for images
- Consider using absolute URLs for external images
- Test all images after deployment
