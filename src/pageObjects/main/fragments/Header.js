const PageObject = require('../../../PageObject');

class Header extends PageObject {
  
    constructor(page)
    {
      super();
      this.page = page;
    }
      get services()
      {
          return 'div[class="navbar__control --services"]';
      }

       get onNight()
          {
            return 'li[data-test-id="theme_switcher-item"]';
          }

          async onNight_text(page)
          {
            return  await page.evaluate(()=>{return document.querySelector('li[data-test-id="theme_switcher-item"]').textContent})
          }
  
   
       //Override method
       async click(element)
          {
           await this.page.waitForSelector(element).then(async(ele)=>{
           await ele.click();
           })
       } 
  }
      
  module.exports = Header;