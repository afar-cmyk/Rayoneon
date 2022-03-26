import React from 'react'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

const ModalMain = () => {
  const [abrirModal, setAbrirModal] = React.useState(false)
  const modalAbierto = () => setAbrirModal(true)
  const modalCerrado = () => setAbrirModal(false)

  let listaPaginasModal = [PageOne, PageTwo, PageThree]

  const [paginaModalActiva, setPaginaModalActiva] = React.useState(0)

  const totalPaginas = () => {
    return listaPaginasModal.length
  }

  const comprobarFinalPaginas = () => {
    return paginaModalActiva === totalPaginas() - 1
  }

  const siguientePagina = () => {
    const establecePaginaActual = comprobarFinalPaginas()
      ? paginaModalActiva - (totalPaginas() - 1)
      : paginaModalActiva + 1
    setPaginaModalActiva(establecePaginaActual)
  }

  const anteriorPagina = () => {
    const establecePaginaActual = comprobarFinalPaginas()
      ? paginaModalActiva - 1
      : paginaModalActiva === 0
      ? paginaModalActiva + (totalPaginas() - 1)
      : paginaModalActiva - 1
    setPaginaModalActiva(establecePaginaActual)
  }

  return (
    <>
      <button onClick={modalAbierto}>Boton</button>
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
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '38.214vw',
            background:
              'linear-gradient(270deg, #041426 7.34%, #192940 80.71%)',
            boxShadow: 24,
            borderRadius: '6px',
            p: 4
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              gap: '20px'
            }}
          >
            <button onClick={anteriorPagina}>atras</button>
            <button onClick={siguientePagina}>adelante</button>
            <button onClick={modalCerrado}>cerrar</button>
          </div>
          <Box component={listaPaginasModal[paginaModalActiva]} />
        </Box>
      </Modal>
    </>
  )
}

export default ModalMain
