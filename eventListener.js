const pino = require('pino');
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

module.exports =async function eventListener(page,browser){
      page.on('response',resp=>{
        var status = resp.status();
        //console.log(status);
      })

      page.on('dialog', async dialog => {
        logger.info(dialog.message());
      });

      page.on("console", consoleObj => consoleObj.text());

      page.on('request', async (request) => { /*console.log(`${request.method} ${request.url}`);*/ })

      browser.on('targetcreated', async () => {
        //logger.info('New Tab Created');
        pages = await browser.pages();
        //logger.info('global.pages.length', global.pages.length);
       });
};