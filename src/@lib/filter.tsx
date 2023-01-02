import keywords from "@constant/keywords";

export const filtering = (cards, filter) => {
    if(!filter.value || filter.type === 'reset') {
        return cards;
    }
    if(filter.type === 'sort') {
        return cards.sort((a, b) => a[filter.value] - b[filter.value]);
    }

    if(filter.type === 'grade') {
        return cards.filter(v => v.grade === parseInt(filter.value, 10));
    }

    if(filter.type === 'cost'){
        if(filter.value === '6') {
            return cards.filter(v => v.cost >= 6)
        }
        return cards.filter(v => v.cost === parseInt(filter.value, 10));
    }
    if(filter.type === 'keyword') 
        return cards.filter(v => v.keywords.includes(keywords[filter.value]));
    if(!filter) return cards;
}