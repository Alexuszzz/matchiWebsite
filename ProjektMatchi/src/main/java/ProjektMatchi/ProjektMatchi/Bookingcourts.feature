Feature: As customer I want to be able to book one or several courts.

Scenario: Book a court.

Given I am logged in to Matchi
And have chosen a sport hall
When I search for available courts
And chosen a specific time
And I click book
Then I can book a court

Scenario: Book several courts
Given I am logged in to Matchi
And have chosen a sport hall
When I search for available courts
And click on the Boka flera button
And choose three court times
And I click book
Then I can book more than one court