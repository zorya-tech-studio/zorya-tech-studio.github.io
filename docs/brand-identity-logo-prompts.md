# Айдентика та логотип Zorya Tech Studio

> Оновлено під дизайн-систему **«Ніч → Світанок»** (Night → Dawn), впроваджену на сайті.
> Попередня версія цього файлу орієнтувалася на застарілу неонову палітру (cyan/magenta) —
> усі промпти нижче переписані під **актуальний** бренд.

## Що вже є в бренді (після редизайну)

- **Zorya Tech Studio** — незалежна українська студія з портфелем ~20 Android-застосунків:
  утиліти, освіта, ігри, lifestyle та довідники.
- Головні цінності: продуманий дизайн, надійна інженерія, користь у повсякденні,
  турбота про користувача. У багатьох продуктів принцип **offline / on-device / без акаунта / без зайвого стеження**.
- **Настрій айдентики:** глибоке передсвітанкове небо, одна ясна ранкова зоря, тонка тепла
  смуга світла на горизонті. Спокій, точність, «преміум-обсерваторія» — **не** геймерський неон.
- **Палітра (актуальна):**
  - Фон / ніч — `#0A0D14` (та поверхні `#111520`, `#181D2A`)
  - Основний акцент — тепле золото світанку `#F2B65A` (світліше на hover `#F6C87E`)
  - Допоміжний акцент — досвітня блакить `#8FA3D8`
  - Текст / світло зорі — `#EDEFF4`
- **Типографіка:** Space Grotesk (заголовки) + Manrope (текст). Wordmark розробляти окремо.
- **Уже існує знак у продукті** — вигнута чотирипроменева зоря-«іскра» (4-point dawn sparkle)
  з увігнутими сторонами й м'яким золотим світлом. Використовується в навбарі, героях і футері.
  Це відправна точка: фінальний майстер-знак має бути **впізнаваним розвитком цього силуету**,
  а не чимось стороннім.

### Референс наявного знака (SVG-геометрія)

```
viewBox="0 0 64 64"
M32 3 C 34.5 23, 41 29.5, 61 32 C 41 34.5, 34.5 41, 32 61
      C 29.5 41, 23 34.5, 3 32 C 23 29.5, 29.5 23, 32 3 Z
```

Чотири промені з увігнутими бік-о-бік дугами, сильне світле ядро, м'які завершення.
Колір — золото `#F2B65A`, тонкий теплий glow (`drop-shadow` золотого).

## Проблема, яку розв'язуємо

- Наявна чотирипроменева зоря-«іскра» вже **правильна за настроєм** і добре працює в UI.
  Завдання — не ускладнити її, а **відшліфувати мінімалізм**: чистіші пропорції, ідеальна
  оптична вага, бездоганна читабельність у 16 px.
- Попередні спроби «зробити знак пропрієтарним» через додаткові промені, орбіти, сузір'я
  та асиметрію робили його важчим і менш впізнаваним. **Напрям — навпаки: менше, а не більше.**
- Уже існує інша компанія **Zorya Tech**, тому впізнаваність будуємо на **точності силуету
  та пропорціях**, а не на декоративних деталях.

## Рекомендований напрям

### Концепція: Dawn Star / Ранкова зоря — мінімалістичний знак

Один чистий чотирипроменевий силует із увігнутими сторонами й ясним ядром. Мінімум деталей,
максимум точності. Що несе знак:

- зоря / перший промінь як символ ясності та орієнтиру;
- геометрична точність технологічного продукту;
- м'які завершення променів як ознака турботи («with care»);
- **тепле золото** як основний колір; блакить — лише за потреби, дуже стримано.

Ключова бренд-ідея: **«Ясні цифрові продукти, створені з турботою, — світло після ночі»**.

Логотип робити **без тексту** — щоб працював як favicon, аватар розробника в Play Store,
watermark і знак усередині застосунків. Wordmark `ZORYA TECH STUDIO` (Space Grotesk) — окремо.

**Правила мінімалізму (обов'язково):**

- одна суцільна форма — чотирипроменева зоря з увігнутими дугами, симетрична;
- **без** додаткових/вторинних променів, орбіт, кілець, сузір'їв, рамок і асиметрії;
- рівна оптична вага, впевнене ядро, м'яко заокруглені завершення;
- знак має читатися у 16 px і працювати в **одному кольорі**.

**Кольорові ролі для генерації (важливо — не використовувати старий cyan/magenta):**

- фон — near-black navy `#0A0D14`
- основна форма — warm gold `#F2B65A`
- (опційно) один дуже стриманий акцент — dawn-sky periwinkle blue `#8FA3D8`
- (опційно) крихітна світла точка-ядро — soft white `#EDEFF4` або світліше золото `#F6C87E`
- максимум **два** суцільні кольори у майстер-версії, без градієнтів/glow/тіней

---

## Промпт 1 — Dawn Star (чистий мінімалізм) ⭐ основний

Найближчий до наявного знака: та сама чотирипроменева зоря, лише відшліфована до ідеалу.

```text
Create a minimalist primary brand symbol for “Zorya Tech Studio”, an independent Ukrainian mobile app studio creating thoughtful, useful, privacy-conscious Android applications. Brand mood: “night into dawn” — a deep pre-dawn sky and one clear morning star.

Design a single four-point “dawn star” with gently concave curved sides and a calm, confident core. Keep it perfectly symmetrical and extremely simple — one clean solid shape, nothing else. Refine only the proportions and optical balance so the mark feels precise, premium and effortless. The star should communicate clarity, guidance, reliable engineering and care.

Softly rounded ray terminals, smooth concave curves between the four points, balanced negative space. Do not add secondary rays, orbits, rings, frames, sparkles, asymmetry, horizons or any extra element. It must not look mystical, religious, military, crypto-related or like a compass.

Flat vector logo style. One centered symbol only. No words, no letters, no monogram. Near-black navy background #0A0D14. Symbol in a single warm gold #F2B65A. One solid color, no gradients, no glow, no shadows, no texture, no outline.

The silhouette must stay perfectly recognizable at 16×16 pixels and in pure black and white. Premium contemporary minimalist identity, suitable for favicon, app developer avatar, website, social media and print.

Square 1:1 composition, large centered mark, generous safe area, crisp vector edges, presentation-ready logo artwork, 2048×2048.
```

## Промпт 2 — Dawn Star + ядро

Той самий силует, але з крихітною світлою точкою-ядром для глибини.

```text
Design a minimalist brand symbol for “Zorya Tech Studio”, an independent mobile studio building useful, well-crafted applications made with care. Mood: the first warm light in a dark pre-dawn sky.

Create one clean four-point dawn star with gently concave sides and softly rounded tips, perfectly symmetrical. Add only a single small round core point at the exact center to give the mark a focused “light” — nothing else. Keep the construction minimal, calm and precise.

Do not add extra rays, rings, arcs, orbits, constellations, horizons, frames or asymmetry. Avoid any decorative or futuristic detail. The mark should feel quiet, optimistic and technically credible.

Flat vector mark, one centered icon, no text. Near-black navy background #0A0D14. Star in warm gold #F2B65A with the tiny central point in soft white #EDEFF4. Maximum two solid colors. No gradients, glow, shadows, 3D or texture.

Strong simple silhouette, fully readable at favicon size and in one color, ideal for app icon systems.

Square 1:1 canvas, 2048×2048, centered logo with generous padding, professional minimalist identity presentation.
```

## Промпт 3 — Dawn Star (лінійна / outline версія)

Тонка контурна варіація того ж знака — для світлих фонів, watermark та монолінійних застосувань.

```text
Create a minimalist line-based brand symbol for “Zorya Tech Studio”, an independent mobile app studio. Mood: a single clear morning star over a pre-dawn sky.

Draw one four-point dawn star with gently concave curved sides as a clean single-weight outline (not filled), with softly rounded terminals and even, consistent stroke thickness. Perfectly symmetrical, minimal and precise. The open interior should read as calm light.

Do not add secondary points, rings, orbits, sparkles, frames, horizons or asymmetry. Keep it to one elegant continuous stroke silhouette.

Flat vector, one centered symbol, no text. Near-black navy background #0A0D14. Outline in warm gold #F2B65A. One solid color, uniform stroke, no gradients, glow, shadows or texture. The stroke must stay legible at 16 pixels and in monochrome.

Square 1:1 composition, 2048×2048, large centered mark, generous clear space, clean professional vector artwork.
```

## Як отримати фінальний результат

1. Згенерувати по чотири варіанти промпту **1** (основний), за бажанням додати **2** (з ядром).
2. Обрати знак за силуетом, переглянувши його в розмірі ~32 px, а не за «красивим світінням».
3. Спершу перевірити чисту чорно-білу версію — золото на генерації часто «рятує» слабку форму.
4. Вибраний варіант прогнати повторно з вимогою:
   `preserve exact geometry, remove all effects, produce a clean flat single-color master logo`.
5. Перевірити на реальному фоні сайту `#0A0D14` та на світлому — знак має читатися в обох.
6. Після затвердження окремо зробити горизонтальний wordmark (Space Grotesk) і набір
   монохромних версій (золото / білий / чорний).

**Мій вибір для розвитку:** **Промпт 1 — Dawn Star (чистий мінімалізм)** як основний. Промпт 2
(з ядром) і Промпт 3 (outline) — це варіації того самого силуету для різних застосувань, а не
окремі концепції. Головний принцип — **одна проста впізнавана зоря, менше деталей = сильніший знак**.

## Технічна прив'язка до сайту

Коли майстер-знак готовий, він замінює поточний inline-SVG зорі у:

- `src/components/NavBar.vue` (лого 20 px, `color: var(--accent)`)
- `src/components/HeroSection.vue` (зоря 58 px, `fill: var(--accent)` + золотий glow)
- `src/components/ContactSection.vue` (міні-зоря у футері, `--text-faint`)
- `public/` favicon / `index.html` (`<link rel="icon">`) та Play Store developer icon

Кольори знака вже відповідають токенам: `--accent #F2B65A`, `--accent-2 #8FA3D8`, `--bg #0A0D14`.

## Джерела

- [Zorya Tech Studio](https://zorya-tech-studio.github.io/)
- [Zorya Tech](https://zorya.tech/) — інша компанія, тому знак має бути пропрієтарним
- [Семантика назви Zorya](https://en.wikipedia.org/wiki/Zorya)
