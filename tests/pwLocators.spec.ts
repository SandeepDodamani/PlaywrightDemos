/* 
        1: page.getByRole() to locate by explicit and implicit accessibility attributes.
        2: page.getByText() to locate by text content.
        3: page.getByLabel() to locate a form control by associated label's text.
        4: page.getByPlaceholder() to locate an input by placeholder.
        5: page.getByAltText() to locate an element, usually image, by its text alternative.
        6: page.getByTitle() to locate an element by its title attribute.
        7: page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import {test,expect,Locator} from "@playwright/test"

test("Verify Alt Text Locator",async({page})=>
{
    //testautomationpractice.blogspot.com
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
    const logo:Locator=page.getByAltText("company-branding")
    await expect(logo).toBeVisible();
    
    await expect(page.getByText("Forgot your password? ")).toBeVisible();

    expect(page.getByRole("heading",{name:'Login'})).toBeVisible(); //getByText() can also use

    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");

})