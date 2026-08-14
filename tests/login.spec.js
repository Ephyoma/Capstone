import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
test.describe('login flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');


});

test('test', async ({ page }) => {
  //await expect(page.locator('[data-test="username"]')).toBeVisible();
  //await page.locator('[data-test="username"]').click();
  //await page.locator('[data-test="username"]').fill('standard_user');
  //await page.locator('[data-test="password"]').click();
  //await page.locator('[data-test="password"]').fill('secret_sauce');
  //await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  //await page.locator('[data-test="login-button"]').click();

  const loginPage = new LoginPage(page);

        await loginPage.adminLogin();

  
});

});