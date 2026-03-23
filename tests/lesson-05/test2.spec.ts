import {test} from "@playwright/test";
test('Test 2: Điền vào trang register page', async ({ page }) => {
    const url= 'https://material.playwrightvn.com/'
    const prod1=2,prod2=3,prod3=1
    await page.goto(url);
    await page.getByRole('link', { name: /Bài học 2: Product page/ }).click();
        for(let i=0;i<prod1;i++){
            await page.getByRole('button', { name: 'Add to Cart' }).nth(0).click();
        }
        for(let i=0;i<prod2;i++){
            await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
        }
        for(let i=0;i<prod3;i++){
            await page.getByRole('button', { name: 'Add to Cart' }).nth(2).click();
        }
    })