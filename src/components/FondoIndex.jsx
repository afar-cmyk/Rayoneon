import React from 'react'
import BackgroundSlider from 'react-background-slider'
import { Box } from '@mui/material'
import imagen1 from '../images/bck_img001.png'
import imagen2 from '../images/bck_img002.jpg'
import imagen3 from '../images/bck_img003.jpg'

export default function FondoIndex({ children }) {
  return (
    <>
      <Box component='div' style={{ ...overlayFondo }}>
        {children}
      </Box>
      <BackgroundSlider
        style={{
          ...overlayFondo
        }}
        images={[imagen1, imagen2, imagen3]}
        duration={5}
        transition={1}
      />
    </>
  )
}

let overlayFondo = {
  background: 'linear-gradient(270deg, #041426d5 7.34%, #192940d5 80.71%)',
  height: '100vh'
}
