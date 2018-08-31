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
  "name": "I click book",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can book a court",
  "keyword": "Then "
});
formatter.match({
  "location": "MatchiTestSteps.i_am_logged_in_to_Matchi()"
});
formatter.result({
  "duration": 16349975440,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.have_chosen_a_sport_hall()"
});
formatter.result({
  "duration": 4577319478,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_search_for_available_courts()"
});
formatter.result({
  "duration": 37344,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_court()"
});
formatter.result({
  "duration": 54169,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.chosen_a_specific_time()"
});
formatter.result({
  "duration": 271377047,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_click_book()"
});
formatter.result({
  "duration": 1827111933,
  "status": "passed"
});
formatter.match({
  "location": "MatchiTestSteps.i_can_book_a_court()"
});
formatter.result({
  "duration": 7559853351,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Book several courts",
  "description": "",
  "id": "as-customer-i-want-to-be-able-to-book-one-or-several-courts.;book-several-courts",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am logged in to Matchi",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "have chosen a sport hall",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I search for available courts",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on the \"Boka flera\" button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "chosen a specific court",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "chosen a specific time",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click book",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can book more than one court",
  "keyword": "Then "
});
formatter.match({
  "location": "MatchiTestSteps.i_am_logged_in_to_Matchi()"
});
formatter.result({
  "duration": 11810638899,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-C8K9OFL\u0027, ip: \u0027192.168.33.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\Marcu\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57490}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: 6cfa0e1ce95da534f0e97f61d8ce0540\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"navbar-collapse\"]/ul[2]/li[2]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat ProjektMatchi.ProjektMatchi.SeleniumTestMethods.logInAddUserAndPass(SeleniumTestMethods.java:27)\r\n\tat ProjektMatchi.ProjektMatchi.SeleniumTestMethods.login(SeleniumTestMethods.java:45)\r\n\tat ProjektMatchi.ProjektMatchi.MatchiTestSteps.i_am_logged_in_to_Matchi(MatchiTestSteps.java:53)\r\n\tat ✽.Given I am logged in to Matchi(ProjektMatchi/ProjektMatchi/BookACourt.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MatchiTestSteps.have_chosen_a_sport_hall()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MatchiTestSteps.i_search_for_available_courts()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
});