import React from 'react'

const ModalContext = React.createContext({})

export const DataProvider = ({ children }) => {
  let prueba = 'hola mundo desde context api'
  return (
    <ModalContext.Provider value={{ prueba }}>{children}</ModalContext.Provider>
  )
}

export default ModalContext
