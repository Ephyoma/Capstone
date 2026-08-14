import loginEements from '../fixtures/pageEements/LginPage.json'

export class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.locator(loginEements.loginPage.username).fill(username);
        await this.page.locator(loginEements.loginPage.password).fill(password);
        await this.page.locator(loginEements.loginPage.loginButton).click();

    }

    async adminLogin() {

        const username = process.env.ADMIN_USERNAME;
        const password = process.env.ADMIN_PASSWRD;
        await this.login(username, password);
    }
}