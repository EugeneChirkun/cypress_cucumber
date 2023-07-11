Feature: WebdriverUniversity - Login Page

    Scenario Outline: Validate valid & invalid login credentials

        Given I navigate to the WebdriverUniversity homepage
        When I click on the login portal button
        And I type an username <username>
        And I type a password <password>
        And I click on the login button
        Then I shuold be presented with an alert box which contains text '<expectedAlertText>'

        Examples:
            | username  | password     | expectedAlertText    |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | Password123  | validation failed    |
            | myName    | myPassword   | validation failed    |
