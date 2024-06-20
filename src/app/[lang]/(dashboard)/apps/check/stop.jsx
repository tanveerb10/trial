// import React from 'react'

// import Customizer from '@core/components/customizer'

// import { i18n } from '@configs/i18n'

// export default function page({params}) {
//   const direction = i18n.langDirection[params.lang]

//   return (
//     <div>
//       check

//       {/* <Customizer /> */}
//     </div>
//   )
// }


// import React, { useState, useRef } from 'react';
// import classnames from 'classnames';
// import { Popper, Fade, Paper, ClickAwayListener } from '@mui/material';
// import ScrollWrapper from './ScrollWrapper';
// import Chip from './Chip';
// import DebouncedColorPicker from './DebouncedColorPicker';
// import Image from 'next/image';
// import Button from '@mui/material/Button';

// const Customizer = ({ settings, setSettings, primaryColorConfig, secondaryColorConfig, tertiaryColorConfig, fontOptions, selectedFont, setSelectedFont, imgSrc, handleFileInputChange, fileInput, handleImgReset }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const anchorRef = useRef(null);

//   const handleChange = (type, color) => {
//     setSettings({ ...settings, [type]: color });
//   };

//   const handleMenuClose = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <ScrollWrapper>
//       <div
//         className='customizer-toggler flex items-center justify-center cursor-pointer'
//         style={{
//           width: '400px',
//           backgroundColor: 'var(--mui-palette-background-paper)',
//           position: 'fixed',
//           top: '0',
//           right: isOpen ? '0' : '-400px',
//           boxShadow: isOpen ? 'var(--mui-customShadows-xl)' : 'none',
//           zIndex: 'var(--customizer-z-index)',
//           transition: 'right 300ms ease-in-out, box-shadow 300ms ease-in-out',
//         }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <i className='tabler-settings text-[22px]' />
//       </div>
//       <div
//         className='customizer-header flex items-center justify-between'
//         style={{
//           paddingBlock: '16px',
//           paddingInline: '24px',
//           borderBottom: '1px solid var(--border-color)',
//         }}
//       >
//         <div className='flex flex-col'>
//           <h4 style={{ fontSize: '15px', fontWeight: '500' }}>Theme Customizer</h4>
//           <p style={{ fontSize: '13px', lineHeight: '1.538462', color: 'var(--mui-palette-text-secondary)' }}>Customize & Preview in Real Time</p>
//         </div>
//         <div className='flex gap-4'>
//           <div
//             onClick={() => setSettings({
//               primaryColor: primaryColorConfig[0].main,
//               secondaryColor: secondaryColorConfig[0].main,
//               tertiaryColor: tertiaryColorConfig[0].main,
//             })}
//             className='relative flex cursor-pointer'
//           >
//             <i className='tabler-refresh' style={{ color: 'var(--mui-palette-text-primary)' }} />
//             <div
//               style={{
//                 position: 'absolute',
//                 top: '0',
//                 right: '-5px',
//                 height: '8px',
//                 width: '8px',
//                 borderRadius: '50%',
//                 backgroundColor: 'var(--mui-palette-error-main)',
//                 transform: 'scale(1)',
//                 transition: 'transform 300ms ease-in-out',
//               }}
//             />
//           </div>
//         </div>
//       </div>

//       <div
//         className='customizer-body flex flex-col'
//         style={{ padding: '24px', gap: '32px' }}
//       >
//         <div className='theming-section flex flex-col gap-6'>
//           <Chip label='Theming' size='small' color='primary' variant='tonal' className='self-start' style={{ borderRadius: '4px' }} />

//           <div className='flex flex-col gap-2'>
//             <p className='font-medium'>Primary Color</p>
//             <div className='flex items-center justify-between'>
//               {primaryColorConfig.map((item) => (
//                 <div
//                   key={item.main}
//                   className={classnames({
//                     'active': settings.primaryColor === item.main,
//                   })}
//                   onClick={() => handleChange('primaryColor', item.main)}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     overflow: 'hidden',
//                     border: '1px solid var(--border-color)',
//                     borderRadius: 'var(--border-radius)',
//                     outline: '1px solid transparent',
//                     height: '50px',
//                     width: '50px',
//                     padding: '8px',
//                     cursor: 'pointer',
//                     backgroundColor: settings.primaryColor === item.main ? 'var(--primary-color)' : 'transparent',
//                   }}
//                 >
//                   <div style={{ backgroundColor: item.main, height: '100%', width: '100%', borderRadius: 'var(--border-radius)' }} />
//                 </div>
//               ))}
//               <div
//                 ref={anchorRef}
//                 className={classnames({
//                   'active': !primaryColorConfig.find((item) => item.main === settings.primaryColor),
//                 })}
//                 onClick={() => setIsMenuOpen((prev) => !prev)}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   overflow: 'hidden',
//                   border: '1px solid var(--border-color)',
//                   borderRadius: 'var(--border-radius)',
//                   outline: '1px solid transparent',
//                   height: '50px',
//                   width: '50px',
//                   padding: '8px',
//                   cursor: 'pointer',
//                   backgroundColor: !primaryColorConfig.find((item) => item.main === settings.primaryColor)
//                     ? settings.primaryColor
//                     : 'var(--mui-palette-action-selected)',
//                   color: primaryColorConfig.find((item) => item.main === settings.primaryColor)
//                     ? 'var(--mui-palette-text-primary)'
//                     : 'var(--mui-palette-primary-contrastText)',
//                 }}
//               >
//                 <i className='tabler-color-picker text-xl' />
//               </div>
//               <Popper
//                 transition
//                 open={isMenuOpen}
//                 disablePortal
//                 anchorEl={anchorRef.current}
//                 placement='bottom-end'
//                 className='z-[1]'
//               >
//                 {({ TransitionProps }) => (
//                   <Fade {...TransitionProps} style={{ transformOrigin: 'right top' }}>
//                     <Paper elevation={6} style={{ padding: '16px', marginTop: '1px' }}>
//                       <ClickAwayListener onClickAway={handleMenuClose}>
//                         <div>
//                           <DebouncedColorPicker
//                             color={settings.primaryColor}
//                             onChange={(color) => handleChange('primaryColor', color)}
//                           />
//                         </div>
//                       </ClickAwayListener>
//                     </Paper>
//                   </Fade>
//                 )}
//               </Popper>
//             </div>
//           </div>

//           <div className='flex flex-col gap-2'>
//             <p className='font-medium'>Secondary Color</p>
//             <div className='flex items-center justify-between'>
//               {secondaryColorConfig.map((item) => (
//                 <div
//                   key={item.main}
//                   className={classnames({
//                     'active': settings.primaryColor === item.main,
//                   })}
//                   onClick={() => handleChange('primaryColor', item.main)}
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     overflow: 'hidden',
//                     border: '1px solid var(--border-color)',
//                     borderRadius: 'var(--border-radius)',
//                     outline: '1px solid transparent',
//                     height: '50px',
//                     width: '50px',
//                     padding: '8px',
//                     cursor: 'pointer',
//                     backgroundColor: settings.primaryColor === item.main ? 'var(--primary-color)' : 'transparent',
//                   }}
//                 >
//                   <div style={{ backgroundColor: item.main, height: '100%', width: '100%', borderRadius: 'var(--border-radius)' }} />
//                 </div>
//               ))}
//               <div
//                 ref={anchorRef}
//                 className={classnames({
//                   'active': !primaryColorConfig.find((item) => item.main === settings.primaryColor),
//                 })}
//                 onClick={() => setIsMenuOpen((prev) => !prev)}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   overflow: 'hidden',
//                   border: '1px solid var(--border-color)',
//                   borderRadius: 'var(--border-radius)',
//                   outline: '1px solid transparent',
//                   height: '50px',
//                   width: '50px',
//                   padding: '8px',
//                   cursor: 'pointer',
//                   backgroundColor: !primaryColorConfig.find((item) => item.main === settings.primaryColor)
//                     ? settings.primaryColor
//                     : 'var(--mui-palette-action-selected)',
//                   color: primaryColorConfig.find((item) => item.main === settings.primaryColor)
//                     ? 'var(--mui-palette-text-primary)'
//                     : 'var(--mui-palette-primary-contrastText)',
//                 }}
//               >
//                 <i className='tabler-color-picker text-xl' />
//               </div>
//               <Popper
//                 transition
//                 open={isMenuOpen}
//                 disablePortal
//                 anchorEl={anchorRef.current}
//                 placement='bottom-end'
//                 className='z-[1]'
//               >
//                 {({ TransitionProps }) => (
//                   <Fade {...TransitionProps} style={{ transformOrigin: 'right top' }}>
// <Paper elevation={6} style={{ padding: '16px', marginTop: '1px' }}>
// <ClickAwayListener onClickAway={handleMenuClose}>
// <div>
// <DebouncedColorPicker
// color={settings.primaryColor}
// onChange={(color) => handleChange('primaryColor', color)}
// />
// </div>
// </ClickAwayListener>
// </Paper>
// </Fade>
// )}
// </Popper>
// </div>
// </div>
//       {/* Additional sections */}
//       </div>
//       </div>
    
//       {/* Additional elements */}
//       <Image className='rounded' height={100} width={100} alt={'Logo'} src={imgSrc} />
    
//       <div>
//         <Button component='label' variant='contained' htmlFor='website-logo-upload'>
//           Upload New Logo
//           <input
//             hidden
//             type='file'
//             value={fileInput}
//             accept='image/png, image/jpeg'
//             onChange={handleFileInputChange}
//             id='website-logo-upload'
//           />
//         </Button>
//         <Button onClick={handleImgReset} variant='tonal' color='secondary'>
//           Reset
//         </Button>
//       </div>
//     </ScrollWrapper>
//     );
//     };

// 'use client'

// // React Imports
// import { useRef, useState } from 'react'

// // Next Imports
// import { usePathname } from 'next/navigation'
// import Image from 'next/image'

// // MUI Imports
// import Chip from '@mui/material/Chip'
// import Fade from '@mui/material/Fade'

// import Paper from '@mui/material/Paper'
// import Popper from '@mui/material/Popper'
// import { useTheme } from '@mui/material/styles'
// import ClickAwayListener from '@mui/material/ClickAwayListener'
// import { Button, Container } from '@mui/material'


// // Third-party Imports
// import classnames from 'classnames'
// import { useDebounce, useMedia } from 'react-use'
// import { HexColorPicker, HexColorInput } from 'react-colorful'
// import PerfectScrollbar from 'react-perfect-scrollbar'

// // Config Imports
// import {primaryColorConfig, secondaryColorConfig, tertiaryColorConfig} from './styleColorConfig'

// // Hook Imports
// import { useSettings } from '@core/hooks/useSettings'

// // Style Imports
// import styles from './styles.module.css'

// const DebouncedColorPicker = props => {
//   // Props
//   const { settings, isColorFromPrimaryConfig, handleChange } = props

//   // States
//   const [debouncedColor, setDebouncedColor] = useState(settings.primaryColor ?? primaryColorConfig[0].main)

//   // Hooks
//   useDebounce(() => handleChange('primaryColor', debouncedColor), 200, [debouncedColor])

//   return (
//     <>
//       <HexColorPicker
//         color={!isColorFromPrimaryConfig ? settings.primaryColor ?? primaryColorConfig[0].main : '#eee'}
//         onChange={setDebouncedColor}
//       />
//       <HexColorInput
//         className={styles.colorInput}
//         color={!isColorFromPrimaryConfig ? settings.primaryColor ?? primaryColorConfig[0].main : '#eee'}
//         onChange={setDebouncedColor}
//         prefixed
//         placeholder='Type a color'
//       />
//     </>
//   )
// }

// const Customizer = () => {
//   // States
//   const [isOpen, setIsOpen] = useState(false)
  
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [imgSrc, setImgSrc] = useState('/images/logos/twitter.png')
//   const [fileInput, setFileInput] = useState('')
//   const [selectedFont, setSelectedFont] = useState('Arial')

//   // Refs
//   const anchorRef = useRef(null)

//   //font option
//   const fontOptions = ['Arial', 'Roboto', 'Helvetica']

//   // const handleFontChange = font => {
//   //   setSelectedFont(font)
//   // }

//   // Hooks
//   const theme = useTheme()
//   const pathName = usePathname()
//   const { settings, updateSettings, resetSettings, isSettingsChanged } = useSettings()

//   const isBelowLgScreen = useMedia('(max-width: 1200px)', false)
//   const isColorFromPrimaryConfig = primaryColorConfig.find(item => item.main === settings.primaryColor)
//   const ScrollWrapper = isBelowLgScreen ? 'div' : PerfectScrollbar

 
//   // Update Settings
//   const handleChange = (field, value) => {

//       // Update settings in cookie
//       updateSettings({ [field]: value })
//       console.log('update settings')

//     // }
//   }

//   const handleMenuClose = event => {    
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return
//     }

//     setIsMenuOpen(false)
//     console.log('setmenu close')
//   }

//   const handleImgReset = () => {
//     setImgSrc('/images/logos/twitter.png')
//     setFileInput('')

//     console.log('reset photo')
//   }

//   const handleFileInputChange = file => {
//     const reader = new FileReader()
//     const { files } = file.target

//     if (files && files.length !== 0) {
//       reader.onload = () => setImgSrc(reader.result)
//       reader.readAsDataURL(files[0])

//       if (reader.result !== null) {
//         setFileInput(reader.result)
//       }
//     }

//     console.log('file input')
//   }

//   return (
//     <ScrollWrapper>
//       <div
//         className={classnames('customizer-toggler flex items-center justify-center cursor-pointer', styles.toggler)}
//       >
//         <i className='tabler-settings text-[22px]' />
//       </div>
//       <div className={classnames('customizer-header flex items-center justify-between', styles.header)}>
//         <div className='flex flex-col'>
//           <h4 className={styles.customizerTitle}>Theme Customizer</h4>
//           <p className={styles.customizerSubtitle}>Customize & Preview in Real Time</p>
//         </div>
//         <div className='flex gap-4'>
//           <div onClick={resetSettings} className='relative flex cursor-pointer'>
//             <i className={classnames('tabler-refresh', styles.textPrimaryColor)} />
//             <div className={classnames(styles.dotStyles, { [styles.show]: isSettingsChanged })} />
//           </div>
//         </div>
//       </div>

//       <div className={classnames('customizer-body flex flex-col', styles.customizerBody)}>
//         <div className='theming-section flex flex-col gap-6'>
//           <Chip
//             label='Theming'
//             size='small'
//             color='primary'
//             variant='tonal'
//             className={classnames('self-start', styles.chip)}
//           />
//            <div className='flex flex-col gap-2'>
//             <p className='font-medium'>Primary Color</p>
//             <div className='flex items-center justify-between'>
//               {primaryColorConfig.map(item => (
//                 <div
//                   key={item.main}
//                   className={classnames(styles.primaryColorWrapper, {
//                     [styles.active]: settings.primaryColor === item.main
//                   })}
//                   onClick={() => handleChange('primaryColor', item.main)}
//                 >
//                   <div className={styles.primaryColor} style={{ backgroundColor: item.main }} />
//                 </div>
//               ))}
//               <div
//                 ref={anchorRef}
//                 className={classnames(styles.primaryColorWrapper, {
//                   [styles.active]: !isColorFromPrimaryConfig
//                 })}
//                 onClick={() => setIsMenuOpen(prev => !prev)}
//               >
//                 <div
//                   className={classnames(styles.primaryColor, 'flex items-center justify-center')}
//                   style={{
//                     backgroundColor: !isColorFromPrimaryConfig
//                       ? settings.primaryColor
//                       : 'var(--mui-palette-action-selected)',
//                     color: isColorFromPrimaryConfig
//                       ? 'var(--mui-palette-text-primary)'
//                       : 'var(--mui-palette-primary-contrastText)'
//                   }}
//                 >
//                   <i className='tabler-color-picker text-xl' />
//                 </div>
//               </div>
//               <Popper
//                 transition
//                 open={isMenuOpen}
//                 disablePortal
//                 anchorEl={anchorRef.current}
//                 placement='bottom-end'
//                 className='z-[1]'
//               >
//                 {({ TransitionProps }) => (
//                   <Fade {...TransitionProps} style={{ transformOrigin: 'right top' }}>
//                     <Paper elevation={6} className={styles.colorPopup}>
//                       <ClickAwayListener onClickAway={handleMenuClose}>
//                         <div>
//                           <DebouncedColorPicker
//                             settings={settings}
//                             isColorFromPrimaryConfig={isColorFromPrimaryConfig}
//                             handleChange={handleChange}
//                           />
//                         </div>
//                       </ClickAwayListener>
//                     </Paper>
//                   </Fade>
//                 )}
//               </Popper>
//             </div>
//           </div>
//           <div className='flex flex-col gap-2'>
//             <p className='font-medium'>Secondary Color</p>
//             <div className='flex items-center justify-between'>
//               {secondaryColorConfig.map(item => (
//                 <div
//                   key={item.main}
//                   className={classnames(styles.primaryColorWrapper, {
//                     [styles.active]: settings.primaryColor === item.main
//                   })}
//                   onClick={() => handleChange('primaryColor', item.main)}
//                 >
//                   <div className={styles.primaryColor} style={{ backgroundColor: item.main }} />
//                 </div>
//               ))}
//               <div
//                 ref={anchorRef}
//                 className={classnames(styles.primaryColorWrapper, {
//                   [styles.active]: !isColorFromPrimaryConfig
//                 })}
//                 onClick={() => setIsMenuOpen(prev => !prev)}
//               >
//                 <div
//                   className={classnames(styles.primaryColor, 'flex items-center justify-center')}
//                   style={{
//                     backgroundColor: !isColorFromPrimaryConfig
//                       ? settings.primaryColor
//                       : 'var(--mui-palette-action-selected)',
//                     color: isColorFromPrimaryConfig
//                       ? 'var(--mui-palette-text-primary)'
//                       : 'var(--mui-palette-primary-contrastText)'
//                   }}
//                 >
//                   <i className='tabler-color-picker text-xl' />
//                 </div>
//               </div>
//               <Popper
//                 transition
//                 open={isMenuOpen}
//                 disablePortal
//                 anchorEl={anchorRef.current}
//                 placement='bottom-end'
//                 className='z-[1]'
//               >
//                 {({ TransitionProps }) => (
//                   <Fade {...TransitionProps} style={{ transformOrigin: 'right top' }}>
//                     <Paper elevation={6} className={styles.colorPopup}>
//                       <ClickAwayListener onClickAway={handleMenuClose}>
//                         <div>
//                           <DebouncedColorPicker
//                             settings={settings}
//                             isColorFromPrimaryConfig={isColorFromPrimaryConfig}
//                             handleChange={handleChange}
//                           />
//                         </div>
//                       </ClickAwayListener>
//                     </Paper>
//                   </Fade>
//                 )}
//               </Popper>
//             </div>
//           </div>
//           <div className='flex flex-col gap-2'>
//             <p className='font-medium'>Tertiary Color</p>
//             <div className='flex items-center justify-between'>
//               {tertiaryColorConfig.map(item => (
//                 <div
//                   key={item.main}
//                   className={classnames(styles.primaryColorWrapper, {
//                     [styles.active]: settings.primaryColor === item.main
//                   })}
//                   onClick={() => handleChange('primaryColor', item.main)}
//                 >
//                   <div className={styles.primaryColor} style={{ backgroundColor: item.main }} />
//                 </div>
//               ))}
//               <div
//                 ref={anchorRef}
//                 className={classnames(styles.primaryColorWrapper, {
//                   [styles.active]: !isColorFromPrimaryConfig
//                 })}
//                 onClick={() => setIsMenuOpen(prev => !prev)}
//               >
//                 <div
//                   className={classnames(styles.primaryColor, 'flex items-center justify-center')}
//                   style={{
//                     backgroundColor: !isColorFromPrimaryConfig
//                       ? settings.primaryColor
//                       : 'var(--mui-palette-action-selected)',
//                     color: isColorFromPrimaryConfig
//                       ? 'var(--mui-palette-text-primary)'
//                       : 'var(--mui-palette-primary-contrastText)'
//                   }}
//                 >
//                   <i className='tabler-color-picker text-xl' />
//                 </div>
//               </div>
//               <Popper
//                 transition
//                 open={isMenuOpen}
//                 disablePortal
//                 anchorEl={anchorRef.current}
//                 placement='bottom-end'
//                 className='z-[1]'
//               >
//                 {({ TransitionProps }) => (
//                   <Fade {...TransitionProps} style={{ transformOrigin: 'right top' }}>
//                     <Paper elevation={6} className={styles.colorPopup}>
//                       <ClickAwayListener onClickAway={handleMenuClose}>
//                         <div>
//                           <DebouncedColorPicker
//                             settings={settings}
//                             isColorFromPrimaryConfig={isColorFromPrimaryConfig}
//                             handleChange={handleChange}
//                           />
//                         </div>
//                       </ClickAwayListener>
//                     </Paper>
//                   </Fade>
//                 )}
//               </Popper>
//             </div>
//           </div>
//         </div>
//       </div>

     
//       <div>
//         <Image className='rounded' height={100} width={100} alt={'Logo'} src={imgSrc} />

//         <div>
//           <Button component='label' variant='contained' htmlFor='website-logo-upload'>
//             Upload New Logo
//             <input
//               hidden
//               type='file'
//               value={fileInput}
//               accept='image/png, image/jpeg'
//               onChange={handleFileInputChange}
//               id='website-logo-upload'
//             />
//           </Button>
//           <Button onClick={handleImgReset} variant='tonal' color='secondary'>
//             Reset
//           </Button>
//         </div>
//       </div>
//       <div className='flex flex-col gap-2'>
//         <label htmlFor='fontDropdown' className='font-medium'>
//           Font
//         </label>
//         <select
//           id='fontDropdown'
//           value={selectedFont}
//           onChange={e => setSelectedFont(e.target.value)}
//           className='border rounded p-2'
//         >
//           {fontOptions.map(font => (
//             <option key={font} value={font}>
//               {font}
//             </option>
//           ))}
//         </select>
//       </div>
    

//       <Container className='mt-4' style={{ fontFamily: selectedFont }}>
//         <p>
//           This is a sample paragraph previews. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
//           doloremque ullam. Iusto magnam molestiae magni, numquam suscipit soluta dignissimos illo officiis voluptatum,
//           dolor libero sunt dolores repudiandae repellat cumque. Animi sapiente beatae rerum dolor ad sint, harum minus
//           veritatis doloremque atque magni inventore ut libero. Dolor aut ducimus sapiente maiores consectetur odit,
//           facere amet omnis consequuntur atque harum nobis sed expedita nihil aliquam nemo eveniet repellat laudantium
//           blanditiis vitae corrupti, molestiae vero. Dolores, maiores ab doloremque, dignissimos sunt nihil modi error
//           qui officiis molestiae natus, id delectus ipsa est at iure sed laborum. Atque aliquam laborum velit
//           consequuntur. Quo, nisi?
//         </p>
//       </Container>
//     </ScrollWrapper>
//   )
// }

// export default Customizer

