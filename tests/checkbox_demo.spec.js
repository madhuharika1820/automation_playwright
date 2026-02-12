import{test,expect} from '@playwright/test'

test('working with checkbox',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/checkboxes')
    await expect(page.locator('#checkboxes')).toBeVisible()
    expect(await page.isChecked('input[type=chechbox]:nth-child(1)')).toBeFalsy()
    expect(await page.isChecked('input[type=chechbox]:nth-child(3)')).toBeTruthy()
    await page.check('input[type=checkbox]:nth-child(1)')
    await page.check('input[type=checkbox]:nth-child(3)')
    expect(await page.isChecked('input[type=chechbox]:nth-child(1)')).toBeTruthy()
    expect(await page.isChecked('input[type=chechbox]:nth-child(3)')).toBeFalsy()


})