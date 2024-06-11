

import axios from 'axios';
import CryptoJS from 'crypto-js';

export const secret = "tom-and-jerry";

 const generateNonce = () => CryptoJS.lib.WordArray.random(16).toString();

// Function to generate a timestamp
 const generateTimestamp = () => Date.now().toString();

// Function to generate a signature
 const generateSignature = (timestamp, secret) => {
    return CryptoJS.HmacSHA256(timestamp, secret).toString(CryptoJS.enc.Hex);
};

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'http://165.232.189.68',
  
  // credentials: true, // Ensure credentials are included
});

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const requestBody = config.data;
    const nonce = generateNonce();
    const timestamp = generateTimestamp();
    const signature = generateSignature(timestamp, secret);

    // Add headers to the request
    config.headers['Content-Type'] = 'application/json';
    config.headers['Nonce'] = nonce;
    config.headers['Timestamp'] = timestamp;
    config.headers['Signature'] = signature;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
