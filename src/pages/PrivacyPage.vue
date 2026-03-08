<script setup></script>

<template>
  <div class="privacy-page">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <router-link :to="'/' + ($route.params.locale || 'en')">{{
        $t('breadcrumb.home')
      }}</router-link>
      <span class="breadcrumb-sep">/</span>
      <span class="breadcrumb-current">{{ $t('privacy.title') }}</span>
    </nav>

    <h1 class="page-title">{{ $t('privacy.title') }}</h1>

    <p class="updated-date">{{ $t('privacy.updated') }}: 2026-03-08</p>

    <p class="intro-text">{{ $t('privacy.intro') }}</p>

    <div class="policy-section">
      <h2 class="section-heading">{{ $t('privacy.collect_title') }}</h2>
      <p class="section-text">{{ $t('privacy.collect_text') }}</p>

      <div class="subsection">
        <h3 class="subsection-heading">{{ $t('privacy.collect_firebase_title') }}</h3>
        <p class="subsection-text">{{ $t('privacy.collect_firebase_text') }}</p>
      </div>

      <div class="subsection">
        <h3 class="subsection-heading">{{ $t('privacy.collect_admob_title') }}</h3>
        <p class="subsection-text">{{ $t('privacy.collect_admob_text') }}</p>
      </div>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ $t('privacy.use_title') }}</h2>
      <p class="section-text">{{ $t('privacy.use_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ $t('privacy.third_title') }}</h2>
      <p class="section-text">{{ $t('privacy.third_text') }}</p>
      <ul class="third-party-list">
        <li>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener"
            >Firebase Analytics</a
          >
          — Google Privacy Policy
        </li>
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener"
            >Google AdMob</a
          >
          — Google Ads Privacy
        </li>
      </ul>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ $t('privacy.security_title') }}</h2>
      <p class="section-text">{{ $t('privacy.security_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ $t('privacy.changes_title') }}</h2>
      <p class="section-text">{{ $t('privacy.changes_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ $t('privacy.contact_title') }}</h2>
      <p class="section-text">{{ $t('privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>

<style scoped>
.privacy-page {
  min-height: 100vh;
  max-width: 720px;
  margin: 0 auto;
  padding: calc(var(--nav-height) + 48px) 24px 100px;
  background: var(--bg);
  color: var(--text);
}

.page-title {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 2rem;
  color: var(--accent);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.updated-date {
  color: var(--text-dim);
  font-size: 0.85rem;
  margin-bottom: 40px;
}

.intro-text {
  color: var(--text);
  font-size: 1.05rem;
  line-height: 1.8;
  padding-bottom: 16px;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--accent-dim);
}

.policy-section {
  margin-bottom: 32px;
}

.section-heading {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--accent);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.section-text {
  color: var(--text-dim);
  line-height: 1.7;
  margin-bottom: 16px;
}

.subsection {
  margin-left: 16px;
  padding-left: 16px;
  border-left: 2px solid rgba(0, 240, 255, 0.15);
  margin-bottom: 14px;
}

.subsection-heading {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 4px;
}

.subsection-text {
  color: var(--text-dim);
  line-height: 1.7;
  font-size: 0.95rem;
}

.third-party-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.third-party-list li {
  color: var(--text-dim);
  line-height: 1.7;
  margin-bottom: 6px;
}

.third-party-list a {
  color: var(--accent);
}

.contact-email {
  display: inline-block;
  margin-top: 8px;
  color: var(--accent);
  font-weight: 500;
}

@media (max-width: 480px) {
  .privacy-page {
    padding: calc(var(--nav-height) + 24px) 16px 60px;
  }

  .page-title {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  .subsection {
    margin-left: 8px;
    padding-left: 12px;
  }
}
</style>
