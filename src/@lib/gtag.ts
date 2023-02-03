export const GA_TRACKING_ID = 'G-4NC6WLN8B6';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// // https://developers.google.com/analytics/devguides/collection/gtagjs/events
// export const event = ({ action, category, label, value }) => {
//   window.gtag('event', action, {
//     event_category: category,
//     event_label: label,
//     value: value,
//   });
// };
