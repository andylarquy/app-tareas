/// <reference types="cypress" />

import { getByTestId } from "../utils"

describe('Formulario Tareas Suite', () => {

    describe('Cuando ingresamos a la pagina', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Se muestra el formulario para agregar una tarea nueva', () => {
            getByTestId('data-testid=formulario-titulo')
        })

        it('El selector de prioridades no puede ser nulo', () => {
            getByTestId('data-testid=formulario-prioridades-selector').find('option').then(options => {
                const selectValues = [...options].map(o => o.value)
                expect(selectValues).to.deep.eq(['Baja', 'Media', 'Alta'])
              })
        });

        it("El selector de prioridades por defecto aparece en 'Baja' ", () => {
            getByTestId('data-testid=formulario-prioridades-selector').contains('Baja')
        });

        describe('Si hacemos click en guardar', () => {

            const clickEnGuardar = () => getByTestId('data-testid=formulario-guardar-button').click()
            beforeEach(() => {
                clickEnGuardar()
            })

            it('El sistema arroja un error indicando que la tarea debe tener un titulo', () => {
                cy.contains('La tarea debe tener un titulo')
            })

            describe('Si ademas ingresamos un titulo y luego guardamos', () => {
                beforeEach(() => {
                    getByTestId('data-testid=formulario-titulo-input').type('Titulo')
                    clickEnGuardar()
                })

                it('El sistema arroja un error indicando que la tarea debe tener un responsable', () => {
                    cy.contains('La tarea debe tener un responsable')
                })

                describe('Si ademas ingresamos un responsable y luego guardamos', () => {
                    beforeEach(() => {
                        getByTestId('data-testid=formulario-responsable-input').type('Responsable')
                        clickEnGuardar()
                    })

                    it('El sistema arroja un error indicando que la tarea debe tener una descripcion', () => {
                        cy.contains('La tarea debe tener una descripcion')
                    })

                    describe('Si ademas ingresamos una descripcion y luego guardamos', () => {
                        beforeEach(() => {
                            getByTestId('data-testid=formulario-descripcion-input').type('Descripcion')
                            clickEnGuardar()
                        })
    
                        it('El sistema NO muestra un error', () => {
                            cy.contains('La tarea debe tener un titulo').should('not.exist')
                            cy.contains('La tarea debe tener un responsable').should('not.exist')
                            cy.contains('La tarea debe tener una descripcion').should('not.exist')
                        })

                        it('El sistema genera una nueva tarea', () => {
                            getByTestId('data-testid=tarea-titulo').contains('Titulo')
                            getByTestId('data-testid=tarea-responsable').contains('Responsable')
                            getByTestId('data-testid=tarea-descripcion').contains('Descripcion')
                        });
                    })
                })
            })
        })
    })
})