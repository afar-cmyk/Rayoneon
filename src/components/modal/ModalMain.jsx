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

  const BotonCerrar = () => {
    const botonCerrar = {
      color: '#f2f2f2',
      fontSize: '2rem'
    }
    return (
      <>
        <div
          className='btn-cerrar'
          // style={{
          //   display: 'flex',
          //   flexDirection: 'row',
          //   alignContent: 'center',
          //   justifyContent: 'flex-end',
          //   position: 'absolute',
          //   top: 0,
          //   right: 0,
          //   zIndex: 11
          // }}
        >
          <Button
            onClick={modalCerrado}
            aria-label='cerrar ventana'
            component='span'
            sx={{ minWidth: '55px', width: '45px' }}
          >
            <CloseOutlined sx={{ ...botonCerrar }} />
          </Button>
        </div>
      </>
    )
  }

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
        <Box className='modal-canvas'>
          <BotonCerrar />
          <ContenedorNavegacion />
          <IndicadorPaginaActual />
          <div className='modal-envoltura-contenido'>
            <Box component={listaPaginasModal[paginaModalActiva]} />
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
  border: '3px solid #fe005fb3',
  boxSizing: 'border-box',
  borderRadius: '4px',
  '&:hover': {
    color: '#F2F2F2',
    border: '3px solid #fe005f',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 7px 4px #fe005f40',
    borderRadius: '4px'
  }
}

export default ModalMain
