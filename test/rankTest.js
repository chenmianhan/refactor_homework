import {captainHistoryRisk, hasChina, rating, voyageProfitFactor, voyageRisk} from "../src/rank";

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
test('Should return 8 when calculate captainHistoryRisk given history length less than 5 and has 3 history profit small than 0 and zone is not china and has china ,', t => {
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
test('Should return 0 when calculate captainHistoryRisk given history length is 5 and has 0 history profit small than 0 and zone is china and has china ,', t => {
  const history = [
    {
      zone: 'east-indies',
      profit: 1,
    }, {
      zone: 'west-indies',
      profit: 4,
    }, {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'west-america',
      profit: 7,
    },
    {
      zone: 'east-america',
      profit: 1,
    }
  ];
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const result = captainHistoryRisk(voyage, history)
  t.is(result, 0)
});
test('Should return 2 when calculate voyageProfitFactor given voyage zone is west-indies', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [];
  const result = voyageProfitFactor(voyage, history)
  t.is(result, 2)
});
test('Should return 3 when calculate voyageProfitFactor given voyage zone is east-indies', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  const result = voyageProfitFactor(voyage, history)
  t.is(result, 3)
});
test('Should return 2 when calculate voyageProfitFactor given voyage zone is china and length is 18 and history has china and length is 10 ', t => {
  const voyage = {
    zone: 'west-indies',
    length: 18,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }
  ];
  const result = voyageProfitFactor(voyage, history)
  t.is(result, 2)
});
test('Should return 3 when calculate voyageProfitFactor given voyage zone is china and length is 19 and history has china and length is 11 ', t => {
  const voyage = {
    zone: 'west-indies',
    length: 19,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'west-indies',
      profit: 15,
    }
  ];
  const result = voyageProfitFactor(voyage, history)
  t.is(result, 2)
});
test('Should return 3 when calculate voyageProfitFactor given voyage zone is china and length is 11 and history has china and length is 11 ', t => {
  const voyage = {
    zone: 'west-indies',
    length: 11,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-china',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'west-indies',
      profit: 15,
    }
  ];
  const result = voyageProfitFactor(voyage, history)
  t.is(result, 3)
});
test('Should return 2 when calculate voyageProfitFactor given voyage zone is not china and length is 14 and history has none china and length is 8 ', t => {
  const voyage = {
    zone: 'west-indies',
    length: 14,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-china',
      profit: 15,
    }, {
      zone: 'east-indies',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'east-indies',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];
  const result = voyageProfitFactor(voyage, history)
  t.is(result, 2)
});
test('Should return 2 when calculate voyageProfitFactor given voyage zone is not china and length is 15 and history has none china and length is 9 ', t => {
  const voyage = {
    zone: 'west-indies',
    length: 15,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-china',
      profit: 15,
    }, {
      zone: 'east-indies',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'east-indies',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];
  const result = voyageProfitFactor(voyage, history)
  t.is(result, 2)
});
test('Should return B when rating given west-indies voyage length 8 and 3 history', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    }
  ];

  const result = rating(voyage, history)
  t.is(result, 'B')
});
test('test rating and result is A', t => {
  const voyage = {
    zone: 'china',
    length: 4,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    }, {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies',
      profit: 15,
    }, {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 8,
    },
  ];

  const result = rating(voyage, history);
  const expectResult = 'A';
  t.is(result, expectResult);
});
