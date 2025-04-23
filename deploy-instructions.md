# Deploying to Netlify

This document provides instructions for deploying your portfolio website to Netlify.

## Preparation Steps (Already Completed)

1. Fixed CSS import order in `client/src/index.css`
2. Updated Header component to avoid DOM nesting issues
3. Created `netlify.toml` configuration file
4. Added Netlify serverless function for the contact form
5. Updated Contact component to use Netlify functions in production
6. Added proper redirects configuration

## Build Process

Due to restrictions on modifying the package.json, here's the manual build process:

1. **Run the build script manually**:
   ```
   node scripts/build.js
   ```

2. This script will:
   - Create necessary directories
   - Build the frontend with Vite
   - Copy the Netlify functions to the correct location
   - Ensure routing works by setting up proper redirects

## Netlify Deployment

1. **Create a Netlify account** if you don't have one already

2. **Deploy using the Netlify UI**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Drag and drop the `dist` folder to the Netlify UI
   - Or connect your GitHub repository for continuous deployment

3. **Alternative: Deploy using Netlify CLI**:
   ```
   npm install -g netlify-cli
   netlify deploy --dir=dist --prod
   ```

## Environment Variables

No environment variables are required for the basic portfolio functionality.

## Important Files

- **netlify.toml**: Main configuration file for Netlify
- **client/public/_redirects**: Defines routing rules
- **netlify/functions/contactform.js**: Serverless function for contact form
- **scripts/build.js**: Custom build script

## Notes for Future Updates

- When adding new API endpoints, create corresponding Netlify functions
- Keep the frontend purely static where possible
- Update the redirects file if you add new paths that need special handling