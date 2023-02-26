import { baseImgix } from '@constant/imigx';
import { Card } from '@customTypes/Card';
import { baseUrl, searchingApi } from '@fetch/index';
import { BiGlobe } from 'react-icons/bi';

const searchCard = {
  name: 'card',
  keyCommand: 'card',
  buttonProps: { 'aria-label': 'card' },
  icon: <BiGlobe size={16} />,
  execute: (state, api) => {
    searchingApi(state.selectedText)
      .then(res => {
        const card: Card = res[0];
        if (card) {
          let modifyText = `<center><a href="/card/${card.cardDefId}" target="_blank" rel="noreferrer noopener"><div class='card'><img src="${baseImgix}/cards/basic/${card.cardDefId}.webp?w=512&auto=format" width="246" height="246" /><p>${card.effect}</p></div></a></center>\n`;
          if (!state.selectedText) {
            modifyText = `not selected.`;
          }
          api.replaceSelection(modifyText);
        } else {
          throw Error('not found card item');
        }
      })
      .catch(err => {
        console.log(err);
        api.replaceSelection('not found card');
      });
  },
};

export default searchCard;
