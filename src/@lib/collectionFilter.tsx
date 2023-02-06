export const ownFilter = (cards, filter) => {
  if (filter.type === 'own') {
    if (filter.value === 'owned') {
      return cards.filter(v => v.mine);
    }
    if (filter.value === 'unowned') {
      return cards.filter(v => !v.mine);
    }
  }
  return cards;
};

export const seriesFilter = (cards, filter) => {
  if (filter.type === 'grade') {
    return cards.filter(v => v.grade === parseInt(filter.value, 10));
  }
  return cards;
};
