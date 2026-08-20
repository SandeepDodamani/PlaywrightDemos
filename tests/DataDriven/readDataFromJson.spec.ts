import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const readData = './testData/readFromJson.json';

const searchProduct = JSON.parse(
    fs.readFileSync(readData, 'utf-8')
);

test.describe("Data Driven Testing", () => {

    for (const { email, password, credentialType } of searchProduct) {

        test(`Login Test with ${email} and ${password}`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/login");

            await expect(page.locator("#Email")).toBeVisible();
            await page.locator("#Email").fill(email);

            await expect(page.locator("#Password")).toBeVisible();
            await page.locator("#Password").fill(password);

            await page.locator("input[value='Log in']").click();

            if (credentialType === "validCredentials") {

                const logoutLink = page.locator("a[href='/logout']");

                await expect(logoutLink).toBeVisible();
                await logoutLink.click();

            } else {

                const errorMessage = page.locator(".validation-summary-errors");

                await expect(errorMessage).toBeVisible({
                    timeout: 5000
                });
            }
        });
    }
});
