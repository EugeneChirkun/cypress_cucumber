@contact_us @regression

Feature: WebdriverUniversite - Contact Us Page

    Background: Preconditions
        Given Given I navigate to the WebdriverUniversity contact us page

    Scenario: Valid Contact Us Form Submission

        And I type a first name "Danny"
        And I type a last name "Boile"
        And I type an email address "dboile@testmail.com"
        And I type a comment "this is my comment text 1233 for Valid Contact Us Form Submission" within a comment field
        And I click on the submit button
        Then I should be presented with a successfull contact us submission message

    Scenario: Invalid Contact Us Form Submission

        And I type a first name "Norah"
        And I type a last name "Jones"
        And I type a comment "this is my comment text 1233 for Invalid Contact Us Form Submission" within a comment field
        And I click on the submit button
        Then I should be presented with a unsuccessfull contact us submission message

    @smoke
    Scenario Outline: Validate "Contact us" page

        And I type a first name '<firstName>' and a last name '<lastName>'
        And I type an email address '<emailAddress>' and a comment '<commentText>'
        And I click on the submit button
        Then I should be presented with a header text '<headerMessage>'

        Examples:
            | firstName | lastName | emailAddress                 | commentText                | headerMessage                |
            | John      | Johnes   | john_johnes@testmail.com     | This is my example comment | Thank You for your Message!  |
            | Sarah     | Connor   | john.connor.mom@testmail.com | Stop the Terminator        | Thank You for your Message!  |
            | Billie    | Milligan | Billie_M                     | My name is Billie          | Error: Invalid email address |
