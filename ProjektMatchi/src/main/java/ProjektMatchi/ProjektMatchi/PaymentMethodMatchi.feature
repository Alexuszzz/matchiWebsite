Feature: As a customer I want to be able choose different payment methods for my booking.


Scenario Outline: Payment with Nytt konto-/kreditkort with correct CVC

Given I am logged in to Matchi
And have chosen a sport hall
And chosen a specific court
And chosen a specific time
When I choose Nytt konto-/kreditkort
And I enter card details <card number> ,<first and last name>, <card month>, <card year>, <card CVC> 
Then I can finalize my booking

Examples:

#type name of card details in quatation marks between pipes: |"name" |
|card number						|first and last name			|	card month	|card year		|card CVC|
|"2223000048410010"			|"Mjukvaru Testare"				|"10"					|"2020"				|"737"|


Scenario Outline: Payment with Nytt konto-/kreditkort with wrong CVC

Given I am logged in to Matchi
And have chosen a sport hall
And chosen a specific court
And chosen a specific time
When I choose Nytt konto-/kreditkort
And I enter card details with wrong CVC <card number> ,<first and last name>, <card month>, <card year>, <card CVC> 
Then My booking wont pass

Examples:
|card number						|first and last name			|	card month	|card year		|card CVC|

|"2223000048410010"			|"Mjukvaru Testare"				|"10"					|"2020"				|"123"| 
													
