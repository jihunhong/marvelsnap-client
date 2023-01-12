/**
 * @description next 서버일때
 */
const isServer = (): boolean => {
  return typeof window === 'undefined';
};

export default isServer;
