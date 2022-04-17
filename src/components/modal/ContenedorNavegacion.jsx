import React from 'react'
import { Button } from '@mui/material'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import ModalContext from './ModalContext'

const ContenedorNavegacion = ({ children }) => {
  const { anteriorPagina, siguientePagina } = React.useContext(ModalContext)
  return (
    <div
      className='navegacion-modal'
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        gap: '20px',
        height: '75%'
      }}
    >
      <Button
        onClick={anteriorPagina}
        aria-label='anterior pagina'
        component='button'
        className='flecha-izquierda'
      >
        <ArrowLeftOutlined sx={{ ...botonesNavegacion }} />
      </Button>
      {children}
      <Button
        onClick={siguientePagina}
        aria-label='siguiente pagina'
        component='button'
        className='flecha-derecha'
      >
        <ArrowRightOutlined sx={{ ...botonesNavegacion }} />
      </Button>
    </div>
  )
}

export default ContenedorNavegacion

const botonesNavegacion = {
  color: 'hsl(193deg 54% 40%)',
  fontSize: '5.5rem'
}
