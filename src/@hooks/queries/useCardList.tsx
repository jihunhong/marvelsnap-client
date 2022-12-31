import axios from "axios";
import { useQuery } from "react-query";

const useCardList = () => {
    const key = `http://localhost:3000/api/cards/list`;
    const fn = () => axios.get(key).then(res => res.data);
    return useQuery(key, fn);
}

export default useCardList;