import React from 'react'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import IconButton from '@mui/material/IconButton'

const ModalMain = () => {
  // Estados y comportamiento para abrir y cerrar la ventana modal
  const [abrirModal, setAbrirModal] = React.useState(false)
  const modalAbierto = () => setAbrirModal(true)
  const modalCerrado = () => setAbrirModal(false)

  // Lista de los componentes internos de la ventana modal
  let listaPaginasModal = [PageOne, PageTwo, PageThree]

  // Estado inicial de la pagina interna de la ventana modal
  const [paginaModalActiva, setPaginaModalActiva] = React.useState(0)

  // Funcion que devuelve el tamaño de la lista de componentes
  const totalPaginas = () => {
    return listaPaginasModal.length
  }

  // Funcion que comprueba si se encuentra en la iteracion final de la lista de componentes
  const comprobarFinalPaginas = () => {
    return paginaModalActiva === totalPaginas() - 1
  }

  // Funcion en bucle que itera sobre la lista de componentes en forma positiva
  const siguientePagina = () => {
    const establecePaginaActual = comprobarFinalPaginas()
      ? paginaModalActiva - (totalPaginas() - 1)
      : paginaModalActiva + 1
    setPaginaModalActiva(establecePaginaActual)
  }

  // Funcion en bucle que itera sobre la lista de componentes en forma negativa
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
            <IconButton
              onClick={anteriorPagina}
              aria-label='anterior pagina'
              component='span'
            >
              <ArrowLeftOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={siguientePagina}
              aria-label='siguiente pagina'
              component='span'
            >
              <ArrowRightOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={modalCerrado}
              aria-label='cerrar ventana'
              component='span'
            >
              <CloseOutlinedIcon />
            </IconButton>
          </div>
          <Box component={listaPaginasModal[paginaModalActiva]} />
        </Box>
      </Modal>
    </>
  )
}

export default ModalMain
