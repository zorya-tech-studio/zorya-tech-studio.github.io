# YouTube Banner — Промти для генерації

## Технічні вимоги

- **Співвідношення:** 16:9 (генеруємо саме так — далі просто масштабуємо)
- **Мінімум:** 2048×1152 px, рекомендовано **2560×1440** px, до 6 МБ

## Safe zone — головне

YouTube обрізає банер по-різному на кожному пристрої. Гарантовано видно лише **центральні 1235×338 px** із 2560×1440 — це **48% ширини і 23% висоти**, тобто вузька горизонтальна смуга рівно посередині.

| Пристрій  | Що видно                        |
| --------- | ------------------------------- |
| Мобільний | 1546×423 (центр)                |
| Планшет   | 1855×423                        |
| Десктоп   | 2560×423 (лише смуга по висоті) |
| ТБ        | усі 2560×1440                   |

**Правила:**

- Лого + назва — **строго по центру**, у межах 1235×338.
- Вся верхня і нижня чверть кадру, а також ліва/права чверть — **лише фон**, нічого важливого.
- Лого і текст в один горизонтальний рядок або дуже щільним стовпчиком — 338 px по висоті це мало.

## Дизайн-система сайту (`src/style.css`)

| Роль                         | Значення                                          |
| ---------------------------- | ------------------------------------------------- |
| Фон (ніч)                    | `#0a0d14`                                         |
| Поверхні                     | `#111520` / `#181d2a`                             |
| Акцент — «зоря / світанок»   | `#f2b65a` (тепле золото)                          |
| Допоміжний — світанкове небо | `#8fa3d8`                                         |
| Текст                        | `#edeff4`, приглушений `#a6adbd`                  |
| Заголовки                    | Space Grotesk, weight 500, letter-spacing −0.03em |
| Body                         | Manrope                                           |

**Логотип** (`public/brand/logo.png`, SVG-path у `HeroSection.vue` / `NavBar.vue`): **чотирипроменева зоря-іскра** — чотири довгі гострі промені вгору/вниз/вліво/вправо з увігнутими (ввігнутими всередину) сторонами, як «sparkle». Суцільне тепле золото `#f2b65a`, без обведення, без градієнта.

Стиль: **нічне небо → світанок**. Теплий starfield, м'яке золоте сяйво біля нижнього горизонту, реалістичні м'які тіні. **Жодного неону, глітчу, ціану.**

Заголовок: `Zorya Tech Studio`. Підпис: `Crafting mobile experiences with care`.

## Розмір і позиція композиції

- Лого + назва — **точно в геометричному центрі** кадру по обох осях (перетин діагоналей).
- **Лого:** висота ≈ **8% висоти кадру** (~115 px при 1440) — маленька акуратна іскра, не герой кадру.
- **Назва:** висота літер ≈ **4% висоти кадру** (~55 px) — дрібний стриманий напис.
- Уся група (лого + текст) — **не ширша за 24% ширини кадру** і не вища за 12% висоти.
- Решта кадру — порожнє нічне небо.

---

## 1. Hero сайту (головний варіант)

```text
16:9 banner. Night sky background, very dark desaturated navy #0a0d14, sparse starfield of small soft warm-white stars with a few glowing golden ones, faint thin constellation lines. A warm dawn glow in gold #f2b65a rises softly from the bottom center, fading through pale blue #8fa3d8 into darkness. Precisely at the geometric center of the frame, perfectly centered on both the horizontal and vertical axis, a small compact lockup: a four-pointed sparkle star in solid warm gold #f2b65a with long tapered points up, down, left and right and concave curved sides, its height only about 8% of the image height, and immediately below it the small title "Zorya Tech Studio" in a clean geometric sans-serif (Space Grotesk style), medium weight, tight letter-spacing, off-white #edeff4, cap height about 4% of the image height. The whole lockup is tiny — no wider than 24% of the image width — surrounded by vast empty night sky on all sides. Nothing else anywhere in the frame; the outer areas are pure background and will be cropped. Calm, elegant, minimal, no neon, no glitch, high resolution.
```

## 2. Максимальний мінімалізм

```text
16:9 banner. Flat deep night background #0a0d14 with a barely visible warmer gradient at the bottom. Exactly at the geometric center, symmetrically balanced on both axes, a very small lockup: a four-pointed gold #f2b65a sparkle star with long tapered points and concave sides, glowing gently, height about 8% of the image height, and directly beneath it "Zorya Tech Studio" in a geometric sans-serif (Space Grotesk style), weight 500, tight letter-spacing, color #edeff4, cap height about 4% of the image height. The lockup spans no more than 24% of the image width. Absolutely nothing else — the rest of the frame is pure empty dark background, safe to crop on every side. Refined, quiet, premium studio branding, generous negative space, no neon, no glitch.
```

## 3. Горизонт світанку

```text
16:9 banner. Deep night navy sky #0a0d14 with faint warm-white stars, and a broad soft sunrise glow in gold #f2b65a swelling from the bottom center, transitioning through pale dawn blue #8fa3d8 into black at the top corners. Exactly at the geometric center of the frame, centered on both axes, a small compact lockup: a four-pointed gold sparkle star with long tapered points and concave sides, height about 8% of the image height, and below it the title "Zorya Tech Studio" in a clean geometric sans-serif, off-white #edeff4, cap height about 4% of the image height. The lockup is no wider than 24% of the image width and is surrounded by empty sky. Everything outside the center is background only and will be cropped. Cinematic, warm, serene, minimal, no neon.
```

## 4. Застосунки в нічному небі

```text
16:9 banner. Deep night background #0a0d14 with a sparse warm starfield. Three softly lit smartphone mockups float symmetrically, slightly angled, screens showing calm dark UI with warm gold #f2b65a accents, gentle golden rim light from below as if lit by a rising dawn, realistic soft shadows. The phones sit in the middle band of the frame, and exactly at the geometric center, in front of them, a small lockup: a four-pointed gold #f2b65a sparkle star about 8% of the image height with the title "Zorya Tech Studio" in a geometric sans-serif below it, off-white #edeff4, cap height about 4% of the image height, the whole lockup no wider than 24% of the image width. Everything sits in the middle of the frame; the outer areas are empty dark background for cropping. Elegant product render, warm and quiet, no neon.
```

## 5. Сузір'я

```text
16:9 banner. Very dark navy #0a0d14 sky. A network of small warm-white stars with a few golden accents, connected by extremely thin faint constellation lines, spread across the outer areas of the frame. The center is calm, with a soft warm gold #f2b65a radial glow. Precisely at the geometric center, aligned on both axes, a small four-pointed gold sparkle star with long tapered points and concave sides, height about 8% of the image height, and beneath it "Zorya Tech Studio" in a clean geometric sans-serif, color #edeff4, tight letter-spacing, cap height about 4% of the image height, the lockup no wider than 24% of the image width. The outer areas on all four sides carry only stars and darkness and can be cropped away without losing anything. Minimal, astronomical, elegant, no neon, no glitch.
```

---

## Чекліст перед завантаженням

- [ ] Експортовано 2560×1440 px, ≤ 6 МБ, JPG/PNG
- [ ] Лого + назва **точно в геометричному центрі**, у межах **1235×338** px
- [ ] Лого ≈ 115 px заввишки, літери назви ≈ 55 px — дрібно, не на весь кадр
- [ ] Логотип — **чотири** промені, не вісім, золото `#f2b65a`
- [ ] Фон `#0a0d14`, без неону / глітчу / ціану
- [ ] Перевірено прев'ю YouTube для ТБ / десктопа / планшета / мобільного

> Найнадійніше: згенерувати **лише фон** (прибрати з промту речення про лого й текст), а потім накласти справжній `public/brand/logo.png` і напис справжнім Space Grotesk у центрі — тоді логотип і шрифт піксель-в-піксель як на сайті, а safe zone контролюєш точно.
