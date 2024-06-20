// // Component Imports
// import Roles from '@views/apps/roles'

// const getData = async () => {
//   // Vars
//   const res = await fetch(`${process.env.API_URL}/apps/user-list`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch userData')
//   }

//   return res.json()
// }

// const RolesApp = async () => {
//   // Vars
//   const data = await getData()
//   console.log(data);

//   return <Roles userData={data} />
  
// }

// export default RolesApp


'use client';

import { useState, useEffect } from 'react';
import Roles from '@views/apps/roles';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
import axios from 'axios';

// Function to generate nonce
const generateNonce = () => CryptoJS.lib.WordArray.random(16).toString();

// Function to generate a timestamp
const generateTimestamp = () => Date.now().toString();

// Function to generate a signature
const generateSignature = (payloaddata, secret, nonce, timestamp) => {
  const payload = `${payloaddata}|${nonce}|${timestamp}`;
  return CryptoJS.HmacSHA256(payload, secret).toString(CryptoJS.enc.Hex);
};

// Function to get data using Fetch API
const getData = async (setUserData, setError, setLoading) => {
  const secret = 'tom-and-jerry';
  const token = Cookies.get('accessToken');

  if (!secret) {
    setError('Secret key is not defined');
    setLoading(false);
    return;
  }

  if (!token) {
    setError('Token is not defined');
    setLoading(false);
    return;
  }

  const payloaddata = JSON.stringify({});
  const nonce = generateNonce();
  const timestamp = generateTimestamp();
  const signature = generateSignature(payloaddata, secret, nonce, timestamp);

  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL_LIVE}/admin/admins`, {
      headers: {
        'Content-Type': 'application/json',
        'livein-key': 'livein-key',
        'Nonce': nonce,
        'Timestamp': timestamp,
        'Signature': signature,
        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to fetch userData, status: ${response.status}`);
    }

    setUserData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    setError(`Failed to fetch data: ${error.message}`);
  } finally {
    setLoading(false);
  }
};

const RolesApp = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData(setUserData, setError, setLoading);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <Roles userData={userData} />;
};

export default RolesApp;


// 'use client'
// import { useState, useEffect } from 'react'
// import Adminroles from '@/views/admin/adminroles/Adminroles'
// import Cookies from 'js-cookie'
// import { apiClient } from '@/utils/apiClient'
// import { generateNonce, generateSignature,generateTimestamp } from '@/utils/apiClient'
// import axios from 'axios'

// import CryptoJS from 'crypto-js'

// const getData = () => {
//   // async function fetchData() {
//   // try {
//   // const apiUrl = `${process.env.API_URL_LIVE}/admin/admins`;
//   // const token = ''; // Retrieve your access token as needed

//   // const secret = process.env.NEXT_PUBLIC_SECRET_KEY || '';
//   // const payloaddata = JSON.stringify({});
//   // const nonce = CryptoJS.lib.WordArray.random(16).toString();
//   // const timestamp = Date.now().toString();

//   // const generateSignature = (payloaddata, secret, nonce, timestamp) => {
//   //   const payload = `${payloaddata}|${nonce}|${timestamp}`;
//   //   return CryptoJS.HmacSHA256(payload, secret).toString(CryptoJS.enc.Hex);
//   // };

//   //     const signature = generateSignature(payloaddata, secret, nonce, timestamp);

//   //     const response = await fetch(apiUrl, {
//   //       method: 'GET',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //         'livein-key': 'livein-key',
//   //         'Nonce': nonce,
//   //         'Timestamp': timestamp,
//   //         'Signature': signature,
//   //         // Include any additional headers as needed
//   //       },
//   //       credentials: 'include', // Send cookies with the request
//   //     });

//   //     if (!response.ok) {
//   //       throw new Error(`HTTP error! Status: ${response.status}`);
//   //     }

//   //     const data = await response.json();
//   //     console.log(data); // Log the fetched data

//   //     return data; // Return the fetched data
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error);
//   //     throw error; // Re-throw the error to handle it further if needed
//   //   }
//   // }

//   // // Example usage:
//   // fetchData().then(data => {
//   //   console.log('Data received:', data);
//   // }).catch(error => {
//   //   console.error('Error in fetchData:', error);
//   // });

//   // Vars
//   const secret = process.env.NEXT_PUBLIC_SECRET_KEY
//   const token = Cookies.get('accessToken')
//   console.log(token);
//   const payloaddata = JSON.stringify({})
//   const nonce = CryptoJS.lib.WordArray.random(16).toString()
//   const timestamp = Date.now().toString()
//   const generateSignature = (payloaddata, secret, nonce, timestamp) => {
//     const payload = `${payloaddata}|${nonce}|${timestamp}`
//     return CryptoJS.HmacSHA256(payload, secret).toString(CryptoJS.enc.Hex)
//   }

//   const signature = generateSignature(payloaddata, secret, nonce, timestamp)
//   console.log({signature});
//   try {
//     const res = axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL_LIVE}/admin/admins`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'livein-key': 'livein-key',
//           'Nonce': nonce,
//           'Timestamp': timestamp,
//           'Signature': signature,
//           'Cookie': `accessToken=${token}`
//         }
//         // withCredentials: true
//       }
//     )
//     if (res.status != 200) {
//       throw new Error('Failed to fetch userData')
//     }
//     console.log(res)
//     console.log(res.data)
//     setUserData(res.data)
//     return res.data
//   } catch (error) {
//     console.error('error fetching data', error)
//   }
// }

// const page = () => {
//   const [userData, setUserData] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchData = () => {
//       try {
//         getData()
//         // setUserData(data)
//       } catch (error) {
//         setError(error.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [])

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div>Error: {error}</div>
//   }
//   return <Adminroles userData={userData} />
// }
// export default page

// import React, { useState, useEffect } from 'react';
// import Adminroles from '@/views/admin/adminroles/Adminroles';
// import CryptoJS from 'crypto-js';

// // Function to fetch data
// export async function getData() {
//   try {
//     const apiUrl = 'http://165.232.189.68/admin/admins'
//     const secret = process.env.NEXT_PUBLIC_SECRET_KEY || '';
//     const payloaddata = JSON.stringify({});
//     const nonce = CryptoJS.lib.WordArray.random(16).toString();
//     const timestamp = Date.now().toString();

//     const generateSignature = (payloaddata, secret, nonce, timestamp) => {
//       const payload = `${payloaddata}|${nonce}|${timestamp}`;
//       return CryptoJS.HmacSHA256(payload, secret).toString(CryptoJS.enc.Hex);
//     };

//     const signature = generateSignature(payloaddata, secret, nonce, timestamp);

//     const response = await fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'livein-key': 'livein-key',
//         'Nonce': nonce,
//         'Timestamp': timestamp,
//         'Signature': signature,
//       },
//       credentials: 'include', // Send cookies with the request
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log('Data fetched:', data);
//     return data; // Return the fetched data
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error; // Re-throw the error to handle it further if needed
//   }
// }

// const Page = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getData();
//         setUserData(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return <Adminroles userData={userData} />;
// };

// export default Page;

// 'use client';
// import { useState, useEffect } from 'react';
// import Adminroles from '@/views/admin/adminroles/Adminroles';
// import Cookies from 'js-cookie';
// import { apiClient } from '@/utils/apiClient';
// import CryptoJS from 'crypto-js';

// // Function to generate nonce
// const generateNonce = () => CryptoJS.lib.WordArray.random(16).toString();

// // Function to generate a timestamp
// const generateTimestamp = () => Date.now().toString();

// // Function to generate a signature
// const generateSignature = (payloaddata, secret, nonce, timestamp) => {
//   const payload = `${payloaddata}|${nonce}|${timestamp}`;
//   return CryptoJS.HmacSHA256(payload, secret).toString(CryptoJS.enc.Hex);
// };

// // Function to get data
// const getData = async (setUserData, setError, setLoading) => {
//   const secret = process.env.NEXT_PUBLIC_SECRET_KEY;
//   const token = Cookies.get('accessToken');

//   console.log({token});

//   if (!secret) {
//     setError('Secret key is not defined');
//     setLoading(false);
//     return;
//   }

//   if (!token) {
//     setError('Token is not defined');
//     setLoading(false);
//     return;
//   }

//   const payloaddata = JSON.stringify({});
//   const nonce = generateNonce();
//   const timestamp = generateTimestamp();
//   const signature = generateSignature(payloaddata, secret, nonce, timestamp);

//   try {
//     const res = await apiClient.get(`${process.env.NEXT_PUBLIC_API_URL_LIVE}/admin/admins`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'livein-key': 'livein-key',
//         'Nonce': nonce,
//         'Timestamp': timestamp,
//         'Signature': signature,
//         // 'accessToken': `accessToken=${token}`,
//       },
//       // withCredentials: true,
//     });

//     if (res.status !== 200) {
//       throw new Error('Failed to fetch userData');
//     }

//     setUserData(res.data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     setError(error.message);
//   } finally {
//     setLoading(false);
//   }
// };

// const Page = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     getData(setUserData, setError, setLoading);
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return <Adminroles userData={userData} />;
// };

// export default Page;
