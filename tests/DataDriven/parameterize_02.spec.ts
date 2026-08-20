import {test, expect} from '@playwright/test';

const searchProduct: string[][] =
[
    ["laura.taylor123@example.com","test123","validCredentials"],
    ["john.doe123@example.com","password123","invalidCredentials"],
    ["mary.jones123@example.com","secure123","invalidCredentials"],
    ["","","emptyCredentials"]
]

for(const [email, password, credentialType] of searchProduct)
{
    test.describe("Data Driven Testing",async()=>
    {
        test(`Login Test with ${email} and ${password}`,async({page})=>
        {
                await page.goto("https://demowebshop.tricentis.com/login");
                await page.locator("#Email").isVisible();
                await page.locator("#Email").fill(email);
                await page.locator("#Password").isVisible();
                await page.locator("#Password").fill(password);
                await page.locator("input[value='Log in']").click();

                if(credentialType==="validCredentials")
                {
                    const lougoutLink=page.locator("a[href='/logout']")
                    await expect(lougoutLink).toBeVisible();
                    await lougoutLink.click();
                }
                else{
                    const errorMessage=page.locator(".validation-summary-errors");
                    await expect(errorMessage).toBeVisible({timeout:5000});
                }

        })
    })

}


