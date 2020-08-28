function isDeliveryStateIncludesStates(anOrder, states) {
  return states.includes(anOrder.deliveryState);
}

function getPlusDaysWhenRush(anOrder) {
  let deliveryTime;
  if (isDeliveryStateIncludesStates(anOrder, [
    'MA',
    'CT',
  ])) {
    deliveryTime = 1;
  } else if (isDeliveryStateIncludesStates(anOrder, [
    'NY',
    'NH',
  ])) {
    deliveryTime = 2;
  } else {
    deliveryTime = 3;
  }
  return 1 + deliveryTime;
}

function getPlusDaysWhenIsNoRush(anOrder) {
  let deliveryTime;
  if (isDeliveryStateIncludesStates(anOrder, [
    'MA',
    'CT',
    'NY',
  ])) {
    deliveryTime = 2;
  } else if (isDeliveryStateIncludesStates(anOrder, [
    'ME',
    'NH',
  ])) {
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
