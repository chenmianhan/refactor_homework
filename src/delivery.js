function isDeliveryStateIncludesStates(anOrder, states) {
  return states.includes(anOrder.deliveryState);
}

function getPlusDaysWhenRush(anOrder) {
  return 1 + (isDeliveryStateIncludesStates(anOrder, ['MA', 'CT']) ? 1 : isDeliveryStateIncludesStates(anOrder, ['NY', 'NH']) ? 2 : 3);
}

function getPlusDaysWhenIsNoRush(anOrder) {
  return 2 + (isDeliveryStateIncludesStates(anOrder, ['MA', 'CT', 'NY',]) ? 2 : isDeliveryStateIncludesStates(anOrder, ['ME', 'NH']) ? 3 : 4);
}


function deliveryDate(anOrder) {
  return anOrder.placedOn.plusDays(anOrder.isRush ? getPlusDaysWhenRush(anOrder) : getPlusDaysWhenIsNoRush(anOrder));
}

module.exports = {
  deliveryDate
};
