import React, { Component } from 'react'
import { Prioridades } from '../utils/enumPrioridades'
import '../estilos/FormularioTareas.css'

//REDUX
import store, { AGREGAR_TAREA } from '../redux/store'

export default class FormularioTareas extends Component {

    state = {
        titulo: '',
        responsable: '',
        descripcion: '',
        prioridad: 'baja'
    }

    //Las funciones flecha evitan tener que usar el metodo ".bind"

    onChange = e => {
        const { value, name } = e.target
        this.setState({
            [name]: value

        })

    }

    onSubmit = e => {
        e.preventDefault()
        this.agregarTarea(this.state)
    }

    agregarTarea(tarea) {
        store.dispatch({
            type: AGREGAR_TAREA,
            tarea: tarea,
        })
    }

    render() {


        return (
            <div className="formulario-tareas-container">

                <div className="card formulario-tareas">

                    <div className="card-header">
                        <h4>Agregar tarea nueva</h4>
                    </div>

                    <form className="card-body" onSubmit={this.onSubmit} >
                        <div className="form-group" >
                            <input
                                type="text"
                                name="titulo"
                                className="form-control"
                                placeholder="Título"
                                onChange={this.onChange}
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
                                onChange={this.onChange}
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
                                onChange={this.onChange}
                                value={this.state.descripcion}
                                data-testid="formulario-descripcion-input"
                            />
                        </div>

                        <div className="form-group" >
                            <select
                                className="form-control"
                                id="exampleFormControlSelect1"
                                name="prioridad"
                                onChange={this.onChange}
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