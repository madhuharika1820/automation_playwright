import{test,expect} from '@playwright/test'

test('iframes program',async({page})=>{
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_test')

const iframe=page.frameLocator('#iframeResult');
await iframe.locator('button').click();

page.on('dialog',dialog=>{
    expect(dialog.message()).toContain('hello')
    dialog.accept();
})
})




test('iframes program-demo',async({page})=>
    {
    await page.goto
    ('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_test')
await page.waitForSelector('#iframeResult');
const frame=page.frame({url:/tryhtml_button_test/});
await frame.click('button');

page.on('dialog',dialog=> dialog.accept());
})