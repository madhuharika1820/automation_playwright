import { test, expect } from '@playwright/test';

test('test fore alert box', async ({ page }) => {
    page.on('dialog',async dialog=>{
        console.log(`Alert message: ${dialog.message()}`);
        expect(dialog.message()).toContain('I am an alert box');
        await dialog.accept();
    })
    await page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/');
    //await page.locator('#alertexamples').click();
    await page.getByRole('button',{name:'Show alert box'}).click();
})
