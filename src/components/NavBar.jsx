import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@mui/material'

export default function NavBar() {
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <Link to='/'>Index</Link>
        <Link to='/Nosotros/'>Nosotros</Link>
        <Link to='/Productos/'>Productos</Link>
        <Link to='/Portafolio/'>Portafolio</Link>
        <Link to='/Contacto/'>Contacto</Link>
      </Box>
    </div>
  )
}
