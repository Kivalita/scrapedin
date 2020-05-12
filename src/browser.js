const puppeteer = require('puppeteer')

let browser; 
let semaphore = false;
module.exports = async() => {
    if (!browser  && !semaphore) {
        semaphore = true;
        const args = Object.assign({ headless: true, args: ['--no-sandbox'] })
        browser = await puppeteer.launch(args)
    }
    return browser;
}