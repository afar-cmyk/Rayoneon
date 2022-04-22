import React from 'react'
import NavBar from '../components/navigation/NavBar'
import bck_vid from '../images/bck_vid.webm'
import { Box, Tooltip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'

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
          <div style={{ marginLeft: '75px' }}>
            <h1>¡Contactenos!</h1>
            <br />
            <h2>contacto@diluminar.com</h2>
            <p style={{ width: '400px' }}>
              para trabajar con nosotros, cotizaciones, materiales y diseños,
              con gusto le responderemos lo mas pronto posible!
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
            <p style={{ width: '400px' }}>
              Siguenos para conocer nuestras ultimas noticias, proyectos y
              promociones.
            </p>
          </div>
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
      <div className='envoltura-creditos'>
        <div className='creditos-sitio'>
          © 2022 Rayo Neón. Todos los derechos reservados.
        </div>
        <div className='creditos-web'>
          Desarrollado por{' '}
          <a href='https://01a01.art' target='_blank' rel='noreferrer'>
            01a01.art
          </a>
          <IconoGithub />
        </div>
      </div>
    </>
  )
}

const IconoGithub = () => {
  return (
    <>
      <Tooltip title='GitHub' arrow>
        <a
          href='https://github.com/afar-cmyk'
          target='_blank'
          rel='noreferrer'
          className='cuadro-social-media GitHub'
          style={{ marginLeft: '10px' }}
        >
          <Box component={GitHubIcon} className='iconoMUI' />
        </a>
      </Tooltip>
    </>
  )
}
