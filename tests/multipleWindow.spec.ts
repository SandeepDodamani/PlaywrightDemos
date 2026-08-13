import {test,expect,chromium,Page} from '@playwright/test'


test("Handle Multiple Windows", async({browser})=>
{
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto("https://testautomationpractice.blogspot.com/")

        // Add these two lines here
        console.log("PopUp count:", await page.locator("#PopUp").count());
        console.log("PopUp visible:", await page.locator("#PopUp").isVisible());

        const [childWindow]=await Promise.all([page.waitForEvent('popup'),page.locator("#PopUp").click()])

        const allPages=context.pages()
        console.log("Number of Windows: ",allPages.length)

        console.log("First Page URL",allPages[0].url())
        console.log("Title of the Page",await allPages[0].title())
        console.log("First Page URL",allPages[1].url())
        await page.waitForTimeout(5000)
        allPages[0].close()
        allPages[1].close()
    })