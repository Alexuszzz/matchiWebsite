$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ProjektMatchi/ProjektMatchi/Bookingcourts.feature");
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
  "duration": 9497632381,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.have_chosen_a_sport_hall()"
});
formatter.result({
  "duration": 1813361143,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_search_for_available_courts()"
});
formatter.result({
  "duration": 31717,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_time()"
});
formatter.result({
  "duration": 425939260,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_click_book()"
});
formatter.result({
  "duration": 2451633621,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_can_book_a_court()"
});
formatter.result({
  "duration": 23379037,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-CL0U0HP0\u0027, ip: \u0027100.71.28.218\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat ProjektMatchi.ProjektMatchi.SeleniumTestMethods.getTextByXpath(SeleniumTestMethods.java:43)\r\n\tat ProjektMatchi.ProjektMatchi.MatchiTestSteps.i_can_book_a_court(MatchiTestSteps.java:73)\r\n\tat ✽.Then I can book a court(ProjektMatchi/ProjektMatchi/Bookingcourts.feature:10)\r\n",
  "status": "failed"
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
  "duration": 9290919450,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.have_chosen_a_sport_hall()"
});
formatter.result({
  "duration": 1518623220,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_search_for_available_courts()"
});
formatter.result({
  "duration": 44932,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.click_on_the_button()"
});
formatter.result({
  "duration": 410975363,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.choose_three_court_times()"
});
formatter.result({
  "duration": 654006640,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_click_book()"
});
formatter.result({
  "duration": 2351730320,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_can_book_more_than_one_court()"
});
formatter.result({
  "duration": 1000589,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-CL0U0HP0\u0027, ip: \u0027100.71.28.218\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat ProjektMatchi.ProjektMatchi.SeleniumTestMethods.getTextByXpath(SeleniumTestMethods.java:43)\r\n\tat ProjektMatchi.ProjektMatchi.MatchiTestSteps.i_can_book_more_than_one_court(MatchiTestSteps.java:102)\r\n\tat ✽.Then I can book more than one court(ProjektMatchi/ProjektMatchi/Bookingcourts.feature:19)\r\n",
  "status": "failed"
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
formatter.result({
  "duration": 6260312010,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_have_not_logged_in()"
});
formatter.result({
  "duration": 35870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mjukvarutestare4@mailinator.com",
      "offset": 16
    },
    {
      "val": "mjukvarutestare",
      "offset": 63
    }
  ],
  "location": "MatchiTestSteps.i_use_username_and_password(String,String)"
});
formatter.result({
  "duration": 1290641929,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_click_the_log_in_button()"
});
formatter.result({
  "duration": 1150548190,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_am_logged_in()"
});
formatter.result({
  "duration": 894893260,
  "status": "passed"
});
formatter.uri("ProjektMatchi/ProjektMatchi/PaymentMethodMatchi.feature");
formatter.feature({
  "line": 1,
  "name": "As a customer I want to be able choose different payment methods for my booking.",
  "description": "",
  "id": "as-a-customer-i-want-to-be-able-choose-different-payment-methods-for-my-booking.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Pay booked court with Nytt konto-/kreditkort",
  "description": "",
  "id": "as-a-customer-i-want-to-be-able-choose-different-payment-methods-for-my-booking.;pay-booked-court-with-nytt-konto-/kreditkort",
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
  "name": "chosen a specific court",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "chosen a specific time",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I choose Nytt konto-/kreditkort",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter card details: \"2223000048410010\", \"Mjukvaru Testare\", \"10\", \"2020\", \"737\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can finalize my booking",
  "keyword": "Then "
});
formatter.match({
  "location": "MatchiTestSteps.i_am_logged_in_to_Matchi()"
});
formatter.result({
  "duration": 8620210909,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.have_chosen_a_sport_hall()"
});
formatter.result({
  "duration": 1889958659,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_court()"
});
formatter.result({
  "duration": 26430,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_time()"
});
formatter.result({
  "duration": 334487346,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_choose_Nytt_konto_kreditkort()"
});
formatter.result({
  "duration": 33316881894,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.xpath: //*[@id\u003d\"confirmForm\"]/div[2]/div[3]/div[2]/div[2]/div/label (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat ProjektMatchi.ProjektMatchi.SeleniumTestMethods.clickByXPath(SeleniumTestMethods.java:57)\r\n\tat ProjektMatchi.ProjektMatchi.MatchiTestSteps.i_choose_Nytt_konto_kreditkort(MatchiTestSteps.java:187)\r\n\tat ✽.When I choose Nytt konto-/kreditkort(ProjektMatchi/ProjektMatchi/PaymentMethodMatchi.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@id\u003d\"confirmForm\"]/div[2]/div[3]/div[2]/div[2]/div/label\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027LAPTOP-CL0U0HP0\u0027, ip: \u0027100.71.28.218\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:657)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:654)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat ProjektMatchi.ProjektMatchi.SeleniumTestMethods.clickByXPath(SeleniumTestMethods.java:57)\r\n\tat ProjektMatchi.ProjektMatchi.MatchiTestSteps.i_choose_Nytt_konto_kreditkort(MatchiTestSteps.java:187)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2223000048410010",
      "offset": 23
    },
    {
      "val": "Mjukvaru Testare",
      "offset": 43
    },
    {
      "val": "10",
      "offset": 63
    },
    {
      "val": "2020",
      "offset": 69
    },
    {
      "val": "737",
      "offset": 77
    }
  ],
  "location": "MatchiTestSteps.i_enter_card_details(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MatchiTestSteps.i_can_finalize_my_booking()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Pay booked court with Nytt konto-/kreditkort and assert wrong CVC",
  "description": "",
  "id": "as-a-customer-i-want-to-be-able-choose-different-payment-methods-for-my-booking.;pay-booked-court-with-nytt-konto-/kreditkort-and-assert-wrong-cvc",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am logged in to Matchi",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "have chosen a sport hall",
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
  "name": "I choose Nytt konto-/kreditkort",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter card details: \"2223000048410010\", \"Mjukvaru Testare\", \"10\", \"2020\", \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can finalize my booking",
  "keyword": "Then "
});
formatter.match({
  "location": "MatchiTestSteps.i_am_logged_in_to_Matchi()"
});
formatter.result({
  "duration": 8615491151,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.have_chosen_a_sport_hall()"
});
formatter.result({
  "duration": 1281837503,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_court()"
});
formatter.result({
  "duration": 19257,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_time()"
});
formatter.result({
  "duration": 236236714,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_choose_Nytt_konto_kreditkort()"
});
