

// Next Imports
import { NextResponse } from 'next/server'

// Third-party Imports
import Negotiator from 'negotiator'

import { match as matchLocale } from '@formatjs/intl-localematcher'

import CryptoJS from 'crypto-js'

import apiClient from '@/utils/apiClient'

// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { getLocalizedUrl, isUrlMissingLocale } from '@/utils/i18n'
import { ensurePrefix, withoutSuffix } from '@/utils/string'

// import {generateNonce,generateSignature,generateTimestamp} from '@/utils/signature'

// Function to generate nonce
const generateNonce = () => {
  return CryptoJS.lib.WordArray.random(16).toString()
}

// Function to generate timestamp
const generateTimestamp = () => {
  return Date.now().toString()
}

// Function to generate HMAC signature

const generateSignature = (payloaddata, secret, nonce,timestamp,) => {
  // const payload = `${payloaddata}|${nonce}|${timestamp}`;

  return CryptoJS.HmacSHA256(timestamp, secret).toString(CryptoJS.enc.Hex);
};

// Constants
const HOME_PAGE_URL = '/dashboards/crm'
const VERIFY_TOKEN_API_URL = '/admin/admins/protected'

const getLocale = request => {
  // Try to get locale from URL
  const urlLocale = i18n.locales.find(locale => request.nextUrl.pathname.startsWith(`/${locale}`))

  if (urlLocale) return urlLocale

  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders = {}

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)
  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

const localizedRedirect = (url, locale, request) => {
  let _url = url
  const isLocaleMissing = isUrlMissingLocale(_url)

  if (isLocaleMissing) {
    // e.g. incoming request is /products
    // The new URL is now /en/products
    _url = getLocalizedUrl(_url, locale ?? i18n.defaultLocale)
  }

  let _basePath = process.env.BASEPATH ?? ''

  _basePath = _basePath.replace('demo-1', request.headers.get('X-server-header') ?? 'demo-1')
  _url = ensurePrefix(_url, `${_basePath ?? ''}`)
  const redirectUrl = new URL(_url, request.url).toString()

  return NextResponse.redirect(redirectUrl)
}

export async function middleware(request) {
  // Get locale from request headers
  const locale = getLocale(request)
  const pathname = request.nextUrl.pathname

  // Extract token from cookies
  const { cookies } = request

 

  const token = cookies.get('accessToken')?.value || ''
  const secret = 'tom-and-jerry'

  console.log('token ', token)

  // Check if the user is logged in
  let isUserLoggedIn = !!token

  
  // working


  if (token) {
    //   console.log('Verifying token...');

    const payloaddata = JSON.stringify({});
    const nonce = generateNonce()

    console.log('=========================================================================================================================')
    console.log(nonce);
    const timestamp = generateTimestamp()

    console.log(timestamp);
    const signature = generateSignature(payloaddata, secret, nonce,timestamp)

    console.log(signature);
    console.log('=========================================================================================================================')

    try {
      const response = await fetch(`${process.env.API_URL}/admin/admins/protected`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Nonce": nonce,
          "Timestamp": timestamp,
          "Signature": signature
        },
        body: JSON.stringify({ accessToken: token })
      })

      console.log('=========================================================================================================================')
          console.log(response);
          console.log('=========================================================================================================================')

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status} `)
      }

      const verificationResponse = await response.json()

      //     console.log('Verification Response: ', verificationResponse);

      if (verificationResponse.success) {
        isUserLoggedIn = true
        console.log('Login successful')
      } else {
        isUserLoggedIn = false
        console.log('Login unsuccessful (verification failed)')
      }
    } catch (error) {
      isUserLoggedIn = false
      console.error('Verification Error: ', error)
    }
  }

  // if (token) {
  //   const nonce = generateNonce();
  //   const timestamp = generateTimestamp();
  //   const payloaddata = JSON.stringify({});
  //   const signature = generateSignature(payloaddata, secret, nonce, timestamp);

  //   try {
  //     const response = await fetch(`${process.env.API_URL}/admin/admins/protected`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Nonce': nonce,
  //         'Timestamp': timestamp,
  //         'Signature': signature
  //       },
  //       body: JSON.stringify({ accessToken: token })
  //     });

  //     console.log(response);

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const verificationResponse = await response.json();

  //     isUserLoggedIn = verificationResponse.success;

  //     if (!isUserLoggedIn) {
  //       console.log('Login unsuccessful (verification failed)');

  //       return NextResponse.redirect('/login');
  //     }

  //     console.log('Login successful');
  //   } catch (error) {

  //     console.error("Verification Error:", error);

  //     return NextResponse.redirect('/login');
  //   }
  // }

  // console.log("Is User Logged In: ", isUserLoggedIn)

  // Guest routes (Routes that can be accessed by guest users who are not logged in)
  const guestRoutes = ['login', 'register', 'forgot-password']

  // Private routes (All routes except guest routes that can only be accessed by logged in users)
  const privateRoutes = !guestRoutes.some(route => pathname.endsWith(route))

  // If the user is not logged in and is trying to access a private route, redirect to the login page
  if (!isUserLoggedIn && privateRoutes) {
    let redirectUrl = '/login'

    if (!(pathname === '/' || pathname === `/${locale}`)) {
      const searchParamsStr = new URLSearchParams({ redirectTo: withoutSuffix(pathname, '/') }).toString()

      redirectUrl += `?${searchParamsStr}`
    }

    return localizedRedirect(redirectUrl, locale, request)
  }

  // If the user is logged in and is trying to access a guest route, redirect to the home page
  const isRequestedRouteIsGuestRoute = guestRoutes.some(route => pathname.endsWith(route))

  if (isUserLoggedIn && isRequestedRouteIsGuestRoute) {
    return localizedRedirect(HOME_PAGE_URL, locale, request)
  }

  // If the user is logged in and is trying to access the root page, redirect to the home page
  if (pathname === '/' || pathname === `/${locale}`) {
    return localizedRedirect(HOME_PAGE_URL, locale, request)
  }

  // If pathname already contains a locale, return next() else redirect with localized URL
  return isUrlMissingLocale(pathname) ? localizedRedirect(pathname, locale, request) : NextResponse.next()
}

// Matcher Config
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - all items inside the public folder
     *    - images (public images)
     *    - next.svg (Next.js logo)
     *    - vercel.svg (Vercel logo)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.+?/hook-examples|.+?/menu-examples|images|next.svg|vercel.svg).*)'
  ]
}
