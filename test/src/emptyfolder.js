const fs = require('fs');
const assert = require('assert');

module.exports = {
  emptyfolder : function(){
    describe('Empty Folder Test', function () {
      it('should check if a folder is empty', function () {
       // Pfad des zu überprüfenden Ordners
       const folderPath = 'test/testfolders/dir_2';
  
       // Überprüfe, ob der Ordner existiert
        const folderExists = fs.existsSync(folderPath);
        assert.ok(folderExists, `Der Ordner '${folderPath}' existiert nicht.`);
  
        // Lese den Inhalt des Ordners
       const folderContent = fs.readdirSync(folderPath);
  
       // Überprüfe, ob der Ordner leer ist
       const isEmpty = folderContent.length === 0;
       assert.ok(isEmpty, `Der Ordner '${folderPath}' ist nicht leer.`);
      });
   });
  }
}