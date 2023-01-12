/**
 * @description next 서버가 아니라 client 일때
 */
const isClient = (): boolean => {
  return typeof window !== 'undefined';
};

export default isClient;
