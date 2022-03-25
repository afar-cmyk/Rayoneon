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
          <PageOne />
          <PageTwo />
          <PageThree />
        </Box>
      </Modal>
    </>
  )
}

export default ModalMain
