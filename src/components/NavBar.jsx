import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@mui/material'

export default function NavBar(props) {
  const rutas = {
    indice: {
      ruta: '/',
      etiqueta: 'diluminar'
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
    textDecoration: 'none'
  }

  const inactivo = {
    color: '#CCCCCC',
    textDecoration: 'none',
    '&:hover': {
      color: '#F2F2F2'
    }
  }

  return (
    <div>
      <Box sx={{ ...barraPrincipal }}>
        {/* Logo que al presionarlo lleva al index */}
        <Box sx={{ ...logo }}>
          <Link
            to={indice.ruta}
            activeStyle={{ ...activo }}
            style={{ ...inactivo }}
          >
            {indice.etiqueta}
          </Link>
        </Box>
        {/* Contenedor con enlaces */}
        <Box sx={{ ...links }}>
          <Box>
            <Link to={productos.ruta} activeStyle={activo} style={inactivo}>
              {productos.etiqueta}
            </Link>
            <Box sx={{ ...unoPrueba }} />
          </Box>

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

const unoPrueba = {
  background: 'rgba(175, 40, 162, 1)',
  border: '1px solid rgba(175, 40, 162, 1)',
  boxShadow: '0px 0px 7px 4px rgba(175, 40, 162, 0.25)',
  boxSizing: 'border-box',
  width: '100%',
  height: '3px',
  borderRadius: '4px'
}

const logo = {
  fontFamily: `'Baloo 2'`,
  fontWeight: 600,
  fontSize: { xs: '21.3px', sm: '43px' },
  marginLeft: '75px',
  '&:hover': {
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
