import React from 'react'
import { Box } from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'

export default function BackgroundImages({ children }) {
  return (
    <>
      <Box
        component='div'
        sx={{
          backgroundColor: '#041426',
          width: '100vw',
          height: '100vh'
        }}
      >
        {children}
        <StaticImage
          alt='Imagen de fondo'
          placeholder='blurred'
          layout='fullWidth'
          src={'../images/bck_img001.png'}
        />
      </Box>
    </>
  )
}
