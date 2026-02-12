const { Given, When, Then, Before, After, setDefaultTimeout } = require("@cucumber/cucumber");

const { chromium, expect } = require("@playwright/test");

const { Page } = require("playwright");

setDefaultTimeout(60 * 1000);

let page, browser;

Before(async function () {

browser = await chromium.launch({ headless: false });

const context = await browser.newContext();

page = await context.newPage();

});
Given('browser is open', async function () {
           // Write code here that turns the phrase above into concrete actions
           await page.goto("https://www.google.com/");
           //return 'pending';
         });

       Given('user is on google search page', async function () {
           // Write code here that turns the phrase above into concrete actions
           //return 'pending';
           await page.getByRole('combobox', { name: 'Search' }).click();
         });
   
       When('user enters a text in search page', async function () {
           // Write code here that turns the phrase above into concrete actions
           //return 'pending';
           await page.getByRole('combobox', { name: 'Search' }).fill('allu arjun')
         });
        
         Then('user is navigated to search results', async function () {
           // Write code here that turns the phrase above into concrete actions
           //return 'pending';
             await page.goto('https://www.google.com/search?q=allu+arjun&sca_esv=ea2551c9b8b376fe&ei=rDCMaZCUNJr31e8PlqasqA4&biw=1280&bih=720&ved=0ahUKEwiQmuaN9tCSAxWae_UHHRYTC-UQ4dUDCBM&uact=5&oq=allu+arjun&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmFsbHUgYXJqdW4yChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDhAAGLADGOQCGNYE2AEBMg4QABiwAxjkAhjWBNgBATIOEAAYsAMY5AIY1gTYAQEyExAuGIAEGLADGEMYyAMYigXYAQEyExAuGIAEGLADGEMYyAMYigXYAQEyExAuGIAEGLADGEMYyAMYigXYAQEyExAuGIAEGLADGEMYyAMYigXYAQFIvhJQAFgAcAJ4AZABAJgBAKABAKoBALgBA8gBAJgCAqACDZgDAIgGAZAGEboGBggBEAEYCZIHATKgBwCyBwC4BwDCBwMyLTLIBwuACAA&sclient=gws-wiz-serp');

         });