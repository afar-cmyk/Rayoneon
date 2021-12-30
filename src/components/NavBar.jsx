import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@mui/material'

export default function NavBar(props) {
  const rutas = {
    indice: {
      ruta: '/',
      etiqueta: 'Index'
    },
    nosotros: {
      ruta: '/Nosotros/',
      etiqueta: 'Nosotros'
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

  const { indice, nosotros, productos, portafolio, contacto } = rutas

  const activo = {
    color: 'red',
    textDecoration: 'none',
    fontWeight: '700'
  }
  const inactivo = { color: 'inherit', textDecoration: 'none' }

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <Link to={indice.ruta} activeStyle={activo} style={inactivo}>
          {indice.etiqueta}
        </Link>
        <Link to={nosotros.ruta} activeStyle={activo} style={inactivo}>
          {nosotros.etiqueta}
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
    </div>
  )
}
