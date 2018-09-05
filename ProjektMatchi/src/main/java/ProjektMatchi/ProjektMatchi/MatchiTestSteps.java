package ProjektMatchi.ProjektMatchi;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MatchiTestSteps {
	
	SeleniumTestMethods stm = new SeleniumTestMethods();
	
	
	// Userstory6: Log in to Machi website//
	
	@Given("^I am on the Machi site$")
	public void i_am_on_the_Machi_site() throws Throwable {
	    stm.goToPage("https://beta1.matchi.se");
	}

	@Given("^I have not logged in$")
	public void i_have_not_logged_in() throws Throwable {
	    
	}

	@When("^I use username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void i_use_username_and_password(String arg1, String arg2) throws Throwable {
	    stm.logInAddUserAndPass(arg1, arg2);
	}


	@When("^I click the log in button$")
	public void i_click_the_log_in_button() throws Throwable {
	    stm.clickByClassName("btn-success");
	}

	@Then("^I am logged in$")
	public void i_am_logged_in() throws Throwable {
	   if(!stm.getTextByXpath("//*[@id=\"wrap-content\"]/section[1]/div/div/div/div[1]/div[1]/div[2]/h4/a").equals("Mjuk Varutestare")) {
		   stm.quitWebDriver();
		   throw new Exception();
	   }else {
		   stm.quitWebDriver();
	   }
	}

	@Given("^I am logged in to Matchi$")
	public void i_am_logged_in_to_Matchi() throws Throwable {
	    stm.goToPage("https://beta1.matchi.se");
		stm.login();
	}

	@Given("^have chosen a sport hall$")
	public void have_chosen_a_sport_hall() throws Throwable {
	    stm.goToPage("https://beta1.matchi.se/facilities/honots");
	}

	@When("^I search for available courts$")
	public void i_search_for_available_courts() throws Throwable {
	    
	}

	@When("^chosen a specific court$")
	public void chosen_a_specific_court() throws Throwable {
	    
	}

	@When("^chosen a specific time$")
	public void chosen_a_specific_time() throws Throwable {
	    stm.clickByXPath("//*[@id=\"schedule\"]/div/div/div[2]/table/tbody/tr[2]/td[2]/table/tbody/tr/td[10]");
	}

	@Then("^I can book a court$")
	public void i_can_book_a_court() throws Throwable {
		if(!stm.getTextByXpath("//*[@id=\"userBookingModal\"]/div[1]/div/div[2]/h1").contains("Tack för din bokning!")) {
			throw new Exception();
		}else {
		stm.delay(1500);
		stm.clickByClassName("btn-success");
		stm.clickByXPath("//*[@id=\"schedule\"]/div/div/div[2]/table/tbody/tr[2]/td[2]/table/tbody/tr/td[10]");
		stm.delay(1500);
		stm.clickByClassName("btn-danger");
		stm.quitWebDriver();
		}
	}

	

	@When("^click on the Boka flera button$")
	public void click_on_the_button() throws Throwable {
	    stm.clickByLinkText("Boka flera");
	}
	
	@When("^choose three court times$")
	public void choose_three_court_times() throws Throwable {
		stm.clickByXPath("//*[@id=\"schedule\"]/div/div/div[2]/table/tbody/tr[2]/td[2]/table/tbody/tr/td[10]");
		stm.clickByXPath("//*[@id=\"schedule\"]/div/div/div[2]/table/tbody/tr[2]/td[2]/table/tbody/tr/td[11]");
		stm.clickByXPath("//*[@id=\"schedule\"]/div/div/div[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td[12]");
		 stm.clickByLinkText("Boka (3)");
	}
	
	@Then("^I can book more than one court$")
	public void i_can_book_more_than_one_court() throws Throwable {
		if(!stm.getTextByXpath("//*[@id=\"userBookingModal\"]/div[1]/div/div[2]/h1").contains("Tack för din bokning!")) {
			throw new Exception();
		}else {
		stm.delay(1500);
		stm.clickByClassName("btn-success");
		stm.clickByXPath("//*[@id=\"schedule\"]/div/div/div[2]/table/tbody/tr[2]/td[2]/table/tbody/tr/td[10]");
		stm.delay(1500);
		stm.clickByClassName("btn-danger");
		stm.clickById("cancelCloseBtn");
		stm.delay(1500);
		stm.clickByXPath("//*[@id=\"schedule\"]/div/div/div[2]/table/tbody/tr[2]/td[2]/table/tbody/tr/td[11]");
		stm.delay(1500);
		stm.clickByClassName("btn-danger");
		stm.clickById("cancelCloseBtn");
		stm.delay(1500);
		stm.clickByXPath("//*[@id=\"schedule\"]/div/div/div[2]/table/tbody/tr[3]/td[2]/table/tbody/tr/td[12]");
		stm.delay(1500);
		stm.clickByClassName("btn-danger");
		stm.clickById("cancelCloseBtn");
		stm.quitWebDriver();
		}
	}

	
	//Userstory2: Select activity date and time. 
	
	@When("^I select boka$")
	public void i_select_boka() throws Throwable {
	    stm.clickByXPath("//*[@id=\"navbar-collapse\"]/ul[1]/li[1]/a");
	}

	@When("^I search for \"([^\"]*)\"$")
	public void i_search_for(String arg1) throws Throwable {
	    stm.enterSearchTextCss(arg1, "#q");
	}

	@When("^I click a time$")
	public void i_click_a_time() throws Throwable {
	    stm.clickByXPath("//*[@id=\"slots_18\"]/ul/li[1]/button");
	}

	@Then("^I see the available courts for that time$")
	public void i_see_the_available_courts_for_that_time() throws Throwable {
	  			
		if (!stm.getTextByXpath("//*[@class=\"list-group-item\"]/h6").contains("Tillgängliga tider")) {
			stm.quitWebDriver();
			throw new Exception();
		} else {
			
			stm.quitWebDriver();
		}	   
	}
		
	
	//User story1: Search for a sport hall
	
	@When("^I enter the \"([^\"]*)\" of a Sport Hall$")
	public void i_enter_the_of_a_Sport_Hall(String arg1) throws Throwable {
	     
		stm.clickByXPath("//a[contains(text(),'Anläggningar')]");
		stm.enterSearchTextXpath(arg1, "//*[@id=\"q\"]");
		
	}
	
	@When("^As I click the name of the Sport Hall$")
	public void as_I_click_the_name_of_the_Sport_Hall() throws Throwable {
	    stm.clickByXPath("//*[@id=\"submit\"]");
	    stm.clickLink();
	}

	@Then("^Can choose the clicked Sport Hall for booking$")
	public void can_choose_the_clicked_Sport_Hall_for_booking() throws Throwable {
	    //stm.clickByXPath("//*[@id=\"facilities-result\"]/div/div[1]/div/div[1]/div[1]/div/div[2]/h3/a");
	    
	}
	@When("^I click book$")
	public void i_click_book() throws Throwable {
		stm.delay(1500);
	    stm.clickById("btnSubmit");
	}
	//Payment Method 
	
	@When("^I choose Nytt konto-/kreditkort$")
	public void i_choose_Nytt_konto_kreditkort() throws Throwable {
	    stm.clickByXPath("//*[@id=\"confirmForm\"]/div[2]/div[3]/div[2]/div[2]/div/label");
	    stm.clickByXPath("//*[@id=\"btnSubmit\"]");
	}

	@When("^I enter card details: \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
	public void i_enter_card_details(String arg1, String arg2, String arg3, String arg4, String arg5) throws Throwable {
		
		stm.enterSearchTextXpath(arg1, "//*[@id=\"adyen-encrypted-form\"]/div[1]/div/div/div[2]/div[1]/div/input");
		stm.enterSearchTextXpath(arg2, "//*[@id=\"adyen-encrypted-form\"]/div[1]/div/div/div[2]/div[2]/input");
		stm.clickByXPath("//*[@id=\"adyen-encrypted-form\"]/div[1]/div/div/div[2]/div[3]/select/option["+(Integer.parseInt(arg3)+1)+"]");
		stm.selectYear(arg4);	
		stm.enterSearchTextXpath(arg5,"//*[@id=\"adyen-encrypted-form\"]/div[1]/div/div/div[2]/div[5]/div/input");
		stm.clickByXPath("//*[@id=\"adyen-encrypted-form\"]/div[2]/input");
		
		
	}


	@Then("^I can finalize my booking$")
	public void i_can_finalize_my_booking() throws Throwable {
		stm.clickByXPath("//*[@id=\"userBookingModal\"]/div[1]/div/div[3]/a");
	}
}


