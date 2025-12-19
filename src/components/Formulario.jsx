/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';


export const Formulario = ({tareas, setTareas}) => {

    const [tarea, setTarea] = useState('')

    const handleInput = (e) =>{
        const input = e.target.value
        setTarea(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaTarea = {
            id: uuidv4(), texto: tarea, completada: false
        }
        setTareas([...tareas, nuevaTarea])
        setTarea('')
    }
  
    return (
    <form className='formulario-tareas' onSubmit={handleSubmit}>
        <input 
            type="text" 
            className='formulario-tareas__input' 
            placeholder='Añadir una nueva tarea'
            value={tarea}
            onChange={(e) => handleInput(e)}
        />
        <button type='submit' className='formulario-tareas__btn'>
            <FontAwesomeIcon icon={faPlusSquare} className='formulario-tareas__icono-btn'/>
        </button>
    </form>
  )
}
