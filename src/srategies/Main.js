
//Паттер стратегия
class Search extends PageObject {
  

    async sendData()
    {
      
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
    }

    async sendDataApi()
    {
     //api
    
    }
  }
      
  module.exports = Main;