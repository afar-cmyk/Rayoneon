import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@mui/material'
import SeccionesBarra from '../navigation/SeccionesBarra'

export default function NavBar(props) {
  // Arreglo con los enlaces que tendra la barra de navegación
  const rutasArray = [
    {
      ruta: '/Productos/',
      etiqueta: 'Productos'
    },
    {
      ruta: '/Portafolio/',
      etiqueta: 'Portafolio'
    },
    {
      ruta: '/Contacto/',
      etiqueta: 'Contacto'
    }
  ]

  // Estilos para los enlaces
  const activo = {
    color: '#F2F2F2',
    textDecoration: 'none'
  }

  const inactivo = {
    color: '#CCCCCC',
    textDecoration: 'none'
  }

  return (
    <div>
      <Box sx={{ ...barraPrincipal }}>
        {/* Logo que al presionarlo lleva al index */}
        <Box sx={{ ...logo }}>
          <Link to='/' activeStyle={{ ...activo }} style={{ ...inactivo }}>
            diluminar
          </Link>
        </Box>
        {/* Contenedor con enlaces */}
        <Box sx={{ ...links }}>
          <SeccionesBarra rutas={rutasArray} />
        </Box>
      </Box>
    </div>
  )
}

const logo = {
  fontFamily: `'Baloo 2'`,
  fontWeight: 600,
  fontSize: { xs: '21.3px', sm: '43px' },
  marginLeft: '75px',
  ':hover': {
    color: 'yellow'
  }
}

const links = {
  fontFamily: 'Assistant',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '18px',
  display: 'flex',
  flexDirection: 'row',
  gap: 3,
  color: '#CCCCCC',
  marginRight: '75px'
}

const barraPrincipal = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  height: '68px',
  width: '100vw',
  background: 'linear-gradient(270deg, #041426 7.34%, #192940 80.71%)'
}
