import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ko');

dayjs.tz.setDefault('Asia/Seoul');

const format = (date: string) => {
  return dayjs(date).tz().format('YY.MM.DD');
};

export default format;
