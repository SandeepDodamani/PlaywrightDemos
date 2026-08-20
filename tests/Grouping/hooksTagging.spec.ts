import {test, expect,chromium,Browser} from '@playwright/test';

test.beforeAll("Before All Step",async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Your code...

    await context.close();

})

test.beforeEach("Before Each Step",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
})

test.afterEach("After Each Step",async({page})=>
{
     await page.getByAltText("profile picture").isVisible();
     await page.getByAltText("profile picture").click();
     await page.getByRole('menuitem', { name: 'Logout' }).isVisible();
     await page.getByRole('menuitem', { name: 'Logout' }).click();
    
})

test.describe('Group1',async()=>
{
    test("Verify the PIM functionality",{tag: "@Smoke"},async({page})=>
    {
        await page.getByText("PIM", { exact: true }).isVisible()
        await page.getByText("PIM", { exact: true }).click();
    })

    test("Verify the Admin functionality",{tag: "@Regression"},async({page})=>
    {
        await page.getByText("Admin", { exact: true }).isVisible()
        await page.getByText("Admin", { exact: true }).click();
    })

    test("Verify the Leave functionality",{tag:["@Regression","@Smoke"]},async({page})=>
    {
        await page.getByText("Leave", { exact: true }).isVisible()
        await page.getByText("Leave", { exact: true }).click();
    })

    test("Verify the Time functionality",{tag:["@Regression"]},async({page})=>
    {
        await page.getByText("Time", { exact: true }).isVisible()
        await page.getByText("Time", { exact: true }).click();
    })
})