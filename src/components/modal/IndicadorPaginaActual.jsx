import React from 'react'
import ModalContext from './ModalContext'

const IndicadorPaginaActual = () => {
  const { compIndicadorActual } = React.useContext(ModalContext)

  // Agrega estilos al indicador dependiendo si es la pagina actual o no
  const estiloIndicador = (numero) => {
    return {
      backgroundColor: compIndicadorActual(numero) ? '#45c6e9' : '#576e74',
      width: '41px',
      height: '10px'
    }
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          height: '13%',
          position: 'absolute',
          bottom: 0
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 15
          }}
        >
          <div style={estiloIndicador(0)} />
          <div style={estiloIndicador(1)} />
          <div style={estiloIndicador(2)} />
        </div>
      </div>
    </>
  )
}

export default IndicadorPaginaActual
