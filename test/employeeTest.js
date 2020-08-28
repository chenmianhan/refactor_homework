import {Employee} from "../src/employee";

const test = require('ava')
test('Should not throw Error when new a Employee given right type manager', t => {
    t.notThrows(() => new Employee('James', 'manager'))
})
