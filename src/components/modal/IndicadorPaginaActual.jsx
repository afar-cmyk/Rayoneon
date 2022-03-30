import React from 'react'
import ModalContext from './ModalContext'

const IndicadorPaginaActual = () => {
  const { compIndicadorActual } = React.useContext(ModalContext)

  // Agrega estilos al indicador dependiendo si es la pagina actual o no
  const estiloIndicador = (numero) => {
    return {
      backgroundColor: compIndicadorActual(numero)
        ? '#29E8E8'
        : 'rgba(42, 74, 128, 0.4)',
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
          height: '40px'
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
