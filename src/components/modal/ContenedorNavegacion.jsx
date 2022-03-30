import React from 'react'
import Button from '@mui/material/Button'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined'
import ModalContext from './ModalContext'

export default ContenedorNavegacion = ({ children }) => {
  const { anteriorPagina, siguientePagina } = React.useContext(ModalContext)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        gap: '20px'
      }}
    >
      <Button
        onClick={anteriorPagina}
        aria-label='anterior pagina'
        component='button'
      >
        <ArrowLeftOutlinedIcon sx={{ ...botonesNavegacion }} />
      </Button>
      {prueba}
      {children}
      <Button
        onClick={siguientePagina}
        aria-label='siguiente pagina'
        component='button'
        sx={{ width: '40px' }}
      >
        <ArrowRightOutlinedIcon sx={{ ...botonesNavegacion }} />
      </Button>
    </div>
  )
}

const botonesNavegacion = {
  color: '#A7E5E5',
  fontSize: '5.5rem',
  '&:hover': {
    color: '#29E8E8'
  }
}
