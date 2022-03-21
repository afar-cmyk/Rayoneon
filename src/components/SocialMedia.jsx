import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import YouTubeIcon from '@mui/icons-material/YouTube'
import EmailIcon from '@mui/icons-material/Email'
import { Box } from '@mui/material'

const SocialMedia = () => {
  let iconosSocialmedia = [
    InstagramIcon,
    FacebookIcon,
    TwitterIcon,
    PinterestIcon,
    YouTubeIcon,
    EmailIcon
  ]

  return (
    <>
      <Box omponent='div' className='contenedor-social-media'>
        {iconosSocialmedia.map((datos, index) => {
          return (
            <Box key={index} component='div' sx={{ ...cuadroSocialMedia }}>
              <Box component={datos} sx={{ fontSize: '22px' }} />
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
