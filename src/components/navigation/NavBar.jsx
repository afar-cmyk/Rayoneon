import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@mui/material'
import SeccionesBarra from '../navigation/SeccionesBarra'

export default function NavBar(props) {
  const estado = props.estado

  // Arreglo con los enlaces que tendra la barra de navegación
  const rutasArray = [
    {
      ruta: '/Productos/',
      etiqueta: 'Productos',
      activo: false
    },
    {
      ruta: '/Portafolio/',
      etiqueta: 'Portafolio',
      activo: false
    },
    {
      ruta: '/Contacto/',
      etiqueta: 'Contacto',
      activo: false
    }
  ]

  // Comprueba que pagina se ecuentra activa y asigna el estado en el arrego
  if (estado === 0) {
    rutasArray[0].activo = true
  } else if (estado === 1) {
    rutasArray[1].activo = true
  } else if (estado === 2) {
    rutasArray[2].activo = true
  }

  // Estilos para los enlaces
  const estiloActivo = {
    color: '#F2F2F2',
    textDecoration: 'none'
  }

  const estiloInactivo = {
    color: '#CCCCCC',
    textDecoration: 'none'
  }

  return (
    <div>
      <Box sx={{ ...barraPrincipal }}>
        {/* Logo que al presionarlo lleva al index */}
        <Box sx={{ ...contenedorLogo }}>
          <Link
            to='/'
            activeClassName='activo'
            className='logo'
            activeStyle={{ ...estiloActivo }}
            style={{ ...estiloInactivo }}
          >
            diluminar
          </Link>
        </Box>
        {/* Contenedor con enlaces */}
        <Box sx={{ ...links }}>
          <SeccionesBarra datos={rutasArray} />
        </Box>
      </Box>
    </div>
  )
}

const contenedorLogo = {
  fontFamily: `'Baloo 2'`,
  fontWeight: 600,
  fontSize: { xs: '21.3px', sm: '43px' },
  marginLeft: '75px',
  '&:hover .logo': { color: '#F2F2F2 !important' },
  '&:hover .logo.activo': { color: '#CCCCCC !important' }
}

const links = {
  fontFamily: 'Assistant',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '18px',
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
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
