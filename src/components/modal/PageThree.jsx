import React from 'react'
import { Map, Overlay } from 'pigeon-maps'
import iconoRN from '../../images/IconoRN.png'

const PageThree = () => {
  const coordenadas = [4.623235828150638, -74.0742739482184]
  return (
    <>
      <section className='pagina-tres'>
        <h3>Servicio Nacional por más de 15 años</h3>
        <p style={{ marginTop: 0 }}>
          La experiencia estructura y conocimiento, nos permiten presentarnos
          con respaldo, calidad y cumplimiento.
        </p>
        <p style={{ marginBottom: '3px' }}>
          Nuestra sede se encuentra actualmente en
          <strong> Bogotá, Colombia.</strong>
        </p>
        <div
          style={{
            width: '66vw',
            height: '35vh',
            borderRadius: '6px',
            overflow: 'hidden'
          }}
        >
          <Map defaultCenter={coordenadas} defaultZoom={19}>
            <Overlay anchor={coordenadas} offset={[30, 20]}>
              <img
                src={iconoRN}
                width={45.46}
                height={56.16}
                alt='Logo de Rayo Neón'
              />
            </Overlay>
          </Map>
        </div>
      </section>
    </>
  )
}

export default PageThree
