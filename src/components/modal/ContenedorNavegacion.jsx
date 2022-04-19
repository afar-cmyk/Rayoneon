import React from 'react'
import { Button } from '@mui/material'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import ModalContext from './ModalContext'

const ContenedorNavegacion = () => {
  const { anteriorPagina, siguientePagina } = React.useContext(ModalContext)
  return (
    <div className='navegacion-modal'>
      <Button
        onClick={anteriorPagina}
        aria-label='anterior pagina'
        component='button'
        className='flecha-izquierda'
      >
        <ArrowLeftOutlined sx={{ ...botonesNavegacion }} />
      </Button>
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
  color: '#45c6e9',
  fontSize: '4.5rem',
  height: '2em'
}
