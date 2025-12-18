import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__titulo'>Todo Lista</h1>
        <button className='header__boton'>
          No mostrar completada
          <FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton'/>
        </button>
    </header>
  )
}
