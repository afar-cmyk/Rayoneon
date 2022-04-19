import React from 'react'
import { Map, Marker } from 'pigeon-maps'

const PageThree = () => {
  const coordenadas = [4.623235828150638, -74.0742739482184]
  return (
    <>
      <section className='pagina-tres'>
        <p>pagina tres</p>
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
