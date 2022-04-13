import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@mui/material'

export default function SeccionesBarra(props) {
  // Array con rutas que llegan desde el padre de este componente
  const rutasMenu = props.datos

  // Estilos para los enlaces
  const estiloActivo = {
    color: '#F2F2F2',
    textDecoration: 'none'
  }

  const estiloInactivo = {
    color: '#CCCCCC',
    textDecoration: 'none'
  }

  // Estilos del indicador
  const indicador = {
    background: '#fe005f',
    border: '1px solid #fe005f',
    boxShadow: '0px 0px 7px 4px rgba(175, 40, 162, 0.25)',
    boxSizing: 'border-box',
    width: '95%',
    height: '3px',
    borderRadius: '4px',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '-2px',
    animation: 'fadeIn 500ms',
    '@keyframes fadeIn': {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    }
  }

  return (
    <>
      {rutasMenu.map((datos, index) => {
        const { ruta, etiqueta, activo } = datos
        return (
          <Box
            key={index}
            className='contenedorPrincipal'
            sx={contenedorPrincipal}
          >
            <Box
              onClick={() => document.getElementById('link' + etiqueta).click()}
              className='fondoBoton'
              sx={fondoBoton}
            >
              <Link
                id={'link' + etiqueta}
                to={ruta}
                activeClassName='activo'
                className='enlace'
                activeStyle={estiloActivo}
                style={estiloInactivo}
              >
                {etiqueta}
              </Link>
            </Box>
            <Box
              className='indicador'
              sx={{ ...indicador, display: activo ? 'flex' : 'none' }}
            />
          </Box>
        )
      })}
    </>
  )
}

const contenedorPrincipal = {
  display: { xs: 'none', sm: 'flex' },
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'space-between',
  alignItems: 'center',

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

const fondoBoton = {
  backgroundColor: '#FFFFFF00',
  width: '100%',
  borderRadius: '6px',
  padding: '2px',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center'
}
