import React from 'react'
import Logo from '../../images/Logo'
import bck_vid from '../../static/videos/backgroundVideo.webm'
import { Box } from '@mui/material'

const SeccionPrincipal = () => {
  return (
    <>
      <Box
        component='section'
        className='seccion-principal'
        sx={{ ...seccion }}
      >
        <video className='video-fondo' autoPlay loop muted src={bck_vid} />
        <Box sx={{ ...logoSVG }}>
          <Logo elemento='completo' />
        </Box>
        <Box
          component='div'
          className='contenido-principal'
          sx={{ ...contenido }}
        >
          <Box component='h1' sx={{ ...h1 }}>
            Avisos de Neón
          </Box>
          <Box component='p' sx={{ ...paragraph }}>
            Somos una empresa <strong>100% colombiana</strong>, dedicada a la{' '}
            <strong>fabricación de material publicitario</strong>
            {' ('}neón, avisos en acrílico, letras 3D, material p.o.p{').'}
          </Box>
          <br />
          <Box component='p' sx={{ ...paragraph }}>
            Nuestra razón de ser es proporcionarle un servicio puntual y de{' '}
            <strong>excelente calidad</strong> siempre a tiempo y en el lugar
            donde nos indique.
          </Box>
        </Box>
      </Box>
    </>
  )
}

let seccion = {
  gap: {
    xs: '70px',
    sm: '200px'
  },
  flexDirection: {
    xs: 'column',
    sm: 'row'
  },
  px: {
    xs: '37.5px',
    sm: '96px'
  }
}

let contenido = {
  width: {
    xs: 'unset',
    sm: '408px'
  },
  m: 0
  // ml: {
  //   xs: '0',
  //   sm: '37px'
  // },
  // mb: {
  //   xs: '0',
  //   sm: '35px'
  // }
}

let h1 = {
  fontSize: {
    xs: '53px',
    sm: '61px'
  }
}

let paragraph = {
  fontSize: {
    xs: '17px',
    sm: '19px'
  }
}

let logoSVG = {
  '& .logo-completo': {
    width: { xs: '80vw', sm: '40vw' }
  }
}

export default SeccionPrincipal
