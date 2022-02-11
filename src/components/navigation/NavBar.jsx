import React from 'react'
import { Link } from 'gatsby'
import { Box } from '@mui/material'
import SeccionesBarra from '../navigation/SeccionesBarra'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
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
    marginTop: theme.spacing(0.5),
    minWidth: 120,
    background: '#192940',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '1px 0'
    }
  }
}))

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

  const [checked, setChecked] = React.useState(false)

  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  const containerRef = React.useRef(null)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
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
          <MenuRoundedIcon
            checked={checked}
            onClick={handleClick}
            className='menuHambuerguesa'
            ref={containerRef}
            sx={{
              width: '1.2em',
              height: '1.2em',
              color: '#CCCCCC',
              '&:hover': { color: '#f2f2f2' },
              display: { xs: 'flex', sm: 'none' },
              cursor: 'pointer'
            }}
          />
          <StyledMenu
            id='demo-customized-menu'
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button'
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem
              sx={{
                '&:hover': {
                  textDecoration: 'none',
                  backgroundColor: 'rgb(255 255 255 / 8%)'
                }
              }}
              onClick={handleClose}
              disableRipple
            >
              <Link
                to='/Productos/'
                activeClassName='activo'
                className='logo'
                activeStyle={{ ...estiloActivo }}
                style={{ ...estiloInactivo }}
              >
                Productos
              </Link>
            </MenuItem>
            <MenuItem
              sx={{
                '&:hover': {
                  textDecoration: 'none',
                  backgroundColor: 'rgb(255 255 255 / 8%)'
                }
              }}
              onClick={handleClose}
              disableRipple
            >
              <Link
                to='/Portafolio/'
                activeClassName='activo'
                className='logo'
                activeStyle={{ ...estiloActivo }}
                style={{ ...estiloInactivo }}
              >
                Portafolio
              </Link>
            </MenuItem>
            <MenuItem
              sx={{
                '&:hover': {
                  textDecoration: 'none',
                  backgroundColor: 'rgb(255 255 255 / 8%)'
                }
              }}
              onClick={handleClose}
              disableRipple
            >
              <Link
                to='/Contacto/'
                activeClassName='activo'
                className='logo'
                activeStyle={{ ...estiloActivo }}
                style={{ ...estiloInactivo }}
              >
                Contacto
              </Link>
            </MenuItem>
          </StyledMenu>
        </Box>
      </Box>
    </div>
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
