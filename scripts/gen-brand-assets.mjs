// Генерує бренд-ассети зі зорі public/brand/logo.jpeg:
//  • прибирає навколишній навічний фон → прозорість
//  • вирівнює форму під бренд-золото #F2B65A (чисті краї, без ореолу)
//  • стягує crop до зорі + невеликий відступ
//  • експортує оптимізовані logo.png / logo.webp (прозорі) та набір favicon
// Запуск: node scripts/gen-brand-assets.mjs
import sharp from 'sharp'
import fs from 'node:fs/promises'

const SRC = 'public/brand/logo.jpeg'
const GOLD = [242, 182, 90] // --accent, бренд-золото
const NAVY = '#0A0D14' // --bg, для непрозорого apple-touch

// 1. Зчитуємо піксельні дані.
const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { width: W, height: H } = info

// 2. Кі-аут: alpha = плавний перехід за яскравістю (навкіл-фон → зоря).
//    RGB вирівнюємо на суцільне бренд-золото → краї без темного ореолу.
const LO = 25 // нижче — точно фон
const HI = 120 // вище — точно зоря
const out = Buffer.alloc(data.length)
let minX = W, minY = H, maxX = 0, maxY = 0
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 4
    const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
    let a = (lum - LO) / (HI - LO)
    a = a < 0 ? 0 : a > 1 ? 1 : a
    out[i] = GOLD[0]
    out[i + 1] = GOLD[1]
    out[i + 2] = GOLD[2]
    out[i + 3] = Math.round(a * 255)
    if (a > 0.16) {
      if (x < minX) minX = x
      if (x > maxX) maxX = x
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
  }
}

// 3. Обрізка під форму + симетричний відступ.
function region(padFrac) {
  const bw = maxX - minX + 1
  const bh = maxY - minY + 1
  const pad = Math.round(Math.max(bw, bh) * padFrac)
  const left = Math.max(0, minX - pad)
  const top = Math.max(0, minY - pad)
  const right = Math.min(W - 1, maxX + pad)
  const bottom = Math.min(H - 1, maxY + pad)
  return { left, top, width: right - left + 1, height: bottom - top + 1 }
}
const fresh = () => sharp(out, { raw: { width: W, height: H, channels: 4 } })

const logoR = region(0.09) // просторіший — під логотип-ассет
const iconR = region(0.06) // тісніший — щоб зоря читалась у 16px

// 4. Логотип-ассет (прозорий): PNG + WebP.
await fresh()
  .extract(logoR)
  .resize(1024, 1024, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9, palette: true })
  .toFile('public/brand/logo.png')

await fresh()
  .extract(logoR)
  .resize(1024, 1024, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .webp({ lossless: true, effort: 6 })
  .toFile('public/brand/logo.webp')

// 5. Favicon (прозорі PNG) + apple-touch (непрозорий, на навічному фоні).
for (const size of [16, 32, 48, 180]) {
  await fresh()
    .extract(iconR)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: true })
    .toFile(`public/favicon-${size}.png`)
}

// 5b. favicon.ico — root fallback. Browsers, crawlers and bookmark UIs probe
//     /favicon.ico directly, ignoring the <link> tags; without this file they
//     keep showing whatever icon they cached earlier. ICO entries here are
//     PNG-encoded, which every current browser reads.
const icoSizes = [16, 32, 48]
const icoPngs = await Promise.all(
  icoSizes.map((size) =>
    fresh()
      .extract(iconR)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer(),
  ),
)
const icoHeader = Buffer.alloc(6 + 16 * icoSizes.length)
icoHeader.writeUInt16LE(0, 0) // reserved
icoHeader.writeUInt16LE(1, 2) // type: icon
icoHeader.writeUInt16LE(icoSizes.length, 4)
let icoOffset = icoHeader.length
icoSizes.forEach((size, n) => {
  const e = 6 + 16 * n
  icoHeader.writeUInt8(size, e) // width (0 would mean 256)
  icoHeader.writeUInt8(size, e + 1) // height
  icoHeader.writeUInt8(0, e + 2) // palette colours
  icoHeader.writeUInt8(0, e + 3) // reserved
  icoHeader.writeUInt16LE(1, e + 4) // colour planes
  icoHeader.writeUInt16LE(32, e + 6) // bits per pixel
  icoHeader.writeUInt32LE(icoPngs[n].length, e + 8)
  icoHeader.writeUInt32LE(icoOffset, e + 12)
  icoOffset += icoPngs[n].length
})
await fs.writeFile('public/favicon.ico', Buffer.concat([icoHeader, ...icoPngs]))

// apple-touch-icon: iOS ігнорує прозорість → кладемо зорю на суцільний навічний фон.
const inner = 150
await fresh()
  .extract(iconR)
  .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({
    top: 15, bottom: 15, left: 15, right: 15,
    background: NAVY,
  })
  .flatten({ background: NAVY })
  .png({ compressionLevel: 9 })
  .toFile('public/apple-touch-icon.png')

console.log('bbox', { minX, minY, maxX, maxY }, 'logoR', logoR, 'iconR', iconR)
console.log('done')
