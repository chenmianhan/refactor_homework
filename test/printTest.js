import {printOwing} from "../src/print";

const test = require('ava');

test('Should return result when printOwing given invoice', t => {
    const invoice = {
        "customer": "James",
        "borderSpacing": [
            {amount: 30}
        ]
    };
    let today = new Date();
    today.setDate(today.getDate() + 30)


    const result = printOwing(invoice);
    t.is(result, '***********************\n' +
        '**** Customer Owes ****\n' +
        '***********************\n' +
        'name: James\n' +
        'amount: 30\n' +
        'amount: ' + today.toLocaleDateString())
});