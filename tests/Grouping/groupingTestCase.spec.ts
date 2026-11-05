import {test, expect,chromium,Browser} from '@playwright/test';

test.describe('Group1',async()=>
{
    test("Test Case 1",async({page})=>
    {
       await page.goto("https://qadummyurl")
    })
    test("Test Case 2",async({page})=>
    {
        //Test URL
         await page.goto("https://qadummyurl/index.htm")
    })

})

test.describe('Group2',async()=>
{
    test("Test Case 3 & 4",async({page})=>
    {
        await page.goto("https://qadummyurl")
    })
    test("Test Case 4",async({page})=>
    {
        await page.goto("https://qadummyurl/web/index.php/auth/login")
    })

})

//Duplicate Code
test.describe('Group 4',async()=>
{
    test("Test Case 3 & 4 & 7",async({page})=>
    {
        await page.goto("https://qadummyurl")
    })
    test("Test Case 4",async({page})=>
    {
        await page.goto("https://qadummyurl/web/index.php/auth/login")
    })

})

//Duplicate Code
test.describe('Group 9',async()=>
{
    test("Test Case 3 & 4 & 7",async({page})=>
    {
        await page.goto("https://qadummyurl")
    })
    test("Test Case 4",async({page})=>
    {
        await page.goto("https://qadummyurl/web/index.php/auth/login")
    })

})
