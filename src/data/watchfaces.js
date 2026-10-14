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
export const watchFaces = [
  {
    slug: 'moonlit-pumpkin',
    name: 'Halloween Pumpkin Watch Face',
    image: '/watchfaces/moonlit-pumpkin/main.png',
    desc: {
      en: 'Illustrated Halloween watch face: a big carved pumpkin glows on a misty hill under the full moon, with large digital time, 14 themes and a true black Always On mode.',
      uk: 'Ілюстрований геловінський циферблат: великий різьблений гарбуз світиться на туманному пагорбі під повним місяцем, великий цифровий час, 14 тем і справжній чорний режим Always On.',
    },
    playUrl: 'https://play.google.com/store/apps/details?id=com.zoryatechstudio.wf.moonlit_pumpkin',
  },
  {
    slug: 'retro-backlight',
    name: 'Retro LCD Digital Watch Face',
    image: '/watchfaces/retro-backlight/main.png',
    desc: {
      en: 'Classic LCD sports watch with a real tap-on backlight, ghost segments, 16 LCD themes and 3 Always On modes.',
      uk: 'Класичний LCD-годинник зі справжньою підсвіткою по тапу, «привидами» сегментів, 16 LCD-темами і 3 режимами Always On.',
    },
    playUrl: 'https://play.google.com/store/apps/details?id=com.zoryatechstudio.wf.retro_backlight',
  },
]
