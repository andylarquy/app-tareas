import {createStore} from 'redux'
import {tareas as tareasJson} from '../tareas.json'


export const ELIMINAR_TAREA = 'ELIMINAR_TAREA'
export const REALIZAR_TAREA = 'REALIZAR_TAREA'
export const AGREGAR_TAREA = 'AGREGAR_TAREA'

const reducerTareas = (state, action) => {

    const eliminarTareaById = idTarea => 
    state.tareas.filter(tarea => tarea.idTarea !== idTarea)

    const getTareaById = idTarea => 
    state.tareas.find(tarea => tarea.idTarea == idTarea)

    const realizarTareaById = idTarea => {
        let tareaBuscada = getTareaById(idTarea)
        tareaBuscada.hecho = !tareaBuscada.hecho
    }

    if (action.type === ELIMINAR_TAREA){
        return {
            ...state,
            tareas: eliminarTareaById(action.tarea.idTarea)
        }
    } else if(action.type === REALIZAR_TAREA){

        realizarTareaById(action.tarea.idTarea)

        return {
            ...state,
            tareas: state.tareas
        } 
    } else if (action.type === AGREGAR_TAREA){

        
        action.tarea.idTarea = state.tareas.length + 1
        state.tareas.push(action.tarea)

        return {
            ...state,
            tareas: state.tareas
        } 
    }

    return state

}

export default createStore(reducerTareas, {tareas: tareasJson })