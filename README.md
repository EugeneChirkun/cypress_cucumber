# cypress_cucumber

# Cypress Xpath.
Is deprecated, but still works.
Run
`npm install -D cypress-xpath`
Then include in your project's support file
`require('cypress-xpath')`

## Use of Cypress Xpath.

After installation your cy object will have xpath command.

`it('finds list items', () => {cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3);})`

You can also chain xpath off of another command.

`it('finds list items', () => {cy.xpath('//ul[@class="todo-list"]').xpath('./li').should('have.length', 3);});`

As with other cy commands, it is scoped by cy.within().

`it('finds list items', () => {cy.xpath('//ul[@class="todo-list"]').within(() => {cy.xpath('./li').should('have.length', 3);});});`

To properly load the types for cy.xpath command, add to your spec file the following comment.

`/// <reference types="cypress-xpath" />`

# Running specified tag

In command line pass the command:
 `npx cypress run -e TAGS='@your_tag' --headed`

Multiple tags can be used. Is possible to skip some specific tag, adding before it `and not`. 
`npx cypress run -e TAGS='(@your_tag_1 or @your_tag_2) and not @tag_to_ignore' --headed`

Possible to specify feature file to run with command
`npx cypress run cypress/e2e/*.feature --headed`

# Reporting

## HTML-reports

Go in `package.json` 
add in section `cypress-cucumber-preprocessor` lines
`"html": {
    "enabled": true,
    "output": "cypress/reports/cucumber-html/cucumber-report.html"
},
"messages": {
      "enabled": true,
      "output": "cypress/reports/cucumber-ndjson/cucumber-report.json"
    }`

Report won't be created on `npx cypress open` and running tests. Instead should be used `npx cypress run` command.

## JSON-reports

To have possibility to generate reports as *.json file, "Cucumber Standalone JSON Formatter" needed.

All instructions can be found here: https://github.com/cucumber/json-formatter#readme

Then go in `package.json` 
add in section `cypress-cucumber-preprocessor` lines

`"json": {
      "enabled": true,
      "formatter": "cucumber-json-formatter",
      "output": "cypress/reports/cucumber-json/cucumber-report.json"
    }`

## Multiple Cucumber HTML Reporter

All instructions can be found here: https://www.npmjs.com/package/multiple-cucumber-html-reporter