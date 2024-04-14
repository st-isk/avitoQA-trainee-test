// @ts-check
const { test } = require("@playwright/test");
const { devices } = require("playwright");

test("check CO2 counter on desktop viewport", async ({ browser }) => {
    const page = await browser.newPage();
    await page.setViewportSize({
        width: 1920,
        height: 1080,
    });
    await page.goto("https://www.avito.ru/avito-care/eco-impact");

    await page
        .locator(".desktop-impact-item-eeQO3")
        .filter({ has: page.getByText("не попало в атмосферу") })
        .screenshot({ path: "output/ТК1.png" });
});

test("check water counter on desktop viewport", async ({ browser }) => {
    const page = await browser.newPage();
    await page.setViewportSize({
        width: 1920,
        height: 1080,
    });
    await page.goto("https://www.avito.ru/avito-care/eco-impact");

    await page
        .locator(".desktop-impact-item-eeQO3")
        .filter({ has: page.getByText("было сохранено") })
        .screenshot({ path: "output/ТК2.png" });
});

test("check energy counter on desktop viewport", async ({ browser }) => {
    const page = await browser.newPage();
    await page.setViewportSize({
        width: 1920,
        height: 1080,
    });
    await page.goto("https://www.avito.ru/avito-care/eco-impact");

    await page
        .locator(".desktop-impact-item-eeQO3")
        .filter({ has: page.getByText("было сэкономлено") })
        .screenshot({ path: "output/ТК3.png" });
});

test("check CO2 counter on mobile viewport", async ({ browser }) => {
    const context = await browser.newContext({
        ...devices["iPhone 11 Pro"],
    });
    const page = await context.newPage();
    await page.goto("https://www.avito.ru/avito-care/eco-impact");

    await page
        .locator(".mobile-impact-item-k2hNC")
        .filter({ has: page.getByText("не попало в атмосферу") })
        .screenshot({ path: "output/ТК4.png" });
});

test("check water counter on mobile viewport", async ({ browser }) => {
    const context = await browser.newContext({
        ...devices["iPhone 11 Pro"],
    });
    const page = await context.newPage();
    await page.goto("https://www.avito.ru/avito-care/eco-impact");

    await page
        .locator(".mobile-impact-item-k2hNC")
        .filter({ has: page.getByText("было сохранено") })
        .screenshot({ path: "output/ТК5.png" });
});

test("check energy counter on mobile viewport", async ({ browser }) => {
    const context = await browser.newContext({
        ...devices["iPhone 11 Pro"],
    });
    const page = await context.newPage();
    await page.goto("https://www.avito.ru/avito-care/eco-impact");

    await page
        .locator(".mobile-impact-item-k2hNC")
        .filter({ has: page.getByText("было сэкономлено") })
        .screenshot({ path: "output/ТК6.png" });
});
