import React, { Component } from 'react'
import Tarea from './Tarea'
import PropTypes from 'prop-types'


export default class Tareas extends Component {
    render() {

        const {tareas} = this.props

        return (tareas.map(tarea => <Tarea tarea = {tarea} key = {tarea.id}/>))
    }
}

Tareas.propTypes = {

    tareas: PropTypes.array.isRequired

}
