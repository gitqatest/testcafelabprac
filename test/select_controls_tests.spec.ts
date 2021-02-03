import {ClientFunction, Selector} from "testcafe";
import sleep from "../src/func_utils"
import {removeTrailingOblique} from "../src/func_utils"

fixture `Page Redirection Tests`
    .page `https://devexpress.github.io/testcafe/example/`  
    
    test('test username', async t => {
    
    const headingSelector = Selector('#main-form > div > header > h1');
    const headingText = await headingSelector.innerText

    console.log(headingText);
        

        //await t     // We wait on a Promise
            // .expect(age.length).eql(0,'age is blank')
            // .typeText(firstname, 'john')
            // .typeText(lastname, 'smith')
            // .typeText(birthday, '2017-05-05')
            // .expect(firstname.value).contains('John', 'input contains the test "John"')
            // .expect(lastname.value).contains('Smith', 'input contains the test "Smith"')
            // .expect(age.innerText).contains('3','Age is equal to 3');
    
        });