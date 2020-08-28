import {deliveryDate} from "../src/delivery";

const  test = require('ava');
test('delivery test case 1. is Rush,and delivery include MA. ', t => {
    const anOrder = {
        "deliveryState": 'MA',
        "placedOn":{
            "plusDays": function (plusDays) {
                return plusDays;
            }
        }
    }

    const result = deliveryDate(anOrder, true);

    t.is(result, 2);
});
test('delivery test case 2. is Rush,and delivery include CT. ', t => {
    const anOrder = {
        "deliveryState": 'CT',
        "placedOn": {
            "plusDays": function (plusDays) {
                return plusDays;
            }
        }
    }

    const result = deliveryDate(anOrder, true);

    t.is(result, 2);
});
test('delivery test case 3. is Rush,and delivery include NY. ', t => {
    const anOrder = {
        "deliveryState": 'NY',
        "placedOn": {
            "plusDays": function (plusDays) {
                return plusDays;
            }
        }
    }

    const result = deliveryDate(anOrder, true);

    t.is(result, 3);
});
test('delivery test case 4. is Rush,and delivery include NH. ', t => {
    const anOrder = {
        "deliveryState": 'NH',
        "placedOn": {
            "plusDays": function (plusDays) {
                return plusDays;
            }
        }
    }

    const result = deliveryDate(anOrder, true);

    t.is(result, 3);
});
test('delivery test case 5. is Rush,and delivery contains none key word. ', t => {
    const anOrder = {
        "deliveryState": '',
        "placedOn": {
            "plusDays": function (plusDays) {
                return plusDays;
            }
        }
    }

    const result = deliveryDate(anOrder, true);

    t.is(result, 4);
});
test('delivery test case 6. is not Rush,and delivery include MA. ', t => {
    const anOrder = {
        "deliveryState": 'MA',
        "placedOn": {
            "plusDays": function (plusDays) {
                return plusDays;
            }
        }
    }
    const result = deliveryDate(anOrder, false);

    t.is(result, 4);
});
test('delivery test case 7. is not Rush,and delivery include CT. ', t => {
    const anOrder = {
        "deliveryState": 'CT',
        "placedOn": {
            "plusDays": function (plusDays) {
                return plusDays;
            }
        }
    }
    const result = deliveryDate(anOrder, false);

    t.is(result, 4);
});
test('delivery test case 8. is not Rush,and delivery include NY. ', t => {
    const anOrder = {
        "deliveryState": 'NY',
        "placedOn": {
            "plusDays": function (plusDays) {
                return plusDays;
            }
        }
    }
    const result = deliveryDate(anOrder, false);

    t.is(result, 4);
});
test('delivery test case 9. is not Rush,and delivery include ME. ', t => {
    const anOrder = {
        "deliveryState": 'ME',
        "placedOn": {
            "plusDays": function (plusDays) {
                return plusDays;
            }
        }
    }
    const result = deliveryDate(anOrder, false);

    t.is(result, 5);
});



