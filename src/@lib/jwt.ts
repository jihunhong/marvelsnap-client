import { JWTPayload } from '@customTypes/index';
import unix from '@lib/day/unix';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import jwtDecode from 'jwt-decode';

dayjs.extend(isBetween);
export const getExp = (token: string): Dayjs => {
  const decoded: JWTPayload = jwtDecode(token);
  return unix(decoded.exp);
};

/*
 * @description: token 발행시 expire는 2주로 설정되며
 * refreshing이 행해지는 시간은 토큰 발행후 3일이 지난 시점부터 expire시간내로 한정된다
 * 그러므로 exp의 날짜를 알아낸후 exp의 11일 전부터 0일전까지의 시간을 토큰 갱신 시간으로 산정한다.
 */
export const isValidForRefresh = (date: Dayjs): boolean => {
  const gracePeriod = dayjs(date).subtract(11, 'day');
  const today = dayjs();
  return today.isBetween(gracePeriod, date);
};
