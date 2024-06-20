// AbilityContext.js
"use client";
import React, { createContext, useState, useEffect } from 'react';
import { defineAbilityFor, getUser } from './abilities';
const AbilityContext = createContext(null);
export function AbilityProvider({ children }) {
  const [ability, setAbility] = useState(null);
  useEffect(() => {
    const user = getUser();
    const ability = defineAbilityFor(user);
    setAbility(ability);
  }, []);
  if (!ability) {
    return <div>Loading...</div>; // Or some loading spinner
  }
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
}
export default AbilityContext;


// 'use client'
// // AbilityContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import {jwtDecode} from 'jwt-decode';
// import Cookies from 'js-cookie';
// import { defineAbilityFor } from '@/testcontext/roleAbilities';

// const AbilityContext = createContext(null);

// export const AbilityProvider = ({ children }) => {
//   const [ability, setAbility] = useState(null);
//   const [role, setRole] = useState(null);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     const token = Cookies.get('accessToken');
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         console.log('Decoded Token:', decodedToken); // Debugging log
//         const userRole = decodedToken?.roles || '';
//         const userAbilities = decodedToken?.abilities || [];

//         const userAbility = defineAbilityFor({ roles: userRole, abilities: userAbilities });
//         setRole(userRole);
//         setAbility(userAbility);
//         console.log(userAbilities);
//         console.log(userAbility);
//         console.log(setRole);
//         console.log(setAbility);
//       } catch (error) {
//         console.error('Failed to decode token:', error);
//         setRole([]);
//         setAbility(null);
//       }
//     } else {
//       setRole([]);
//       setAbility(null);
//     }
//     setLoading(false); // Set loading to false after processing token
//   }, []);

//   if (loading) {
//     return (
//       <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-gray-opacity-50">
//         <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid sky-300">
//           <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//             Loading...
//           </span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <AbilityContext.Provider value={{ ability, role }}>
//       {children}
//     </AbilityContext.Provider>
//   );
// };

// export const useAbility = () => {
//   const context = useContext(AbilityContext);
//   if (!context) {
//     console.error('useAbility must be used within AbilityProvider');
//   }
//   return context;
// };

// export default AbilityContext;
