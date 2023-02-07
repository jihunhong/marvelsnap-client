import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ko');

dayjs.tz.setDefault('Asia/Seoul');

const time = (date: string) => {
  return dayjs(date).tz().format('YY.MM.DD HH:mm:ss');
};

export default time;
