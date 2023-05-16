const { browser } = require("../../applitools.config");

describe('POC Visual Test', () => {
    beforeEach(() => {
        cy.eyesOpen({
         appName: 'Gaming Image validation `between two sites',
          testName: Cypress.currentTest.title,
          browser: [{ width: 1200, height: 800 , name : "safari"},
          {width: 800, height: 600, name: 'chrome'},
            {deviceName : 'iPhone X'
            },
        ]
        })
    })

    it('should look visually correct between website 1 ', () => {
      // Visit the Amazon website
      //site 1 "  https://applitools-cypress-workshop-demo.netlify.app/"
      // site 2 : https://deploy-preview-1--applitools-cypress-workshop-demo.netlify.app/
      cy.visit('https://applitools-cypress-workshop-demo.netlify.app/');    
      //finding element by parent and child concept 
      //         -----  cy.get('#games >:nth-child(1)').click()
      cy.contains("Eiyuden").click();
      cy.get('#button-add-to-cart').click().wait(2000);
      cy.get('#cart-menu').invoke("show")
      cy.screenshot("visually correct between website 1")

      // Take a screenshot of the search results
      cy.eyesCheckWindow('Taking screenshot for website 1');
      
    });

  afterEach(() => {  
    // Close Eyes to tell the server it should display the results.
    cy.eyesClose()
})
});