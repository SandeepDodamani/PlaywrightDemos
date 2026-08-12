/* 
    Static dropdown values can select by using SelectOption 

    There are different ways to use
        1: By using visible text
        2: By using Key Values
        3: By using index
        4: By using Label
*/
import {test, expect,Locator} from '@playwright/test'
test.only("Dropdown value Actions",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#colors").selectOption(['Red','Yellow','Green'])
    await page.waitForTimeout(3000)
});