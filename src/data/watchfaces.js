// Wear OS watch faces shown on /:locale/watch-faces, newest first (array order is the display order).
// Add an entry only after the watch face is live on Google Play. While the list is empty the page shows the "in development" message.
// All watch faces share the single studio privacy policy (/:locale/privacy) - never add a per-face privacy page.
//
// Entry template:
// {
//   slug: 'atlas-classic',                       // same slug as faces/<slug> in watchfaces-studio
//   name: 'Atlas Classic',                       // store.title, English, no brand names
//   image: '/watchfaces/atlas-classic/main.png', // file in public/watchfaces/<slug>/
//   desc: { en: 'Short description.', uk: 'Короткий опис.' },
//   playUrl: 'https://play.google.com/store/apps/details?id=<applicationId>',
// },
export const watchFaces = []
