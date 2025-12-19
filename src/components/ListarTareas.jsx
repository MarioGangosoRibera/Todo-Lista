import Swal from "sweetalert2"
import { Tareas } from "./Tareas"

export const ListarTareas = ({ tareas, setTareas, verCompletadas }) => {

  const tareaCompletada = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    ))
  }

  const editaTarea = (id, textoNuevo) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id
        ? { ...tarea, texto: textoNuevo }
        : tarea
    ))

    Swal.fire(
      'Bien hecho',
      'Has actualizado una tarea',
      'success'
    )
  }

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id))

    Swal.fire(
      'Bien hecho',
      'Has eliminado una tarea',
      'success'
    )
  }

  const tareasFiltradas = verCompletadas
    ? tareas
    : tareas.filter(tarea => !tarea.completada)

  return (
    <ul className="lista-tareas">
      {
        tareasFiltradas.length > 0
          ? tareasFiltradas.map(tarea => (
              <Tareas
                key={tarea.id}
                tarea={tarea}
                tareaCompletada={tareaCompletada}
                editaTarea={editaTarea}
                eliminarTarea={eliminarTarea}
              />
            ))
          : <div className="lista-tareas__mensaje">
              No hay tareas pendientes
            </div>
      }
    </ul>
  )
}
