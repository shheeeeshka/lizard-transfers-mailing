import puppeteer from "puppeteer";
import { sleep } from "./utils.js";
import { config } from "dotenv";

config();

export async function launchWhatsappMailing(phoneNumber = "") {
    if (!phoneNumber) throw new Error("Phone number is not defined");
    const browser = await puppeteer.launch({
        headless: process.env.SHOW_BROWSER === "1" ? false : true,
        defaultViewport: false,
        userDataDir: "./tmp",
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080', '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'],
        // executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    });
    const page = await browser.newPage();

    await page.goto(process.env.WHATSAPP_URL, { waitUntil: "domcontentloaded" });

    await page.setViewport({ width: 1920, height: 1080 });

    if (process.env.TIME_TO_SLEEP !== "0") {
        await sleep(+process.env.TIME_TO_SLEEP);
    }

    await page.locator("#app > div > div.two._aigs.x1n2onr6.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x1iek97a.x1w3jsh0.xf8xn22.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1g0ag68.xcgwb2z.x4afe7t.x1alahoq.x1j6awrg.x1m1drc7.x1n449xj.x162n7g1.xitxdhh.x134s4mn.x1s928wv.x1setqd9 > div._aigw.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xa1v5g2.x1plvlek.xryxfnj.xd32934 > header > header > div > span > div > span > div:nth-child(1) > div > span").click().catch(err => console.error(err.message));
    await sleep(3);
    await page.locator("#app > div > div.two._aigs.x1n2onr6.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x1iek97a.x1w3jsh0.xf8xn22.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1g0ag68.xcgwb2z.x4afe7t.x1alahoq.x1j6awrg.x1m1drc7.x1n449xj.x162n7g1.xitxdhh.x134s4mn.x1s928wv.x1setqd9 > div.x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl > div._aigw.false.xxpasqj.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xd32934.x6ikm8r.x10wlt62.x1ks9yow > span > div > span > div > div._ai01._akmh > div._ai04 > div.x9f619.x78zum5.x6s0dn4.x1s1d1n7.xqmdsaz.x1lj6vcq.x1bmedo.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c > div > div > p").fill(phoneNumber).catch(err => console.error(err.message));
    await sleep(3);
    await page.locator("#app > div > div.two._aigs.x1n2onr6.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x1iek97a.x1w3jsh0.xf8xn22.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1g0ag68.xcgwb2z.x4afe7t.x1alahoq.x1j6awrg.x1m1drc7.x1n449xj.x162n7g1.xitxdhh.x134s4mn.x1s928wv.x1setqd9 > div.x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl > div._aigw.false.xxpasqj.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xd32934.x6ikm8r.x10wlt62.x1ks9yow > span > div > span > div > div.x1n2onr6.x1n2onr6.xyw6214.x78zum5.x1r8uery.x1iyjqo2.xdt5ytf.x6ikm8r.x1odjw0f.x1hc1fzr.x1tkvqr7.x150wa6m > div > div > div > div:nth-child(2) > div > div").click().catch(err => console.error(err.message));
    await sleep(3);
    await page.locator("#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.x193iq5w.x122xwht.x1bmpntp.xs9asl8.x1swvt13.x1pi30zi.xnpuxes.copyable-area > div > span > div > div._ak1r > div.x9f619.x12lumcd.x1qrby5j.xeuugli.xisnujt.x6prxxf.x1fcty0u.x1fc57z9.xe7vic5.x1716072.xgde2yp.x89wmna.xbjl0o0.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x178xt8z.xm81vs4.xso031l.xy80clv.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1a2a7pz.x13w7htt.x78zum5.x96k8nx.xdvlbce.x1ye3gou.xn6708d.x1ok221b.xu06os2.x1i64zmx.x1emribx > div > div.x1hx0egp.x6ikm8r.x1odjw0f.x1k6rcq7.x6prxxf > p").fill(process.env.MESSAGE || "Добрый день! Это тест").catch(err => console.error(err.message));
    await sleep(3);
    await page.locator("#main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.x193iq5w.x122xwht.x1bmpntp.xs9asl8.x1swvt13.x1pi30zi.xnpuxes.copyable-area > div > span > div > div._ak1r > div.x123j3cw.xs9asl8.x9f619.x78zum5.x6s0dn4.xl56j7k.x1ofbdpd.x100vrsf.x1fns5xo > button").click().catch(err => console.error(err.message));
    await sleep(2);

    await browser.close();
}

// #app > div > div.two._aigs.x1n2onr6.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x1iek97a.x1w3jsh0.xf8xn22.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1g0ag68.xcgwb2z.x4afe7t.x1alahoq.x1j6awrg.x1m1drc7.x1n449xj.x162n7g1.xitxdhh.x134s4mn.x1s928wv.x1setqd9 > div._aigw.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xa1v5g2.x1plvlek.xryxfnj.xd32934 > header > header > div > span > div > span > div:nth-child(1) > div > span

// #app > div > div.two._aigs.x1n2onr6.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x1iek97a.x1w3jsh0.xf8xn22.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1g0ag68.xcgwb2z.x4afe7t.x1alahoq.x1j6awrg.x1m1drc7.x1n449xj.x162n7g1.xitxdhh.x134s4mn.x1s928wv.x1setqd9 > div.x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl > div._aigw.false.xxpasqj.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xd32934.x6ikm8r.x10wlt62.x1ks9yow > span > div > span > div > div._ai01._akmh > div._ai04 > div.x9f619.x78zum5.x6s0dn4.x1s1d1n7.xqmdsaz.x1lj6vcq.x1bmedo.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c > div > div > p
// > span (invis)

// #app > div > div.two._aigs.x1n2onr6.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x1iek97a.x1w3jsh0.xf8xn22.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1g0ag68.xcgwb2z.x4afe7t.x1alahoq.x1j6awrg.x1m1drc7.x1n449xj.x162n7g1.xitxdhh.x134s4mn.x1s928wv.x1setqd9 > div.x10l6tqk.x13vifvy.x17qophe.x78zum5.xh8yej3.x5yr21d.x6ikm8r.x10wlt62.x47corl > div._aigw.false.xxpasqj.x9f619.x1n2onr6.x5yr21d.x17dzmu4.x1i1dayz.x2ipvbc.x1w8yi2h.x78zum5.xdt5ytf.xd32934.x6ikm8r.x10wlt62.x1ks9yow > span > div > span > div > div.x1n2onr6.x1n2onr6.xyw6214.x78zum5.x1r8uery.x1iyjqo2.xdt5ytf.x6ikm8r.x1odjw0f.x1hc1fzr.x1tkvqr7.x150wa6m > div > div > div > div:nth-child(2) > div > div

// #main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.x193iq5w.x122xwht.x1bmpntp.xs9asl8.x1swvt13.x1pi30zi.xnpuxes.copyable-area > div > span > div > div._ak1r > div.x9f619.x12lumcd.x1qrby5j.xeuugli.xisnujt.x6prxxf.x1fcty0u.x1fc57z9.xe7vic5.x1716072.xgde2yp.x89wmna.xbjl0o0.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x178xt8z.xm81vs4.xso031l.xy80clv.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x1a2a7pz.x13w7htt.x78zum5.x96k8nx.xdvlbce.x1ye3gou.xn6708d.x1ok221b.xu06os2.x1i64zmx.x1emribx > div > div.x1hx0egp.x6ikm8r.x1odjw0f.x1k6rcq7.x6prxxf > p

// #main > footer > div.x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.x193iq5w.x122xwht.x1bmpntp.xs9asl8.x1swvt13.x1pi30zi.xnpuxes.copyable-area > div > span > div > div._ak1r > div.x123j3cw.xs9asl8.x9f619.x78zum5.x6s0dn4.xl56j7k.x1ofbdpd.x100vrsf.x1fns5xo > button