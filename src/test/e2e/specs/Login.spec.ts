import { performancetotal } from 'wdio-performancetotal-service';
import { SystemMessages } from '../constants/SystemMessages';
import LoginPage from '../pages/Login.page';
import login from '../../data/Login.json';

describe('Authentication page.', () => {
    before(async () => {
        await LoginPage.open();
    });

    it('Displays login message successfully.', async () => {
        performancetotal.sampleStart('LoginProcess');

        await LoginPage.login(login.user.login, login.user.password);

        expect(await LoginPage.welcomeMessage).toHaveText(
            SystemMessages.FEEDBACK_USER_LOGGED,
        );

        performancetotal.sampleEnd('LoginProcess');
    });

    it('Displays user name on the page.', async () => {
        expect(await LoginPage.userLoggedIn).toHaveText(login.user.name);
    });
});
