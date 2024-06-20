'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import Cookies from 'js-cookie'
// import { useSession } from "next-auth/react"
const PermissionsContext = createContext({ role: [] }) // for string change
// console.log(PermissionsContext)
export const PermissionsProvider = ({ children }) => {
  const [role, setRole] = useState([]) // for string change
  useEffect(() => {
    const token = Cookies.get('accessToken')
    if (token) {
      try {
        const decodedToken = jwtDecode(token)
        setRole(decodedToken.role || [])
      } catch (error) {
        console.error('Failed to decode token:', error)
        setRole([]) // fallback in case of error
      }
    }
  }, [])
  return <PermissionsContext.Provider value={{ role }}>{children}</PermissionsContext.Provider>
}
export const usePermissions = () => {
  const context = useContext(PermissionsContext)
  if (!context) {
    throw new Error('usePermissions must be used within PermissionsProvider')
  }
  return context
}


// 'use client';

// import { createContext, useContext, useState, useEffect } from 'react';
// import { jwtDecode } from 'jwt-decode';
// import Cookies from 'js-cookie';

// const PermissionsContext = createContext({ role: '' });

// export const PermissionsProvider = ({ children }) => {
//   const [role, setRole] = useState(''); // for string change

//   useEffect(() => {
//     const token = Cookies.get('accessToken');
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         console.log(decodedToken);
//         console.log(decodedToken.role);
//         setRole(decodedToken.role || '');
//         console.log(setRole);
//       } catch (error) {
//         console.error('Failed to decode token:', error);
//         setRole('');
//       }
//     }
//   }, []);

//   return <PermissionsContext.Provider value={{ role }}>{children}</PermissionsContext.Provider>;
// };

// export const usePermissions = () => {
//   const context = useContext(PermissionsContext);
//   console.log(context);

//   if (!context) {
//     throw new Error('usePermissions must be used within PermissionsProvider');
//   }

//   return context;
// };
