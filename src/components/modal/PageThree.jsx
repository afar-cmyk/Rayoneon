import React from 'react'
import { Map, Marker } from 'pigeon-maps'

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
            <Marker width={45} anchor={coordenadas} color='red' />
          </Map>
        </div>
      </section>
    </>
  )
}

export default PageThree
