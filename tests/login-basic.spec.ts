import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Successful login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Locked user shows error message', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');

  await loginPage.expectErrorMessage('Epic sadface: Sorry, this user has been locked out.');
});