package testcases;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

import pages.Login;
import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.And;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;

public class LoginStepDefinitions {

	WebDriver driver = null;
	Login login;
	
	@Before
	public void setup() {
		driver = new FirefoxDriver();
		driver.get("https://platform.cinchcast.com/");
		login = PageFactory.initElements(driver, Login.class);
	}
	
	@Given("^i am on the login page$")
	public void i_am_on_the_login_page() {
		
	}
	
	@When("^i input username with \"([^\"]*)\"$")
	public void i_input_username_with(String username) {
		login.inputUserName(username);
	}
	
	@And("^i input password with \"([^\"]*)\"$")
	public void i_input_password_with(String password) {
		login.inputPassword(password);
	}
	
	@And("^click the submit button$")
	public void click_the_submit_button() {
		login.clickSubmit();
	}
	
	@Then("^i am successfully logged into my account$")
	public void i_am_successfully_logged_into_my_account() {
		
	}

	
	@After
	public void teardown() {
		driver.close();
	}
}
