'use client'

// React Imports
// import { useState } from 'react'

// Next Imports
// import Link from 'next/link'
// import { useParams, useRouter, useSearchParams } from 'next/navigation'

// // MUI Imports
// import useMediaQuery from '@mui/material/useMediaQuery'
// import { styled, useTheme } from '@mui/material/styles'
// import Typography from '@mui/material/Typography'
// import IconButton from '@mui/material/IconButton'
// import InputAdornment from '@mui/material/InputAdornment'
// import Checkbox from '@mui/material/Checkbox'
// import Button from '@mui/material/Button'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import Divider from '@mui/material/Divider'
// import Alert from '@mui/material/Alert'

// Third-party Imports
// import { signIn } from 'next-auth/react'
// import { Controller, useForm } from 'react-hook-form'
// import { valibotResolver } from '@hookform/resolvers/valibot'
// import { object, minLength, string, email } from 'valibot'
// import classnames from 'classnames'

// Component Imports
// import Logo from '@components/layout/shared/Logo'
// import CustomTextField from '@core/components/mui/TextField'

// Config Imports
// import themeConfig from '@configs/themeConfig'

// Hook Imports
// import { useImageVariant } from '@core/hooks/useImageVariant'
// import { useSettings } from '@core/hooks/useSettings'

// Util Imports
// import { getLocalizedUrl } from '@/utils/i18n'

// Abilities Imports
// import { getUser, defineAbilityFor } from '@/contexts/abilities'

// Styled Custom Components
// const LoginIllustration = styled('img')(({ theme }) => ({
//   zIndex: 2,
//   blockSize: 'auto',
//   maxBlockSize: 680,
//   maxInlineSize: '100%',
//   margin: theme.spacing(12),
//   [theme.breakpoints.down(1536)]: {
//     maxBlockSize: 550
//   },
//   [theme.breakpoints.down('lg')]: {
//     maxBlockSize: 450
//   }
// }))

// const MaskImg = styled('img')({
//   blockSize: 'auto',
//   maxBlockSize: 355,
//   inlineSize: '100%',
//   position: 'absolute',
//   insetBlockEnd: 0,
//   zIndex: -1
// })

// const schema = object({
//   email: string([minLength(1, 'This field is required'), email('Email is invalid')]),
//   password: string([
//     minLength(1, 'This field is required'),
//     minLength(5, 'Password must be at least 5 characters long')
//   ])
// })

// const Login = ({ mode }) => {
//   // States
//   const [isPasswordShown, setIsPasswordShown] = useState(false)
//   const [errorState, setErrorState] = useState(null)

  // Vars
//   const darkImg = '/images/pages/auth-mask-dark.png'
//   const lightImg = '/images/pages/auth-mask-light.png'
//   const darkIllustration = '/images/illustrations/auth/v2-login-dark.png'
//   const lightIllustration = '/images/illustrations/auth/v2-login-light.png'
//   const borderedDarkIllustration = '/images/illustrations/auth/v2-login-dark-border.png'
//   const borderedLightIllustration = '/images/illustrations/auth/v2-login-light-border.png'

  // Hooks
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const { lang: locale } = useParams()
//   const { settings } = useSettings()
//   const theme = useTheme()
//   const hidden = useMediaQuery(theme.breakpoints.down('md'))
//   const authBackground = useImageVariant(mode, lightImg, darkImg)

//   const {
//     control,
//     handleSubmit,
//     formState: { errors }
//   } = useForm({
//     resolver: valibotResolver(schema),
//     defaultValues: {
//       email: 'admin@livein.in',
//       password: 'Livein@20243$'
//     }
//   })

//   const characterIllustration = useImageVariant(
//     mode,
//     lightIllustration,
//     darkIllustration,
//     borderedLightIllustration,
//     borderedDarkIllustration
//   )

//   const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  // const onSubmit = async data => {
  //   const res = await signIn('credentials', {
  //     email: data.email,
  //     password: data.password,
  //     redirect: false
  //   })

  //   if (res && res.ok && res.error === null) {
  //     // Vars
  //     const redirectURL = searchParams.get('redirectTo') ?? '/'

  //     router.push(getLocalizedUrl(redirectURL, locale))
  //   } else {
  //     if (res?.error) {
  //     try {
  //         const error = JSON.parse(res.error)
          
  //         console.log(error);
  
  //         setErrorState(error)
  //     } catch (parseError) {
  //       console.error('Error parsing error response:', res.error);
  //       setErrorState({ message: res.error });
  //     }
  //     }
  //   }
  // }

  // const onSubmit = async data => {
  //   // Make sure to use the same field names as in your Credentials provider (e.g., email and password)
  //   const res = await signIn('credentials', {
  //     email: data.email,
  //     password: data.password,
  //     redirect: false  // Prevents automatic redirection
  //   });
  
  //   Check the response from signIn
  //   if (res && res.ok && res.error === null) {
  //     If successful, determine the redirect URL
  //     const redirectURL = searchParams.get('redirectTo') ?? '/';
  
  //     Redirect to the appropriate URL
  //     router.push(getLocalizedUrl(redirectURL, locale));
  //   } else {
  //     If there's an error, handle it
  //     if (res?.error) {
  //       try {
  //         Parse the error message if it's a JSON string
  //         const error = JSON.parse(res.error);
  
  //         Log the error to the console (useful for debugging)
  //         console.log(error);
  
  //         Set the error state to display error messages in the UI
  //         setErrorState(error);
  //       } catch (parseError) {
  //         In case JSON parsing fails, log the original error message
  //         console.error('Error parsing error response:', res.error);
  //         setErrorState({ message: res.error });
  //       }
  //     }
  //   }
  // };
  
//   const user = {
//    email,
//   password
//   }

//   const onSubmit = async (event) => {
//   const response = await fetch(`${process.env.API_URL}/admin/admins/adminlogin`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'livein-key': process.env.API_KEY,
//     },
//     body: JSON.stringify({ email, password }),
//   }).then(
//     (response) => {
//      return response.json();
    
//     }).then(data => {
//       if(data.status!=200){
//         Setsendalert(data.msg);
//        }
//        else{
//         Setsendalert('');
        

//        }

//       if(data.url) {
//         console.log(data.url);
//         window.location.replace(data.url);
//        }
//       }
//     ).catch(
//     err=>{
//       console.log(err.msg);
//     }
//   )
  
//   }

//   const onSubmit = async (event) => {
//     event.preventDefault()
//     setError(null);

//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email, password })
//     });

//     if (response.ok) {
//       const data = await response.json();

//       // Handle successful login, e.g., redirect
//       router.push('/');
//     } else {
//       const errorData = await response.json();

//       setError(errorData.message);
//     }
//   }

//   return (
//     <div className='flex bs-full justify-center'>
//       <div
//         className={classnames(
//           'flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden',
//           {
//             'border-ie': settings.skin === 'bordered'
//           }
//         )}
//       >
//         <LoginIllustration src={characterIllustration} alt='character-illustration' />
//         {!hidden && <MaskImg alt='mask' src={authBackground} />}
//       </div>
//       <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
//         <div className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
//           <Logo />
//         </div>
//         <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset] mbs-8 sm:mbs-11 md:mbs-0'>
//           <div className='flex flex-col gap-1'>
//             <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}! 👋🏻`}</Typography>
//             <Typography>Please sign-in to your account and start the adventure</Typography>
//           </div>
//           <Alert icon={false} className='bg-[var(--mui-palette-primary-lightOpacity)]'>
//             <Typography variant='body2' color='primary'>
//               Email: <span className='font-medium'>admin@vuexy.com</span> / Pass:{' '}
//               <span className='font-medium'>admin</span>
//             </Typography>
//           </Alert>
//           <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
//             <Controller
//               name='email'
//               control={control}
//               rules={{ required: true }}
//               render={({ field }) => (
//                 <CustomTextField
//                   {...field}
//                   autoFocus
//                   fullWidth
//                   type='email'
//                   label='Email'
//                   placeholder='Enter your email'
//                   onChange={e => {
//                     field.onChange(e.target.value)
//                     errorState !== null && setErrorState(null)
//                   }}
//                   {...((errors.email || errorState !== null) && {
//                     error: true,
//                     helperText: errors?.email?.message || errorState?.message[0]
//                   })}
//                 />
//               )}
//             />
//             <Controller
//               name='password'
//               control={control}
//               rules={{ required: true }}
//               render={({ field }) => (
//                 <CustomTextField
//                   {...field}
//                   fullWidth
//                   label='Password'
//                   placeholder='············'
//                   id='login-password'
//                   type={isPasswordShown ? 'text' : 'password'}
//                   onChange={e => {
//                     field.onChange(e.target.value)
//                     errorState !== null && setErrorState(null)
//                   }}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position='end'>
//                         <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
//                           <i className={isPasswordShown ? 'tabler-eye' : 'tabler-eye-off'} />
//                         </IconButton>
//                       </InputAdornment>
//                     )
//                   }}
//                   {...(errors.password && { error: true, helperText: errors.password.message })}
//                 />
//               )}
//             />
//             <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
//               <FormControlLabel control={<Checkbox defaultChecked />} label='Remember me' />
//               <Typography
//                 className='text-end'
//                 color='primary'
//                 component={Link}
//                 href={getLocalizedUrl('/forgot-password', locale)}
//               >
//                 Forgot password?
//               </Typography>
//             </div>
//             <Button fullWidth variant='contained' type='submit'>
//               Login
//             </Button>
//             <div className='flex justify-center items-center flex-wrap gap-2'>
//               <Typography>New on our platform?</Typography>
//               <Typography component={Link} href={getLocalizedUrl('/register', locale)} color='primary'>
//                 Create an account
//               </Typography>
//             </div>
     
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useRouter, useParams, useSearchParams } from 'next/navigation'

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Divider from '@mui/material/Divider'
import Alert from '@mui/material/Alert'

// Third-party Imports
import { Controller, useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { object, minLength, string, email } from 'valibot'
import classnames from 'classnames'

import {setCookie} from 'cookies-next'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

import CryptoJS from 'crypto-js';


import {apiClient} from '@/utils/apiClient'

import {generateNonce,generateSignature,generateTimestamp, secret} from '@/utils/apiClient'

// Styled Custom Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  blockSize: 'auto',
  maxBlockSize: 680,
  maxInlineSize: '100%',
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxBlockSize: 450
  }
}))

const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 355,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1
})

const schema = object({
  email: string([minLength(1, 'This field is required'), email('Email is invalid')]),
  password: string([
    minLength(1, 'This field is required'),
    minLength(5, 'Password must be at least 5 characters long')
  ])
})

const Login = ({ mode }) => {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [sendAlert, setSendAlert] = useState('')

  // Vars
  const darkImg = '/images/pages/auth-mask-dark.png'
  const lightImg = '/images/pages/auth-mask-light.png'
  const darkIllustration = '/images/illustrations/auth/v2-login-dark.png'
  const lightIllustration = '/images/illustrations/auth/v2-login-light.png'
  const borderedDarkIllustration = '/images/illustrations/auth/v2-login-dark-border.png'
  const borderedLightIllustration = '/images/illustrations/auth/v2-login-light-border.png'

  // Hooks
  const searchParams = useSearchParams()
  const router = useRouter()
  const { lang: locale } = useParams()
  const { settings } = useSettings()
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: valibotResolver(schema),
    defaultValues: {
      email: 'admin@livein.in',
      password: 'Livein@20243$'
    }
  })

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  )

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  // onSubmit function
//   const onSubmit = async ({ email, password }) => {
//       // signature
//       const payloaddata = JSON.stringify({ email, password });
//   const nonce = generateNonce();
//   const timestamp = generateTimestamp();
//   const signature = generateSignature(payloaddata, secret, nonce, timestamp);

//   console.log(nonce, 'nonce', timestamp, 'timestamp', signature, 'signature', payloaddata, 'request body');

//   try {
//     const response = await apiClient.post('/admin/admins/adminlogin', { email, password }, {
//       headers: {
//         'Nonce': nonce,
//         'Timestamp': timestamp,
//         'Signature': signature
//       }
//     });
     
//   const {accessToken, refreshToken} = await response.data
  
//   setCookie('accessToken', accessToken)
// setCookie('refreshToken', refreshToken)

//       if (response && response.status == 200 && response.error == null ) {
// console.log(document.cookie); 

//         const redirectURL = searchParams.get('redirectTo') ?? '/'

//         router.push(getLocalizedUrl(redirectURL, locale));
//       }
//       else{
//         console.log("you are not authenticated");
//       }
//     } catch (err) {
//       setSendAlert(err.message)
//     }
//   }
      
// const onProtected = async()=>{
//   const axios = require('axios');
//   const secret = 'tom-and-jerry';
// const payloaddata = JSON.stringify({});
//   const nonce = CryptoJS.lib.WordArray.random(16).toString();
//   const timestamp = Date.now().toString();
//   const generateSignature = (payloaddata, secret, nonce, timestamp) => {
//     const payload = `${payloaddata}|${nonce}|${timestamp}`;
//       // const payload = `${payloaddata}`
//       // console.log(payload + 'payload')
//     return CryptoJS.HmacSHA256(payload, secret).toString(CryptoJS.enc.Hex);
//   };
//   // console.log(generateSignature + 'generateSignature')
  
//   // Generate the signature
//   const signature = generateSignature(payloaddata, secret, nonce, timestamp);
//   console.log(signature);
  
// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'http://165.232.189.68/admin/admins/protected',
//   headers: { 
//     'livein-key': 'livein-key', 
//     'Nonce': nonce, 
//     'Timestamp': timestamp, 
//     'Signature': signature, 
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjYxNTA1NzIzYjQ3NDAzMWFmNTMwYmEiLCJlbWFpbCI6ImFtYXJAbGl2ZWluLmluIiwicGhvbmUiOiI4MTA0OTYwMjYxIiwiaWF0IjoxNzE4MTg1MTE3LCJyb2xlIjoic3VwZXJhZG1pbiIsImFiaWxpdHkiOlsiZGFzaGJvYXJkIiwic3VtbWFyeSIsImFuYWx5dGljcyIsInJlcG9ydHMiLCJhZG1pbnMiLCJhZG1pbnVzZXJzIiwicm9sZXMiLCJjdXN0b21lcnMiLCJhbGxjdXN0b21lcnMiLCJjdXN0b21lcnNlZ21lbnQiLCJwcm9kdWN0cyIsImFsbHByb2R1Y3RzIiwiY2F0ZWdvcmllcyIsImJ1bGtpbXBvcnQiLCJpbnZlbnRvcnkiLCJtZXRhcyIsInRhZ3MiLCJvZmZlcnMiLCJhbGxjb3Vwb25zIiwiY3VzdG9tZXJjb3Vwb25zIiwib3JkZXJzIiwiYWxsb3JkZXJzIiwiYnVsa3Byb2Nlc3NpbmciLCJ0cmFuc2FjdGlvbnMiLCJhcmNoaXZlZG9yZGVycyIsImNtcyIsInN0b3Jlc2V0dXAiLCJzdHlsZSIsImJhbm5lcnMiLCJzdG9yaWVzIiwic2VvIiwicGFnZXMiLCJtZWRpYSIsImdvb2dsZSIsImZhY2Vib29rIiwic29jaWFscHJvZmlsZXMiLCJwYXltZW50cyIsImNhc2hvbmRlbGl2ZXJ5IiwicmF6b3JwYXkiLCJwaG9uZXBlIiwic2hpcHBpbmciLCJzaGlwcGluZ3pvbmVzIiwic2hpcHBpbmdjaGFyZ2VzIiwicGluY29kZXMiLCJ0YXhlcyIsInRheHJhdGUiLCJ0YXhncm91cCIsImVtYWlsIiwic210cCIsInRlbXBsYXRlcyIsInNlbmRlbWFpbHMiLCJub3RpZmljYXRpb25zIiwiZmlyZWJhc2VzZXR1cCIsInNtc3RlbXBsYXRlcyIsInNlbmRub3RpZmljYXRpb24iLCJzbXMiLCJzbXNzZXR1cCIsInNtc3RlbXBsYXRlcyIsInNoaXBwZXJzIiwiZGVsaGl2ZXJ5IiwiYmx1ZWRhcnQiLCJzaGlwcm9ja2V0Iiwic2hpcGRlbGlnaHQiLCJicmFuZHMiXSwiZXhwIjoxNzI1OTYxMTE3fQ.o7fwgCMLj4E5zSitvSFPTBXCG7RbjtJgXhphhfhQmgk', 
//     'Cookie': 'accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjYxNTA1NzIzYjQ3NDAzMWFmNTMwYmEiLCJlbWFpbCI6ImFtYXJAbGl2ZWluLmluIiwicGhvbmUiOiI4MTA0OTYwMjYxIiwiaWF0IjoxNzE4MTg1MTE3LCJyb2xlIjoic3VwZXJhZG1pbiIsImFiaWxpdHkiOlsiZGFzaGJvYXJkIiwic3VtbWFyeSIsImFuYWx5dGljcyIsInJlcG9ydHMiLCJhZG1pbnMiLCJhZG1pbnVzZXJzIiwicm9sZXMiLCJjdXN0b21lcnMiLCJhbGxjdXN0b21lcnMiLCJjdXN0b21lcnNlZ21lbnQiLCJwcm9kdWN0cyIsImFsbHByb2R1Y3RzIiwiY2F0ZWdvcmllcyIsImJ1bGtpbXBvcnQiLCJpbnZlbnRvcnkiLCJtZXRhcyIsInRhZ3MiLCJvZmZlcnMiLCJhbGxjb3Vwb25zIiwiY3VzdG9tZXJjb3Vwb25zIiwib3JkZXJzIiwiYWxsb3JkZXJzIiwiYnVsa3Byb2Nlc3NpbmciLCJ0cmFuc2FjdGlvbnMiLCJhcmNoaXZlZG9yZGVycyIsImNtcyIsInN0b3Jlc2V0dXAiLCJzdHlsZSIsImJhbm5lcnMiLCJzdG9yaWVzIiwic2VvIiwicGFnZXMiLCJtZWRpYSIsImdvb2dsZSIsImZhY2Vib29rIiwic29jaWFscHJvZmlsZXMiLCJwYXltZW50cyIsImNhc2hvbmRlbGl2ZXJ5IiwicmF6b3JwYXkiLCJwaG9uZXBlIiwic2hpcHBpbmciLCJzaGlwcGluZ3pvbmVzIiwic2hpcHBpbmdjaGFyZ2VzIiwicGluY29kZXMiLCJ0YXhlcyIsInRheHJhdGUiLCJ0YXhncm91cCIsImVtYWlsIiwic210cCIsInRlbXBsYXRlcyIsInNlbmRlbWFpbHMiLCJub3RpZmljYXRpb25zIiwiZmlyZWJhc2VzZXR1cCIsInNtc3RlbXBsYXRlcyIsInNlbmRub3RpZmljYXRpb24iLCJzbXMiLCJzbXNzZXR1cCIsInNtc3RlbXBsYXRlcyIsInNoaXBwZXJzIiwiZGVsaGl2ZXJ5IiwiYmx1ZWRhcnQiLCJzaGlwcm9ja2V0Iiwic2hpcGRlbGlnaHQiLCJicmFuZHMiXSwiZXhwIjoxNzI1OTYxMTE3fQ.o7fwgCMLj4E5zSitvSFPTBXCG7RbjtJgXhphhfhQmgk; refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjYxNTA1NzIzYjQ3NDAzMWFmNTMwYmEiLCJpYXQiOjE3MTgxODUxMTcsImV4cCI6MTczMzczNzExN30.n96xmY9OUNnr4zJEt2A4BEc43QlRx_6b7zG3_8g5XPo'
//   }
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

// } 

const onSubmit = async ({ email, password }) => {
  // signature
  const payloaddata = JSON.stringify({ email, password });
  const nonce = generateNonce();
  const timestamp = generateTimestamp();
  const signature = generateSignature(payloaddata, secret, nonce, timestamp);

  console.log(nonce, 'nonce', timestamp, 'timestamp', signature, 'signature', payloaddata, 'request body');

  try {
    const response = await apiClient.post('/admin/admins/adminlogin', { email, password }, {
      headers: {
        'Nonce': nonce,
        'Timestamp': timestamp,
        'Signature': signature
      }
    });

    const { accessToken, refreshToken } = await response.data;
    setCookie('accessToken', accessToken);
    setCookie('refreshToken', refreshToken);

    if (response && response.status === 200 && response.error == null) {
      console.log(document.cookie);

      const redirectURL = searchParams.get('redirectTo') ?? '/';
      router.push(getLocalizedUrl(redirectURL, locale));

      // Call the protected route
      // await onProtected(accessToken, refreshToken);
    } else {
      console.log("You are not authenticated");
    }
  } catch (err) {
    setSendAlert(err.message);
  }
};


// const onProtected = async (accessToken, refreshToken) => {
//   const axios = require('axios');
//   const secret = 'tom-and-jerry';
//   const payloaddata = JSON.stringify({});
//   const nonce = CryptoJS.lib.WordArray.random(16).toString();
//   const timestamp = Date.now().toString();
//   const token = accessToken
// console.log("======================================", token);
//   const generateSignature = (payloaddata, secret, nonce, timestamp) => {
//     const payload = `${payloaddata}|${nonce}|${timestamp}`;
//     return CryptoJS.HmacSHA256(payload, secret).toString(CryptoJS.enc.Hex);
//   };

//   const signature = generateSignature(payloaddata, secret, nonce, timestamp);
//   console.log(signature);

//   let config = {
//     method: 'post',
//     maxBodyLength: Infinity,
//     url: 'http://165.232.189.68/admin/admins/protected',
//     headers: {
//       'livein-key': 'livein-key',
//       'Nonce': nonce,
//       'Timestamp': timestamp,
//       'Signature': signature,
//       // 'Authorization': `Bearer ${accessToken}`,
//       // 'Cookie': `accessToken=${accessToken}`,
//       'Cookie': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjYxNjVhZTBhMzVhZjI2NGUwNjk0ZGQiLCJlbWFpbCI6ImFkbWluQGxpdmVpbi5pbiIsInBob25lIjoiODEwNDk2MDI2MCIsImlhdCI6MTcxODE5ODE5NSwicm9sZSI6InN1cGVyYWRtaW4iLCJhYmlsaXR5IjpbImRhc2hib2FyZCIsInN1bW1hcnkiLCJhbmFseXRpY3MiLCJyZXBvcnRzIiwiYWRtaW5zIiwiYWRtaW51c2VycyIsInJvbGVzIiwiY3VzdG9tZXJzIiwiYWxsY3VzdG9tZXJzIiwiY3VzdG9tZXJzZWdtZW50IiwicHJvZHVjdHMiLCJhbGxwcm9kdWN0cyIsImNhdGVnb3JpZXMiLCJidWxraW1wb3J0IiwiaW52ZW50b3J5IiwibWV0YXMiLCJ0YWdzIiwib2ZmZXJzIiwiYWxsY291cG9ucyIsImN1c3RvbWVyY291cG9ucyIsIm9yZGVycyIsImFsbG9yZGVycyIsImJ1bGtwcm9jZXNzaW5nIiwidHJhbnNhY3Rpb25zIiwiYXJjaGl2ZWRvcmRlcnMiLCJjbXMiLCJzdG9yZXNldHVwIiwic3R5bGUiLCJiYW5uZXJzIiwic3RvcmllcyIsInNlbyIsInBhZ2VzIiwibWVkaWEiLCJnb29nbGUiLCJmYWNlYm9vayIsInNvY2lhbHByb2ZpbGVzIiwicGF5bWVudHMiLCJjYXNob25kZWxpdmVyeSIsInJhem9ycGF5IiwicGhvbmVwZSIsInNoaXBwaW5nIiwic2hpcHBpbmd6b25lcyIsInNoaXBwaW5nY2hhcmdlcyIsInBpbmNvZGVzIiwidGF4ZXMiLCJ0YXhyYXRlIiwidGF4Z3JvdXAiLCJlbWFpbCIsInNtdHAiLCJ0ZW1wbGF0ZXMiLCJzZW5kZW1haWxzIiwibm90aWZpY2F0aW9ucyIsImZpcmViYXNlc2V0dXAiLCJzbXN0ZW1wbGF0ZXMiLCJzZW5kbm90aWZpY2F0aW9uIiwic21zIiwic21zc2V0dXAiLCJzbXN0ZW1wbGF0ZXMiLCJzaGlwcGVycyIsImRlbGhpdmVyeSIsImJsdWVkYXJ0Iiwic2hpcHJvY2tldCIsInNoaXBkZWxpZ2h0IiwiYnJhbmRzIl0sImV4cCI6MTcyNTk3NDE5NX0.RjrqyFna9kLwkmg7Zx9aOop5UT8t39tkx0qwg10vhjM'
      
//     }

//   };

//   console.log(config);

//   axios.request(config)
//     .then((response) => {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };


// const onSubmit = async ({ email, password }) => {
//   // Create the request body
//   const requestBody = { email, password };

//   // Generate nonce and timestamp
//   const nonce = generateNonce();
//   const timestamp = generateTimestamp();

//   // Generate the signature
//   // const signature = generateSignature(requestBody,nonce, timestamp, "tom-and-jerry");
//   const signature = generateSignature(timestamp, "tom-and-jerry");

//   console.log(nonce, "nonce", timestamp, "timestamp", signature, "signature", requestBody, "request body");

//   try {
//     // Use fetch to make the POST request
//     const response = await fetch('http://165.232.189.68/admin/admins/adminlogin', {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         'Nonce': nonce,
//         'Timestamp': timestamp,
//         'Signature': signature,
//       },
//       body: JSON.stringify(requestBody)
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     // Parse the response as JSON
//     const data = await response.json();

//     // Handle the response data
//     const { accessToken, refreshToken } = data;

//     setCookie('accessToken', accessToken);
//     setCookie('refreshToken', refreshToken);
//     console.log('saved');

//   } catch (err) {
//     // Handle any errors that occur during the fetch
//     console.error('Error during login:', err.message);
//   }
// };


   
  

  return (
    <div className='flex bs-full justify-center'>
      <div
        className={classnames(
          'flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden',
          {
            'border-ie': settings.skin === 'bordered'
          }
        )}
      >
        <LoginIllustration src={characterIllustration} alt='character-illustration' />
        {!hidden && <MaskImg alt='mask' src={authBackground} />}
      </div>
      <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
        <div className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
          <Logo />
        </div>
        <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset] mbs-8 sm:mbs-11 md:mbs-0'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h4'>{`Welcome to ${themeConfig.templateName}! 👋🏻`}</Typography>
            <Typography>Please sign-in to your account and start the adventure</Typography>
          </div>
         
          <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  autoFocus
                  fullWidth
                  type='email'
                  label='Email'
                  placeholder='Enter your email'
                  onChange={e => {
                    field.onChange(e.target.value)
                  }}
                  {...(errors.email && {
                    error: true,
                    helperText: errors?.email?.message
                  })}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  fullWidth
                  label='Password'
                  placeholder='············'
                  id='login-password'
                  type={isPasswordShown ? 'text' : 'password'}
                  onChange={e => {
                    field.onChange(e.target.value)
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton edge='end' onClick={handleClickShowPassword} onMouseDown={e => e.preventDefault()}>
                          <i className={isPasswordShown ? 'tabler-eye' : 'tabler-eye-off'} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  {...(errors.password && { error: true, helperText: errors.password.message })}
                />
              )}
            />
            <div className='flex justify-between items-center gap-x-3 gap-y-1 flex-wrap'>
              <FormControlLabel control={<Checkbox defaultChecked />} label='Remember me' />
              <Typography
                className='text-end'
                color='primary'
                component={Link}
                href={getLocalizedUrl('/forgot-password', locale)}
              >
                Forgot password?
              </Typography>
            </div>
            <Button fullWidth variant='contained' type='submit'>
              Login
            </Button>
          
          </form>
          {sendAlert && <Alert severity="error">{sendAlert}</Alert>}
        </div>
      </div>
    </div>
  )
}

export default Login
