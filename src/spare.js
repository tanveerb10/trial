// 'use client'

// // React Imports
// import { useState } from 'react'

// // MUI Imports
// import Card from '@mui/material/Card'
// import Grid from '@mui/material/Grid'
// import Button from '@mui/material/Button'
// import Divider from '@mui/material/Divider'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'
// import InputAdornment from '@mui/material/InputAdornment'
// import IconButton from '@mui/material/IconButton'
// import { Typography } from '@mui/material'

// import { useForm } from 'react-hook-form'

// // Components Imports

// import { useThrottledValue } from 'kbar/lib/utils'

// import CustomTextField from '@core/components/mui/TextField'

// const FormLayoutsSeparator = () => {
//   // States
//   const [formData, setFormData] = useState({
//     address: '',
//     email: '',
//     firstName: '',
//     phoneNumber: ''
//   })

//   // Hooks
//   const {
//     formState: { errors }
//   } = useForm({
//     defaultValues: {
//       email: '',

//       textarea: ''
//     }
//   })

//   const handleSubmit = e => {
//     e.preventDefault()

//     console.log('submitted')
//   }

//   const handleEditClick = () => {
//     setIsSubmitDisabled(false)
//     setIsEditable(false)
//     console.log('edit handle')
//   }

//   return (
//     <Card>
//       <CardHeader title='Profile' />
//       <Divider />
//       <Card>
//         <CardHeader title='Store Details' />
//         <Typography onClick={handleEditClick}>edit</Typography>

//         <CardContent>
//           <form onSubmit={e => e.preventDefault()}>
//             <Grid container spacing={6}>
//               <Grid item xs={12}>
//                 <CustomTextField
//                   fullWidth
//                   label='Store Name'
//                   placeholder='John Doe'
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position='start'>
//                         <i className='tabler-user' />
//                       </InputAdornment>
//                     )
//                   }}
//                   {...(errors.email && { error: true, helperText: 'This field is required.' })}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <CustomTextField
//                   fullWidth
//                   type='email'
//                   label='Store Email'
//                   placeholder='johndoe@gmail.com'
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position='start'>
//                         <i className='tabler-mail' />
//                       </InputAdornment>
//                     )
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <CustomTextField
//                   fullWidth
//                   label='Store Phone No.'
//                   placeholder='123-456-7890'
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position='start'>
//                         <i className='tabler-phone' />
//                       </InputAdornment>
//                     )
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <CustomTextField
//                   fullWidth
//                   rows={4}
//                   multiline
//                   label='Store Address'
//                   placeholder='Store Address'
//                   sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position='start'>
//                         <i className='tabler-message' />
//                       </InputAdornment>
//                     )
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button variant='contained' type='submit'>
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </CardContent>
//       </Card>
//       <Divider />
//       <Card>
//         <CardHeader title='Billing Information' />
//         <CardContent>
//           <form onSubmit={e => e.preventDefault()}>
//             <Grid container spacing={6}>
//               <Grid item xs={12}>
//                 <CustomTextField
//                   fullWidth
//                   label='Legal Busines Name'
//                   placeholder='John Doe'
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position='start'>
//                         <i className='tabler-user' />
//                       </InputAdornment>
//                     )
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <CustomTextField
//                   fullWidth
//                   type='email'
//                   label='Legal Business Email'
//                   placeholder='johndoe@gmail.com'
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position='start'>
//                         <i className='tabler-mail' />
//                       </InputAdornment>
//                     )
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <CustomTextField
//                   fullWidth
//                   label='Legal Business Phone No.'
//                   placeholder='123-456-7890'
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position='start'>
//                         <i className='tabler-phone' />
//                       </InputAdornment>
//                     )
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <CustomTextField
//                   fullWidth
//                   rows={4}
//                   multiline
//                   label='Legal Business Address'
//                   placeholder='Legal Business Address'
//                   sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position='start'>
//                         <i className='tabler-message' />
//                       </InputAdornment>
//                     )
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button variant='contained' type='submit'>
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </CardContent>
//       </Card>
//     </Card>
//   )
// }


'use client'

// React Imports
import { useState, useEffect } from 'react'

// Hooks
import { useForm, Controller } from 'react-hook-form'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import { Typography } from '@mui/material'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'

const FormLayoutsSeparator = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // States
  const [formData, setFormData] = useState({
    storeName: '',
    storeEmail: '',
    storePhoneNumber: '',
    storeAddress: '',
    legalName: '',
    legalEmail: '',
    legalPhoneNumber: '',
    legalAddress: ''
  })

  const [storeEditable, setStoreEditable] = useState(false)
  const [storeSubmitDisabled, setStoreSubmitDisabled] = useState(true)

  const [legalEditable, setLegalEditable] = useState(false)
  const [legalSubmitDisabled, setLegalSubmitDisabled] = useState(true)

  // Hooks
  useEffect(() => {
    // Simulate fetching data from the database
    const fetchData = async () => {
      const data = await fakeApiCall()

      setFormData(data)
    }

    fetchData()
  }, [])

  const fakeApiCall = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          storeAddress: '123 Main St',
          storeEmail: 'store@example.com',
          storeName: 'John',
          storePhoneNumber: '123-456-7890',
          legalAddress: '235 anderi',
          legalEmail: 'legal@example.com',
          legalPhoneNumber: '123456879',
          legalName: 'livein'
        })
      }, 5000)
    })
  }

  const handleStoreSubmit = e => {
    e.preventDefault()
    console.log('Store submitted:', formData)
    setStoreEditable(false)
    setStoreSubmitDisabled(true)
  }

  const handleLegalSubmit = e => {
    e.preventDefault()
    console.log('legal submitted', formData)
    setLegalEditable(false)
    setLegalSubmitDisabled(true)
  }

  const handleEditStore = () => {
    setStoreEditable(true)
    setStoreSubmitDisabled(false)
  }

  const handleEditLegal = () => {
    setLegalEditable(true)
    setLegalSubmitDisabled(false)
  }

  const handleInputChange = (e, section) => {
    const { name, value } = e.target

    setFormData(prevData => ({
      ...prevData,
      [section === 'store' ? `store${name}` : `legal${name}`]: value
    }))
  }

  return (
    <Card>
      <CardHeader title='Profile' />
      <Divider />
      <Card>
        <span className='flex justify-between'>
          <CardHeader title='Store Details' />

          <Typography variant='h6' className='cursor-pointer pr-4 pt-4' onClick={handleEditStore}>
            Edit
          </Typography>
        </span>
        <CardContent>
          <form onSubmit={handleSubmit(handleStoreSubmit)}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Controller
                  name='storeName'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <CustomTextField
                      {...field}
                      fullWidth
                      label='Store Name'
                      placeholder='John Doe'
                      value={formData.storeName}
                      name="Name"
                      onChange={e => handleInputChange(e, 'store')}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <i className='tabler-user' />
                          </InputAdornment>
                        ),
                        readOnly: !storeEditable
                      }}
                      error={Boolean(errors.storeName)} // Add error prop based on validation
                      helperText={errors.storeName && 'This field is required'}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                control={control}
                rules={{required:true}}
                name='storeEmail'
                render={({field})=>(

                  <CustomTextField
                  {...field}
                  fullWidth
                  type='email'
                  label='Store Email'
                  placeholder='johndoe@gmail.com'
                  name='Email'
                  value={formData.storeEmail}
                  onChange={e => handleInputChange(e, 'store')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <i className='tabler-mail' />
                      </InputAdornment>
                    ),
                    readOnly: !storeEditable
                  }}
                  error={Boolean(errors.storeEmail)} // Add error prop based on validation
                  helperText={errors.storeEmail && 'This field is required'}
                  />
                )}
                  />
                
              </Grid>
              <Grid item xs={12}>
                <Controller 
                name='storePhoneNumber'
                control={control}
                rules={{required:true}}
                render={({field})=>(

                  <CustomTextField
                  {...field}
                  fullWidth
                  label='Store Phone No.'
                  placeholder='123-456-7890'
                  name ="PhoneNumber"
                  type='number'
                  value={formData.storePhoneNumber}
                  onChange={e => handleInputChange(e, 'store')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <i className='tabler-phone' />
                      </InputAdornment>
                    ),
                    readOnly: !storeEditable
                  }}
                  error={Boolean(errors.storePhoneNumber)} // Add error prop based on validation
                  helperText={errors.storePhoneNumber && 'This field is required'}
                  />
                )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                name='storeAddress'
                control={control}
                rules={{required:true}}
                render={({field})=>(

                  <CustomTextField
                  {...field}  
                  fullWidth
                  rows={4}
                  multiline
                  label='Store Address'
                  placeholder='Store Address'
                  name='Address'
                  value={formData.storeAddress}
                  onChange={e => handleInputChange(e, 'store')}
                  sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <i className='tabler-message' />
                      </InputAdornment>
                    ),
                    readOnly: !storeEditable
                  }}
                  error={Boolean(errors.storeAddress)}
                  helperText={errors.storeAddress&&"this field required"}
                  />
                )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant='contained' type='submit' disabled={storeSubmitDisabled}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Divider />
      <Card>
        <span className='flex justify-between'>
          <CardHeader title='Billing Information' />

          <Typography variant='h6' className='cursor-pointer pr-4 pt-4' onClick={handleEditLegal}>
            Edit
          </Typography>
        </span>

        <CardContent>
          <form onSubmit={handleSubmit(handleLegalSubmit)}>
            <Grid container spacing={6}>
              <Grid item xs={12}>
              <Controller
                name='legalName'
                control={control}
                rules={{required:true}}
                render={({field})=>(
                  <CustomTextField
                  {...field}  
                  fullWidth
                  label='Legal Business Name'
                  placeholder='John Doe'
                name="Name"
                  value={formData.legalName}
                  onChange={e => handleInputChange(e, 'legal')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <i className='tabler-user' />
                      </InputAdornment>
                    ),
                    readOnly: !legalEditable
                  }}
                  error={Boolean(errors.legalName)}
                  helperText={errors.legalName&&"this field required"}
                  />
                )}
                />
                 
              </Grid>
              <Grid item xs={12}>
              <Controller
                name='legalEmail'
                control={control}
                rules={{required:true}}
                render={({field})=>(
                  <CustomTextField
                  fullWidth
                  {...field}  
                  type='email'
                  label='Legal Business Email'
                  placeholder='johndoe@gmail.com'
                  name='Email'
                  value={formData.legalEmail}
                  onChange={e => handleInputChange(e, 'legal')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <i className='tabler-mail' />
                      </InputAdornment>
                    ),
                    readOnly: !legalEditable
                  }}
                  error={Boolean(errors.legalEmail)}
                  helperText={errors.legalEmail&&"this field required"}
                  />
                )}
                />
                  
              </Grid>
              <Grid item xs={12}>
              <Controller
                name='legalPhoneNumber'
                control={control}
                rules={{required:true}}
                render={({field})=>(
                  <CustomTextField
                  {...field}  
                  fullWidth
                  label='Legal Business Phone No.'
                  placeholder='123-456-7890'
                  name='PhoneNumber'
                  type='number'
                  value={formData.legalPhoneNumber}
                  onChange={e => handleInputChange(e, 'legal')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <i className='tabler-phone' />
                      </InputAdornment>
                    ),
                    readOnly: !legalEditable
                  }}
                  error={Boolean(errors.legalPhoneNumber)}
                  helperText={errors.legalPhoneNumber&&"this field required"}
                  />
                )}
                />
                  
              </Grid>
              <Grid item xs={12}>
              <Controller
                name='legalAddress'
                control={control}
                rules={{required:true}}
                render={({field})=>(
                  <CustomTextField
                  {...field}  
                  fullWidth
                  rows={4}
                  multiline
                  label='Legal Business Address'
                  placeholder='Legal Business Address'
                  name='Address'
                  value={formData.legalAddress}
                  onChange={e => handleInputChange(e, 'legal')}
                  sx={{ '& .MuiInputBase-root.MuiFilledInput-root': { alignItems: 'baseline' } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <i className='tabler-message' />
                      </InputAdornment>
                    ),
                    readOnly: !legalEditable
                  }}
                  error={Boolean(errors.legalAddress)}
                  helperText={errors.legalAddress&&"this field required"}
                  />
                )}
                />
                  
              </Grid>
              <Grid item xs={12}>
                <Button variant='contained' type='submit' disabled={legalSubmitDisabled}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Card>
  )
}

export default FormLayoutsSeparator
