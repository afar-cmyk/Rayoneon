import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@mui/material'

export default function SeccionesBarra(props) {
  // Array con rutas que llegan desde el padre de este componente
  const rutasMenu = props.rutas

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
    <>
      {rutasMenu.map((datos, index) => {
        const { ruta, etiqueta } = datos
        return (
          <Box
            key={index}
            className='contenedorPrincipal'
            sx={{ ...contenedorPrincipal }}
          >
            <Box className='fondoBoton' sx={{ ...fondoBoton }}>
              <Link
                to={ruta}
                activeClassName='activo'
                className='enlace'
                activeStyle={activo}
                style={inactivo}
              >
                {etiqueta}
              </Link>
              <Box className='indicador' sx={{ ...indicador }} />
            </Box>
          </Box>
        )
      })}
    </>
  )
}

const contenedorPrincipal = {
  display: 'flex',

  '&:active .fondoBoton': {
    backgroundColor: '#FFFFFF1A'
  },
  '&:active .indicador': {
    background: '#E61ED3',
    border: '1px solid #E61ED3'
  },
  '&:hover .activo': {
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
}

const fondoBoton = {
  backgroundColor: '#FFFFFF00',
  width: '100%',
  borderRadius: '6px',
  padding: '6px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1px'
}
