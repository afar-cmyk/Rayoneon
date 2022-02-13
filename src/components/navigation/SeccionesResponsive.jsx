import React from 'react'
import { Link } from 'gatsby'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseIcon from '@mui/icons-material/Close'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import IconoMenuResponsive from './IconoMenuResponsive'
import IconButton from '@mui/material/IconButton'

const StyledMenu = styled((props) => (
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
    marginTop: theme.spacing(0.5),
    minWidth: 100,
    background: '#192940',
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

  const containerRef = React.useRef(null)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const [clicked, setClicked] = React.useState()

  React.useEffect(() => {
    if (matches === true) {
      handleClose()
      setClicked(false)
    }
  }, [matches])

  return (
    <>
      {/* <MenuRoundedIcon
        component={open ? CloseIcon : MenuRoundedIcon}
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
      /> */}
      <IconButton
        sx={{
          width: '1.2em',
          height: '1.2em',
          color: '#CCCCCC',
          '&:hover': { color: '#f2f2f2' },
          display: { xs: 'flex', sm: 'none' },
          cursor: 'pointer'
        }}
        onClick={() => setClicked(!clicked)}
        anchorel={anchorEl}
      >
        {clicked ? (
          <CloseIcon />
        ) : (
          <MenuRoundedIcon onClick={handleClick} anchorel={anchorEl} />
        )}
      </IconButton>
      <StyledMenu
        id='demo-customized-menu'
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button'
        }}
        open={open}
        onClose={() => {
          setClicked(!clicked)
          handleClose()
        }}
        sx={{
          marginTop: '30px',
          left: '-25px',
          display: { xs: 'flex', sm: 'none' }
        }}
      >
        {rutasMenu.map((datos, index) => {
          const { ruta, etiqueta, activo } = datos
          return (
            <MenuItem
              key={index}
              sx={{
                ...contenedorPrincipal,
                border: activo ? '1px solid rgba(175, 40, 162, 1)' : 'none',
                boxShadow: activo
                  ? '0px 0px 7px 4px rgba(175, 40, 162, 0.25)'
                  : 'none',
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
                document.getElementById('link' + etiqueta).click()
                handleClose()
              }}
              disableRipple
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
            </MenuItem>
          )
        })}
      </StyledMenu>
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
