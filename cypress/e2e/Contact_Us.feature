Feature: WebdriverUniversite - Contact Us Page

    Scenario: Valid Contact Us Form Submission

        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successfull contact us submission message

    Scenario: Invalid Contact Us Form Submission

        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessfull contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data

        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button
        And I type a specific first name "Michael"
        And I type a specific last name "Dowson"
        And I type a specific email address "mdowson@testmail.com"
        And I type a specific comment "this is my comment text" and a number 46545121 within a comment field
        And I click on the submit button
        Then I should be presented with a successfull contact us submission message
