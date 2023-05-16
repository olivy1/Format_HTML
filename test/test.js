const fs = require('fs');
const path = require('path');

// Test_1 überprüft ob der Ordner einen Inhalt hat
// Test_2 überprüft ob eine .html Datei im Ordner ist
// Test_3 überprüft ob eine .html Datei einen Inhalt hat

// Test_1
/*
const folderPath = 'dir_1';
const folderHasFiles = hasFiles(folderPath);

if (folderHasFiles) {
  console.log('Der Ordner enthält Dateien.');
} else {
  console.log('Der Ordner enthält keine Dateien.');
}

function hasFiles(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);
    return files.length > 0;
  } catch (err) {
    console.error(err);
    return false;
  }
}


// Test_2
//const folderPath = 'test/dir_2';
const htmlFileCount = countHTMLFiles(folderPath);

console.log(`Die Anzahl der .html-Dateien im Ordner: ${htmlFileCount}`);

  
  function countHTMLFiles(folderPath) {
    try {
      const files = fs.readdirSync(folderPath);
      let count = 0;
      for (const file of files) {
        const filePath = path.join(folderPath, file);
        const fileExtension = path.extname(file);
        if (fs.statSync(filePath).isFile() && fileExtension === '.html') {
          count++;
        }
      }
      return count;
    } catch (err) {
      console.error(err);
      return 0;
    }
  }
// Test_3

const filePath = 'test/dir_3/doc_3.html';
const fileHasContent = hasContent(filePath);

if (fileHasContent) {
  console.log('Die Datei hat einen Inhalt.');
} else {
  console.log('Die Datei hat keinen Inhalt.');
}

function hasContent(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return fileContent.length > 0;
  } catch (err) {
    console.error(err);
    return false;
  }
}
*/
//Kombinierter Test
const folderPath = 'test';
checkFolders(folderPath);

function checkFolders(folderPath) {
  try {
    const folders = fs.readdirSync(folderPath);

    for (const folder of folders) {
      const folderFullPath = path.join(folderPath, folder);
      const folderStats = fs.statSync(folderFullPath);

      if (folderStats.isDirectory()) {
        const files = fs.readdirSync(folderFullPath);
        const htmlFiles = files.filter(file => path.extname(file) === '.html');

        console.log(`Ordner '${folder}' enthält ${htmlFiles.length} .html-Datei(en).`);

        if (htmlFiles.length === 0) {
          console.log(`Der Ordner '${folder}' enthält keine .html-Dateien.`);
        } else {
          for (const file of htmlFiles) {
            const filePath = path.join(folderFullPath, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');

            if (fileContent.length > 0) {
              console.log(`Die Datei '${file}' im Ordner '${folder}' hat Inhalt.`);
            } else {
              console.log(`Die Datei '${file}' im Ordner '${folder}' ist leer.`);
            }
          }
        }

        checkFolders(folderFullPath);
      }
    }
  } catch (err) {
    console.error(err);
  }
}