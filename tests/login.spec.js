import{test,expect} from '@playwright/test'
import { LoginPage } from '../pageobject/login'

test('test login',async ({page})=>{
    const Login =new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('tomsmith','SuperSecretPassword!')
})