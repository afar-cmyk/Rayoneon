import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseIcon from '@mui/icons-material/Close'

export default function IconoMenuResponsive(props) {
  const [menuActivo, setmenuActivo] = React.useState(false)

  return (
    <MenuRoundedIcon
      component={menuActivo ? CloseIcon : MenuRoundedIcon}
      id='botonResponsive'
      sx={{
        width: '1.2em',
        height: '1.2em',
        color: '#CCCCCC',
        '&:hover': { color: '#f2f2f2' },
        display: { xs: 'flex', sm: 'none' },
        cursor: 'pointer'
      }}
    />
  )
}
