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
      enlace: 'https://pagina1.com/rayoneon',
      clase: 'instagram'
    },
    {
      icono: FacebookIcon,
      enlace: 'https://pagina2.com/rayoneon',
      clase: 'facebook'
    },
    {
      icono: TwitterIcon,
      enlace: 'https://pagina3.com/rayoneon',
      clase: 'twitter'
    },
    {
      icono: PinterestIcon,
      enlace: 'https://pagin4a.com/rayoneon',
      clase: 'pinterest'
    },
    {
      icono: YouTubeIcon,
      enlace: 'https://pagina5.com/rayoneon',
      clase: 'youtube'
    },
    {
      icono: EmailIcon,
      enlace: 'https://pagina6.com/rayoneon',
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
              component='a'
              href={enlace}
              target='_blank'
              rel='noreferrer'
              className={`cuadro-social-media ${clase}`}
            >
              <Box
                component={icono}
                sx={{ color: '#ffffff99', fontSize: '22px' }}
              />
            </a>
          )
        })}
      </div>
    </>
  )
}

export default SocialMedia
