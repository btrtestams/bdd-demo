package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Login extends BasePage {

	public Login(WebDriver driver) {
		super(driver);
	}	

	@FindBy(id = "UserName")
	WebElement userNameTextField;
	
	@FindBy(id = "Password")
	WebElement passwordTextField;
	
	@FindBy(css = "[value='Sign In']")
	WebElement signInButton;

	public void inputUserName(String username) {
		userNameTextField.sendKeys(username);
	}
	
	public void inputPassword(String username) {
		passwordTextField.sendKeys(username);
	}

	public void clickSubmit() {
		signInButton.click();
	}
}