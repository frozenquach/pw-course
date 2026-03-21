import{test} from "@playwright/test";
test('Test 3: Điền vào trang register page', async ({ page }) => {
    const url= 'https://material.playwrightvn.com/'
    const number_of_tasks=100
    await page.goto(url);
    await page.getByRole('link', { name: /Bài học 3: Todo page/ }).click();
    for(let i=0;i<number_of_tasks;i++){
        await page.getByPlaceholder('Enter a new task').fill(`Todo ${i}`);
        await page.getByRole('button', {name: 'Add Task'}).click();
    }
    for(let i=1;i<=number_of_tasks;i+=2){
        page.once('dialog',async dialog =>{
        console.log(dialog.message())
        await dialog.accept();
    })
        await page.locator(`#todo-${i}-delete`).click();
    }
});