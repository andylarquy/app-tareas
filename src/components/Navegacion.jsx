import React, { Component } from 'react'
import '../estilos/Navegacion.css'
import Logo from '../utils/anotador.svg'
import store from '../redux/store'

export default class Navegacion extends Component {

    constructor() {
        super()

        this.state = {
            tareas: store.getState().tareas
        }
    }
    
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                tareas: store.getState().tareas
            })
        })
    }

    cantidadDeTareas(){
        return this.state.tareas.length
    }

 
    render() {
        return (
            <div>

                <nav className="nav-container">
                    <div className="nav">

                        <img src={Logo} alt=""/>
                    
                        <div className="links">

                        <div className="mis-tareas">{this.props.titulo}</div>
                        
                        <div className="contador badge badge-pill badge-light">{this.cantidadDeTareas()}</div>
                        </div>
                        
                    </div>
                </nav>
            </div>

        )
    }


}