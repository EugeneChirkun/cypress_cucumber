Feature: WebdriverUniversite - Contact Us Page

    Background: Preconditions
        Given I navigate to the WebdriverUniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission

        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successfull contact us submission message

    Scenario: Invalid Contact Us Form Submission

        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessfull contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data

        And I type a specific first name "Michael"
        And I type a specific last name "Dowson"
        And I type a specific email address "mdowson@testmail.com"
        And I type a specific comment "this is my comment text" and a number 46545121 within a comment field
        And I click on the submit button
        Then I should be presented with a successfull contact us submission message

    Scenario Outline: Validate "Contact us" page

        And I type a first name <firstName> and a last name '<lastName>'
        And I type an email address '<emailAddress>' and a comment '<commentText>'
        And I click on the submit button
        Then I should be presented with a header text '<headerMessage>'

        Examples:
            | firstName | lastName | emailAddress                 | commentText                | headerMessage                |
            | John      | Johnes   | john_johnes@testmail.com     | This is my example comment | Thank You for your Message!  |
            | Sarah     | Connor   | john.connor.mom@testmail.com | Stop the Terminator        | Thank You for your Message!  |
            | Billie    | Milligan | Billie_M                     | My name is Billie          | Error: Invalid email address |
