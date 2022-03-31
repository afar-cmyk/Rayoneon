import React from 'react'
import { Modal, Box, Button } from '@mui/material'
import { CloseOutlined } from '@mui/icons-material'
import ContenedorNavegacion from './ContenedorNavegacion'
import IndicadorPaginaActual from './IndicadorPaginaActual'
import ModalContext from './ModalContext'

const ModalMain = () => {
  const {
    modalAbierto,
    abrirModal,
    modalCerrado,
    listaPaginasModal,
    paginaModalActiva
  } = React.useContext(ModalContext)

  return (
    <>
      <Button onClick={modalAbierto} variant='outlined' sx={{ ...botonMUI }}>
        Acerca de nosotros
      </Button>
      <Modal
        open={abrirModal}
        onClose={modalCerrado}
        sx={{
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)'
          }
        }}
      >
        <Box sx={{ ...modalCanvas }}>
          <div style={{ width: '100%', height: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'flex-end',
                width: '100%',
                height: '10%'
              }}
            >
              <Button
                onClick={modalCerrado}
                aria-label='cerrar ventana'
                component='span'
              >
                <CloseOutlined sx={{ ...botonCerrar }} />
              </Button>
            </div>
            <ContenedorNavegacion>
              <Box component={listaPaginasModal[paginaModalActiva]} />
            </ContenedorNavegacion>
            <IndicadorPaginaActual />
          </div>
        </Box>
      </Modal>
    </>
  )
}

let botonMUI = {
  fontFamily: 'Assistant',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  color: '#cccccc',
  textTransform: 'initial',
  border: '3px solid rgba(175, 6, 159, 0.7)',
  boxSizing: 'border-box',
  borderRadius: '4px',
  '&:hover': {
    color: '#F2F2F2',
    border: '3px solid #AF069F',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 7px 4px rgba(175, 40, 162, 0.25)',
    borderRadius: '4px'
  }
}

const modalCanvas = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '76.8vw',
  height: '70vh',
  background: 'linear-gradient(270deg, #041426 7.34%, #192940 80.71%)',
  boxShadow: 24,
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignContent: 'center'
}

const botonCerrar = {
  color: '#CCCCCC',
  fontSize: '2.680rem',
  '&:hover': {
    color: '#F2F2F2'
  }
}

export default ModalMain
