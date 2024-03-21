const fs = require('fs');
const path = require('path');

const distDir = './dist';

// Function to rename file
function renameFile(oldName, newName) {
  if (fs.existsSync(oldName)) {
    fs.renameSync(oldName, newName, (err) => {
      if (err) throw err;
      console.log(`Renamed ${oldName} to ${newName}`);
    });
  }
}

// Function to recursively update references in all files
function updateReferences(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) throw err;

    files.forEach(file => {
      // Skip .git directory and image files
      if (file.name === '.git' || /\.(jpg|jpeg|png|gif)$/i.test(file.name)) {
        return;
      }

      const filePath = path.join(directory, file.name);
      if (file.isDirectory()) {
        updateReferences(filePath); // Recurse into subdirectories
      } else {
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          
          const result = data.replace(/_plugin-vue_export-helper/g, 'plugin-vue_export-helper');
          
          fs.writeFile(filePath, result, 'utf8', (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(`Updated references in ${filePath}`);
          });
        });
      }
    });
  });
}

// Rename the file
const oldFileName = path.join(distDir, 'assets/_plugin-vue_export-helper.js');
const newFileName = path.join(distDir, 'assets/plugin-vue_export-helper.js');
renameFile(oldFileName, newFileName);

// Update references in dist folder
updateReferences(distDir);
