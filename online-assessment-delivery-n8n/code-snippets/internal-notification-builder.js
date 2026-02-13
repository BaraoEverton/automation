/**
 * Internal Event Notification Builder
 * - Normalizes name and phone fields
 * - Generates structured internal notification message
 * - Preserves original payload
 */

const item = $json;

// --- Name normalization ---
const name = String(item.first_name).trim();

// --- Phone normalization (digits only) ---
const rawPhone = item.phone;
const phone = String(rawPhone).replace(/\D/g, "");

// --- Internal notification message ---
const internal_notification = [
  "📢 INTERNAL EVENT NOTIFICATION",
  "",
  "A new report has been successfully delivered.",
  "",
  `Name: ${name}`,
  `Phone: ${phone}`,
  "",
  "Next Step:",
  "Monitor for user interaction or follow-up request."
].join("\n");

// --- Return enriched payload ---
return [
  {
    json: {
      ...item,
      name,
      phone,
      internal_notification
    }
  }
];
