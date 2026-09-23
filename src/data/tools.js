/**
 * Tools registry: browser extensions and desktop apps (more kinds of software later), rendered on the Tools page (/:locale/tools).
 * Same rule as apps.js: the array is rendered as-is, a new entry goes at the TOP.
 *
 * Optional links per entry: `storeUrl` (button only rendered when set), `siteUrl`, `privacyRoute`.
 * `storeUrl` stays null until the extension is live in the Chrome Web Store; the
 * button is only rendered when it is set. Status text comes from the shared
 * `app_status.<status>` key, never per extension.
 */
export const extensions = [
  {
    slug: 'qr-code-to-phone',
    nameKey: 'qrCodeToPhone.name',
    subtitleKey: 'qrCodeToPhone.subtitle',
    descKey: 'qrCodeToPhone.desc_short',
    platform: 'Chrome',
    status: 'released',
    tags: ['Chrome', 'QR', 'Localhost', 'Wi-Fi'],
    icon: '/extensions/qr-code-to-phone/icon.png',
    storeUrl: null,
    privacyRoute: (locale) => `/${locale}/qr-code-to-phone/privacy-policy`,
  },
]

export const desktopApps = [
  {
    slug: 'claude-meter',
    nameKey: 'claudeMeter.name',
    subtitleKey: 'claudeMeter.subtitle',
    descKey: 'claudeMeter.desc_short',
    platform: 'Windows, macOS',
    status: 'released',
    tags: ['Windows', 'macOS', 'Rust'],
    icon: '/tools/claude-meter/icon.png',
    siteUrl: 'https://klivak.github.io/claude-meter/',
  },
]
