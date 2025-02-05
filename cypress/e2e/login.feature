Feature: Login
    Scenario Outline: <scenario>
    Given I am on the login page
    When I login with "<email>" and "<password>"
    Then I should see the message "<message>"

    Examples:
      | scenario                        | email            | password | message                           |
      | Login with valid credentials    | test@example.com | 1234     | Has iniciado sesión correctamente.|
      | Login with invalid email        | wrong@mail.com   | wrong    | Invalid credentials               |
      | Login with invalid password     | test@example.com | 125      | Invalid credentials               |