import { useQuery } from "react-query";
import { fetchCardList } from "src/@fetch";

const useCardList = () => {
    const key = '/api/cards/list';
    return useQuery(key, fetchCardList);
}

export default useCardList;