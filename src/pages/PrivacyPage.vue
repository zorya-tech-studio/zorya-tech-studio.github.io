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

    <p class="updated-date">{{ $t('privacy.updated') }}: 2026-10-13</p>

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

    <div id="bluetooth" class="policy-section">
      <h2 class="section-heading">{{ $t('privacy.bluetooth_title') }}</h2>
      <p class="section-text">{{ $t('privacy.bluetooth_text') }}</p>
    </div>

    <div id="watch-faces" class="policy-section">
      <h2 class="section-heading">{{ $t('privacy.watchfaces_title') }}</h2>
      <p class="section-text">{{ $t('privacy.watchfaces_text') }}</p>
      <p class="section-text">{{ $t('privacy.watchfaces_data_text') }}</p>
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
      <h2 class="section-heading">{{ $t('privacy.purchases_title') }}</h2>
      <p class="section-text">{{ $t('privacy.purchases_text') }}</p>
    </div>

    <div class="policy-section">
      <h2 class="section-heading">{{ $t('privacy.children_title') }}</h2>
      <p class="section-text">{{ $t('privacy.children_text') }}</p>
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
      <p class="section-text">{{ $t('privacy.developer') }}</p>
      <p class="section-text">{{ $t('privacy.contact_text') }}</p>
      <a href="mailto:zoryatechstudio@gmail.com" class="contact-email">
        zoryatechstudio@gmail.com
      </a>
    </div>
  </div>
</template>
