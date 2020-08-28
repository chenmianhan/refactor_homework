function voyageRisk (voyage) {
  let result = 1;
  result += voyage.length > 8 ? voyage.length - 6 : (voyage.length > 4 ? 2 : 0)
  const zoneList = [
    'china',
    'east-indies',
  ];
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

function captainHistoryRisk(voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (hasRelationWithChina(voyage, history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function voyageProfitFactor (voyage, history) {
  let result = 2;
  if (voyage.zone === 'china') {
    result += 1;
  }
  if (voyage.zone === 'east-indies') {
    result += 1;
  }
  if (hasRelationWithChina()) {
    result += 3;
    if (history.length > 10) {
      result += 1;
    }
    if (voyage.length > 12) {
      result += 1;
    }
    if (voyage.length > 18) {
      result -= 1;
    }
  }
  else {
    if (history.length > 8) {
      result += 1;
    }
    if (voyage.length > 14) {
      result -= 1;
    }
  }
  return result;
}

function rating (voyage, history) {
  const vpf = voyageProfitFactor(voyage, history);
  const vr = voyageRisk(voyage);
  const chr = captainHistoryRisk(voyage, history);
  if (vpf * 3 > (vr + chr * 2)) {
    return 'A';
  }
  else {
    return 'B';
  }
}

module.exports = {
  voyageRisk, hasChina, captainHistoryRisk, voyageProfitFactor, rating
};

