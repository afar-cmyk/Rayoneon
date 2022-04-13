import React from 'react'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

const ModalContext = React.createContext()

export const ModalProvider = ({ children }) => {
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

  // Comprueba si la pagina actual es la misma que se ha renderizado
  const compIndicadorActual = (numero) => {
    return listaPaginasModal[paginaModalActiva] === listaPaginasModal[numero]
  }
  return (
    <ModalContext.Provider
      value={{
        abrirModal,
        listaPaginasModal,
        paginaModalActiva,
        modalAbierto,
        modalCerrado,
        siguientePagina,
        anteriorPagina,
        compIndicadorActual
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext
