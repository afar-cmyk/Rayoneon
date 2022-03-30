import React from 'react'
import { Button } from '@mui/material'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import ModalContext from './ModalContext'

const ContenedorNavegacion = ({ children }) => {
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
        <ArrowLeftOutlined sx={{ ...botonesNavegacion }} />
      </Button>
      {children}
      <Button
        onClick={siguientePagina}
        aria-label='siguiente pagina'
        component='button'
        sx={{ width: '40px' }}
      >
        <ArrowRightOutlined sx={{ ...botonesNavegacion }} />
      </Button>
    </div>
  )
}

export default ContenedorNavegacion

const botonesNavegacion = {
  color: '#A7E5E5',
  fontSize: '5.5rem',
  '&:hover': {
    color: '#29E8E8'
  }
}
