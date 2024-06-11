'use client'

// React Imports
import { useRef, useState } from 'react'

// Next Imports
import Image from 'next/image'

// import { useSession } from 'next-auth/react'

// MUI Imports
import Chip from '@mui/material/Chip'

import { Button, Container } from '@mui/material'

// Third-party Imports
import classnames from 'classnames'
import { useMedia } from 'react-use'

import PerfectScrollbar from 'react-perfect-scrollbar'

// import DebouncedColorPicker from './DebouncedColorPicker'

import ColorPickerSection from './ColorPickerSection'
import CardPreview from "./CardPreview"

// Style Imports
import styles from './styles.module.css'




const Customizer = () => {

  // const {data: session} = useSession()
  
  // console.log({session});

  const [imgSrc, setImgSrc] = useState('/images/logos/twitter.png')
  const [fileInput, setFileInput] = useState('')
  const [selectedFont, setSelectedFont] = useState('Arial')

  const [primaryColor, setPrimaryColor] = useState('#95a829')
  const [secondaryColor, setSecondaryColor] = useState('#000000')
  const [tertiaryColor, setTertiaryColor] = useState('#ffffff')
  const [titleColor, setTitleColor] = useState('#ffffff')
  const [bodyColor, setBodyColor] = useState('#ffffff')

  // const [color, setColor] = useState('#ffffff')

  const fontOptions = ['Arial', 'Roboto', 'Verdana']
  const anchorRef = useRef(null)
  const isBelowLgScreen = useMedia('(max-width: 1200px)', false)
  const ScrollWrapper = isBelowLgScreen ? 'div' : PerfectScrollbar

  const handleChange = (field, value) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [field]: value
    }))

    // Add your code to update the settings in the database here.
  }

  const handleImgReset = () => {
    setImgSrc('/images/logos/twitter.png')
    setFileInput('')
  }

  const handleFileInputChange = file => {
    const reader = new FileReader()
    const { files } = file.target

    if (files && files.length !== 0) {
      const selectedFile = files[0]

      if (selectedFile.type.startsWith('image/')) {
        reader.onload = () => setImgSrc(reader.result)
        reader.readAsDataURL(selectedFile)

        if (reader.result !== null) {
          setFileInput(reader.result)
        }
      } else {
        // Handle error: selected file is not an image
        console.error('Selected file is not an image')
      }
    }
  }

  return (
    <ScrollWrapper>
      <div className='flex flex-col'>
        <h4 className={styles.customizerTitle}>Theme Customizer</h4>
        <p className={styles.customizerSubtitle}>Customize & Preview in Real Time</p>
        <Chip
            label='Theming'
            size='small'
            color='primary'
            variant='tonal'
            className={classnames('self-start', styles.chip)}
          />
      </div>

      <div className={classnames('customizer-body flex flex-col gap-6', styles.customizerBody)}>
 
         

          <div className='flex gap-6'>
            <ColorPickerSection title='Primary Color' color={primaryColor} setColor={setPrimaryColor} />
            <ColorPickerSection title='Secondary Color' color={secondaryColor} setColor={setSecondaryColor} />
            <ColorPickerSection title='Tertiary Color' color={tertiaryColor} setColor={setTertiaryColor} />
            <ColorPickerSection title='Title Color' color={titleColor} setColor={setTitleColor} />
            <ColorPickerSection title='Body Color' color={bodyColor} setColor={setBodyColor} />
          </div>
<div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='fontDropdown' className='font-medium'>
              Font
            </label>
            <select
              id='fontDropdown'
              value={selectedFont}
              onChange={e => setSelectedFont(e.target.value)}
              className='border rounded p-2'
            >
              {fontOptions.map(font => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </div>

          <Container className='mt-4' style={{ fontFamily: selectedFont }}>
            <p>
              This is a sample paragraph preview. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
              doloremque ullam. Iusto magnam molestiae magni, numquam suscipit soluta dignissimos illo officiis
              voluptatum, dolor libero sunt dolores repudiandae repellat cumque. Animi sapiente beatae rerum dolor ad
            </p>
          </Container>
          </div>
     
    

      <div>
        <Image className='rounded' height={100} width={100} alt={'Logo'} src={imgSrc} />

        <div className="flex gap-x-3">
          <Button component='label' variant='contained' htmlFor='website-logo-upload'>
            Upload New Logo
            <input
              hidden
              type='file'
              value={fileInput}
              accept='image/png, image/jpeg'
              onChange={handleFileInputChange}
              id='website-logo-upload'
            />
          </Button>
          <Button onClick={handleImgReset} variant='tonal' color='secondary'>
            Reset
          </Button>
        </div>
      </div>
    
    <div className='border h-[15rem] md:w-1/2 sm:w-full flex flex-col rounded-xl' style={{background:tertiaryColor,}}>
      <header className='w-full h-6 text-[15px] text-center text-[#212121] rounded-t-xl m-0 p-0' style={{background:primaryColor,fontFamily: selectedFont}}>Get Additional ₹100 OFF on Online Payment</header>
  <nav className='w-full h-10 flex justify-between items-center px-3'>
    <div className="">
      <Image className='rounded-full mt-1' height={28} width={28} alt={'Logo'} src={imgSrc} />
      </div>
    <div className='flex gap-4' style={{ fontFamily: selectedFont }}>
      <p>Home</p>
      <p>Product</p>
      <p>Contact</p>
    </div>
    <div style={{ fontFamily: selectedFont }} className='flex gap-1'>
      Account 
      <> 
        <i className='tabler-shopping-cart-filled'/>
      </>
      </div>
  </nav>

 
  <section className='flex gap-3 p-2'>
    <CardPreview 
    color={secondaryColor} 
    setColor={setSecondaryColor} 
    fontSelect={selectedFont} 
    setFontSelect={setSelectedFont} 
    titleColor={titleColor} 
    setTitleColor={setTitleColor} 
    bodyColor={bodyColor} 
    setBodyColor={setBodyColor}
    />
    <CardPreview color={secondaryColor} setColor={setSecondaryColor} fontSelect={selectedFont} setFontSelect={setSelectedFont}/>
    <CardPreview color={secondaryColor} setColor={setSecondaryColor} fontSelect={selectedFont} setFontSelect={setSelectedFont}/>
  </section>
</div>
      </div>
    </ScrollWrapper>
  )
}

export default Customizer
