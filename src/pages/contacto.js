import React from 'react'
import '../styles/global.css'
import NavBar from '../components/navigation/NavBar'
import bck_vid from '../videos/bck_vid.webm'
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
        <Box
          sx={{
            width: '100%',
            background: {
              xs: '#13151bcc',
              md: 'linear-gradient(270deg, rgb(19 21 27 / 20%) 15%, rgb(19 21 27) 60%)'
            },
            minHeight: 'calc(100vh - 68px)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Box
            sx={{
              order: { xs: 2, md: 1 },
              marginLeft: { xs: 0, md: '75px' },
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '51px', md: '40px', xl: '50px' },
              paddingBottom: { xs: '110px', md: 0 },
              '& > h1': {
                fontSize: { xs: '3.7rem', md: '60px', xl: '90px' },
                marginTop: { xs: '3.5rem', md: '1.4rem' },
                marginLeft: { xs: 0 },
                justifyContent: { xs: 'center', md: 'unset' }
              }
            }}
          >
            <h1>¡Contactenos!</h1>

            <Box
              sx={{
                marginLeft: { xs: '37.5px', md: 0 },
                '& > h2': {
                  fontSize: { xs: '1.7rem', md: '28px', xl: '35px' }
                },
                '& > p': {
                  fontSize: {
                    xs: '0.87rem',
                    md: '14px',
                    lg: '15px',
                    xl: '18px'
                  },
                  width: { xs: '22rem', md: '357px', lg: '383px', xl: '400px' }
                }
              }}
            >
              <h2>contacto@rayo-neon.com</h2>
              <p>
                para trabajar con nosotros, cotizaciones, materiales y diseños,
                con gusto le responderemos lo mas pronto posible!
              </p>
            </Box>

            <Box
              sx={{
                marginLeft: { xs: '37.5px', md: 0 },
                '& > h2': {
                  fontSize: { xs: '1.7rem', md: '28px', xl: '35px' }
                },
                '& > p': {
                  fontSize: {
                    xs: '0.87rem',
                    md: '14px',
                    lg: '15px',
                    xl: '18px'
                  }
                }
              }}
            >
              <h2>Colombia / Bogotá D.C.</h2>
              <p>Ak. 19 # 33a-36, Cundinamarca</p>
              <p>(+57) 310 881 55 44</p>
              <p>(601) 332 6290</p>
            </Box>

            <Box
              sx={{
                marginLeft: { xs: '37.5px', md: 0 },
                '& > h2': {
                  fontSize: { xs: '1.7rem', md: '28px', xl: '35px' }
                },
                '& > p': {
                  fontSize: {
                    xs: '0.87rem',
                    md: '14px',
                    lg: '15px',
                    xl: '18px'
                  },
                  width: { xs: '21rem', md: '341px', xl: '400px' }
                }
              }}
            >
              <h2>Nuestras redes sociales</h2>
              <p>
                Siguenos para conocer nuestras ultimas noticias, proyectos y
                promociones.
              </p>
              <SocialMedia />
            </Box>
          </Box>
          <Box
            className='logo-creditos'
            sx={{
              display: { xs: 'none', lg: 'flex' },
              order: { xs: 1, md: 2 },
              marginTop: { xs: '80px', md: 0 }
            }}
          >
            <Box component={Logo} elemento='completo' sx={{}} />
          </Box>
        </Box>
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
      <Box
        className='envoltura-creditos'
        sx={{ position: { xs: 'absolute', md: 'fixed' } }}
      >
        <Box
          className='creditos-sitio'
          sx={{
            marginLeft: { xs: '37.5px', md: '75px' },
            fontSize: { xs: '0.7rem', md: '16px' },
            width: { xs: '8rem', sm: 'unset' }
          }}
        >
          © 2022 Rayo Neón. Todos los derechos reservados.
        </Box>
        <Box
          className='creditos-web'
          sx={{
            marginRight: { xs: '37.5px', md: '75px' },
            fontSize: { xs: '14px', md: '16px' }
          }}
        >
          Desarrollado por{' '}
          <a href='https://01a01.art' target='_blank' rel='noreferrer'>
            01a01.art
          </a>
          <IconoGithub />
        </Box>
      </Box>
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
