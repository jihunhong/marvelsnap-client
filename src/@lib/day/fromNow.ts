import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.locale('ko');

dayjs.tz.setDefault('Asia/Seoul');

export const fromNow = (created: string) => {
  dayjs.locale('ko');
  return dayjs(created).fromNow();
};

export default fromNow;
