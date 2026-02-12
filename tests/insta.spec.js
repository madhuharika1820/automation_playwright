import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByRole('textbox', { name: 'Mobile number, username or' }).fill('project_capstone1');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('selenium@123');
  await page.getByRole('button', { name: 'Show password' }).click();
  await page.getByRole('button', { name: 'Log in', exact: true }).click();
  await page.getByRole('button', { name: 'Save info' }).click();
  await page.getByRole('link', { name: 'New post Create' }).click();
  await page.getByRole('button', { name: 'Select from computer' }).click();
  await page.getByRole('button', { name: 'Select from computer' }).setInputFiles('TCS.png');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('button', { name: 'Share' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});