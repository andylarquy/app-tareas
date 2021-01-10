import React, { Component } from 'react'
import { Prioridades } from '../utils/enumPrioridades'
import '../estilos/FormularioTareas.css'

//REDUX
import store, { AGREGAR_TAREA } from '../redux/store'

//SNACKBAR
import { withSnackbar } from 'react-simple-snackbar'
import { ErrorSnackbar, errorSnackbarStyle } from '../utils/Snackbar'

class FormularioTareas extends Component {

    state = {
        titulo: '',
        responsable: '',
        descripcion: '',
        prioridad: 'baja'
    }

    render() {
        const { openSnackbar } = this.props

        const onChange = e => {
            const { value, name } = e.target
            this.setState({
                [name]: value

            })

        }

        const onSubmit = e => {
            e.preventDefault()
            try {
                validarTarea(this.state)
                agregarTarea(this.state)
            } catch (error) {
                openSnackbar(ErrorSnackbar(error), 2000)
            }
        }

        const validarTarea = tarea => {

            const check = (atributo, errorMessage) => { if (!atributo) throw errorMessage }

            check(tarea.titulo, 'La tarea debe tener un titulo')
            check(tarea.responsable, 'La tarea debe tener un responsable')
            check(tarea.descripcion, 'La tarea debe tener una descripcion')
            check(tarea.prioridad, 'La tarea debe tener una prioridad')
        }

        const agregarTarea = tarea => {
            store.dispatch({
                type: AGREGAR_TAREA,
                tarea: tarea,
            })
        }

        return (
            <div className="formulario-tareas-container">

                <div className="card formulario-tareas">

                    <div className="card-header">
                        <h4 data-testid="formulario-titulo">Agregar tarea nueva</h4>
                    </div>

                    <form className="card-body" onSubmit={onSubmit} >
                        <div className="form-group" >
                            <input
                                type="text"
                                name="titulo"
                                className="form-control"
                                placeholder="Título"
                                onChange={onChange}
                                value={this.state.titulo}
                                data-testid="formulario-titulo-input"
                            />
                        </div>

                        <div className="form-group" >
                            <input
                                type="text"
                                name="responsable"
                                className="form-control"
                                placeholder="Responsable"
                                onChange={onChange}
                                value={this.state.responsable}
                                data-testid="formulario-responsable-input"
                            />
                        </div>

                        <div className="form-group" >
                            <input
                                type="text"
                                name="descripcion"
                                className="form-control"
                                placeholder="Descripción"
                                onChange={onChange}
                                value={this.state.descripcion}
                                data-testid="formulario-descripcion-input"
                            />
                        </div>

                        <div className="form-group" >
                            <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                name="prioridad"
                                onChange={onChange}
                                value={this.state.prioridad}
                                data-testid="formulario-prioridades-selector"
                            >
                                <option>{Prioridades.BAJA}</option>
                                <option>{Prioridades.MEDIA}</option>
                                <option>{Prioridades.ALTA}</option>

                            </select>
                        </div>

                        <div className="boton-guardar">
                            <button
                                ype="submit"
                                className="btn btn-primary"
                                data-testid="formulario-guardar-button">
                                Guardar
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        )
    }
}

export default withSnackbar(FormularioTareas, { style: errorSnackbarStyle })