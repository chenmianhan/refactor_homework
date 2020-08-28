function getPlusDaysWhenRush(anOrder) {
  let deliveryTime;
  if ([
    'MA',
    'CT',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 1;
  } else if ([
    'NY',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }
  return 1 + deliveryTime;
}

function getPlusDaysWhenIsNoRush(anOrder) {
  let deliveryTime;
  if ([
    'MA',
    'CT',
    'NY',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 2;
  } else if ([
    'ME',
    'NH',
  ].includes(anOrder.deliveryState)) {
    deliveryTime = 3;
  } else {
    deliveryTime = 4;
  }
  return 2 + deliveryTime;
}

function deliveryDate(anOrder) {
  let plusDays = anOrder.isRush ? getPlusDaysWhenRush(anOrder) : getPlusDaysWhenIsNoRush(anOrder);
  return anOrder.placedOn.plusDays(plusDays);
}

module.exports = {
  deliveryDate
};
