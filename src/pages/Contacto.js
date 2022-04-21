import React from 'react'
import NavBar from '../components/navigation/NavBar'
import bck_vid from '../images/bck_vid.webm'

export default function Contacto() {
  return (
    <div>
      <NavBar estado={2} />
      <section className='pagina-contacto'>
        <div
          style={{
            width: '100%',
            background:
              'linear-gradient(270deg, rgb(19 21 27 / 20%) 15%, rgb(19 21 27) 60%)',
            minHeight: 'calc(100vh - 68px)'
          }}
        >
          <h1>¡Contactenos!</h1>
          <br />
          <h2>contacto@diluminar.com</h2>
          <p>
            para trabajar con nosotros, cotizaciones, materiales y diseños, con
            gusto le responderemos lo mas pronto posible!
          </p>
          <br />
          <h2>Bogotá D.C</h2>
          <ul>
            <li>Ak. 19 # 33a-36, Cundinamarca</li>
            <li>(+57) 310 881 55 44</li>
            <li>(601) 332 6290</li>
          </ul>
          <br />
          <h2>Redes sociales</h2>
          <p>
            Siguenos para conocer nuestras ultimas noticias, proyectos y
            promociones.
          </p>
        </div>
        <Footer />
        <video className='video-fondo' autoPlay loop muted src={bck_vid} />
      </section>
    </div>
  )
}

const Footer = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
          width: '100vw',
          position: 'fixed',
          bottom: '15px'
        }}
      >
        <div
          style={{
            marginLeft: '75px'
          }}
        >
          creditos rayo neon
        </div>
        <div
          style={{
            marginRight: '75px'
          }}
        >
          creditos 01a01.art
        </div>
      </div>
    </>
  )
}
