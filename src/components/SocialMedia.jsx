import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import ReviewsIcon from '@mui/icons-material/Reviews'
import PinterestIcon from '@mui/icons-material/Pinterest'
import YouTubeIcon from '@mui/icons-material/YouTube'
import EmailIcon from '@mui/icons-material/Email'
import { Box } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'

const SocialMedia = () => {
  let iconosSocialmedia = [
    {
      icono: InstagramIcon,
      enlace: 'https://www.instagram.com/rayoneon/',
      clase: 'Instagram'
    },
    {
      icono: FacebookIcon,
      enlace: 'https://www.facebook.com/Rayo-neon-1400859480129814',
      clase: 'Facebook'
    },
    {
      icono: YouTubeIcon,
      enlace: 'https://www.youtube.com/watch?v=Qwcv8hzs5Hc',
      clase: 'Youtube'
    },
    {
      icono: PinterestIcon,
      enlace: 'https://es.pinterest.com/rayoneon/pins/',
      clase: 'Pinterest'
    },
    {
      icono: ReviewsIcon,
      enlace:
        'https://www.google.com/search?q=rayo+neon&oq=rayo+neon&aqs=chrome..69i57j0i22i30l4j69i60l3.1247j1j4&sourceid=chrome&ie=UTF-8#lrd=0x8e3f999d072db581:0xf451a327625f2cf9,1,,,',
      clase: 'Reseñas'
    },
    {
      icono: EmailIcon,
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
            <Tooltip title={clase} arrow>
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
