class LoginPage {
    async open() {
        await browser.url('/');
    }

    get buttonLogin() {
        return $('.login');
    }

    get inputEmail() {
        return $('body #email');
    }

    get inputPassword() {
        return $('body #passwd');
    }

    get buttonSignIn() {
        return $('body #SubmitLogin');
    }

    get userLoggedIn() {
        return $('.account');
    }

    get welcomeMessage() {
        return $('.info-account');
    }

    async login(email: string, password: string) {
        await this.buttonLogin.click();

        await this.inputEmail.waitForEnabled();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);

        await this.buttonSignIn.click();
        await this.welcomeMessage.waitForExist();
    }
}

export default new LoginPage();
