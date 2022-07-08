const pino = require('pino');
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

const PageObject = require('../../../PageObject');
const PageElement = require('../../../pageElements/text');


class Search extends PageObject {
  
    constructor(page)
    {
      super();
      this.page = page;
    }
      get from_field()
      {
          return 'input[placeholder="Откуда"]';
      }

      async from_field_value(page)
      {
      return  await page.evaluate(()=>{return document.querySelector('input[placeholder="Откуда"]').value})
      }
  
      get to_field()
      {
          return 'input[placeholder="Куда"]';
      }

      async to_field_value(page)
      {
          return  await page.evaluate(()=>{return document.querySelector('input[placeholder="Куда"]').value})
      }
  
      get date_when()
      {
          return 'input[placeholder="Когда"]';
      }

      get passenger_field()
      {
          return 'div[data-test-id="passengers-field"]';
      }

      get find_ticket()
      {
          return 'button[type="submit"]';
      }

  //Override method
    async click(element)
       {
           await this.page.waitForSelector(element).then(async(ele)=>{
           await ele.click();
           })
       }

    async clearField(element)
    {
      await this.page.waitForSelector(element).then(async(ele)=>{
        await ele.click({clickCount: 3});
        await ele.press('Backspace'); 
      })
    }

    async findTicket()
    {

        //здесь монжо проверить статус кнопки 
      await this.click(this.find_ticket)
    
    }

    async typeDestination(element,text) {
        await this.page.waitForSelector(element);
        await this.page.focus(await element);
        await this.page.keyboard.type(text);
    }

    async changeTripClass(trip)
    {
     await this.click('[data-test-id="tripclass-'+trip+'-label"]')
    }

    async chooseSumofPassengers(num) {
      await this.click('div[data-test-id="passengers-field"]');
      
      for (let i = 2; i <= num; i++)
         {
          await this.click('a[class="additional-fields__passenger-control --increment"]');
        }
    }       
  }
      
  module.exports = Search;