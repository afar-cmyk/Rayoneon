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
      <Box omponent='div' sx={{ ...contenedorSocialMedia }}>
        <Box component='div' sx={{ ...cuadroSocialMedia }}>
          <Box component={iconosSocialmedia[0]} sx={{ fontSize: '26px' }} />
        </Box>
      </Box>
    </>
  )
}

let contenedorSocialMedia = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
  bottom: '25px',
  left: '25px'
}

let cuadroSocialMedia = {
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  // position: 'fixed',
  // bottom: '35px',
  // left: '35px',
  height: '36px',
  width: '36px',
  border: '2px solid rgba(242, 242, 242, 0.4)',
  boxSizing: 'border-box',
  borderRadius: '4px'
}

export default SocialMedia
