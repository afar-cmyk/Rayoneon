import React from 'react'
import { Link } from 'gatsby'

export default function index() {
  return (
    <div>
      <Link to='/'>Index</Link>
      <Link to='/Nosotros/'>Nosotros</Link>
      <Link to='/Productos/'>Productos</Link>
      <Link to='/Portafolio/'>Portafolio</Link>
      <Link to='/Contacto/'>Contacto</Link>
    </div>
  )
}
