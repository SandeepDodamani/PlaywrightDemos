import { test, expect, chromium, Browser } from "@playwright/test";

const searchProduct: string[] = [
  "laptop",
  "mobile",
  "headphone",
  "monitor",
  "keyboard",
  "smartphone"
];

//Read the data from the array and pass it to the test case
/*
test("Search for products", async () => {
  for (let i = 0; i < searchProduct.length; i++) {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").isVisible();
    await page.locator("#small-searchterms").fill(searchProduct[i]);
  }

  
});
*/
//Read the data from the array and pass it to the test case using for of loop
for(const product of searchProduct)
{
    test(`Search for product: ${product}`, async () => {
        const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").isVisible();
    await page.locator("#small-searchterms").fill(product);
        
    });
}