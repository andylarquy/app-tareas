import './App.css';
import React, {Component} from 'react'
import {tareas} from './tareas.json'
import { BrowserRouter as Router , Route } from "react-router-dom"

//COMPONENTES

import Navegacion from './components/Navegacion.jsx'
import FormularioTareas from './components/FormularioTareas.jsx'
import ListaTareas from './components/ListaTareas.jsx'
import ListaUsuarios from './components/ListaUsuarios.jsx'

class App extends Component {

  state = {

    tareas: tareas

  }

  agregarTarea = tarea => {

    const nuevaTarea = {
      id: this.state.tareas.length,
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      prioridad: tarea.prioridad,
      responsable: tarea.responsable,
    }

    this.setState({
      tareas: [...this.state.tareas, nuevaTarea]
    })

  }

  eliminarTarea = idTarea => {
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.idTarea !== idTarea);
    this.setState({tareas: nuevasTareas})
  }

  realizarTarea = idTarea => {

    const nuevasTareas = this.state.tareas.map(tarea => {
      if (tarea.idTarea === idTarea){
        tarea.hecho = !tarea.hecho
      }

      return tarea
    })

    this.setState({tareas: nuevasTareas})

  }

  render(){
    return (
      <div>

        <Router>


        <Route exact path='/' render={() => { 
          
          return <div>
          
          
        <Navegacion titulo = "Mis Tareas" contador = {this.state.tareas.length}/>
        
        <div className = "container">
          <div className = "row mt-4">
             <div className = "col-md-4 text-center">

             </div>
        
        <FormularioTareas agregarTarea= {this.agregarTarea} />
            
        
        <ListaTareas 
        tareas = {this.state.tareas} 
        eliminarTarea={this.eliminarTarea}
        realizarTarea={this.realizarTarea}
        />

      </div>
      </div>

            
          </div>
        
      }}>

        </Route>

      <Route path= '/usuarios' component= {ListaUsuarios} />

      </Router>

      </div>
    )

  }
}
 

export default App;
