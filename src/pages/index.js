import React from 'react'
import NavBar from '../components/navigation/NavBar'
import '../styles/global.css'

export default function index() {
  return (
    <div>
      <NavBar estado={null} />
      <br />
      <p>
        Esta es la pagina <b>Index</b>
      </p>
    </div>
  )
}