<script setup>
</script>

<template>
  <div style="min-height: 100vh; padding: 108px 24px 100px; background: #07090e; color: #e0e4ea;">
    <div style="max-width: 720px; margin: 0 auto;">

      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <router-link :to="'/' + ($route.params.locale || 'en')">{{ $t('breadcrumb.home') }}</router-link>
        <span class="breadcrumb-sep">/</span>
        <span class="breadcrumb-current">{{ $t('privacy.title') }}</span>
      </nav>

      <h1 style="font-family: 'Cinzel', Georgia, serif; font-weight: 600; font-size: 2rem; color: #00f0ff; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;">
        {{ $t('privacy.title') }}
      </h1>

      <p style="color: #9ca3af; font-size: 0.85rem; margin-bottom: 40px;">
        {{ $t('privacy.updated') }}: 2026-03-04
      </p>

      <p style="color: #e0e4ea; font-size: 1.05rem; line-height: 1.8; padding-bottom: 16px; margin-bottom: 32px; border-bottom: 1px solid rgba(0, 240, 255, 0.12);">
        {{ $t('privacy.intro') }}
      </p>

      <div style="margin-bottom: 32px;">
        <h2 style="font-family: 'Cinzel', Georgia, serif; font-weight: 600; font-size: 1.15rem; color: #00f0ff; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;">
          {{ $t('privacy.collect_title') }}
        </h2>
        <p style="color: #9ca3af; line-height: 1.7;">{{ $t('privacy.collect_text') }}</p>
      </div>

      <div style="margin-bottom: 32px;">
        <h2 style="font-family: 'Cinzel', Georgia, serif; font-weight: 600; font-size: 1.15rem; color: #00f0ff; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;">
          {{ $t('privacy.use_title') }}
        </h2>
        <p style="color: #9ca3af; line-height: 1.7;">{{ $t('privacy.use_text') }}</p>
      </div>

      <div style="margin-bottom: 32px;">
        <h2 style="font-family: 'Cinzel', Georgia, serif; font-weight: 600; font-size: 1.15rem; color: #00f0ff; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;">
          {{ $t('privacy.third_title') }}
        </h2>
        <p style="color: #9ca3af; line-height: 1.7;">{{ $t('privacy.third_text') }}</p>
      </div>

      <div style="margin-bottom: 32px;">
        <h2 style="font-family: 'Cinzel', Georgia, serif; font-weight: 600; font-size: 1.15rem; color: #00f0ff; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;">
          {{ $t('privacy.security_title') }}
        </h2>
        <p style="color: #9ca3af; line-height: 1.7;">{{ $t('privacy.security_text') }}</p>
      </div>

      <div style="margin-bottom: 32px;">
        <h2 style="font-family: 'Cinzel', Georgia, serif; font-weight: 600; font-size: 1.15rem; color: #00f0ff; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;">
          {{ $t('privacy.changes_title') }}
        </h2>
        <p style="color: #9ca3af; line-height: 1.7;">{{ $t('privacy.changes_text') }}</p>
      </div>

      <div style="margin-bottom: 32px;">
        <h2 style="font-family: 'Cinzel', Georgia, serif; font-weight: 600; font-size: 1.15rem; color: #00f0ff; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8px;">
          {{ $t('privacy.contact_title') }}
        </h2>
        <p style="color: #9ca3af; line-height: 1.7;">{{ $t('privacy.contact_text') }}</p>
        <a href="mailto:zoryatechstudio@gmail.com" style="display: inline-block; margin-top: 8px; color: #00f0ff; font-weight: 500;">
          zoryatechstudio@gmail.com
        </a>
      </div>

    </div>
  </div>
</template>
