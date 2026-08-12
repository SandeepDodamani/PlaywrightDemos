/*
    Different types of Actions
        1: Text Input Action
 */

import {test,expect, Locator} from '@playwright/test'

test("Verify the User Input Actions",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const name:Locator=page.locator("#name")
    const maxLength:string | null = await name.getAttribute("maxlength")
    expect(maxLength).toBe('15')

    await name.fill("John Canady")
    const storedName:string=await name.inputValue()
    expect(storedName).toBe("John Canady")

    await page.waitForTimeout(3000)
})

test("Radio button Action",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const maleRadioBtn:Locator=page.locator("#male")
    //Apply Assertions
    expect(maleRadioBtn).toBeVisible();
    expect(maleRadioBtn).toBeEnabled();
    expect(await maleRadioBtn.isChecked()).toBe(false)

    maleRadioBtn.check()
    expect(maleRadioBtn).toBeChecked()
    await page.waitForTimeout(3000)   

})

test.only("Checkbox Action",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const sundayCheckbox:Locator=page.getByLabel("Sunday")
    //await sundayCheckbox.check()
    //await expect(sundayCheckbox).toBeChecked()

    const days:string[]=['Sunday','Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday']
    const checkboxes:Locator[]=days.map(index=>(page.getByLabel(index)))

    expect(checkboxes.length).toBe(7)

    // Example 1: Check all the checkbox
    /*
    for(const checkbox of checkboxes)
    {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
        await page.waitForTimeout(2000)
        await checkbox.uncheck()
    }
    */
    // Example 2: uncheck and check last 3 
    /*
    for(const checkbox of checkboxes.slice(-3))
    {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }
        await page.waitForTimeout(2000)
    */
    // Example 3: Selected values make it check and non selected - select it 
    for(const checkbox of checkboxes)
    {
        if(await checkbox.isChecked())
        {
            await checkbox.uncheck()
            await expect(checkbox).not.toBeChecked()           
        }
        else
        {
            await checkbox.check()
            await expect(checkbox).toBeChecked()
        }
    }
    await page.waitForTimeout(2000)
    
})