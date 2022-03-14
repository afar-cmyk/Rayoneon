import React from 'react'
import { Box } from '@mui/material'
import InlineSVG from './InlineSVG'
import '../styles/global.css'

const ContactIcon = () => {
  return (
    <Box
      component='div'
      className='icono-contacto'
      sx={{ ...contenedorContacto }}
    >
      <InlineSVG icono='whatsapp' tamaño='48' />
      <p className='texto-contacto'>¡Contactenos!</p>
    </Box>
  )
}

const contenedorContacto = {
  '&:hover .icono-svg-whatsapp': { fill: '#25d366 !important' },
  '&:hover .texto-contacto': { color: '#f2f2f2 !important' }
}

export default ContactIcon
