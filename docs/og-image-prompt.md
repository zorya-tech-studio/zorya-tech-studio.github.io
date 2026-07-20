# OG-image для Zorya Tech Studio — промпти на генерацію

> Соціальна прев'ю-картинка (Open Graph / Twitter card) під дизайн-систему
> **«Ніч → Світанок»**. Генеруємо у **16:9**, фінально ріжемо під потрібний OG-формат.

## Формат і безпечна зона (важливо)

- Генерувати в **16:9** — `1920×1080` (або `2560×1440`).
- Фінальний OG — **1200×630** (≈1.91:1). Це **ширше** за 16:9, тож при кропі
  ти зрізаєш **верхню й нижню смуги**, а не боки.
- **Тому весь ключовий контент (лого + wordmark + tagline) тримай вертикально
  по центру**, у межах центральних ~78% висоти. Верхні/нижні ~11% — «повітря»,
  яке можна безболісно обрізати.
- По боках теж лишай запас (safe area ~8%) — раптом захочеш квадратний кроп під інші мережі.

## Палітра / типографіка (з бренду)

- Фон-ніч — `#0A0D14` (поверхні `#111520`, `#181D2A`)
- Тепле золото світанку — `#F2B65A` (світліше `#F6C87E`)
- Досвітня блакить — `#8FA3D8`
- Текст / світло зорі — `#EDEFF4`
- Заголовки — **Space Grotesk**, текст — **Manrope**
- Знак — чотирипроменева зоря-«іскра» (dawn star) з увігнутими сторонами, тепле золото

## ⭐ Промпт A — фон-сцена без тексту (рекомендовано)

Генератори погано малюють літери. Найнадійніше: згенерувати **атмосферний фон**,
а лого/wordmark/tagline накласти в редакторі векторно й чітко.

```text
Create a premium wide social preview background for “Zorya Tech Studio”, an independent mobile app studio. Brand mood: “night into dawn” — a deep, calm pre-dawn sky with a warm band of first light low on the horizon.

A serene, cinematic pre-dawn atmosphere: near-black navy sky #0A0D14 at the top, softly transitioning to a subtle warm golden dawn glow (#F2B65A) rising from the bottom horizon, with a faint periwinkle blue haze (#8FA3D8) in between. Scatter a sparse, elegant field of tiny soft stars, brighter and denser near the top, a few gentle constellation-like line links, very subtle. Keep the CENTER of the image calm, clean and uncluttered — a quiet dark area with room for a logo and text to sit on top.

No text, no letters, no logo, no people, no planets, no sun disk, no buildings. Minimal, refined, high-end observatory feel — not gamer neon, not fantasy, not religious. Soft grain-free gradients, deep blacks, tasteful negative space.

Wide 16:9 cinematic composition, 1920×1080, balanced horizon low in the frame, generous empty safe area through the vertical middle, professional editorial quality.
```

## Промпт B — повна картка з текстом (як чернетка/швидкий варіант)

Якщо треба «все й одразу» (з ризиком кривих літер — потім однаково варто
перебити текст векторно):

```text
Design a premium 16:9 social share image (Open Graph card) for “Zorya Tech Studio”, an independent Ukrainian mobile app studio crafting thoughtful, privacy-conscious apps. Mood: “night into dawn”.

Background: a calm pre-dawn sky, near-black navy #0A0D14 at top fading to a warm golden dawn glow #F2B65A along the bottom horizon, faint periwinkle #8FA3D8 haze between, sparse soft stars. In the exact center: a single minimalist four-point “dawn star” symbol with gently concave curved sides and softly rounded tips, in warm gold #F2B65A with a subtle soft glow. Directly below the star, the clean wordmark “ZORYA TECH STUDIO” in a modern geometric sans-serif (Space Grotesk style), letter-spaced, in soft white #EDEFF4. Under it, a smaller tagline “Crafting mobile experiences with care” in light gray.

Keep the logo, wordmark and tagline tightly grouped and centered both horizontally and vertically, well inside the middle of the frame with generous margins on all sides (safe for cropping to 1.91:1). Minimal, elegant, premium — not neon, not cluttered. Flat modern design, crisp edges, no busy detail.

Wide 16:9, 1920×1080, centered composition, professional identity presentation, spelling must be exact: “ZORYA TECH STUDIO”.
```

## Як довести до фіналу

1. Згенерувати **Промпт A** (фон) у 16:9, обрати найспокійніший центр.
2. У Figma/редакторі накласти по центру: майстер-знак зорі → wordmark
   `ZORYA TECH STUDIO` (Space Grotesk) → tagline `Crafting mobile experiences with care`.
   Тримати групу в центральних ~78% висоти.
3. Експорт **1920×1080**, потім кроп до **1200×630** (зрізати верх/низ рівномірно).
4. Перевірити прев'ю у Telegram / Facebook / X — текст чіткий, знак читається,
   контраст ок на реальному фоні `#0A0D14`.
5. Покласти як `public/og-image.png` і прописати в `index.html`:
   `<meta property="og:image" ...>`, `og:image:width` 1200, `og:image:height` 630,
   `twitter:card` `summary_large_image`.

> Промпт B — лише швидка чернетка. Для продакшн-картки текст завжди набирати
> векторно (Промпт A + накладення), щоб літери були ідеальні.
