const { browser } = require("../../applitools.config");
//running mulitple times 
Cypress._.times(3, () => {
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
      // Visit the image validation website
      //site 1 "  https://applitools-cypress-workshop-demo.netlify.app/"
      // site 2 : https://deploy-preview-1--applitools-cypress-workshop-demo.netlify.app/
      const uuid = () => Cypress._.random(1,3)
      const val = uuid()
      //const val =  Math.random().toString().substr(1, 5)
      cy.log(val + "  " + Math.abs(val % 2));
     var url='https://applitools-cypress-workshop-demo.netlify.app/'
      if(Math.abs(val % 2) == 0){
        cy.log("Inside if block")
        actionitems(url)
      }else{
        cy.log("inside else block")
        url='https://deploy-preview-1--applitools-cypress-workshop-demo.netlify.app/'
        actionitems(url)
      }      
    });
  var actionitems=(url)=>{
    cy.visit(url);    
    //finding element by parent and child concept 
    //         -----  cy.get('#games >:nth-child(1)').click()
    cy.contains("Eiyuden").click();
    cy.get('#button-add-to-cart').click().wait(2000);
    cy.get('#cart-menu').invoke("show")
    cy.screenshot("visually correct between website 1")

    // Take a screenshot of the search results
    cy.eyesCheckWindow('Taking screenshot for website 1');
    }
  afterEach(() => {  
    // Close Eyes to tell the server it should display the results.
    cy.eyesClose()
})
});
});