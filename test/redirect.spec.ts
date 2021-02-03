import {ClientFunction, Selector} from "testcafe";
import sleep from "../src/func_utils"
import {removeTrailingOblique} from "../src/func_utils"

// Utility functions
const getWindowLocation = ClientFunction(() => document.location.href);


fixture `Page Redirection Tests`            // Notice the back-tick, NOT a single or double quote
    .page `../src/practice_page.html`     // notice what heppens when the test is run...  Add semicolon if no optional elements

    test.skip('current location', async t => {
        const location = await getWindowLocation();
        const expectedResult = 'file:///C:/work/testcafe-quicklab-practice/src/practice_page.html';

        console.log( location );

        // add your assert here...
        // assert that the current location mataches the expectedResult

        // the sleep isn't needed but useful for pausing the browser, value is in milliseconds
        await sleep(3000);
    });

    test('navigate away, then back, then away', async t => {
        // arrange...
        // fetch the tags for BBC and QA, store them in the two variable bbc and qa respectively
        const bbc = Selector('#bbc');
        const qa = Selector('#qa');

        // get your current location, store it in a location variable - this is home location
        const location = await getWindowLocation();
        const expectedResult = 'file:///C:/work/testcafe-quicklab-practice/src/practice_page.html';
        
        // set up your expected values for the BBC and QA tags.  
        // Use the variables from above and call await bbc.getAttribute("href")
        // Use console.log() or the debugger to see what above code does
        let bbcURL = await bbc.getAttribute('href');
        let qaURL = await qa.getAttribute('href');

        await t
            .expect(bbcURL).contains('https://www.bbc.co.uk/news','BBCURL incorrect')
            .expect(qaURL).contains('https://www.qa.com','QA URL incorrect');


        // act...
        // navigate to the bbc by clicking on the page
        // get your current location
        await t
            .click(bbc);
            
        // assert...
        // aasert that the current location matches the expected location for the bbc
        const bbcLocation = await getWindowLocation();
        
        await t
        //.expect(bbcLocation).contains(bbcURL,'BBC URL INCORRECT');
        .expect(bbcLocation).contains('https://www.bbc','BBC URL INCORRECT')
        .setNativeDialogHandler(() => true);
        
        // arrange...
        // navigate back to the home location using t.navigateTo()
        await t
        .navigateTo(location);

        // act...
        // navigate to QA by clicking on the page
        await t
            .click(qa);

        // get your current location
        const qaLocation = await getWindowLocation();

        // assert...
        // aasert that the current location matches the expected location for the QA
        await t
        .expect(qaLocation).contains(qaURL,'QA URL INCORRECT');
    });