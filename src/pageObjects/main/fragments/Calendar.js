const Header = require('./Search');

const header = new Header();

class Calendar extends Header {
  
    constructor(page)
    {
        super();
        this.page = page;
    }

    get no_return_ticket()
    {
        return 'button[data-test-id="no-return-ticket"]';
    }

     
    async chooseDate(day) {
        await this.page.waitForSelector(header.date_when).then(async (ele) => {
            await ele.click();
          });
        await this.page.waitForSelector('div[aria-label="'+day+'"]').then(async (ele) => {
            await ele.click();
    });


    }
}
    
module.exports = Calendar;