import {test,expect,Locator,Browser, chromium} from '@playwright/test'

test("Handle tabs", async()=>
{
    const browser = await chromium.launch();
    const context= await browser.newContext()

    const ParentPage = await context.newPage()

    await ParentPage.goto("https://testautomationpractice.blogspot.com/")

    const [childLevel]=await Promise.all([context.waitForEvent('page'),ParentPage.locator("button:has-text('New Tab')").click()]);
    //Tab - Context 
    //await context.waitForEvent('page')
    //await page.locator("//button[text()='New Tab']").click();

    const pageCount=context.pages();
    console.log(pageCount.length)

    console.log(await ParentPage.title())
    console.log(await childLevel.title())



    
})