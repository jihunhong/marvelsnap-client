import breakpoints from './breakpoints';

// {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '425px',
//   tablet: '768px',
//   laptop: '1024px',
//   laptopL: '1440px',
//   desktop: '2560px',
// }

export const device = {
  mobileS: `(min-width: ${breakpoints.mobileS}px)`,
  mobileM: `(min-width: ${breakpoints.mobileM}px)`,
  mobileL: `(min-width: ${breakpoints.mobileL}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  laptopL: `(min-width: ${breakpoints.laptopL}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
};

export default device;
