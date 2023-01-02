import keywords from '@constant/keywords';
import useCardList from '@hooks/queries/useCardList';
import keys from '@query/keys';
import { MouseEvent, useState } from 'react';
import { useQueryClient } from 'react-query';

const useCardFilter = () => {
    // const queryClient = useQueryClient();
    const [selected, setSelected] = useState();
    const onClick = (e: MouseEvent) => {
        e.preventDefault();
        const selected = e.target.textContent;
        const id = keywords[selected];
        // queryClient.invalidateQueries(keys.cardList);
        // queryClient.setQueryData(keys.cardList, (data) => {
        //     return data.filter(v => v.keywords.includes(id))
        // });
        setSelected(id);
    }

    return [selected, onClick];
}

export default useCardFilter;