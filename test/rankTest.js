import {hasChina, voyageRisk} from "../src/rank";

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
