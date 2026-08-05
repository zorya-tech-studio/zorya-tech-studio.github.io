/**
 * Open-source repositories, shown in their own section at the bottom of the
 * Projects page.
 *
 * Deliberately NOT part of `apps.js`: these are code repositories, not store
 * listings — no icon asset, no status badge, no privacy/terms pages. Each entry
 * links straight out to GitHub, so nothing here touches the router or the
 * prerendered routes.
 *
 * `icon` picks one of the inline SVGs in OpenSourceSection.vue.
 */
export const openSourceProjects = [
  {
    slug: 'claude-meter',
    name: 'ClaudeMeter',
    descKey: 'opensource.items.claude_meter',
    icon: 'gauge',
    license: 'MIT',
    tags: ['Rust', 'Windows', 'macOS'],
    url: 'https://github.com/klivak/claude-meter',
  },
  {
    slug: 'tg-harvest',
    name: 'TG Harvest',
    descKey: 'opensource.items.tg_harvest',
    icon: 'export',
    license: 'MIT',
    tags: ['Python', 'CLI', 'Web UI'],
    url: 'https://github.com/klivak/tg-harvest',
  },
]
