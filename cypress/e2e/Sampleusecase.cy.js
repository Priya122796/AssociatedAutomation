
const { browser } = require("../../applitools.config");
//running mulitple times 
Cypress._.times(1, () => {

    describe('PDF Validation Test', () => {
        beforeEach(() => {
            cy.eyesOpen({
             appName: 'PDF Validation',
              testName: Cypress.currentTest.title,
              browser: [{ width: 1200, height: 800 , name : "safari"}
            ]
            })
        })
        it('Taking screenshot dynamically  ', () => {
            cy.visit('https://www.docfly.com/pdf-viewer')
            cy.get('#s3-uploader').within(()=>{
                cy.get('#uploadBtn').selectFile('cypress/support/Actual PDF.pdf')
            })
            var val=0;
                cy.wait(2000).contains('Actual PDF.pdf').click();
                cy.wait(5000).get('.select-area').screenshot('Taking screenshot on first page ' )
                cy.get('#edit-page > div > div:nth-child(4) > div > div.ui.items.ui.overlay.left.thin.visible.sidebar.thumb-sidebar').within(()=>{
                    cy.get('.lazyload-wrapper').each(($ele)=>{
                        cy.wrap($ele).click();
                        cy.eyesCheckWindow({
                            tag : 'Taking screenshot with  : '+ ++val,
                            target: 'region',
                            selector: '.select-area'
                          });
                    })
                })
                cy.wait(2000).get('.select-area').screenshot('Taking screenshot on Last page');
               
            
        })

        afterEach(() => {  
            // Close Eyes to tell the server it should display the results.
            cy.eyesClose()
        })
    })
});