import{test,expect} from '@playwright/test'

test('getbyrole locator demo',async({page})=>{

    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await page.getByRole("link",{name:"Forgot login info?"}).click()//for got info
    await page.getByText("Register").click()//register using getbytext locator
})

//getbylabel
test('getbylabel locator demo', async({page})=>{
    await page.goto('https://login.salesforce.com/')
    await page.getByLabel('Username').fill('madhu')
})