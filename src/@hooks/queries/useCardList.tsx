import { useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { fetchCardList } from "src/@fetch";
import { filtering } from "src/@lib/filter";

const useCardList = (): [UseQueryResult<unknown, unknown>, (e: MouseEvent) => void, { type?: 'cost' | 'keyword' | 'grade', value? : string | number }] => {
    const [filter, setFilter] = useState(null);
    const key = '/api/cards/list';
    
    const onClick = (e: MouseEvent) => {
        e.preventDefault();
        const { type } = e.target?.dataset;
        const { value } = e.target?.dataset;
        setFilter({
            type,
            value
        })
    }

    return [useQuery([key, filter], fetchCardList, {
        select: (cards) => filter ? filtering(cards, filter) : cards,
        keepPreviousData: true
    }), onClick, filter];
}

export default useCardList;