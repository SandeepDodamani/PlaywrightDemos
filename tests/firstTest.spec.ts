/* 
    Playwright test should be save the extensions of spec.ts
    always import the {test, expect}
    expect -> assertion execution
*/

import {test,expect} from "@playwright/test"

// Fixtures - global variable - {page and browser} are the fixture

test("Verify the Title of the page",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    let pageTitle=await page.title();
    console.log(pageTitle);

    await expect(page).toHaveTitle("OrangeHRM")
})

test("Verify the URL",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    
    let pageUrl=await page.url;
    console.log(pageUrl);

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})