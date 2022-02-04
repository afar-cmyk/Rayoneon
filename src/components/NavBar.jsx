import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@mui/material'

export default function NavBar(props) {
  const rutas = {
    indice: {
      ruta: '/',
      etiqueta: 'Index'
    },
    productos: {
      ruta: '/Productos/',
      etiqueta: 'Productos'
    },
    portafolio: {
      ruta: '/Portafolio/',
      etiqueta: 'Portafolio'
    },
    contacto: {
      ruta: '/Contacto/',
      etiqueta: 'Contacto'
    }
  }

  const { indice, productos, portafolio, contacto } = rutas

  const activo = {
    color: '#F2F2F2',
    textDecoration: 'none',
    fontWeight: '700'
  }
  const inactivo = { color: 'inherit', textDecoration: 'none' }

  return (
    <div>
      <Box sx={{ ...barraPrincipal }}>
        <Box sx={{ ...links }}>
          <Link to={indice.ruta} activeStyle={activo} style={inactivo}>
            {indice.etiqueta}
          </Link>
          <Link to={productos.ruta} activeStyle={activo} style={inactivo}>
            {productos.etiqueta}
          </Link>
          <Link to={portafolio.ruta} activeStyle={activo} style={inactivo}>
            {portafolio.etiqueta}
          </Link>
          <Link to={contacto.ruta} activeStyle={activo} style={inactivo}>
            {contacto.etiqueta}
          </Link>
        </Box>
      </Box>
    </div>
  )
}

const links = {
  fontFamily: `'Baloo 2'`,
  fontStyle: 'normal',
  fontWeight: 600,
  display: 'flex',
  flexDirection: 'row',
  gap: 3,
  color: '#CCCCCC'
}

const barraPrincipal = {
  height: '3.646vw',
  background: 'linear-gradient(270deg, #041426 7.34%, #192940 80.71%)'
}
