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
    fs.copyFileSync('client/public/_redirects', 'dist/public/_redirects');
    console.log('   ✅ _redirects file copied successfully');
  } else {
    console.log('   ⚠️ No _redirects file found in client/public');
    
    // Create one if it doesn't exist
    const redirectsContent = `/api/*  /.netlify/functions/:splat  200\n/*       /index.html                     200`;
    fs.writeFileSync('dist/public/_redirects', redirectsContent);
    console.log('   🔧 Created _redirects file in dist/public');
  }
} catch (error) {
  console.error('   ❌ Error handling redirects:', error);
}

console.log('\n✅ Build process completed successfully!');
console.log('📦 Your project is ready for Netlify deployment.');
console.log('📂 Deploy the "dist" directory to Netlify.\n');