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
    textDecoration: 'none'
  }

  // Crear un componente que contenga a los links y tenga el comportamiento de activo y hover

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
          <Box className='padre' sx={{ ...padre }}>
            <Box className='fondoBoton' sx={{ ...fondoBoton }}>
              <Link
                to={productos.ruta}
                activeClassName='enlaceActivo'
                className='enlace'
                activeStyle={activo}
                style={inactivo}
              >
                {productos.etiqueta}
              </Link>
              <Box className='indicador' sx={{ ...indicador }} />
            </Box>
          </Box>

          <Box className='padre' sx={{ ...padre }}>
            <Box className='fondoBoton' sx={{ ...fondoBoton }}>
              <Link
                to={portafolio.ruta}
                activeClassName='enlaceActivo'
                className='enlace'
                activeStyle={activo}
                style={inactivo}
              >
                {portafolio.etiqueta}
              </Link>
              {/* <Box className='indicador' sx={{ ...indicador }} /> */}
            </Box>
          </Box>

          <SeccionesBarra rutas={rutas}></SeccionesBarra>

          <Link to={productos.ruta} activeStyle={activo} style={inactivo}>
            {productos.etiqueta}
          </Link>
          <Link to={portafolio.ruta} activeStyle={activo} style={inactivo}>
            {portafolio.etiqueta}
          </Link>
          <Link to={contacto.ruta} activeStyle={activo} style={{ ...inactivo }}>
            {contacto.etiqueta}
          </Link>
        </Box>
      </Box>
    </div>
  )
}

const SeccionesBarra = (props) => {
  const rutasMenu = props.rutas
  let variable = rutasMenu[0]
  console.log(Object.keys(rutasMenu.contacto))

  // const [count, setCount] = React.useState(0)
  return (
    <>
      <div>{variable}</div>
    </>
  )
}

const padre = {
  display: 'flex',

  '&:active .fondoBoton': {
    backgroundColor: '#FFFFFF1A'
  },
  '&:active .indicador': {
    background: '#E61ED3',
    border: '1px solid #E61ED3'
  },
  '&:hover .enlaceActivo': {
    color: '#FFFFFF !important'
  },
  '&:hover .enlace': {
    color: '#F2F2F2 !important'
  },
  cursor: 'pointer'
}

const indicador = {
  background: 'rgba(175, 40, 162, 1)',
  border: '1px solid rgba(175, 40, 162, 1)',
  boxShadow: '0px 0px 7px 4px rgba(175, 40, 162, 0.25)',
  boxSizing: 'border-box',
  width: '100%',
  height: '3px',
  borderRadius: '4px'
  // ':active': {
  //   background: '#E61ED3',
  //   border: '1px solid #E61ED3'
  // }
}

const fondoBoton = {
  backgroundColor: '#FFFFFF00',
  width: '100%',
  borderRadius: '6px',
  padding: '6px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1px'
  // ':active': { backgroundColor: '#FFFFFF1A' }
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
