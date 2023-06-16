describe("Methods", function () {
    it("Get", function () {
        cy.request({
            method:'GET',
            url: 'https://app2.abtasty.com/login',
            failOnStatusCode: true
        }).then((r) => {
            expect(r.status).to.eq(200)
            expect(r).to.have.property('headers')
            expect(r).to.have.property('duration')
        });
    })
    
    it.skip("Post Login", function () {
        cy.request('POST', 'https://api.abtasty.com/api/oauth/login', {
        })
    })
})