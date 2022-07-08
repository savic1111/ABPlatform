const startBrowser = require('../../puppeteer.conf');

const { BrowserPool, PlaywrightPlugin, PuppeteerPlugin } = require('browser-pool');

const Search = require('../../src/pageObjects/main/fragments/Search');
const Calendar = require('../../src/pageObjects/main/fragments/Calendar'); 
const Header = require('../../src/pageObjects/main/fragments/Header'); 

const eventListener = require('../../eventListener');

const pino = require('pino');
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

var propertiesReader = require('properties-reader')
var properties = propertiesReader('./src/data/test.properties');

let page;
let response;

const _ = require('lodash');
const globalVariables = _.pick(global, ['browser', 'expect', 'pages']);


describe("Desktop Aviasales ",()=>{

    
beforeAll( async () => { 


    //В дальнейшем можно сделать браузер пул
    /* 
    const browserPool = new BrowserPool({
        browserPlugins: [
            new PlaywrightPlugin(playwright.chromium),
            new PuppeteerPlugin(puppeteer),
        ],
    })

    */
    
    global.browser = await startBrowser();
    global.pages = await global.browser.pages();
    page = await global.pages[0];
      
    await eventListener(page,global.browser);
    await page.setCacheEnabled(false);
    
    response = await page.goto(properties.get('URL.MAIN') ,{waitUntil: 'load',timeout: 0});
});
    
beforeEach(async()=>{

    
    if (page.url()!=properties.get('URL.MAIN'))
       {
         await page.goto(properties.get('URL.MAIN'), {waitUtil:['domcontentloaded','networkidle2']});           
       }else{
         await page.reload({waitUtil:['domcontentloaded','networkidle2']});
       }
    })  
       
       test("Enable Night Theme",async()=>{
        var header = new Header(page);     
        
        await header.click(header.services).then(async()=>
        {
            await header.click(header.onNight);
        })
       
        expect(await header.onNight_text(page)).toContain('Включить светлую тему');
        })

       test("Send data",async()=>{

        var calendar = new Calendar(page);
        var search = new Search(page);

        await search.clearField(search.from_field).then(async()=>
        {
            await search.typeDestination(search.from_field,properties.get('DATA.FROM'));
            logger.info("Clear and typing from Country");
        })
        
        await search.typeDestination(search.to_field,properties.get('DATA.TO'));

        await calendar.chooseDate(properties.get('DATA.DATE')).then(async()=>
        {
            await calendar.click(calendar.no_return_ticket);
            logger.info("Added dates");
        });
        
        await search.chooseSumofPassengers(2).then(async()=>
        {
            await search.changeTripClass('premiumeconomy');
            logger.info("Changed trip");
        });

        await search.findTicket();

        await page.waitForNavigation({waitUntil: 'networkidle2'}).then(async()=>
        {
            page = currentTab(1);
            logger.info("Pages length -"+ global.pages.length);
        })
    
        expect(await search.from_field_value(page)).toContain('Нью-Йорк');
        expect(await search.to_field_value(page)).toContain('Берлин');

        expect(page.url()).toContain(properties.get('URL.RESULTS'));
       })

       test.skip("Input random data",async()=>{
         //Здесь можно использовтаь генерацию через API или через массив
       })

       test.skip("Negative search data",async()=>{
        //Здесь можно использовтаь генерацию через API или через массив
      })

       afterAll( async()=>{
        let pages = await global.browser.pages();
        await Promise.all(pages.map(page =>page.close()));
        await global.browser.close();
       }) 
    })

    function currentTab(num)
    {
        //const newPagePromise = new Promise(x => browser.on('targetcreated', target => x(target.page())));
        ///newPage = await newPagePromise;
        
        ///expect(newPage.url()).toContain(expectation);
        return global.pages[num]; 
    }


    

