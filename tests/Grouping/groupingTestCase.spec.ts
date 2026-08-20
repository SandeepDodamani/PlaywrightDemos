import {test, expect,chromium,Browser} from '@playwright/test';

test.describe('Group1',async()=>
{
    test("Test Case 1",async({page})=>
    {
       await page.goto("https://www.saucedemo.com/")
    })
    test("Test Case 2",async({page})=>
    {
         await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    })

})

test.describe('Group2',async()=>
{
    test("Test Case 3",async({page})=>
    {
        await page.goto("https://www.saucedemo.com/")
    })
    test("Test Case 4",async({page})=>
    {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

})