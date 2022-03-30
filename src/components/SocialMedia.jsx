import React from 'react'
import {
  Instagram,
  Facebook,
  Reviews,
  Pinterest,
  YouTube,
  Email
} from '@mui/icons-material'
import { Box, Tooltip } from '@mui/material'

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
    }
    // {
    //   icono: 'google maps',
    //   enlace: 'https://search.google.com/local/writereview?placeid=ChIJgbUtB52ZP44R-SxfYiejUfQ',
    //   clase:'google-maps'
    // }
  ]

  return (
    <>
      <div className='contenedor-social-media'>
        {iconosSocialmedia.map((datos, index) => {
          const { icono, enlace, clase } = datos
          return (
            <Tooltip key={index} title={clase} arrow>
              <a
                key={index}
                href={enlace}
                target='_blank'
                rel='noreferrer'
                className={`cuadro-social-media ${clase}`}
              >
                <Box component={icono} className='iconoMUI'></Box>
              </a>
            </Tooltip>
          )
        })}
      </div>
    </>
  )
}

export default SocialMedia
