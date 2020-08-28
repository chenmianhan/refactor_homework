const zoneList = [
  'china',
  'east-indies',
];
function voyageRisk (voyage) {
  let result = 1;
  result += voyage.length > 8 ? voyage.length - 6 : (voyage.length > 4 ? 2 : 0)

  if (zoneList.includes(voyage.zone)) {
    result += 4;
  }
  return result;
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function hasRelationWithChina(voyage, history) {
  return voyage.zone === 'china' && hasChina(history);
}

function getNumberOfHistoryProfitLessThan0(history) {
  return history.filter(v => v.profit < 0).length;
}

function captainHistoryRisk(voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += getNumberOfHistoryProfitLessThan0(history);
  if (hasRelationWithChina(voyage, history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function getResultWhenRelatedToChina(history, voyage) {
  let result = 3;
  if (history.length > 10) {
    result += 1;
  }
  if (voyage.length > 12 && voyage.length <= 18) {
    result += 1;
  }
  return result;
}

function getResultWhenNoRelatedToChina(history, voyage) {
  let result = 0;
  if (history.length > 8 && voyage.length <= 14) {
    result += 1;
  }
  return result;
}

function voyageProfitFactor(voyage, history) {
  let result = 2;
  if (voyage.zone in zoneList) {
    result += 1;
  }
  result += hasRelationWithChina(voyage, history) ? getResultWhenRelatedToChina(history, voyage) : result = getResultWhenNoRelatedToChina(history, voyage);
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  } else {
    return 'B';
  }
}

module.exports = {
  voyageRisk, hasChina, captainHistoryRisk, voyageProfitFactor, rating
};

