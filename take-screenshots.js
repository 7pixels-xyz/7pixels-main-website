const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const urls = [
    'https://apextattooz.com/',
    'https://delhitattoostudio.com/'
];

const outDir = path.join(__dirname, 'public', 'portfolios');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

async function scrape() {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const results = [];

    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        console.log(`Navigating to ${url}...`);
        try {
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

            console.log(`Waiting 6 seconds for pre-loaders...`);
            await new Promise(r => setTimeout(r, 6000));

            const title = await page.title();
            const desc = await page.$eval('meta[name="description"]', el => el.content).catch(() => 'No description found');
            const ogTitle = await page.$eval('meta[property="og:title"]', el => el.content).catch(() => title);

            const slug = url.replace(/https?:\/\/(www\.)?/, '').split('.')[0];
            const screenshotPath = path.join(outDir, `${slug}.jpg`);

            await page.screenshot({ path: screenshotPath, quality: 80, type: 'jpeg' });

            results.push({
                url,
                title: ogTitle || title,
                desc,
                image: `/portfolios/${slug}.jpg`
            });
            console.log(`Scraped ${title}`);
        } catch (e) {
            console.log(`Error scraping ${url}: ${e.message}`);
        }
    }

    await browser.close();
    console.log(JSON.stringify(results, null, 2));
}

scrape();
