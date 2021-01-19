import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../estilos/Tarea.css'

//REDUX
import store, { REALIZAR_TAREA, ELIMINAR_TAREA } from '../redux/store'


export default class Tarea extends Component {

    tareaCompleta() {
        return {
            color: this.props.tarea.hecho ? 'black' : 'gray'
        }
    }

    render() {
        const { tarea } = this.props

        return (
            <div>


                <div className="card tarea-item" data-testid='tarea-card'>
                    <div className="card-header text-center">
                        <h3 data-testid="tarea-titulo">{tarea.titulo}</h3>

                        <span className="badge rounded-pill bg-primary text-light" data-testid="tarea-prioridad">
                            {tarea.prioridad}
                        </span>
                    </div>

                    <div className="card-body text-center">

                        <p data-testid="tarea-descripcion">{tarea.descripcion}</p>
                        <b data-testid="tarea-responsable"> {tarea.responsable}</b>
                    </div>

                    <div className="form-check text-center">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            onChange={() => { this.realizarTarea(tarea) }}
                            data-testid="tarea-realizar-checkbox"
                        >

                        </input>
                        <label className="form-check-label"></label>
                    </div>
                    <div className="card-footer text-center" >




                        <button className="btn btn-danger"
                            onClick={() => { this.eliminarTarea(tarea) }
                            }
                            data-testid="tarea-borrar-button"
                        >Borrar</button>
                    </div>



                </div>
            </div>
        )
    }



    eliminarTarea(tarea) {
        store.dispatch({
            type: ELIMINAR_TAREA,
            tarea: tarea,
        })
    }

    realizarTarea(tarea) {
        store.dispatch({
            type: REALIZAR_TAREA,
            tarea: tarea,
        })
    }

}

Tarea.propTypes = {

    tarea: PropTypes.object.isRequired

}
