import {captainHistoryRisk, hasChina, voyageRisk} from "../src/rank";

const test = require('ava');
test('Should return 5 when calculate voyageRisk given voyage length 0 and zone is china', t => {
  const voyage = {
    zone: 'china',
    length: 0,
  };
  const result = voyageRisk(voyage)
  t.is(result, 5)
});
test('Should return 3 when calculate voyageRisk given voyage length 8 and zone is west-indies', t => {
  const voyage = {
    zone: 'west-indies',
    length: 8,
  };
  const result = voyageRisk(voyage)
  t.is(result, 3)
});
test('Should return 0 when calculate voyageRisk given voyage length 9 and zone is west-indies', t => {
  const voyage = {
    zone: 'west-indies',
    length: 9,
  };
  const result = voyageRisk(voyage)
  t.is(result, 4)
});
test('Should return true when judge hasChina given history has item zone is  china', t => {
  const history = [
    {
      zone: 'china',
      profit: -2,
    }
  ];
  const result = hasChina(history)
  t.is(result, true)
});
test('Should return false when judge hasChina given history has none item zone is  china', t => {
  const history = [
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];
  const result = hasChina(history)
  t.is(result, false)
});
test('Should return false when calculate captainHistoryRisk given history length less than 5 and has 3 history profit small than 0 and zone is not china and has china ,', t => {
  const history = [
    {
      zone: 'east-indies',
      profit: -1,
    }, {
      zone: 'west-indies',
      profit: -4,
    }, {
      zone: 'east-africa',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const result = captainHistoryRisk(voyage, history)
  t.is(result, 8)
});
