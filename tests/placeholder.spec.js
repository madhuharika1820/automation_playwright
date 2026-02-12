import{test,expect} from '@playwright/test'

test('get by Placeholder locator demo',async({page})=>{
    await page.goto('https://www.bookswagon.com')
    await page.getByPlaceholder('Search by Title, Author, Publisher or ISBN')
    .fill('fiction')
})



