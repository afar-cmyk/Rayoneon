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
    { icono: InstagramIcon, enlace: 'https://pagina1.com/rayoneon' },
    { icono: FacebookIcon, enlace: 'https://pagina2.com/rayoneon' },
    { icono: TwitterIcon, enlace: 'https://pagina3.com/rayoneon' },
    { icono: PinterestIcon, enlace: 'https://pagin4a.com/rayoneon' },
    { icono: YouTubeIcon, enlace: 'https://pagina5.com/rayoneon' },
    { icono: EmailIcon, enlace: 'https://pagina6.com/rayoneon' }
  ]

  return (
    <>
      <Box omponent='div' className='contenedor-social-media'>
        {iconosSocialmedia.map((datos, index) => {
          const { icono, enlace } = datos
          return (
            <Box
              key={index}
              component='a'
              href={enlace}
              target='_blank'
              sx={{ ...cuadroSocialMedia }}
            >
              <Box component={icono} sx={{ fontSize: '22px' }} />
            </Box>
          )
        })}
      </Box>
    </>
  )
}

let cuadroSocialMedia = {
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  height: '32px',
  width: '32px',
  border: '2px solid rgba(242, 242, 242, 0.4)',
  boxSizing: 'border-box',
  borderRadius: '4px',
  gap: '12px'
}

export default SocialMedia
