// import React from 'react'

// import { cookies } from "next/headers"


// export default function cookieGet() {

//   const cookie = cookies()
//   const accessToken = cookie.get("accessToken")

//   console.log(accessToken);

//   return accessToken
// }

// testing 

// import { cookies } from 'next/headers';

// export async function getInitialProps(context) {
//   const allCookies = await cookies(context.req.headers);
//   const roleCookie = allCookies.get('role');

//   // ... other logic to prepare props based on role

//   return { role: roleCookie }; // Pass role as a prop
// }

// import { cookies } from 'next/headers';

// export async function getInitialProps(context) {
  // const allCookies = cookies(context.req.headers);

  // Check for the specific cookie you need based on its header name (replace "X-Custom-Cookie" with the actual header)
  // const customCookie = allCookies.get('accessToken');

// console.log(customCookie);
// console.log(Set-Cookie);

  // Process the retrieved cookie data
  // ...

  // return { customCookieData: processedCookieData }; // Pass processed data as props
// }


import {jwtDecode} from 'jwt-decode';

export async function getServerSideProps(context) {
  const { req, res } = context;
  const { cookies } = req;
  const accessToken = cookies.accessToken;

  if (!accessToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  try {
    const token = accessToken.startsWith('accessToken ') ? accessToken.split(' ')[1] : accessToken;
    const decodedToken = jwtDecode(token);

    return {
      props: {
        roles: decodedToken.role,
        abilities: decodedToken.ability,
      },
    };
  } catch (error) {
    console.error('Failed to decode token:', error);
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}


