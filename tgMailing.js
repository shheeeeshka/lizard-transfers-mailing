import puppeteer from "puppeteer";
import { sleep } from "./utils.js";
import { config } from "dotenv";

config();

export async function launchTelegramMailing(phoneNumber = "") {
    if (!phoneNumber) throw new Error("Phone number is not defined");
    const browser = await puppeteer.launch({
        headless: process.env.SHOW_BROWSER === "1" ? false : true,
        defaultViewport: false,
        userDataDir: "./tmp",
        executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    });
    const page = await browser.newPage();

    await page.goto(`${process.env.TELEGRAM_URL}`);

    await page.setViewport({ width: 1920, height: 1080 });

    if (process.env.TIME_TO_SLEEP !== "0") {
        await sleep(+process.env.TIME_TO_SLEEP);
    }

    await sleep(2);
    await page.locator("#column-left > div > div > div.sidebar-header.can-have-forum > div.input-search").click().catch(err => console.error(err.message));
    await sleep(1.2);
    await page.locator("#column-left > div > div > div.sidebar-header.can-have-forum > div.input-search > input").fill(phoneNumber).catch(err => console.error(err.message));
    await sleep(3);
    await page.locator("#search-container > div.scrollable.scrollable-y > div.search-super > div > div.search-super-tab-container.search-super-container-chats.tabs-tab.active > div > div:nth-child(1) > ul > a").click().catch(err => console.error(err.message));
    await sleep(2);
    await page.locator(".input-message-input").fill(process.env.MESSAGE || "message").catch(err => console.error(err.message));
    await sleep(2.7);
    await page.locator("button.btn-icon.rp.btn-circle.btn-send.animated-button-icon.send").click().catch(err => console.error(err.message));
    await sleep(2.2);
    // await page.locator("#search-container > div.scrollable.scrollable-y > div.search-super > div > div.search-super-tab-container.search-super-container-chats.tabs-tab.active > div > div:nth-child(1) > ul > a > div.c-ripple").click().catch(err => console.error(err.message));
    // await sleep(2);
    // await page.locator("#column-center > div > div > div.chat-input.chat-input-main > div > div.rows-wrapper-wrapper > div > div.new-message-wrapper.rows-wrapper-row > div.input-message-container > div.input-message-input.is-empty.scrollable.scrollable-y.no-scrollbar.input-field-input-fake").fill("Test message").catch(err => console.error(err.message));
    // await sleep(2);

    await sleep(1);
    await browser.close();
}

// #column-left > div > div > div.sidebar-header.can-have-forum > div.input-search

// #column-center > div > div > div.chat-input.chat-input-main > div > div.rows-wrapper-wrapper > div > div.new-message-wrapper.rows-wrapper-row > div.input-message-container > div.input-message-input.is-empty.scrollable.scrollable-y.no-scrollbar.input-field-input-fake