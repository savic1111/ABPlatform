class Elements{

    async getElementText(page,element)
    {
        let text = await page.$eval(element, el => el.textContent)
        return text;
    }

    async getNumber(page,element)
    {
        let number = await page.evaluate((element)=>{(document.querySelector(element).textContent)},element);
        return parseInt(number);
    }

    async hasDisable(page,element)
    {
        let status = await page.$eval(element, el => el.disabled);
        return status;
    }

    async getIndexElement(page,element,index)
    {
        let selector = await page.$eval(()=>(document.querySelectorAll(element).item(index)));
        return selector;
    }

    async getListSelectors(page,element)
    {
    const elements = await page.$$(element);
    elements.forEach(async element => {
	const text = await (await element.getProperty("textContent")).jsonValue();
       });
    }

    async getSingleSelector(page,el,number)
    {
        const element = await page.$$(el);
         const text = await (await element[number].getProperty("textContent")).jsonValue();
         return await text;
    }


    async hasDisableEvaluate(page,element,expect_status)
    {
        let status = await page.evaluate(()=>(document.querySelector(element).disabled));
        expect(status).toBe(expect_status);
    }

    async getSelector(page,element)
    {
        let selector = await page.evaluate(()=>(document.querySelector(element)));
        return selector;
    }

    async getTextEvaluate(page,element)
    {
        let text = await page.evaluate(()=>(document.querySelector(element).textContent));
        return text;
    }

    async getDataset(page,element)
    {
        let status = await page.$eval(element, el => el.dataset)
        return status;
    }
}
module.exports = Elements;