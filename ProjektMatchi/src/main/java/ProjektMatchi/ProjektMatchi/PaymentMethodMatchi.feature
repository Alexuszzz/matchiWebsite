Feature: As a customer I want to be able choose different payment methods for my booking.
#
#Scenario: Pay booked court with Nytt konto-/kreditkort
#
#Given I am logged in to Matchi
#And have chosen a sport hall
#And chosen a specific court
#And chosen a specific time
#When I choose Nytt konto-/kreditkort
#And I enter card details: "2223000048410010", "Mjukvaru Testare", "10", "2020", "737" 
#Then I can finalize my booking
#
#Scenario: Pay booked court with Nytt konto-/kreditkort and assert wrong CVC
#
#Given I am logged in to Matchi
#And have chosen a sport hall
#And chosen a specific court
#And chosen a specific time
#When I choose Nytt konto-/kreditkort
#And I enter card details: "2223000048410010", "Mjukvaru Testare", "10", "2020", "123" 
#Then I can finalize my booking







#2223000048410010 ",name "Mjukvaru testare" and date of the card"10/2020" CVC "737".


Scenario Outline: Payment

Given I am logged in to Matchi
And have chosen a sport hall
And chosen a specific court
And chosen a specific time
When I choose Nytt konto-/kreditkort
And I enter card details <card number> ,<first and last name>, <card month>, <card year>, <card CVC> 
Then I can finalize my booking

Examples:
|card number						|first and last name			|	card month	|card year		|card CVC|
|"2223000048410010"			|"Mjukvaru Testare"				|"10"					|"2020"				|"737"|
|"2223000048410010"			|"Mjukvaru Testare"				|"10"					|"2020"				|"562"|
													
