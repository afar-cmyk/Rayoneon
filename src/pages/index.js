import React from 'react'
import '../styles/global.css'
import NavBar from '../components/navigation/NavBar'
import ContactIcon from '../components/ContactIcon.jsx'
import SocialMedia from '../components/SocialMedia'
import SeccionPrincipal from '../components/index/SeccionPrincipal'
import SeccionServicios from '../components/index/SeccionServicios'
import ModalPrueba from '../components/index/ModalPrueba'

export default function index() {
  return (
    <>
      <main>
        <NavBar estado={null} />
        <SocialMedia />
        <ContactIcon />
        <SeccionPrincipal />
        <SeccionServicios />
        <ModalPrueba />
      </main>
    </>
  )
}
