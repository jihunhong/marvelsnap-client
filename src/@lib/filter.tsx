import keywords from '@constant/keywords';
import { ascName, descName } from '@lib/sort';

export const filtering = (cards, filter) => {
  if (!filter.value || filter.type === 'reset') {
    return cards;
  }
  if (filter.type === 'own') {
    if (filter.value === 'owned') {
      return cards.filter(v => v.mine);
    }
    if (filter.value === 'unowned') {
      return cards.filter(v => !v.mine);
    }
    return cards;
  }
  if (filter.type === 'sort') {
    if (filter.value === 'en') {
      const result = ascName([...cards]);
      return filter.direction === 'asc' ? result : result.reverse();
    }
    const result = [...cards].sort((a, b) => a[filter.value] - b[filter.value]);
    return filter.direction === 'asc' ? result : result.reverse();
  }

  if (filter.type === 'grade') {
    return cards.filter(v => v.grade === parseInt(filter.value, 10));
  }

  if (filter.type === 'cost') {
    if (filter.value === '6') {
      return cards.filter(v => v.cost >= 6);
    }
    return cards.filter(v => v.cost === parseInt(filter.value, 10));
  }
  if (filter.type === 'keyword') return cards.filter(v => v.keywords.includes(keywords[filter.value]));
  if (!filter) return cards;
};
