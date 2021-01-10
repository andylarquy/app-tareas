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
            getByTestId('data-testid=navbar-cantidad-de-tareas').contains(5)
        });

        describe('Cuando creamos una nueva tarea', () => {
            beforeEach(() => {
                getByTestId('data-testid=formulario-titulo-input').type('Titulo')
                getByTestId('data-testid=formulario-responsable-input').type('Responsable')
                getByTestId('data-testid=formulario-descripcion-input').type('Descripcion')
                getByTestId('data-testid=formulario-guardar-button').click()

            });
            it('El contador de tareas aumenta', () => {
                getByTestId('data-testid=navbar-cantidad-de-tareas').contains(6)
            });
        });
    });

});