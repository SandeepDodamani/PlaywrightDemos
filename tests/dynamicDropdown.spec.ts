/*
    Dynamic value capture - Ctrl+Alt+P - To get Emulate in the cmd [Type Emulate Focused Page]
*/

import {test,expect, Locator} from '@playwright/test'

test("Read data from dynamic values",async({page})=>
{
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(3000)

    const closeBtn:Locator=page.getByRole('button',{name:/close/i});
    if(await closeBtn.isVisible().catch(()=>false))
    {
            closeBtn.click()
    }
    
    await page.locator('input[name="q"]:not([readonly])').fill('smart');
    await page.waitForTimeout(5000)

    const options:Locator=page.locator("ul>li")
    const count=await options.count()
    console.log("Total Suggested count: ", count)
    
    for(let i=0;i<count;i++)
    {
        console.log(await options.nth(i).innerText())
    }

    for(let i=0;i<count;i++)
    {
        const text=await options.nth(i).innerText()
        if(text==="smartphone")
        {
            await options.nth(i).click()
            break;
        }
    }


})

