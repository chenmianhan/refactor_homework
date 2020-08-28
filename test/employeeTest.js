import {Employee} from "../src/employee";

const test = require('ava')
test('Should not throw Error when new a Employee given right type manager', t => {
    t.notThrows(() => new Employee('James', 'manager'))
})
test('Should  throw Error Employee cannot be of type student when new a Employee given wrong type student', t => {
    t.throws(() => new Employee('James', 'student'), "Employee cannot be of type student")
})
test('Should return name and type when toString given a employee', t => {
    let employee = new Employee('James', 'manager');
    t.is(employee.toString(), 'James (manager)')
})
