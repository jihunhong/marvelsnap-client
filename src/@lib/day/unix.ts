import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ko');

dayjs.tz.setDefault('Asia/Seoul');

const unix = (unixTimeStamp: number) => {
  return dayjs(unixTimeStamp * 1000);
};

export default unix;
