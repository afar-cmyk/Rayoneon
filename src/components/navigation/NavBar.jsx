import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@mui/material'
import SeccionesBarra from '../navigation/SeccionesBarra'
import SeccionesResponsive from './SeccionesResponsive'
import Logo from '../../images/Logo'

export default function NavBar(props) {
  const estado = props.estado

  // Arreglo con los enlaces que tiene la barra de navegación
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
    textDecoration: 'none',
    display: 'flex'
  }

  const estiloInactivo = {
    color: '#CCCCCC',
    textDecoration: 'none',
    display: 'flex'
  }

  return (
    <>
      <Box component='header' sx={{ ...barraPrincipal }}>
        {/* Logo que al presionarlo lleva al index */}
        <Box sx={{ ...contenedorLogo }}>
          <Link
            to='/'
            activeClassName='activo'
            className='logo'
            activeStyle={{ ...estiloActivo }}
            style={{ ...estiloInactivo }}
          >
            <Logo elemento='barra' />
          </Link>
        </Box>
        {/* Contenedor con enlaces */}
        <Box sx={{ ...links }}>
          <SeccionesBarra component='nav' datos={rutasArray} />
          <SeccionesResponsive component='nav' datos={rutasArray} />
        </Box>
      </Box>
    </>
  )
}

const contenedorLogo = {
  fontFamily: `'Baloo 2'`,
  fontWeight: 600,
  fontSize: { xs: '26px', sm: '43px' },
  marginLeft: { xs: '37.5px', md: '75px' },
  '&:hover .logo': { color: '#F2F2F2 !important' },
  '&:hover .logo.activo': { color: '#CCCCCC !important' }
}

const links = {
  fontFamily: 'Assistant',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '18px',
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  color: '#CCCCCC',
  marginRight: { xs: '37.5px', md: '75px' }
}

const barraPrincipal = {
  position: 'sticky',
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  height: '68px',
  width: '100vw',
  boxSizing: 'border-box',
  transition: 'background .3s',
  background: '#0E0F12',
  top: 0,
  margin: 0,
  border: 0,
  zIndex: 9
}
