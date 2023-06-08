describe("Methods", function () {
    it("Get", function () {
        cy.request("GET", "https://app2.abtasty.com/login", {
        }).then((r) => {
            expect(r.status).to.eq(200)
            expect(r).to.have.property('headers')
            expect(r).to.have.property('duration')
        });
    })

    it("Post Login", function () {
        cy.request('POST', 'https://api.abtasty.com/api/oauth/login', {
        })
    })
})