/**
 * Centralized app registry.
 * Add new apps here — they will automatically appear on the Projects page,
 * the Apps section on the homepage, and in the router/sitemap.
 */
export const apps = [
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
