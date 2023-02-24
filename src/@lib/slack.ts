import axios from 'axios';

const warnColor = '#ee6e66';
const createAttachment = ({ color = warnColor, title = '', text = '' }) => {
  return {
    attachments: [
      {
        color,
        pretext: '🔥 warn',
        author_name: 'snapsco',
        title,
        text,
        footer: 'snapsco client log',
      },
    ],
  };
};

const sendWarn = ({ title, text }: { title: string; text: string }) => {
  return new Promise((res, rej) => {
    axios
      .post('https://hooks.slack.com/services/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', createAttachment({ color: warnColor, title, text }))
      .then(response => res(response))
      .catch(err => rej(err));
  });
};

export default sendWarn;
