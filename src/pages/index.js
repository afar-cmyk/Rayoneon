import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/global.css'

export default function index() {
  return (
    <div>
      <NavBar estado={1} />
      <br />
      <p>
        Esta es la pagina <b>Index</b>
      </p>
    </div>
  )
}
