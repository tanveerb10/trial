// 'use client'

// // Third-party Imports
// import { SessionProvider } from 'next-auth/react'

// export const NextAuthProvider = ({ children, ...rest }) => {
//   return (
    
//       <SessionProvider {...rest}>
//         {children}
//       </SessionProvider>
    
//   )
// }

"use client"
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"



export const QueryProvider=({children, ...rest})=>{
  const queryClient = new QueryClient()
  
  return (
<QueryClientProvider client={queryClient}>
  {children}
</QueryClientProvider>
  )
}

// import { createContext, useContext, useEffect, useState } from 'react';

// import Cookies from 'js-cookie';

// // import Cookies from 'js-cookie';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = Cookies.get('auth-token');

//     if (token) {
//       // Optionally decode the token or fetch user data
//       setUser({ token });
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

