/**
 * Report Link Delivery Formatter
 * - Retrieves report link from trigger context or current item
 * - Builds structured delivery message
 * - Preserves original payload
 */

const item = $json;

// --- Retrieve report link (fallback strategy) ---
const reportLink =
  $items("Trigger")?.[0]?.json?.report_link;

// --- Build delivery message ---
const delivery_message = [
  "Your personalized report is now available:",
  "",
  reportLink,
  "",
  "If you would like to explore the results in more detail,",
  "you may request a follow-up session.",
  "",
  "Simply reply to this message to continue."
].join("\n");

// --- Return enriched payload ---
return [
  {
    json: {
      ...item,
      report_link: reportLink,
      delivery_message: String(delivery_message),
    },
  },
];
