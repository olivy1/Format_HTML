
const fs = require('fs');
const assert = require('assert');

describe('Empty File Test', function () {
  it('should check if a file is empty', function () {
    // Dateipfad der zu überprüfenden Datei
    const filePath = 'test/dir_3/doc_3.html';

    // Überprüfe, ob die Datei existiert
    const fileExists = fs.existsSync(filePath);
    assert.ok(fileExists, `Die Datei '${filePath}' existiert nicht.`);

    // Lese den Inhalt der Datei
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Überprüfe, ob der Inhalt leer ist
    const isEmpty = fileContent.length === 0;
    assert.ok(isEmpty, `Die Datei '${filePath}' ist nicht leer.`);
  });
});


module.exports = {
    emptyfile
}