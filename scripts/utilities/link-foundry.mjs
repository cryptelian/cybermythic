import { symlink, rm, mkdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { homedir } from 'node:os';

async function createFoundryLink() {
  const projectRoot = process.cwd();
  const distDir = resolve(projectRoot, 'dist');
  
  // Default Foundry data paths
  // Only Windows supported for this specific script as per user OS
  const foundryDataPath = join(homedir(), 'AppData', 'Local', 'FoundryVTT', 'Data');
  const systemsPath = join(foundryDataPath, 'systems');
  const targetLink = join(systemsPath, 'anarchy');

  console.log('🔗 Creating Foundry VTT System Link...');
  console.log(`   Source: ${distDir}`);
  console.log(`   Target: ${targetLink}`);

  try {
    await stat(distDir);
  } catch {
    console.error('❌ Error: dist/ folder not found. Run "npm run build" first.');
    process.exit(1);
  }

  try {
    // Check if target exists
    const targetStat = await stat(targetLink).catch(() => null);
    
    if (targetStat) {
      console.log('⚠️  Target already exists. Removing...');
      // Use shell command for robust directory removal on Windows
      const { execSync } = await import('node:child_process');
      execSync(`rmdir /s /q "${targetLink}"`, { stdio: 'ignore' });
    }

    // Create the directory junction (Windows specific, most robust for Foundry)
    const { execSync } = await import('node:child_process');
    execSync(`mklink /J "${targetLink}" "${distDir}"`, { stdio: 'inherit', shell: 'cmd.exe' });
    
    console.log('✅ Successfully linked! You can now launch Foundry VTT.');
  } catch (error) {
    console.error('❌ Failed to create link:', error.message);
    console.log('\nTry running this script as Administrator if you see permission errors.');
  }
}

createFoundryLink();
