/**
 * Public (sanitized) version
 * Sensitive IDs and URLs were replaced with placeholders.
 */

const CONFIG = {
  sourceSheetName: "Página1",
  stagingSheetName: "Colunas reorganizadas",
  queueSpreadsheetId: "SPREADSHEET_ID_PLACEHOLDER",
  queueSheetName: "PILHA DE ENVIOS",
  processedColumnIndex: 27,
  totalColumns: 29,
  reportBaseUrl: "https://example.com/report?token="
};

function transferFlowData() {

  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  const sourceSheet = activeSpreadsheet.getSheetByName(CONFIG.sourceSheetName);
  const stagingSheet = activeSpreadsheet.getSheetByName(CONFIG.stagingSheetName);

  const queueSpreadsheet = SpreadsheetApp.openById(CONFIG.queueSpreadsheetId);
  const queueSheet = queueSpreadsheet.getSheetByName(CONFIG.queueSheetName);

  const newTokenUpdates = [];
  const reorganizedData = [];
  const deliveryQueue = [];

  let newRowsCount = 0;

  const lastRow = sourceSheet.getLastRow();

  for (let currentRow = lastRow; currentRow >= 2; currentRow--) {

    const rowStatus = sourceSheet
      .getRange(currentRow, CONFIG.processedColumnIndex)
      .getValue();

    if (rowStatus !== "") {
      Logger.log("Processing finished.");
      break;
    }

    newRowsCount++;

    const row = sourceSheet
      .getRange(currentRow, 1, 1, CONFIG.totalColumns)
      .getDisplayValues()[0];

    const rawDateTime = String(
      sourceSheet.getRange(currentRow, 1).getValue() ?? ""
    );

    const rawPhone = String(
      sourceSheet.getRange(currentRow, 24).getValue() ?? ""
    );

    const formattedDateTime = rawDateTime.replace(
      /(\d{4})-(\d{2})-(\d{2})/,
      "$3/$2/$1"
    );

    const tokenBase = rawDateTime.replace(/[^0-9]/g, "");
    const sanitizedPhone = rawPhone.replace(/[^0-9]/g, "");

    const token = tokenBase + currentRow;

    newTokenUpdates.push([
      token,
      "",
      formattedDateTime
    ]);

    const structuredRow = [
      row[1],
      row[2],
      row[3],
      row[5],
      row[6],
      row[7],
      row[8],
      row[9],
      row[10],
      row[11],
      row[12],
      row[13],
      row[14],
      row[25],
      row[15],
      row[17],
      row[18],
      row[19],
      row[22],
      row[24],
      row[23],
      row[20],
      row[4],
      row[21],
      row[16],
      formattedDateTime,
      token
    ];

    reorganizedData.push(structuredRow);

    const reportLink = CONFIG.reportBaseUrl + token;

    deliveryQueue.push([
      sanitizedPhone,
      row[2],
      reportLink
    ]);
  }

  if (newRowsCount === 0) return;

  const stagingLastRow = stagingSheet.getLastRow();
  const queueLastRow = queueSheet.getLastRow();

  newTokenUpdates.reverse();
  reorganizedData.reverse();
  deliveryQueue.reverse();

  const firstNewRow = lastRow - newRowsCount + 1;

  sourceSheet
    .getRange(
      firstNewRow,
      CONFIG.processedColumnIndex,
      newRowsCount,
      3
    )
    .setValues(newTokenUpdates);

  stagingSheet
    .getRange(
      stagingLastRow + 1,
      1,
      newRowsCount,
      reorganizedData[0].length
    )
    .setValues(reorganizedData);

  queueSheet
    .getRange(
      queueLastRow + 1,
      1,
      newRowsCount,
      deliveryQueue[0].length
    )
    .setValues(deliveryQueue);

  Logger.log("Processed rows: " + newRowsCount);
}
