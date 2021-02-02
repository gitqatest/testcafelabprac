import {Selector} from "testcafe";
import sleep from "../src/func_utils"


fixture `Personal Details Tests`            // Notice the back-tick, NOT a single or double quote
    .page `../src/practice_page.html`     // notice what heppens when the test is run...  Add semicolon if no optional elements

    test('test username', async t => {
        const firstname = Selector('#firstname');
        const lastname = Selector('#lastname');
        const age = Selector('#age');
        const birthday = Selector('#birthday');
        

        await t     // We wait on a Promise
            .expect(age.length).eql(0,'age is blank')
            .typeText(firstname, 'john')
            .typeText(lastname, 'smith')
            .typeText(birthday, '2017-05-05')
            .expect(firstname.value).contains('John', 'input contains the test "John"')
            .expect(lastname.value).contains('Smith', 'input contains the test "Smith"')
            .expect(age.innerText).contains('3','Age is equal to 3');
    
        await sleep(3000);
    });
