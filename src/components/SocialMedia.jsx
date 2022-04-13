import React from 'react'
import {
  Instagram,
  Facebook,
  Reviews,
  Pinterest,
  YouTube,
  Email,
  MoreHorizRounded,
  LocationOn
} from '@mui/icons-material'
import { Box, Tooltip, Fade } from '@mui/material'

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

  const [estadoSocial, setEstadoSocial] = React.useState(true)
  const [estadoBtnMenu, setEstadoBtnMenu] = React.useState(false)

  const compPaginaArriba = () => {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight
  }
  const compPaginaAbajo = () => {
    return window.pageYOffset === 0
  }

  const menuAbierto = () => {
    setEstadoSocial(true)
    setEstadoBtnMenu(false)
  }
  const menuCerrado = () => {
    setEstadoSocial(false)
    setEstadoBtnMenu(true)
  }

  const comportamientoMenu = () => {
    if (compPaginaArriba() || compPaginaAbajo()) {
      menuAbierto()
    } else {
      menuCerrado()
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', comportamientoMenu)
    return () => window.removeEventListener('scroll', comportamientoMenu)
  })

  return (
    <>
      <div className='contenedor-social-media'>
        <Tooltip title='Redes Sociales' arrow>
          <div
            className='cuadro-social-media Menu'
            onClick={() => setEstadoSocial(!estadoSocial)}
            onKeyPress={() => setEstadoSocial(!estadoSocial)}
            role='button'
            tabIndex='0'
            style={{
              cursor: 'pointer',
              width: '54px',
              display: estadoBtnMenu ? 'flex' : 'none'
            }}
          >
            <Box component={MoreHorizRounded} className='iconoMUI' />
          </div>
        </Tooltip>
        {iconosSocialmedia.map((datos, index) => {
          const { icono, enlace, clase } = datos
          return (
            <Fade key={index} in={estadoSocial}>
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
            </Fade>
          )
        })}
      </div>
    </>
  )
}

export default SocialMedia
