const puppeteer = require('puppeteer')

    module.exports = async function startBrowser() {
      const options = {    
        headless: process.env.HEADLESS !== 'false',
        slowMo:  150,
        devtools: false,
        dumpio: false,
        debugger:true,       
        ignoreHTTPSErrors:false,
        ignoreDefaultArgs: ['--mute-audio'],
        //const slow3G = puppeteer.networkConditions['Slow 3G'],
      
        waitForInitialPage:false,
  
        args : [
            '--window-size=1519,1080',
            '--no-sandbox',
            "--disable-web-security",
            '--disable-dev-shm-usage'
          ],
         
          defaultViewport: {
            width: 1519,
            height: 696,
            isMobile:false,
            hasTouch:false,
            isLandscape:false,
            }
      };
    
      return await puppeteer.launch(options);
    };