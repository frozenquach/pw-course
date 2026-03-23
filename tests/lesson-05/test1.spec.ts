import { test } from '@playwright/test';
const url= 'https://material.playwrightvn.com/'
test('Test 1: Điền vào trang register page', async ({ page }) => {
    
        await page.goto(url);
        await page.getByRole('link', { name: /Bài học 1: Register Page/ }).click();
        await page.getByLabel('username').fill('Duc');
        await page.getByLabel('email').fill('ducquach@something.com');
        await page.getByRole('radio', { name: 'Male', exact:true}).check();
        await page.getByRole('checkbox', { name: 'Traveling', exact: true }).check();
        await page.getByLabel('interests').selectOption('technology')
        await page.getByLabel('country').selectOption('canada');
        await page.getByLabel('date of birth').fill('1996-02-23')
        await page.getByLabel('Biography').fill("Biography")
        await page.getByLabel('Profile Picture').setInputFiles("data\\pic.txt")
        await page.getByRole('button', { name: 'Register' }).click();
        
});