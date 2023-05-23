const fs = require('fs');
const assert = require('assert');

  module.exports = {
    spaceinfoldername: function(){
      describe('Folder Name Test', function () {
        it('should check if a folder name contains a space', function () {
          // Pfad des zu überprüfenden Ordners
          const folderPath = 'test/testfolders';
      
          // Überprüfe, ob der Ordner existiert
          const folderExists = fs.existsSync(folderPath);
          assert.ok(folderExists, `Der Ordner '${folderPath}' existiert nicht.`);
      
          // Überprüfe, ob der Ordnernamen ein Leerzeichen enthält
          const folderName = folderPath.split('/').pop();
          const hasSpace = folderName.includes(' ');
          assert.ok(!hasSpace, `Der Ordner '${folderPath}' enthält ein Leerzeichen im Namen.`);
        });
      });
    }
}