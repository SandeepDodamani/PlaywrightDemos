import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import {parse} from 'csv-parse/sync';

const readData = './testData/readFromJson.json';

const searchProduct = JSON.parse(
    fs.readFileSync(readData, 'utf-8')
);

const records = parse(searchProduct,{
        columns:true,
        skip_empty_lines:true
})

test.describe("Data Driven Testing", () => {

    for (const data of searchProduct) {

        test(`Login Test with ${data.email} and ${data.password}`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/login");

            await expect(page.locator("#Email")).toBeVisible();
            await page.locator("#Email").fill(data.email);

            await expect(page.locator("#Password")).toBeVisible();
            await page.locator("#Password").fill(data.password);

            await page.locator("input[value='Log in']").click();

            if (data.credentialType === "validCredentials") {

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
