/// <reference types="cypress"/>

describe("my example project" , ()=>{
    it("regiter and login" ,()=>{
        cy.visit('http://localhost:3000/singin');
        
        const email = `azroyan${Math.random()}@gmail.com`

        cy.get('[placeholder=name]').type("Albert");
        cy.get('[placeholder=lastname]').type("Azroyan");
        cy.get('[type=email]').type(email);
        cy.get('[type=password]').type(`1234`);
        cy.get('[placeholder=type]').type("admin");
        cy.get('[type=submit]').click();

        cy.location("pathname").should("equal", "/webadmin")
        
        cy.get('[type=email]').type(email);
        cy.get('[type=password]').type(`1234`);
    
        cy.get('[type=submit]').click();

        cy.location("pathname").should("equal", "/webadmin")
        
    })

    it("create home button" , ()=>{
        const email = `azroyan${Math.random() * 10}@gmail.com`

        cy.location("pathname").should("equal", "/webadmin")
        cy.get('[data-testid="createHrefHome"]').click()
        cy.location("pathname").should("equal", "/webadmin/home/add")
        cy.get('[data-testid="phoneNumer1"]').type("+37444128008");
        cy.get('[data-testid="phoneNumer2"]').type("+37493128008");
        cy.get('[type=email]').type(email);
        cy.get('[data-testid="adress"]').type("https://www.google.com/maps/place//@40.1867053,44.5034052,15z/data=!4m5!3m4!1s0x406abce29257b1db:0xdfb8fdf46a306e3a!8m2!3d40.1847484!4d44.5124361");
        cy.get('[data-testid="facebook"]').type("https://www.facebook.com");
        cy.get('[data-testid="instagram"]').type("https://www.instagram.com");
        cy.get('[data-testid="telegram"]').type("https://www.telegram.com");
        cy.get('[type=submit]').click();
        
    })

    it('create Book info',()=>{
        cy.location("pathname").should("equal", "/webadmin")
        cy.get('[data-testid="bookHref"]').click();
        cy.location("pathname").should("equal", "/webadmin/book/")
        cy.get('[data-testid="createBook"]').click();
        cy.location("pathname").should("equal", "/webadmin/book/create")


    })
})