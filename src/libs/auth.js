// Third-party Imports

// import CredentialProvider from 'next-auth/providers/credentials'

// export const authOptions = {
  

//   // ** Configure one or more authentication providers
//   // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options
//   providers: [
//       CredentialProvider({
//         // ** The name to display on the sign in form (e.g. 'Sign in with...')
//         // ** For more details on Credentials Provider, visit https://next-auth.js.org/providers/credentials
//         name: 'Credentials',
//         type: 'credentials',

//         /*
//         * As we are using our own Sign-in page, we do not need to change
//         * username or password attributes manually in following credentials object.
//         */
//         credentials: {},
//         async authorize(credentials) {
//           /*
//           * You need to provide your own logic here that takes the credentials submitted and returns either
//           * an object representing a user or value that is false/null if the credentials are invalid.
//           * For e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//           * You can also use the `req` object to obtain additional parameters (i.e., the request IP address)
//           */
//           const { email, password } = credentials

//           try {
//             // ** Login API Call to match the user credentials and receive user data in response along with his role
//             const res = await fetch(`${process.env.API_URL}/admin/admins/adminlogin`, {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({ email, password })
//             })

// console.log(res);
//             const data = await res.json()

// console.log(data);

//             if (res.status === 401) {
//               throw new Error(data.message ||  "Unauthorized")
//             }

//             if (res.status === 200 && data) {
//               /*
//               * Please unset all the sensitive information of the user either from API response or before returning
//               * user data below. Below return statement will set the user object in the token and the same is set in
//               * the session which will be accessible all over the app.
//               */
//               const user = {
//                 id: data.id,
//                 email: data.email,
//                 role: data.role,
//               };
  
//               return user
//             }

//             return null
//           } catch (e) {
//             console.error('Error during authentication:', error);
//             throw new Error(e.message)
//           }
//         }
//       }),
      


//   ],

//   // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options
//   session: {
//     /*
//      * Choose how you want to save the user session.
//      * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.
//      * If you use an `adapter` however, NextAuth default it to `database` instead.
//      * You can still force a JWT session by explicitly defining `jwt`.
//      * When using `database`, the session cookie will only contain a `sessionToken` value,
//      * which is used to look up the session in the database.
//      * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured).
//      * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.
//      */
//     strategy: 'jwt',

//     // ** Seconds - How long until an idle session expires and is no longer valid
//     maxAge: 30 * 24 * 60 * 60 // ** 30 days
//   },

//   // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options
//   pages: {
//     signIn: '/login'
//   },

//   // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options
//   callbacks: {
//     /*
//      * While using `jwt` as a strategy, `jwt()` callback will be called before
//      * the `session()` callback. So we have to add custom parameters in `token`
//      * via `jwt()` callback to make them accessible in the `session()` callback
//      */
//     async jwt({ token, user }) {
//       if (user) {
//         /*
//          * For adding custom parameters to user in session, we first need to add those parameters
//          * in token which then will be available in the `session()` callback
//          */
//         token.name = user.name
//         token.role = user.role
//       }

//       return token
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
//         session.user.name = token.name
//         session.user.role = token.role
//       }

//       return session
//     }
//   }
// }





// export const authOptions = {
//   providers: [
//     CredentialProvider({
//       name: 'Credentials',
//       type: 'credentials',
//       credentials: {},
//       async authorize(credentials) {
//         const { email, password } = credentials;

//         try {
//           const res = await fetch(`${process.env.API_URL}/admin/admins/adminlogin`, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//              "livein-key": process.env.API_KEY
//             },
//             body: JSON.stringify({ email, password })
//           });

//           const data = await res.json();

//           if (res.status === 401) {
//             throw new Error(JSON.stringify(data));
//           }

//           if (res.status === 200 && data) {
//             const user = {
//               id: data.id,
//               email: data.email,

//               // role: data.role,
//             };

//             return user;
//           }

//           return null;
//         } catch (error) {
//           console.error('Error during authentication:', error);
//           throw new Error(error.message);
//         }
//       }
//     })
//   ],
//   session: {
//     jwt: true,
//   },
//   jwt: {
//     secret: process.env.NEXTAUTH_SECRET,
//   },
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.role = user.role;
//       }

//       return token;
//     },
//     async session(session, token) {
//       session.user.id = token.id;
//       session.user.email = token.email;
//       session.user.role = token.role;

//       return session;
//     }
//   }
// }

// export const authOptions = {
  


//   providers: [
// //       CredentialProvider({

// //         name: 'Credentials',
// //         type: 'credentials',

// //         credentials: {},
// //         async authorize(credentials) {
        
// //           const { email, password } = credentials

// //           try {
         
// //             const res = await fetch(`${process.env.API_URL}/admin/admins/adminlogin`, {
// //               method: 'POST',
// //               headers: {
// //                 'Content-Type': 'application/json',
// //                 'livein-key': process.env.API_KEY
// //               },
// //               body: JSON.stringify({ email, password })
// //             })

// // console.log(res);
// //             const data = await res.json()

// // console.log(data);

// //             if (res.status === 401) {
// //               throw new Error(data.message ||  "Unauthorized")
// //             }

// //             if (res.status === 200 && data) {
// //               /*
// //               * Please unset all the sensitive information of the user either from API response or before returning
// //               * user data below. Below return statement will set the user object in the token and the same is set in
// //               * the session which will be accessible all over the app.
// //               */
// //               const user = {
// //                 id: data.id,
// //                 email: data.email,
// //                 role: data.role,
// //               };
  
// //               return user
// //             }

// //             return null
// //           } catch (e) {
// //             console.error('Error during authentication:', error);
// //             throw new Error(e.message)
// //           }
// //         }
// //       }),

// CredentialProvider({
//   id: "login",
//   async authorize(credentials) {
//     try {
//       return await Auth.login(credentials);
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   },
// }),


//   ],

//   // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options
//   session: {
//     /*
//      * Choose how you want to save the user session.
//      * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.
//      * If you use an `adapter` however, NextAuth default it to `database` instead.
//      * You can still force a JWT session by explicitly defining `jwt`.
//      * When using `database`, the session cookie will only contain a `sessionToken` value,
//      * which is used to look up the session in the database.
//      * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured).
//      * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.
//      */
//     strategy: 'jwt',

//     // ** Seconds - How long until an idle session expires and is no longer valid
//     maxAge: 30 * 24 * 60 * 60, // ** 30 days

    
//   },

//   // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options
//   pages: {
//     signIn: '/login'
//   },

//   // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options
//   callbacks: {
//     /*
//      * While using `jwt` as a strategy, `jwt()` callback will be called before
//      * the `session()` callback. So we have to add custom parameters in `token`
//      * via `jwt()` callback to make them accessible in the `session()` callback
//      */

//     async signIn({user}){
//       if(user) return true

//       return false
//     },

//     async jwt({ token, user }) {

//     // async jwt({ token, user }) {

//       // if (user) {
//       //   /*
//       //    * For adding custom parameters to user in session, we first need to add those parameters
//       //    * in token which then will be available in the `session()` callback
//       //    */
//       //   token.name = user.name
//       //   token.role = user.role
//       // }

//       // return {...token, ...user}

//       return token

//     },
//     async session({ session }) {
//       // if (session.user) {
//       //   // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
//       //   // session.user.name = token.name
//       //   // session.user.role = token.role

//       //   return token
//       // }

//       // return session
//       session.user.isLoggedIn =  true

//       return session
//     },
//   },

//   secret: "livein-key",
// }






// import NextAuth from 'next-auth';
// import CredentialProvider from 'next-auth/providers/credentials';
// import jwt from 'jsonwebtoken';
// import Cookies from 'cookies';

// export const authOptions = {
//   providers: [
//     CredentialProvider({
//       name: 'Credentials',
//       credentials: {},
//       async authorize(credentials) {
//         const { email, password } = credentials;

//         try {
//           const res = await fetch(`${process.env.API_URL}/admin/admins/adminlogin`, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               'livein-key': process.env.API_KEY,
//             },
//             body: JSON.stringify({ email, password }),
//           });

//           const data = await res.json();

//           if (res.status === 401) {
//             throw new Error(data.message || 'Unauthorized');
//           }

//           if (res.status === 200 && data) {
//             return { ...data, accessToken: data.accessToken }; // Include accessToken in the returned user object
//           }

//           return null;
//         } catch (error) {
//           console.error('Error during authentication:', error);
//           throw new Error(error.message);
//         }
//       },
//     }),
//   ],

//   session: {
//     strategy: 'jwt',
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },

//   pages: {
//     signIn: '/login',
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.accessToken = user.accessToken; // Store accessToken in the JWT
//       }

//       return token;
//     },

//     async session({ session, token }) {
//       if (token.accessToken) {
//         // Decode the access token to get the payload data
//         const decoded = jwt.decode(token.accessToken);

//         session.user = {
//           id: decoded.userId,
//           email: decoded.email,
//           role: decoded.role,
//           abilities: decoded.ability,
//         };
//         session.accessToken = token.accessToken; // Attach accessToken to the session
//       }

//       return session;
//     },
//   },

//   secret: process.env.NEXTAUTH_SECRET || 'livein-key',

//   events: {
//     async signIn({ user, req }) {
//       const cookies = new Cookies(req, req.res);

//       cookies.set('custom-auth-token', user.accessToken, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'lax',
//         path: '/',
//       });
//     },
//   },

//   cookies: {
//     sessionToken: {
//       name: 'next-auth.session-token',
//       options: {
//         httpOnly: true,
//         sameSite: 'lax',
//         path: '/',
//         secure: process.env.NODE_ENV === 'production',
//       },
//     },
//   },
// };

