import React from 'react'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import Modal from '@mui/material/Modal'

const ModalMain = () => {
  const [abrirModal, setAbrirModal] = React.useState(false)
  return (
    <>
      <button onClick={() => setAbrirModal(!abrirModal)}>Boton</button>
      <Modal open={abrirModal}>
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
