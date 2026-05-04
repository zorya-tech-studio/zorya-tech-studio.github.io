/**
 * Centralized app registry.
 * Add new apps here — they will automatically appear on the Projects page,
 * the Apps section on the homepage, and in the router/sitemap.
 */
export const apps = [
  {
    slug: 'senso',
    nameKey: 'senso.name',
    subtitleKey: 'senso.subtitle',
    descKey: 'senso.desc_short',
    platform: 'Android',
    status: 'released',
    statusKey: 'senso.status',
    tags: ['Android', 'Tools', 'Sensors'],
    icon: '/apps/senso/icon.png',
    privacyRoute: (locale) => `/${locale}/senso/privacy-policy`,
  },
  {
    slug: 'movogra',
    nameKey: 'movogra.name',
    subtitleKey: 'movogra.subtitle',
    descKey: 'movogra.desc_short',
    platform: 'Android',
    status: 'released',
    statusKey: 'movogra.status',
    tags: ['Android', 'Quiz', 'Ukrainian'],
    icon: '/apps/movogra/icon.png',
    privacyRoute: (locale) => `/${locale}/movogra/privacy-policy`,
  },
]
