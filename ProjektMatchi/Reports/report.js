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
  "name": "chosen a specific time",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click book",
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
  "duration": 15369717473,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.have_chosen_a_sport_hall()"
});
formatter.result({
  "duration": 4643608030,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_search_for_available_courts()"
});
formatter.result({
  "duration": 34061,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_time()"
});
formatter.result({
  "duration": 346479505,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_click_book()"
});
formatter.result({
  "duration": 1690217746,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_can_book_a_court()"
});
formatter.result({
  "duration": 9919466307,
  "status": "passed"
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
  "name": "click on the Boka flera button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "choose three court times",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click book",
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
  "duration": 13057289159,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.have_chosen_a_sport_hall()"
});
formatter.result({
  "duration": 4466580572,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_search_for_available_courts()"
});
formatter.result({
  "duration": 58273,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.click_on_the_button(String)"
});
formatter.result({
  "duration": 1815883,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027ProjektMatchi.ProjektMatchi.MatchiTestSteps.click_on_the_button(String) in file:/C:/Users/Marcu/git/Matchi/ProjektMatchi/target/classes/\u0027 with pattern [^click on the Boka flera button$] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: And click on the Boka flera button\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "MatchiTestSteps.i_click_book()"
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
formatter.uri("ProjektMatchi/ProjektMatchi/LogInToMatchi.feature");
formatter.feature({
  "line": 1,
  "name": "As a customer I want to log in to be able to get access to the bookingsystem",
  "description": "",
  "id": "as-a-customer-i-want-to-log-in-to-be-able-to-get-access-to-the-bookingsystem",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Log in to Machi website",
  "description": "",
  "id": "as-a-customer-i-want-to-log-in-to-be-able-to-get-access-to-the-bookingsystem;log-in-to-machi-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Machi site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I have not logged in",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I use username \"mjukvarutestare4@mailinator.com\" and password \"mjukvarutestare\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click the log in button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "MatchiTestSteps.i_am_on_the_Machi_site()"
});
