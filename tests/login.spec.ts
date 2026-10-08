import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginCases } from '../test-data/users';

for (const loginCase of loginCases) {
  test(`login con ${loginCase.username}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(loginCase.username, loginCase.password);

    if (loginCase.expectedUrl) {
      await expect(page).toHaveURL(loginCase.expectedUrl);
    } else if (loginCase.expectedError) {
      await loginPage.expectErrorMessage(loginCase.expectedError);
    }
  });
}