import './App.css'

//REACT

import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

//COMPONENTES

import Navegacion from './components/Navegacion.jsx'
import FormularioTareas from './components/FormularioTareas.jsx'
import ListaTareas from './components/ListaTareas.jsx'
import ListaUsuarios from './components/ListaUsuarios.jsx'

//SNACKBAR
import SnackbarProvider from 'react-simple-snackbar'

class App extends Component {

  render() {
    return (
      <SnackbarProvider>
        <Router>
          <Route exact path='/' render={() => (
            <div>
              <Navegacion titulo="MIS TAREAS" />
              <FormularioTareas />
              <ListaTareas />
            </div>
          )}>
          </Route>
          <Route path='/usuarios' component={ListaUsuarios} />
        </Router>
      </SnackbarProvider>
    )
  }
}

export default App
