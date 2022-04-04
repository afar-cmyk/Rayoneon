import React from 'react'
import BackgroundSlider from 'react-background-slider'
import { Box } from '@mui/material'
import imagen1 from '../images/bck_img001.png'
import imagen2 from '../images/bck_img002.jpg'
import imagen3 from '../images/bck_img003.jpg'

export default function FondoIndex({ children }) {
  return (
    <>
      <Box id='seccion-principal' component='section' sx={{ ...overlayFondo }}>
        {children}
        <BackgroundSlider
          images={[imagen1, imagen2, imagen3]}
          duration={5}
          transition={0.3}
        />
      </Box>
    </>
  )
}

let overlayFondo = {
  background: 'linear-gradient(270deg, #041426e0 7.34%, #192940e0 80.71%)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto'
}
