/**
 * Payload Normalization
 * - Sanitizes phone fields
 * - Normalizes name attributes
 * - Preserves original payload
 * - Adds explicit consent flag
 */

const item = $json;

// --- Phone normalization (digits only) ---
const rawPhone = item.phone;
const phone = String(rawPhone).replace(/\D/g, "");

// --- Name normalization ---
const first_name = String(
  item.first_name).trim();

const last_name = String(
  item.last_name ??).trim();

// --- Return normalized payload ---
return [
  {
    json: {
      ...item,
      phone,
      first_name,
      last_name,
      has_opt_in: true,
    },
  },
];
