import axios from "axios"


export const fetchCardList = async() => {
    const { data } = await axios.get('http://localhost:3000/api/cards/list');
    return data;
}