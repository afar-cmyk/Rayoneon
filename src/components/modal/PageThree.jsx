import React from 'react'
import { Map, Marker } from 'pigeon-maps'

const PageThree = () => {
  const coordenadas = [4.623235828150638, -74.0742739482184]
  return (
    <>
      <p style={{ width: '100%' }}>pagina tres</p>
      {/* <GoogleMap apiKey='AIzaSyCGGBdvSPWtC-XDBda8hLSiuNBxXpj4RWg'>
        <Marker position={{ lat: 4.623235828150638, lng: -74.0742739482184 }} />
      </GoogleMap> */}

      <Map defaultCenter={coordenadas} defaultZoom={19} boxClassname='mapa'>
        <Marker width={45} anchor={coordenadas} color='red' />
      </Map>
    </>
  )
}

export default PageThree
