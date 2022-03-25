import React from 'react'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import Modal from '@mui/material/Modal'

const ModalMain = () => {
  const [abrirModal, setAbrirModal] = React.useState(false)
  const modalAbierto = () => setAbrirModal(true)
  const modalCerrado = () => setAbrirModal(false)
  return (
    <>
      <button onClick={modalAbierto}>Boton</button>
      <Modal open={abrirModal} onClose={modalCerrado}>
        <div>
          <PageOne />
          <PageTwo />
          <PageThree />
        </div>
      </Modal>
    </>
  )
}

export default ModalMain
