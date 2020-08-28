import {voyageRisk} from "../src/rank";

const test = require('ava');
test('Should return 5 when calculate voyageRisk given voyage length 0 and zone is china', t => {
  const voyage = {
    zone: 'china',
    length: 0,
  };
  const result = voyageRisk(voyage)
  t.is(result, 5)
});


