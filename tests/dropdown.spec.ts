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

    //await page.locator("#country").selectOption("India") //By Visible Text    
    //await page.locator("#country").selectOption({value:"uk"})  //By using Value    
    //await page.locator("#country").selectOption({label:"Germany"})     //By using Label    
    //await page.locator("#country").selectOption({index:3})     //By using Index
   // await page.waitForTimeout(5000)

    // Example : count how many values inside the dropdown

    const downdownOptions:Locator=page.locator("#country>option")
    const countOfDropdown:number=await downdownOptions.count()
    expect(countOfDropdown).toBe(10)
    await page.waitForTimeout(5000)

    //Example 2: Capture the text value from the element
    const allTextValues:string[]=(await downdownOptions.allTextContents()).map(text=>text.trim());
    console.log(allTextValues)

    //Example 3: check Canada available or not 
    expect(allTextValues).toContain('Canada')
})