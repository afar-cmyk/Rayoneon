import React from 'react'
import { Link } from 'gatsby'
import { MenuRounded, Close } from '@mui/icons-material'
import { Menu, MenuItem, useMediaQuery, IconButton } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'

// Componente con estilos para el menu responsive
const MenuResponsive = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 4,
    marginTop: theme.spacing(0.9),
    minWidth: 130,
    background: '#25282E',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '1px 0'
    }
  }
}))

export default function SeccionesResponsive(props) {
  // Array con rutas que llegan desde el padre de este componente
  const rutasMenu = props.datos

  // Estilos para los enlaces
  const estiloActivo = {
    color: '#F2F2F2',
    textDecoration: 'none',
    fontFamily: 'Assistant',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px'
  }

  const estiloInactivo = {
    color: '#CCCCCC',
    textDecoration: 'none',
    fontFamily: 'Assistant',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px'
  }

  // Manejador de estados y comportamiento del menu responsive
  const [elementoBase, setElementoBase] = React.useState(null)
  const menuAbierto = Boolean(elementoBase)
  const activadorMenu = (e) => {
    e.preventDefault()
    setElementoBase(e.currentTarget)
  }
  const menuCerrado = () => {
    setElementoBase(null)
  }

  // Cierra el menu en caso de que la pantalla se haga grande mientras el menu esta abierto
  const theme = useTheme()
  const paginaGrande = useMediaQuery(theme.breakpoints.up('sm'))

  React.useEffect(() => {
    if (paginaGrande === true) {
      menuCerrado()
      setElementoBase(false)
    }
  }, [paginaGrande])

  return (
    <>
      <IconButton
        id='boton-menu-responsive'
        sx={{
          // width: '1.2em',
          // height: '1.2em',
          padding: 0,
          color: '#CCCCCC',
          '&:hover': { color: '#f2f2f2' },
          display: { xs: 'flex', sm: 'none' },
          cursor: 'pointer'
        }}
        aria-controls='boton-menu'
        onClick={activadorMenu}
      >
        {menuAbierto ? (
          <Close
            sx={{ fontSize: '1.9rem', color: '#f2f2f2', cursor: 'pointer' }}
          />
        ) : (
          <MenuRounded sx={{ fontSize: '1.9rem', color: '#cccccc' }} />
        )}
      </IconButton>
      <MenuResponsive
        id='menu-responsive'
        open={menuAbierto}
        anchorEl={elementoBase}
        onClose={() => {
          setElementoBase(!elementoBase)
          menuCerrado()
        }}
        sx={{
          marginTop: '27px',
          left: '-7px',
          display: { xs: 'flex', sm: 'none' }
        }}
        MenuListProps={{
          'aria-labelledby': 'boton-menu-responsive'
        }}
      >
        {rutasMenu.map((datos, index) => {
          const { ruta, etiqueta, activo } = datos
          return (
            <MenuItem
              key={index}
              sx={{
                ...contenedorPrincipal,
                border: activo ? '1px solid #44c6e9' : 'none',
                boxShadow: activo ? '0px 0px 7px 1px #44c6e95c' : 'none',
                boxSizing: 'border-box',
                borderRadius: 1,
                '&:hover': {
                  textDecoration: 'none',
                  backgroundColor: 'rgb(255 255 255 / 8%)'
                },
                '&:hover .activo': {
                  color: '#FFFFFF !important'
                },
                '&:hover .enlace': {
                  color: '#F2F2F2 !important'
                },
                cursor: 'pointer'
              }}
              onClick={() => {
                document.getElementById('link-' + etiqueta).click()
                menuCerrado()
              }}
              disableRipple
            >
              <Link
                id={'link-' + etiqueta}
                to={ruta}
                activeClassName='activo'
                className='enlace'
                activeStyle={estiloActivo}
                style={estiloInactivo}
              >
                {etiqueta}
              </Link>
            </MenuItem>
          )
        })}
      </MenuResponsive>
    </>
  )
}

const contenedorPrincipal = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover .activo': {
    color: '#FFFFFF !important'
  },
  '&:hover .enlace': {
    color: '#F2F2F2 !important'
  },
  cursor: 'pointer'
}
