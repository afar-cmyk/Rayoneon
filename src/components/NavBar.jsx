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

  let barraUno = false
  let barraDos = false
  let barraTres = false
  let barraCuatro = false
  let barraCinco = false

  if (props.estado === 1) {
    barraUno = true
  }
  if (props.estado === 2) {
    barraDos = true
  }
  if (props.estado === 3) {
    barraTres = true
  }
  if (props.estado === 4) {
    barraCuatro = true
  }
  if (props.estado === 5) {
    barraCinco = true
  }

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <Link to={indice.ruta} style={barraUno ? activo : inactivo}>
          {indice.etiqueta}
        </Link>
        <Link to={nosotros.ruta} style={barraDos ? activo : inactivo}>
          {nosotros.etiqueta}
        </Link>
        <Link to={productos.ruta} style={barraTres ? activo : inactivo}>
          {productos.etiqueta}
        </Link>
        <Link to={portafolio.ruta} style={barraCuatro ? activo : inactivo}>
          {portafolio.etiqueta}
        </Link>
        <Link to={contacto.ruta} style={barraCinco ? activo : inactivo}>
          {contacto.etiqueta}
        </Link>
      </Box>
    </div>
  )
}
