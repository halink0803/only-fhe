const fs = require('fs');
const CryptoJS = require('crypto-js');

// Path to the JPEG file
const imagePath = "../collection/images/2.jpg";

// Read the JPEG file as a base64 string
const imageData = fs.readFileSync(imagePath, { encoding: "base64" });

// Generate a random 128-bit AES key (you should use a secure method for key generation)
const key = CryptoJS.lib.WordArray.random(4);
console.log(key);

// Encrypt the image data
const encryptedData = CryptoJS.AES.encrypt(imageData, key, {
  mode: CryptoJS.mode.ECB, // Adjust mode as needed (e.g., CBC, CTR)
  padding: CryptoJS.pad.Pkcs7
});

// The encrypted data is now in base64 format
console.log(encryptedData.toString());