import { defaultDescription, defaultTitle, siteBaseUrl } from '@constant/text';

export const DEFAULT_SEO = {
  title: defaultTitle,
  description: defaultDescription,
  canonical: 'https://snapsco.net',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteBaseUrl,
    title: defaultTitle,
    description: defaultDescription,
    site_name: 'Snapsco',
    images: [
      {
        url: 'https://marvelsnap.imgix.net/static/logo.png?w=256&h=256',
        width: 256,
        height: 256,
        alt: 'Snapsco logo',
      },
    ],
  },
  twitter: {
    handle: '@snapsco',
    site: '@snapsco.net',
    cardType: 'summary_large_image',
  },
};
