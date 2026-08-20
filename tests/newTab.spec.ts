/* 
    Handle different pages , need to use browser, browserContext and Pages

*/

import {test,expect,Locator,Page,Browser,chromium} from '@playwright/test'

test.describe("Handle multiple Pages",async()=>
{
        const browser = await chromium.launch()
        
        //Browser
        const context= await browser.newContext()

        //Different Pages
        const page1 =await context.newPage()
        const page2 =await context.newPage()
        //Different Page call
        await page1.goto("https://www.saucedemo.com/")        
        expect(page1.getByText("Swag Labs")).toHaveText("Swag Labs")

        await page2.goto("https://parabank.parasoft.com/parabank/index.htm")        
        const value:Locator=page2.getByAltText("ParaBank")
        const title=await value.getAttribute("title")
        expect(title).toBe("ParaBank")

})