import React from 'react'
import NavBar from '../components/navigation/NavBar'
import bck_vid from '../images/bck_vid.webm'
import { Box, Tooltip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import {
  Instagram,
  Facebook,
  Reviews,
  Pinterest,
  YouTube,
  Email,
  LocationOn
} from '@mui/icons-material'
import Logo from '../images/Logo'

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
            minHeight: 'calc(100vh - 68px)',
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <Box
            sx={{
              marginLeft: '75px',
              display: 'flex',
              flexDirection: 'column',
              gap: { lg: '0px', xl: '30px' }
            }}
          >
            <h1>¡Contactenos!</h1>
            <br />
            <div>
              <h2>contacto@rayo-neon.com</h2>
              <p style={{ width: '400px' }}>
                para trabajar con nosotros, cotizaciones, materiales y diseños,
                con gusto le responderemos lo mas pronto posible!
              </p>
            </div>
            <br />
            <div>
              <h2>Colombia / Bogotá D.C.</h2>
              <ul>
                <li>Ak. 19 # 33a-36, Cundinamarca</li>
                <li>(+57) 310 881 55 44</li>
                <li>(601) 332 6290</li>
              </ul>
            </div>

            <br />
            <div>
              <h2>Nuestras redes sociales</h2>
              <p style={{ width: '400px' }}>
                Siguenos para conocer nuestras ultimas noticias, proyectos y
                promociones.
              </p>
              <SocialMedia />
            </div>
          </Box>
          <div className='logo-creditos'>
            <Logo elemento='completo' />
          </div>
        </div>
        <Footer />
        <video
          className='video-fondo'
          autoPlay
          loop
          muted
          src={bck_vid}
          style={{ opacity: 0.5 }}
        />
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

const SocialMedia = () => {
  let iconosSocialmedia = [
    {
      icono: Instagram,
      enlace: 'https://www.instagram.com/rayoneon/',
      clase: 'Instagram'
    },
    {
      icono: Facebook,
      enlace: 'https://www.facebook.com/Rayo-neon-1400859480129814',
      clase: 'Facebook'
    },
    {
      icono: YouTube,
      enlace: 'https://www.youtube.com/watch?v=Qwcv8hzs5Hc',
      clase: 'Youtube'
    },
    {
      icono: Pinterest,
      enlace: 'https://es.pinterest.com/rayoneon/pins/',
      clase: 'Pinterest'
    },
    {
      icono: Reviews,
      enlace:
        'https://www.google.com/search?q=rayo+neon&oq=rayo+neon&aqs=chrome..69i57j0i22i30l4j69i60l3.1247j1j4&sourceid=chrome&ie=UTF-8#lrd=0x8e3f999d072db581:0xf451a327625f2cf9,1,,,',
      clase: 'Reseñas'
    },
    {
      icono: Email,
      enlace: 'mailto:ventas@rayoneon.com',
      clase: 'E-mail'
    },
    {
      icono: LocationOn,
      enlace: 'https://goo.gl/maps/FcHoncUTB9HCkdP1A',
      clase: 'Ubicación'
    }
  ]
  return (
    <>
      <div className='redes-sociales-creditos'>
        {iconosSocialmedia.map((datos, index) => {
          const { icono, enlace, clase } = datos
          return (
            <Tooltip key={index} title={clase} arrow>
              <a
                href={enlace}
                target='_blank'
                rel='noreferrer'
                className={`cuadro-social-media ${clase}`}
              >
                <Box component={icono} className='iconoMUI' />
              </a>
            </Tooltip>
          )
        })}
      </div>
    </>
  )
}
