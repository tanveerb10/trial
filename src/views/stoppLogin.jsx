"use client"
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const Login = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Your provided script
    const secret = 'tom-and-jerry';
    const payloaddata = JSON.stringify(formData);

    // Generate nonce and timestamp
    const nonce = CryptoJS.lib.WordArray.random(16).toString();
    const timestamp = Date.now().toString();
    console.log('Timestamp:', timestamp);

    // Function to generate HMAC signature
    const generateSignature = (payloaddata, secret, nonce, timestamp) => {
      const payload = `${payloaddata}|${nonce}|${timestamp}`;
      return CryptoJS.HmacSHA256(payload, secret).toString(CryptoJS.enc.Hex);
    };

    // Generate the signature
    const signature = generateSignature(payloaddata, secret, nonce, timestamp);
    console.log('Signature:', signature);

    // API call to the protected route
    try {
      const response = await fetch('http://165.232.189.68/admin/admins/protected', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${signature}`, // Assuming you use Bearer token for auth
        },
        body: payloaddata,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      console.log('Response Data:', data);

      // Further logic to handle the response data
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="example" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
