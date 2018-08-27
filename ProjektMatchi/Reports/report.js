$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ProjektMatchi/ProjektMatchi/BookACourt.feature");
formatter.feature({
  "line": 1,
  "name": "As customer I want to be able to book one or several courts.",
  "description": "",
  "id": "as-customer-i-want-to-be-able-to-book-one-or-several-courts.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Book a court.",
  "description": "",
  "id": "as-customer-i-want-to-be-able-to-book-one-or-several-courts.;book-a-court.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am logged in to Matchi",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "have chosen a sport hall",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I search for available courts",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "chosen a specific court",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "chosen a specific time",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I can book a court",
  "keyword": "Then "
});
formatter.match({
  "location": "MatchiTestSteps.i_am_logged_in_to_Matchi()"
});
formatter.result({
  "duration": 17302572070,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.have_chosen_a_sport_hall()"
});
formatter.result({
  "duration": 5620533389,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_search_for_available_courts()"
});
formatter.result({
  "duration": 38985,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_court()"
});
formatter.result({
  "duration": 39396,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_time()"
});
formatter.result({
  "duration": 229466467,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_can_book_a_court()"
});
formatter.result({
  "duration": 10995428,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat ProjektMatchi.ProjektMatchi.MatchiTestSteps.i_can_book_a_court(MatchiTestSteps.java:76)\r\n\tat ✽.Then I can book a court(ProjektMatchi/ProjektMatchi/BookACourt.feature:10)\r\n",
  "status": "pending"
});
formatter.scenario({
  "line": 12,
  "name": "Book several courts",
  "description": "",
  "id": "as-customer-i-want-to-be-able-to-book-one-or-several-courts.;book-several-courts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am logged in to Matchi",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "have chosen a sport hall",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I search for available courts",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on the \"Boka flera\" button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "chosen a specific court",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "chosen a specific time",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can book more than one court",
  "keyword": "Then "
});
formatter.match({
  "location": "MatchiTestSteps.i_am_logged_in_to_Matchi()"
});
formatter.result({
  "duration": 15646932019,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.have_chosen_a_sport_hall()"
});
formatter.result({
  "duration": 6675744030,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_search_for_available_courts()"
});
formatter.result({
  "duration": 38164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boka flera",
      "offset": 14
    }
  ],
  "location": "MatchiTestSteps.click_on_the_button(String)"
});
formatter.result({
  "duration": 5692229,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat ProjektMatchi.ProjektMatchi.MatchiTestSteps.click_on_the_button(MatchiTestSteps.java:84)\r\n\tat ✽.And click on the \"Boka flera\" button(ProjektMatchi/ProjektMatchi/BookACourt.feature:16)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_court()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_time()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MatchiTestSteps.i_can_book_more_than_one_court()"
});
formatter.result({
  "status": "skipped"
});
});