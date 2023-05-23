const fs = require('fs');
const assert = require('assert');

  module.exports = {
    nothtmlfile: function(){
      describe('HTML File Test', function () {
        it('should check if a file is an HTML file', function () {
          // Dateipfad der zu überprüfenden Datei
          const filePath = 'test/testfolders/dir_1/main.c';
      
          // Überprüfe, ob die Datei existiert
          const fileExists = fs.existsSync(filePath);
          assert.ok(fileExists, `Die Datei '${filePath}' existiert nicht.`);
      
          // Überprüfe, ob die Datei eine HTML-Datei ist
          const isHTMLFile = filePath.endsWith('.html');
          assert.ok(isHTMLFile, `Die Datei '${filePath}' ist keine HTML-Datei.`);
        });
      });
    }
}