import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import YouTubeIcon from '@mui/icons-material/YouTube'
import EmailIcon from '@mui/icons-material/Email'
import { Box } from '@mui/material'

const SocialMedia = () => {
  // let iconosSocialmedia = [
  //   InstagramIcon,
  //   FacebookIcon,
  //   TwitterIcon,
  //   PinterestIcon,
  //   YouTubeIcon,
  //   EmailIcon
  // ]

  let iconosSocialmedia = [
    {
      icono: InstagramIcon,
      enlace: 'https://www.instagram.com/rayoneon/',
      clase: 'instagram'
    },
    {
      icono: FacebookIcon,
      enlace: 'https://www.facebook.com/Rayo-neon-1400859480129814',
      clase: 'facebook'
    },
    {
      icono: TwitterIcon,
      enlace: 'https://twitter.com/rayoneon',
      clase: 'twitter'
    },
    {
      icono: PinterestIcon,
      enlace: 'https://es.pinterest.com/rayoneon/pins/',
      clase: 'pinterest'
    },
    {
      icono: YouTubeIcon,
      enlace: 'https://www.youtube.com/watch?v=Qwcv8hzs5Hc',
      clase: 'youtube'
    },
    {
      icono: EmailIcon,
      enlace: 'ventas@rayoneon.com',
      clase: 'email'
    }
  ]

  return (
    <>
      <div className='contenedor-social-media'>
        {iconosSocialmedia.map((datos, index) => {
          const { icono, enlace, clase } = datos
          return (
            <a
              key={index}
              href={enlace}
              target='_blank'
              rel='noreferrer'
              className={`cuadro-social-media ${clase}`}
            >
              <Box
                component={icono}
                className='iconoMUI'
                sx={
                  {
                    // color: '#ffffff99',
                    // fontSize: '22px',
                    // '&:hover': { color: '#ffffffe6' }
                  }
                }
              />
            </a>
          )
        })}
      </div>
    </>
  )
}

export default SocialMedia
