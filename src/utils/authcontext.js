// 'use client'

// import { createContext, useContext, useState, useEffect } from 'react'
// import {jwtDecode} from 'jwt-decode'
// import Cookies from 'js-cookie'
// import { defineAbilityFor } from '@/testcontext/roleAbilities'

// // Create a single context for both role and ability
// const AuthContext = createContext({ role: '', ability: null })

// export const AuthProvider = ({ children }) => {
//   const [role, setRole] = useState('')
//   const [ability, setAbility] = useState(null)

//   useEffect(() => {
//     const token = Cookies.get('accessToken')
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token)
//         const userRole = decodedToken.role || ''
//         const userAbility = defineAbilityFor(decodedToken)
//         console.log(decodedToken);
//         console.log(userRole);
//         console.log(userAbility);
//         setRole(userRole)
//         console.log(setRole);
//         setAbility(userAbility)
//         console.log(setAbility);
//       } catch (error) {
//         console.error('Failed to decode token:', error)
//         setRole('')
//         setAbility(null)
//       }
//     }
//   }, [])

//   return (
//     <AuthContext.Provider value={{ role, ability }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error('useAuth must be used within AuthProvider')
//   }
//   return context
// }



