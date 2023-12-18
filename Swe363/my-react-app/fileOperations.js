const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

async function copyFiles(sourceDir, targetDir, extensions) {
  try {
    const files = await readdir(sourceDir);

    const filteredFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return extensions.includes(ext);
    });

    await Promise.all(
      filteredFiles.map(async file => {
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);
        await copyFile(sourcePath, targetPath);
        console.log(`Copied: ${file}`);
      })
    );

    console.log('Copy operation completed.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

module.exports = { copyFiles };
