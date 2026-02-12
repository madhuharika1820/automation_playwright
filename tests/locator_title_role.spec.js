import{test,expect} from '@playwright/test'

test('get by title locator',async({page})=>{
    await page.goto('https://parabank.parasoft.com/')
    await page.getByTitle('ParaBank')
    await page.getByAltText('ParaBank')

})