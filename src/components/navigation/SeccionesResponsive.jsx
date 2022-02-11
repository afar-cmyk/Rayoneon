import React from 'react'
import { Link } from 'gatsby'
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
    textDecoration: 'none'
  }

  const estiloInactivo = {
    color: '#CCCCCC',
    textDecoration: 'none'
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

  if (document.getElementById('demo-customized-menu') === 'display="none"') {
    console.log('escondido')
  } else {
    console.log('no funciono')
  }

  return (
    <>
      <MenuRoundedIcon
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
        sx={{ display: { xs: 'flex', sm: 'none' } }}
      >
        {rutasMenu.map((datos, index) => {
          const { ruta, etiqueta, activo } = datos
          return (
            <MenuItem
              key={index}
              sx={{
                border: activo ? '1px solid rgba(175, 40, 162, 1)' : 'none',
                borderRadius: 1,
                '&:hover': {
                  textDecoration: 'none',
                  backgroundColor: 'rgb(255 255 255 / 8%)'
                }
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
