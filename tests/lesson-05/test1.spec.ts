import { test } from '@playwright/test';
const url= 'https://material.playwrightvn.com/'
test('Test 1: Điền vào trang register page', async ({ page }) => {
    
        await page.goto(url);
        await page.getByRole('link', { name: /Bài học 1: Register Page/ }).click();
        await page.getByLabel('username').fill('Duc');
        await page.getByLabel('email').fill('ducquach@something.com');
        await page.locator('#male').check();
        await page.locator('#traveling').check();
        await page.getByLabel('interests').selectOption('technology')
        await page.getByLabel('country').selectOption('canada');
        await page.getByLabel('date of birth').fill('1996-02-23')
        await page.locator('#bio').fill("Biography")
        await page.locator('#rating').click()
        await page.getByLabel('Profile Picture').setInputFiles("data\\pic.txt")
        await page.waitForTimeout(3000)
        await page.getByRole('button', { name: 'Register' }).click();
        
});