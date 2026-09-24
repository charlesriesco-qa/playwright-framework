import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login exitoso con usuario válido', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  // 2. completar usuario y contraseña
  await loginPage.login('standard_user', 'secret_sauce');

  // 4. verificar que llegamos a inventory.html
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('usuario bloqueado muestra mensaje de error', async ({ page }) => {
  // 1. ir a la página de login
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  // 2. completar usuario 'locked_out_user' y password 'secret_sauce'
  await loginPage.login('locked_out_user', 'secret_sauce');

  // 3. verificar que aparece el mensaje de error
  await loginPage.expectErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  // pista: el locator del mensaje de error también tiene un data-test.
  //         Buscalo con el Codegen o inspeccionando el elemento en el navegador (click derecho > Inspeccionar)
  //         y verificalo con: await expect(locator).toContainText('texto esperado')
});