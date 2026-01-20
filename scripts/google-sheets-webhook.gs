/**
 * Google Apps Script Web App: append website form submissions to ONE Google Sheet.
 *
 * Setup
 * 1) Create a Google Sheet
 * 2) Extensions -> Apps Script
 * 3) Paste this file
 * 4) Update CONFIG.SHEET_ID (and optionally CONFIG.SHEET_NAME, CONFIG.SECRET)
 * 5) Deploy -> New deployment -> Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone (or Anyone with Google account)
 * 6) Copy the Web App URL into your Next.js env: GOOGLE_SHEETS_WEBHOOK_URL
 */

const CONFIG = {
  // REQUIRED: Spreadsheet ID from the Sheet URL
  SHEET_ID: "PASTE_YOUR_SHEET_ID_HERE",

  // OPTIONAL: Tab name; created automatically if missing
  SHEET_NAME: "Website Leads",

  // OPTIONAL: Simple shared-secret to prevent random spam to your endpoint.
  // If set, requests must include JSON body field: { secret: "..." }
  SECRET: "PASTE_A_SECRET_HERE_OR_LEAVE_EMPTY"
};

const HEADERS = [
  "timestamp",
  "form",
  "name",
  "email",
  "phone",
  "service",
  "message",
  "pageUrl",
  "userAgent"
];

function doGet() {
  return json_({ ok: true, message: "Google Sheets webhook is running" });
}

function doPost(e) {
  try {
    const payload = parseJson_(e);

    if (CONFIG.SECRET && payload.secret !== CONFIG.SECRET) {
      return json_({ ok: false, error: "Unauthorized" });
    }

    const row = [
      new Date(),
      safeString_(payload.form || "contact"),
      safeString_(payload.name),
      safeString_(payload.email),
      safeString_(payload.phone),
      safeString_(payload.service),
      safeString_(payload.message),
      safeString_(payload.pageUrl),
      safeString_(payload.userAgent)
    ];

    const ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    const sheet = getOrCreateSheet_(ss, CONFIG.SHEET_NAME);
    ensureHeaderRow_(sheet);

    sheet.appendRow(row);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

function parseJson_(e) {
  if (!e || !e.postData || !e.postData.contents) return {};

  const raw = e.postData.contents;
  if (!raw) return {};

  // Some clients may accidentally send form-encoded; handle that too.
  // If it's JSON, parse it.
  try {
    return JSON.parse(raw);
  } catch (_) {
    return {};
  }
}

function getOrCreateSheet_(ss, name) {
  const existing = ss.getSheetByName(name);
  if (existing) return existing;
  return ss.insertSheet(name);
}

function ensureHeaderRow_(sheet) {
  if (sheet.getLastRow() !== 0) return;
  sheet.appendRow(HEADERS);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
}

function safeString_(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim();
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
