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
test('delivery test case 1. is Rush,and delivery include CT. ', t => {
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
test('delivery test case 1. is Rush,and delivery include NY. ', t => {
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
test('delivery test case 1. is Rush,and delivery include NH. ', t => {
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
