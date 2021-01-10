/// <reference types="cypress" />

import { getByTestId } from "../utils"

describe('Navigation Bar Suite', () => {
    
    describe('Cuando ingresamos a la pagina', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it("Se muestra el texto 'Mis tareas'", () => {
            cy.contains('MIS TAREAS')
        });

        it("Se muestra la cantidad de tareas en el sistema", () => {
            getByTestId('navbar-cantidad-de-tareas').contains(5)
        });

        describe('Cuando creamos una nueva tarea', () => {
            beforeEach(() => {
                getByTestId('formulario-titulo-input').type('Titulo')
                getByTestId('formulario-responsable-input').type('Responsable')
                getByTestId('formulario-descripcion-input').type('Descripcion')
                getByTestId('formulario-guardar-button').click()

            });
            it('El contador de tareas aumenta', () => {
                getByTestId('navbar-cantidad-de-tareas').contains(6)
            });
        });
    });

});