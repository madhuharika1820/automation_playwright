import{test,expect} from '@playwright/test'

test('get by alttext locator demo',async({page})=>{
    await page.goto('https://www.bookswagon.com/')
    await page.getByPlaceholder('Search by Title, Author, Publisher or ISBN').fill('fiction')
    //await page.locator("xpath=//*[@name='btnTopSearch']").click()
    await page.locator()
    await page.getByAltText('Sacred Waters').click()
})