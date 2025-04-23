// Custom build script to prepare files for Netlify deployment
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('\n📦 Starting custom build process for Netlify deployment...\n');

// Step 1: Create necessary directories
console.log('1️⃣ Creating directory structure...');
const directories = [
  'dist',
  'dist/public',
  'dist/functions'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`   Created: ${dir}`);
  }
});

// Step 2: Run Vite build
console.log('\n2️⃣ Building frontend with Vite...');
try {
  execSync('npx vite build', { stdio: 'inherit' });
  console.log('   ✅ Frontend build completed successfully');
} catch (error) {
  console.error('   ❌ Frontend build failed:', error);
  process.exit(1);
}

// Step 3: Copy Netlify functions
console.log('\n3️⃣ Copying Netlify functions...');
try {
  if (fs.existsSync('netlify/functions')) {
    fs.readdirSync('netlify/functions').forEach(file => {
      if (file.endsWith('.js')) {
        const sourcePath = path.join('netlify/functions', file);
        const destPath = path.join('dist/functions', file);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`   Copied: ${file}`);
      }
    });
  }
  console.log('   ✅ Functions copied successfully');
} catch (error) {
  console.error('   ❌ Error copying functions:', error);
}

// Step 4: Copy _redirects file to ensure routing works
console.log('\n4️⃣ Copying redirect rules...');
try {
  if (fs.existsSync('client/public/_redirects')) {
    fs.copyFileSync('client/public/_redirects', 'dist/_redirects');
    console.log('   ✅ _redirects file copied successfully');
  } else {
    console.log('   ⚠️ No _redirects file found in client/public');
    
    // Create one if it doesn't exist
    const redirectsContent = `/api/*  /.netlify/functions/:splat  200\n/*       /index.html                     200`;
    fs.writeFileSync('dist/_redirects', redirectsContent);
    console.log('   🔧 Created _redirects file in dist');
  }
} catch (error) {
  console.error('   ❌ Error handling redirects:', error);
}

// Step 5: Copy assets, particularly the PDF resume file
console.log('\n5️⃣ Copying additional assets...');
try {
  // Copy the PDF resume file if it exists
  if (fs.existsSync('attached_assets')) {
    // Create assets directory in dist if it doesn't exist
    if (!fs.existsSync('dist/assets')) {
      fs.mkdirSync('dist/assets', { recursive: true });
    }
    
    // Copy resume PDF
    const resumeFiles = fs.readdirSync('attached_assets').filter(file => file.toLowerCase().includes('resume') && file.endsWith('.pdf'));
    
    if (resumeFiles.length > 0) {
      const resumeFile = resumeFiles[0]; // Take the first resume file found
      const sourcePath = path.join('attached_assets', resumeFile);
      const destPath = path.join('dist/assets', resumeFile);
      fs.copyFileSync(sourcePath, destPath);
      console.log(`   ✅ Copied resume file: ${resumeFile}`);
    } else {
      console.log('   ⚠️ No resume PDF found in attached_assets directory');
    }
    
    // Copy any other important assets
    const otherAssets = fs.readdirSync('attached_assets').filter(file => !resumeFiles.includes(file));
    if (otherAssets.length > 0) {
      console.log('   Copying other assets:');
      otherAssets.forEach(file => {
        const sourcePath = path.join('attached_assets', file);
        const destPath = path.join('dist/assets', file);
        fs.copyFileSync(sourcePath, destPath);
        console.log(`      - ${file}`);
      });
    }
  } else {
    console.log('   ⚠️ No attached_assets directory found');
  }
} catch (error) {
  console.error('   ❌ Error copying assets:', error);
}

// Step 6: Generate a simple asset manifest
console.log('\n6️⃣ Generating asset manifest...');
try {
  const manifestData = {
    buildDate: new Date().toISOString(),
    version: '1.0.0',
    assets: []
  };
  
  // Add assets to the manifest
  if (fs.existsSync('dist/assets')) {
    fs.readdirSync('dist/assets').forEach(file => {
      manifestData.assets.push({
        path: `/assets/${file}`,
        filename: file
      });
    });
    
    // Write manifest file
    fs.writeFileSync('dist/asset-manifest.json', JSON.stringify(manifestData, null, 2));
    console.log(`   ✅ Generated asset manifest with ${manifestData.assets.length} entries`);
  } else {
    console.log('   ⚠️ No assets directory found, generating empty manifest');
    fs.writeFileSync('dist/asset-manifest.json', JSON.stringify(manifestData, null, 2));
  }
} catch (error) {
  console.error('   ❌ Error generating asset manifest:', error);
}

console.log('\n✅ Build process completed successfully!');
console.log('📦 Your project is ready for Netlify deployment.');
console.log('📂 Deploy the "dist" directory to Netlify.\n');