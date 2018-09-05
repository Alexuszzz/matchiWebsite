Feature: Book courts by week schedual

Scenario: I book a court in the week view, at a later date
Given I am logged in to Matchi
And have chosen a sport hall
When I search for available courts
And Click visa vecka	
And I click a time later in the week
And I click book
Then I can book a court