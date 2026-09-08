console.log('#53. JavaScript homework example file');

/*
 * #1 — isDebugMode
 * У браузері немає process.env, тому за замовчуванням NODE_ENV не існує —
 * функція просто завжди повертатиме false, якщо не задати змінну вручну.
 */
const isDebugMode = () => {
  const currentEnv = typeof process !== 'undefined' ? process.env.NODE_ENV : undefined;
  console.log('Current NODE_ENV:', currentEnv);

  const result = currentEnv === 'development';
  console.log('isDebugMode result:', result);

  return result;
};

/*
 * #2 — encode / decode (Base64 через btoa/atob, Hex вручну через TextEncoder/TextDecoder)
 */
function encodeToBase64(...args) {
  console.log('encodeToBase64 input:', args);
  try {
    const joined = args.join(':');
    const encoded = btoa(unescape(encodeURIComponent(joined)));
    console.log('Base64 encoded result:', encoded);
    return encoded;
  } catch (error) {
    console.error('Error encoding to Base64:', error.message);
    throw error;
  }
}

function encodeToHex(...args) {
  console.log('encodeToHex input:', args);
  try {
    const joined = args.join(':');
    const encoded = Array.from(new TextEncoder().encode(joined))
      .map((byte) => byte.toString(16).padStart(2, '0'))
      .join('');
    console.log('Hex encoded result:', encoded);
    return encoded;
  } catch (error) {
    console.error('Error encoding to Hex:', error.message);
    throw error;
  }
}

function decodeFromBase64(base64String) {
  console.log('decodeFromBase64 input:', base64String);
  try {
    const decoded = decodeURIComponent(escape(atob(base64String)));
    console.log('Base64 decoded result:', decoded);
    return decoded;
  } catch (error) {
    console.error('Error decoding from Base64:', error.message);
    throw error;
  }
}

function decodeFromHex(hexString) {
  console.log('decodeFromHex input:', hexString);
  try {
    const bytes = hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16));
    const decoded = new TextDecoder().decode(new Uint8Array(bytes));
    console.log('Hex decoded result:', decoded);
    return decoded;
  } catch (error) {
    console.error('Error decoding from Hex:', error.message);
    throw error;
  }
}

/*
 * #3 — safe decode з валідацією вхідних рядків
 */
function safeDecodeFromBase64(base64String) {
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;

  if (typeof base64String !== 'string' || base64String.length === 0 || !base64Regex.test(base64String)) {
    console.error('Invalid base64 string');
    throw new Error('Invalid base64 string');
  }

  try {
    const decoded = decodeFromBase64(base64String);
    console.log('Safe Base64 decoded result:', decoded);
    return decoded;
  } catch (error) {
    console.error('Invalid base64 string');
    throw new Error('Invalid base64 string');
  }
}

function safeDecodeFromHex(hexString) {
  const hexRegex = /^[0-9a-fA-F]*$/;

  if (typeof hexString !== 'string' || hexString.length === 0 || hexString.length % 2 !== 0 || !hexRegex.test(hexString)) {
    console.error('Invalid hex string');
    throw new Error('Invalid hex string');
  }

  try {
    const decoded = decodeFromHex(hexString);
    console.log('Safe Hex decoded result:', decoded);
    return decoded;
  } catch (error) {
    console.error('Invalid hex string');
    throw new Error('Invalid hex string');
  }
}

/* ==========================================================
 *  Приклад використання (можна закоментувати/видалити)
 * ========================================================== */

console.log('--- #1: isDebugMode ---');
isDebugMode();

console.log('\n--- #2: encode / decode ---');
const base64Encoded = encodeToBase64('john@email.com', '123', 'extraData');
console.log('Base64 Encoded:', base64Encoded);

const hexEncoded = encodeToHex('john@email.com', '123', 'extraData');
console.log('Hex Encoded:', hexEncoded);

const base64Decoded = decodeFromBase64(base64Encoded);
console.log('Base64 Decoded:', base64Decoded);

const hexDecoded = decodeFromHex(hexEncoded);
console.log('Hex Decoded:', hexDecoded);

console.log('\n--- #3: safe decode (valid data) ---');
const safeBase64Decoded = safeDecodeFromBase64(base64Encoded);
console.log('Safe Base64 Decoded:', safeBase64Decoded);

const safeHexDecoded = safeDecodeFromHex(hexEncoded);
console.log('Safe Hex Decoded:', safeHexDecoded);

console.log('\n--- #3: safe decode (invalid data) ---');
try {
  safeDecodeFromBase64('це не base64!!!');
} catch (error) {
  console.log('Caught expected error:', error.message);
}

try {
  safeDecodeFromHex('zzz');
} catch (error) {
  console.log('Caught expected error:', error.message);
}