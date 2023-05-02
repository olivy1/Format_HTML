const fs = require('fs');
const path = require('path');

function readDir(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach(file => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.error(err);
          return;
        }
        if (stat.isDirectory()) {
          readDir(filePath);
        } else if (path.extname(file) === '.html') {
          console.log(file);
        }
      });
    });
  });
}
readDir('C:/VSC');