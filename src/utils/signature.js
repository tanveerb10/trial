import CryptoJS from 'crypto-js';

export const secret = "tom-and-jerry";

// Function to generate nonce
export const generateNonce = () => CryptoJS.lib.WordArray.random(16).toString();

// Function to generate a timestamp
export const generateTimestamp = () => Date.now().toString();

// Function to generate a signature
export const generateSignature = (timestamp, secret) => {
    return CryptoJS.HmacSHA256(timestamp, secret).toString(CryptoJS.enc.Hex);
};
