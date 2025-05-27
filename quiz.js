function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  var data = JSON.parse(e.postData.contents);

  var nama = data.nama || '';
  var mapel = data.mapel || '';
  var kelas = data.kelas || '';
  var skor = data.skor || '';
  var timestamp = new Date(data.timestamp) || new Date();

  var semuaData = sheet.getDataRange().getValues();
  var barisUpdate = -1;

  // Cari apakah nama sudah pernah dikirim
  for (var i = 1; i < semuaData.length; i++) { // Mulai dari 1 untuk melewati header
    if (semuaData[i][0] === nama) { // Kolom A (indeks 0) adalah nama
      barisUpdate = i + 1; // Karena index di getRange dimulai dari 1
      break;
    }
  }

  if (barisUpdate !== -1) {
    // Jika nama ditemukan, update baris tersebut
    sheet.getRange(barisUpdate, 2).setValue(mapel);     // Kolom B
    sheet.getRange(barisUpdate, 3).setValue(kelas);     // Kolom C
    sheet.getRange(barisUpdate, 4).setValue(skor);      // Kolom D
    sheet.getRange(barisUpdate, 5).setValue(timestamp); // Kolom E
  } else {
    // Jika tidak ditemukan, tambahkan baris baru
    sheet.appendRow([nama, mapel, kelas, skor, timestamp]);
  }

  return ContentService.createTextOutput("Data diterima & diproses")
    .setMimeType(ContentService.MimeType.TEXT);
}
