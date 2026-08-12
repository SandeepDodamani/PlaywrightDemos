import {test,expect,chromium,Page} from '@playwright/test'


test("Handle Multiple Windows", async({browser})=>
{
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto("https://testautomationpractice.blogspot.com/")

        const [childWindow]=await Promise.all([page.waitForEvent('popup'),page.locator("#PopUp").click()])

        const allPages=context.pages()
        console.log("Number of Windows: ",allPages.length)

        console.log("First Page URL",allPages[0].url())
        console.log("First Page URL",allPages[1].url())
        await page.waitForTimeout(5000)
        allPages[0].close()
    })