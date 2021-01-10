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

        //DESTRUCTURING

        const { tarea } = this.props

        return (
            <div>


                <div className="card tarea-item">
                    <div className="card-header text-center">
                        <h3>{tarea.titulo}</h3>

                        <span className="badge rounded-pill bg-primary text-light">
                            {tarea.prioridad}
                        </span>
                    </div>

                    <div className="card-body text-center">

                        <p>{tarea.descripcion}</p>
                        <b> {tarea.responsable}</b>
                    </div>

                    <div className="form-check text-center">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            onChange={() => {this.realizarTarea(tarea)}}
                           >

                        </input>
                        <label className="form-check-label"></label>
                    </div>
                    <div className="card-footer text-center" >




                        <button className="btn btn-danger"
                            onClick={() => {this.eliminarTarea(tarea)}
                            }
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

    realizarTarea(tarea){
        store.dispatch({
            type: REALIZAR_TAREA,
            tarea: tarea,
        })
    }

}

Tarea.propTypes = {

    tarea: PropTypes.object.isRequired

}
