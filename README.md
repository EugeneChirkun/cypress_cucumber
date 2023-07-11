# cypress_cucumber

# Cypress Xpath.
Is deprecated, but still works.
Run
`npm install -D cypress-xpath`
Then include in your project's support file
`require('cypress-xpath')`

# Use of Cypress Xpath.

After installation your cy object will have xpath command.

`it('finds list items', () => {cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3);})`

You can also chain xpath off of another command.

`it('finds list items', () => {cy.xpath('//ul[@class="todo-list"]').xpath('./li').should('have.length', 3);});`

As with other cy commands, it is scoped by cy.within().

`it('finds list items', () => {cy.xpath('//ul[@class="todo-list"]').within(() => {cy.xpath('./li').should('have.length', 3);});});`

To properly load the types for cy.xpath command, add to your spec file the following comment.

`/// <reference types="cypress-xpath" />`