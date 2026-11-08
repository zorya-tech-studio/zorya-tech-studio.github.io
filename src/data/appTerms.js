/**
 * Universal Terms of Use for every app and watch face.
 *
 * One text, one page per app: /:locale/<slug>/terms-of-use (URL scheme: ./termsRoutes.js). The app name is inserted into every page,
 * and extra sections are switched on by the app's category or by the slug lists in PROFILES below.
 * This is the URL to paste into Play Console (App content -> trader status -> Terms of Service link).
 *
 * The text lives here as plain JS strings, not in src/i18n/*.json, so vue-i18n message syntax
 * (@, braces, |) can never break the production build.
 *
 * Adding an app to src/data/apps.js or src/data/watchfaces.js is enough: the page and its prerendered
 * index.html (scripts/spa-routes.js) and sitemap entry (vite.config.js) appear automatically.
 * If the new app belongs to a risk group (health, electrical, vehicles...), add its slug to PROFILES.
 */
import { findTermsTarget, termsSlugs } from './termsRoutes.js'

export { findTermsTarget, termsSlugs }

export const TERMS_UPDATED = '2026-11-08'
export const CONTACT_EMAIL = 'zoryatechstudio' + '@' + 'gmail.com'

// Extra sections by risk group. Category-wide groups are resolved in profilesFor().
const PROFILES = {
  estimates: [
    'tile-calculator',
    'gravel-calculator',
    'concrete-calculator',
    'block-brick-calculator',
    'landscaping-calculator',
    'pool-chemistry',
    'financial-calculators',
    'hvac-calculator',
    'wire-size-calc',
    'ohms-law-calculator',
    'resistor-color-code',
    'health-calculator',
    'tire-size-calculator',
    'lux-meter',
    'senso',
    'bluetooth-finder',
    'vocal-range-test',
    'guitar-tuner',
    'kalimba-tuner',
    'chicken-egg-tracker',
    'pickleball-scorekeeper',
    'ytaudit',
    'sudokulens',
    'cube-solver-3d',
  ],
  construction: [
    'tile-calculator',
    'gravel-calculator',
    'concrete-calculator',
    'block-brick-calculator',
    'landscaping-calculator',
    'pool-chemistry',
  ],
  electrical: ['wire-size-calc', 'ohms-law-calculator', 'resistor-color-code', 'hvac-calculator'],
  financial: ['financial-calculators'],
  health: ['health-calculator', 'hair-care-routine', 'five-tibetan-rites'],
  physical: [
    'ballet-beginners',
    'line-dance',
    'kpop-dance-3d',
    'kpop-dance-lessons',
    'five-tibetan-rites',
    'human-tetris',
    'vocal-range-test',
  ],
  vehicle: ['truck-fault-codes', 'auto-obd2', 'tire-size-calculator'],
  safety: ['survival-guide'],
  animals: ['chicken-egg-tracker'],
  religious: ['biblia-almeida', 'biblia-reina-valera'],
  esoteric: ['starguide'],
}

export function profilesFor(target) {
  const set = new Set()
  if (target.kind === 'watchface') {
    set.add('watchface')
    return set
  }
  const { slug, category } = target.app
  if (category === 'games' || category === 'quiz') set.add('games')
  if (category === 'pets') set.add('animals')
  if (category === 'esoteric') set.add('esoteric')
  for (const [profile, slugs] of Object.entries(PROFILES)) {
    if (slugs.includes(slug)) set.add(profile)
  }
  return set
}

/*
 * Section model: { id, when?, title, paras?: string[], list?: string[], after?: string[] }
 * `when` is a profile name; sections without it appear on every page.
 * Every text is a function of the app name `a`.
 */
const en = {
  title: 'Terms of Use',
  updated: 'Last updated',
  appLabel: (a) => `Terms of Use for the app “${a}”`,
  extrasTitle: (a) => `About “${a}”`,
  back: 'All apps',
  privacy: 'Privacy Policy',
  privacyLinkText: 'Read the Privacy Policy',
  contactLead: 'Email:',
  notFoundTitle: 'App not found',
  notFoundText: 'There is no app with this address. See the list of all our apps.',
  sections: [
    {
      id: 'about',
      title: '1. About these Terms',
      paras: [
        (a) =>
          `These Terms of Use (the “Terms”) govern your use of the mobile application “${a}” (the “App”). The App is developed and published on Google Play by Zorya Tech Studio, an independent app developer (“Zorya Tech Studio”, “we”, “us”, “our”).`,
        () =>
          'Please read these Terms carefully. They explain what you may and may not do with the App, how purchases and ads work, what we are and are not responsible for, and which rights you keep under the law of your country.',
        () =>
          'These Terms apply to this App only. Each of our apps has its own Terms page. Google Play’s own terms of service also apply to your download and to any payment you make through Google Play.',
      ],
    },
    {
      id: 'definitions',
      title: '2. Definitions',
      list: [
        (a) =>
          `“App” means “${a}”, including its updates, content, features and any related services we provide through it.`,
        () => '“You” or “User” means any person who installs or uses the App.',
        () =>
          '“Device” means the phone, tablet, watch or other device on which you install the App.',
        () =>
          '“Content” means the text, data, images, sounds, animations, tutorials and other materials available in the App.',
        () =>
          '“Paid features” means any part of the App that is sold for money: a paid download, a one-time purchase that unlocks features, a subscription, or other in-app items.',
      ],
    },
    {
      id: 'acceptance',
      title: '3. Acceptance of these Terms',
      paras: [
        () =>
          'By downloading, installing or using the App you confirm that you have read these Terms and agree to them. If you do not agree, do not install or use the App and remove it from your Device.',
        () =>
          'You must be legally able to accept these Terms in your country. If you are under the age of majority where you live, you may use the App only with the involvement and consent of a parent or legal guardian, who accepts these Terms on your behalf and is responsible for your use of the App, including any purchases.',
        () =>
          'Some apps have a higher minimum age stated in their Google Play listing or in the App itself. That age rating applies in addition to these Terms.',
      ],
    },
    {
      id: 'license',
      title: '4. Your license to use the App',
      paras: [
        () =>
          'We give you a personal, non-exclusive, non-transferable, revocable license to install and use the App on Devices that you own or control, for your own personal and non-commercial purposes, in line with these Terms and the Google Play terms of service.',
        () =>
          'The App is licensed to you, not sold. We (and our licensors) keep all rights that are not expressly granted to you in these Terms.',
      ],
    },
    {
      id: 'restrictions',
      title: '5. What you must not do',
      paras: [() => 'When using the App you agree not to:'],
      list: [
        () =>
          'copy, decompile, disassemble or reverse-engineer the App, except where the law expressly allows this despite this restriction;',
        () =>
          'modify the App, create derivative works from it, or remove copyright notices, trademarks or other notices;',
        () =>
          'sell, rent, lend, sublicense, redistribute or otherwise make the App or its Content available to others, or use it for commercial purposes without our written permission;',
        () =>
          'bypass, disable or interfere with purchases, licensing checks, ads, or any security or technical protection of the App;',
        () =>
          'use the App in a way that breaks the law, infringes the rights of others, or harms the App, our services, other users or third parties;',
        () =>
          'use bots, scripts, scrapers or other automated means to access the App or extract its Content in bulk.',
      ],
    },
    {
      id: 'price',
      title: '6. Price, free features and advertising',
      paras: [
        (a) =>
          `“${a}” may be free to download, may be a paid app, or may offer optional Paid features. The current price, if any, and whether the App contains ads or in-app purchases are shown on its Google Play page before you install it.`,
        () =>
          'If the App shows ads, they are provided by third-party advertising networks such as Google AdMob. Ads help keep the App free. We do not control the content of every ad, and we are not responsible for products or services advertised by third parties. If you tap an ad, you leave the App and the advertiser’s own terms and privacy policy apply.',
        () =>
          'Some apps offer optional rewarded ads: you choose to watch an ad and receive a benefit in the App, such as extra content or a short ad-free period. Watching them is always voluntary.',
        () =>
          'How ad networks process data, and how you can limit personalised ads, is described in our Privacy Policy and in the settings of your Device and Google account.',
      ],
    },
    {
      id: 'purchases',
      title: '7. Purchases and subscriptions',
      paras: [
        () =>
          'If the App offers Paid features, all payments are processed by Google Play. We never see or store your card or other payment details. The price, currency, billing period and any taxes are shown by Google Play before you confirm the purchase.',
        () =>
          'One-time purchases unlock the described features for as long as the App remains available to you and is supported on your Device. They are linked to your Google account and can normally be restored on a new Device signed in to the same account.',
        () =>
          'Subscriptions renew automatically at the end of each billing period until you cancel them. You can cancel at any time in the Google Play app (Payments and subscriptions). Cancellation stops future renewals; access continues until the end of the period already paid. A free trial, if offered, turns into a paid subscription unless you cancel before it ends.',
        () =>
          'Refunds are handled by Google Play under its refund policy. You can request a refund through Google Play, and you may also contact us. Nothing in this section limits any right to a refund, a repair, a price reduction or withdrawal that you have under the law of your country.',
        () =>
          'Right of withdrawal (EU, EEA and UK consumers): for digital content supplied immediately, you may be asked during checkout to agree to immediate supply and to acknowledge that you lose the 14-day right of withdrawal once the supply has started. If you did not give this consent, your statutory right of withdrawal remains.',
        () =>
          'Virtual items, coins, levels, unlocks or similar in-app values have no monetary value, cannot be exchanged for money and cannot be transferred outside the App, unless the law says otherwise.',
      ],
    },
    {
      id: 'consumer',
      title: '8. Your rights as a consumer',
      paras: [
        () =>
          'If you use the App as a consumer, you have rights under the mandatory consumer protection laws of the country where you live. In the European Union, the European Economic Area and the United Kingdom, this includes the right to receive digital content that conforms to its description and to remedies if it does not. These Terms do not exclude, limit or replace any of those rights. Where any part of these Terms conflicts with mandatory consumer law, the law prevails.',
        () =>
          'Zorya Tech Studio publishes this App on Google Play as a trader. Our contact details are shown in the App’s Google Play listing and at the end of these Terms.',
      ],
    },
    {
      id: 'content',
      title: '9. Content and accuracy',
      paras: [
        () =>
          'We prepare the Content with care, but we cannot guarantee that it is complete, error-free, up to date or suitable for your specific situation. The Content is provided for general information, learning and entertainment.',
        () =>
          'The App does not give professional advice of any kind — medical, legal, financial, engineering, veterinary, psychological or other. Do not rely on the App instead of a qualified professional when a decision matters for your health, safety, money or property.',
        () =>
          'You are responsible for how you use the App and the decisions you make based on it. If you find an error in the Content, please tell us so we can correct it.',
      ],
    },
    {
      id: 'estimates',
      when: 'estimates',
      title: '10. Calculations, measurements and results',
      paras: [
        (a) =>
          `The results shown by “${a}” — calculations, estimates, measurements, readings, scores or detections — are approximate. They depend on the values you enter, on default assumptions built into the App, and on the sensors, microphone, camera or other hardware of your Device, which vary between models and may be uncalibrated.`,
        () =>
          'Always check important results independently before acting on them, for example before buying materials, starting work, making a payment or relying on a measurement. Allow for waste, rounding, local conditions and manufacturer instructions. The App is not a certified measuring instrument.',
      ],
    },
    {
      id: 'construction',
      when: 'construction',
      title: 'Construction, materials and chemicals',
      paras: [
        () =>
          'Quantities and recommendations for building materials, landscaping or pool water treatment are estimates only. Follow the instructions of the product manufacturer, local building codes and regulations, and consult a qualified contractor where needed. Handle chemicals strictly according to their labels and safety data sheets, use protective equipment, and keep them away from children and pets.',
      ],
    },
    {
      id: 'electrical',
      when: 'electrical',
      title: 'Electrical and technical work',
      paras: [
        () =>
          'Electrical, heating, ventilation and air-conditioning work can cause fire, injury or death. Results from the App are for reference and learning only and do not replace the applicable electrical codes and standards (for example NEC, IEC or national rules), the equipment manufacturer’s documentation, or the judgement of a licensed professional. Where the law requires a licensed electrician or technician, use one. Always disconnect power before working on a circuit.',
      ],
    },
    {
      id: 'financial',
      when: 'financial',
      title: 'Financial calculations',
      paras: [
        () =>
          'Financial results (loans, interest, savings, investments, taxes and similar) are simplified models. Real offers depend on fees, rounding rules, taxes and terms set by banks and other providers. The App is not financial, investment or tax advice. Check the figures with your bank or a qualified adviser before making a financial decision.',
      ],
    },
    {
      id: 'health',
      when: 'health',
      title: 'Health and wellbeing',
      paras: [
        () =>
          'The App is not a medical device and does not diagnose, treat, cure or prevent any disease. Health indicators, routines and recommendations are general information only. Consult a doctor or other qualified health professional before changing your diet, exercise, skin, hair or health routine, especially if you are pregnant, have a medical condition or take medication. If you have a medical emergency, call your local emergency number.',
      ],
    },
    {
      id: 'physical',
      when: 'physical',
      title: 'Physical activity, dance and voice',
      paras: [
        () =>
          'The App may suggest movement, dance, exercise or voice practice. Such activity carries a risk of injury or strain. Warm up, practise in a safe, clear space, stay within your own limits and stop immediately if you feel pain, dizziness, shortness of breath or discomfort. Check with a doctor before starting if you have any health concerns. Children should practise under adult supervision.',
      ],
    },
    {
      id: 'vehicle',
      when: 'vehicle',
      title: 'Vehicles and diagnostics',
      paras: [
        () =>
          'Fault code descriptions, tire size data and other vehicle information are general reference only and may differ between makes, models and model years. Always follow the vehicle manufacturer’s documentation and have repairs, tire changes and safety-related work done by a qualified mechanic. Do not use the App while driving; operate it only when the vehicle is safely parked. If the App connects to a vehicle adapter, you use that connection at your own risk.',
      ],
    },
    {
      id: 'safety',
      when: 'safety',
      title: 'Emergencies and survival information',
      paras: [
        () =>
          'Survival, first aid and emergency information in the App is general and educational. It does not replace training, professional rescue services, medical care or the instructions of local authorities. In an emergency, first contact your local emergency number (for example 112 or 911) if you can. Practise skills in safe conditions in advance. Some techniques carry a risk of injury; you use them at your own risk.',
      ],
    },
    {
      id: 'animals',
      when: 'animals',
      title: 'Animals and pets',
      paras: [
        () =>
          'Care, training and behaviour tips are general guidance. Every animal is different. The App does not replace a veterinarian or a qualified trainer. Contact a vet if your animal shows signs of illness, injury or unusual behaviour, and follow local animal welfare rules.',
      ],
    },
    {
      id: 'religious',
      when: 'religious',
      title: 'Sacred texts',
      paras: [
        () =>
          'The App presents the text of a public-domain Bible translation for reading and study. We take care to reproduce it accurately, but digitised texts may contain typing or formatting errors. The App is not affiliated with any church or religious organisation, and any notes or features are not an official interpretation.',
      ],
    },
    {
      id: 'esoteric',
      when: 'esoteric',
      title: 'Entertainment and self-reflection',
      paras: [
        () =>
          'Readings, interpretations, compatibility, horoscope-like, symbolic or numerological content in the App is for entertainment, culture and self-reflection only. It does not predict the future and has no scientific basis. Do not use it to make decisions about your health, relationships, money, legal matters or safety.',
      ],
    },
    {
      id: 'games',
      when: 'games',
      title: 'Games and quizzes',
      paras: [
        () =>
          'Play fairly. Do not use cheats, modified versions of the App, or tools that change scores, progress or in-game values. Scores, progress and unlocks are stored for your own enjoyment and may be lost if you remove the App or clear its data. In-game items and progress have no monetary value. Take regular breaks.',
      ],
    },
    {
      id: 'watchface',
      when: 'watchface',
      title: 'Watch faces on Wear OS',
      paras: [
        () =>
          'The watch face requires a compatible watch running Wear OS. Appearance, available complications, battery use and Always On behaviour depend on the watch model, its software and your settings. Time, date, battery, steps, heart rate, weather and other data shown on the watch face are provided by your watch, the system or other apps; we do not measure them and do not guarantee their accuracy. The watch face is not a medical device.',
      ],
    },
    {
      id: 'data',
      title: '11. Your data on your Device',
      paras: [
        () =>
          'Most of our apps store your settings, progress, notes, history and other content only on your Device. We do not keep a copy. If you delete the App, clear its data, reset or lose your Device, this content may be lost permanently. Where the App offers export or backup, use it regularly.',
        () =>
          'You are responsible for any content you create or import in the App (for example notes, journals, files or photos), and you must have the right to use it. We do not claim ownership of your content.',
      ],
    },
    {
      id: 'permissions',
      title: '12. Device permissions and features',
      paras: [
        () =>
          'The App may ask for permissions such as the camera, microphone, location, Bluetooth, notifications or sensors, only where a feature needs them. You can refuse or withdraw a permission in your Device settings at any time; the related feature may then stop working. What each permission is used for is explained in the Privacy Policy.',
        () =>
          'Use the App responsibly and respect the privacy of others. Do not use the camera or microphone features to record other people without their consent where the law requires it.',
      ],
    },
    {
      id: 'thirdparty',
      title: '13. Third-party services',
      paras: [
        () =>
          'The App works with services provided by other companies, for example Google Play (distribution, payments and updates), Google AdMob (ads), and Google Firebase (crash reports and app stability) where used. These services are governed by their own terms and privacy policies, and we are not responsible for them. Links to third-party websites in the App are provided for convenience only.',
      ],
    },
    {
      id: 'privacy',
      title: '14. Privacy',
      paras: [
        () =>
          'Our Privacy Policy explains what information is processed when you use the App, by whom and why, and how you can exercise your rights. It forms part of these Terms.',
      ],
      privacyLink: true,
    },
    {
      id: 'ip',
      title: '15. Intellectual property',
      paras: [
        () =>
          'The App, including its code, design, graphics, icons, texts, sounds, animations and the name Zorya Tech Studio, is protected by copyright and other intellectual property laws and belongs to us or our licensors. Third-party materials (for example public-domain texts, open-source libraries, fonts or licensed assets) remain subject to their own licenses.',
        () =>
          'If you send us ideas, suggestions or feedback, you allow us to use them to improve our apps without any obligation to you.',
        () =>
          'If you believe that something in the App infringes your rights, please contact us with details and we will review it promptly.',
      ],
    },
    {
      id: 'updates',
      title: '16. Updates, availability and compatibility',
      paras: [
        () =>
          'We may release updates that fix bugs, improve the App, change or remove features, or are needed for security or legal reasons. Some updates may be required to keep using the App. We will keep the App in conformity with its description for the period required by law.',
        () =>
          'The App may not work on every Device, operating system version or region. Some features need an internet connection, and your mobile operator may charge for data.',
        () =>
          'We may stop offering or supporting the App. Where you have paid for Paid features, we will act in line with consumer law and the Google Play policies, and we will try to give reasonable notice through the App, its Google Play page or our website.',
      ],
    },
    {
      id: 'warranty',
      title: '17. No other warranties',
      paras: [
        () =>
          'To the extent permitted by law, the App is provided “as is” and “as available”. Apart from the guarantees that the law gives you and that cannot be excluded, we make no other promise that the App will be uninterrupted, error-free, meet all your expectations or work with every Device.',
      ],
    },
    {
      id: 'liability',
      title: '18. Limitation of liability',
      paras: [
        () =>
          'To the extent permitted by law, we are not liable for indirect or consequential loss, loss of profit, loss of data stored only on your Device, or damage caused by misuse of the App, by ignoring these Terms or safety instructions, by your Device or internet connection, or by third-party services.',
        () =>
          'Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, for fraud, for intentional misconduct or gross negligence, or any other liability that cannot be excluded or limited under applicable law, including your statutory rights as a consumer.',
      ],
    },
    {
      id: 'termination',
      title: '19. Ending these Terms',
      paras: [
        () =>
          'You can stop using the App at any time by uninstalling it. Cancelling a subscription is done separately in Google Play.',
        () =>
          'We may suspend or end your license if you seriously or repeatedly break these Terms. When the license ends, you must stop using the App. Sections that by their nature should continue (for example intellectual property, limitation of liability and governing law) remain in effect.',
      ],
    },
    {
      id: 'changes',
      title: '20. Changes to these Terms',
      paras: [
        () =>
          'We may update these Terms, for example when the App changes or the law requires it. The current version is always published on this page with the “Last updated” date. If a change is significant, we will try to inform you in the App or on its Google Play page. If you continue to use the App after the change takes effect, the new Terms apply; if you do not agree, you can stop using the App. Changes do not affect purchases already made in a way that reduces your rights.',
      ],
    },
    {
      id: 'law',
      title: '21. Governing law and disputes',
      paras: [
        () =>
          'These Terms are governed by the law of Ukraine. If you are a consumer, you also keep the protection of the mandatory provisions of the law of the country where you live, and you may bring a claim in the courts of that country where the law allows it.',
        () =>
          'If you have a problem with the App, please contact us first. We will try to resolve it quickly and amicably. You can also use the dispute and refund options offered by Google Play, or contact your local consumer protection authority.',
      ],
    },
    {
      id: 'general',
      title: '22. General',
      paras: [
        () =>
          'If any part of these Terms is found invalid or unenforceable, the rest remains in effect. If we do not enforce a right immediately, we do not waive it. You may not transfer your rights under these Terms to anyone else; we may transfer ours to another company that takes over the App, without reducing your rights.',
        () =>
          'These Terms are published in English and Ukrainian. Both versions have the same meaning; if they differ, the version in the language you used to read them is applied in your favour.',
      ],
    },
    {
      id: 'contact',
      title: '23. Contact',
      paras: [
        (a) =>
          `Questions about “${a}”, these Terms, a purchase or a possible error in the Content? Write to us and we will reply as soon as we can, usually within a few working days.`,
      ],
      contact: true,
    },
  ],
}

const uk = {
  title: 'Умови використання',
  updated: 'Останнє оновлення',
  appLabel: (a) => `Умови використання застосунку «${a}»`,
  extrasTitle: (a) => `Особливості «${a}»`,
  back: 'Усі застосунки',
  privacy: 'Політика конфіденційності',
  privacyLinkText: 'Читати Політику конфіденційності',
  contactLead: 'Email:',
  notFoundTitle: 'Застосунок не знайдено',
  notFoundText: 'За цією адресою немає застосунку. Перегляньте список усіх наших застосунків.',
  sections: [
    {
      id: 'about',
      title: '1. Про ці Умови',
      paras: [
        (a) =>
          `Ці Умови використання («Умови») регулюють використання мобільного застосунку «${a}» («Застосунок»). Застосунок розроблено й опубліковано в Google Play незалежним розробником Zorya Tech Studio («Zorya Tech Studio», «ми», «нас», «наш»).`,
        () =>
          'Будь ласка, уважно прочитайте ці Умови. Вони пояснюють, що ви можете і чого не можете робити із Застосунком, як працюють покупки та реклама, за що ми відповідаємо і за що ні, а також які права ви зберігаєте за законом своєї країни.',
        () =>
          'Ці Умови стосуються лише цього Застосунку. Кожен наш застосунок має власну сторінку умов. Умови Google Play також застосовуються до завантаження і до будь-якої оплати через Google Play.',
      ],
    },
    {
      id: 'definitions',
      title: '2. Терміни',
      list: [
        (a) =>
          `«Застосунок» — «${a}», включно з оновленнями, контентом, функціями та пов’язаними сервісами, які ми надаємо через нього.`,
        () => '«Ви» або «Користувач» — будь-яка особа, яка встановлює чи використовує Застосунок.',
        () =>
          '«Пристрій» — телефон, планшет, годинник чи інший пристрій, на який ви встановлюєте Застосунок.',
        () =>
          '«Контент» — тексти, дані, зображення, звуки, анімації, уроки та інші матеріали в Застосунку.',
        () =>
          '«Платні функції» — будь-яка частина Застосунку, що продається за гроші: платне завантаження, разова покупка, яка відкриває функції, підписка чи інші внутрішні покупки.',
      ],
    },
    {
      id: 'acceptance',
      title: '3. Прийняття Умов',
      paras: [
        () =>
          'Завантажуючи, встановлюючи або використовуючи Застосунок, ви підтверджуєте, що прочитали ці Умови та погоджуєтеся з ними. Якщо ви не погоджуєтеся, не встановлюйте і не використовуйте Застосунок та видаліть його з Пристрою.',
        () =>
          'Ви повинні мати право погоджуватися з цими Умовами за законом своєї країни. Якщо ви не досягли повноліття, використовуйте Застосунок лише за участі та згоди одного з батьків або законного представника, який приймає ці Умови від вашого імені й відповідає за використання Застосунку, зокрема за покупки.',
        () =>
          'Деякі застосунки мають вищий мінімальний вік, зазначений у Google Play або в самому Застосунку. Такий віковий рейтинг діє додатково до цих Умов.',
      ],
    },
    {
      id: 'license',
      title: '4. Ліцензія на використання',
      paras: [
        () =>
          'Ми надаємо вам особисту, невиключну, непередавану, відкличну ліцензію на встановлення й використання Застосунку на Пристроях, якими ви володієте або користуєтеся на законних підставах, для особистих некомерційних цілей відповідно до цих Умов і умов Google Play.',
        () =>
          'Застосунок надається вам за ліцензією, а не продається. Усі права, прямо не надані вам цими Умовами, залишаються за нами (і нашими ліцензіарами).',
      ],
    },
    {
      id: 'restrictions',
      title: '5. Що заборонено',
      paras: [() => 'Використовуючи Застосунок, ви погоджуєтеся не:'],
      list: [
        () =>
          'копіювати, декомпілювати, дизасемблювати чи здійснювати зворотну розробку Застосунку, крім випадків, прямо дозволених законом попри це обмеження;',
        () =>
          'змінювати Застосунок, створювати похідні твори на його основі чи видаляти позначки авторського права, торговельні марки та інші позначки;',
        () =>
          'продавати, здавати в оренду, позичати, субліцензувати, поширювати чи іншим чином надавати Застосунок або його Контент іншим особам, а також використовувати їх у комерційних цілях без нашого письмового дозволу;',
        () =>
          'обходити, вимикати чи втручатися в роботу покупок, перевірок ліцензії, реклами або будь-якого технічного захисту Застосунку;',
        () =>
          'використовувати Застосунок у спосіб, що порушує закон, права інших осіб або шкодить Застосунку, нашим сервісам, іншим користувачам чи третім особам;',
        () =>
          'використовувати ботів, скрипти, скрапери чи інші автоматизовані засоби для доступу до Застосунку або масового вилучення його Контенту.',
      ],
    },
    {
      id: 'price',
      title: '6. Ціна, безкоштовні функції та реклама',
      paras: [
        (a) =>
          `«${a}» може бути безкоштовним для завантаження, платним або пропонувати необов’язкові Платні функції. Актуальна ціна (якщо є), а також наявність реклами чи внутрішніх покупок зазначені на сторінці Застосунку в Google Play ще до встановлення.`,
        () =>
          'Якщо Застосунок показує рекламу, її надають сторонні рекламні мережі, наприклад Google AdMob. Реклама допомагає залишати Застосунок безкоштовним. Ми не контролюємо зміст кожного оголошення і не відповідаємо за товари чи послуги третіх осіб. Коли ви натискаєте на рекламу, ви залишаєте Застосунок, і діють умови та політика конфіденційності рекламодавця.',
        () =>
          'Деякі застосунки пропонують необов’язкову рекламу з винагородою: ви самі вирішуєте переглянути оголошення й отримуєте бонус у Застосунку, наприклад додатковий контент або короткий період без реклами. Перегляд завжди добровільний.',
        () =>
          'Як рекламні мережі обробляють дані і як обмежити персоналізовану рекламу, описано в нашій Політиці конфіденційності та в налаштуваннях вашого Пристрою й облікового запису Google.',
      ],
    },
    {
      id: 'purchases',
      title: '7. Покупки та підписки',
      paras: [
        () =>
          'Якщо Застосунок пропонує Платні функції, усі платежі обробляє Google Play. Ми ніколи не бачимо і не зберігаємо дані вашої картки чи інших засобів оплати. Ціну, валюту, період оплати та податки Google Play показує до підтвердження покупки.',
        () =>
          'Разова покупка відкриває описані функції, доки Застосунок доступний вам і підтримується на вашому Пристрої. Вона прив’язана до облікового запису Google, і її зазвичай можна відновити на новому Пристрої з тим самим обліковим записом.',
        () =>
          'Підписки автоматично поновлюються в кінці кожного періоду, доки ви їх не скасуєте. Скасувати можна будь-коли в застосунку Google Play (Платежі й підписки). Скасування зупиняє наступні списання; доступ зберігається до кінця вже оплаченого періоду. Безкоштовний пробний період, якщо він є, переходить у платну підписку, якщо не скасувати її до його завершення.',
        () =>
          'Повернення коштів здійснює Google Play відповідно до своїх правил повернення. Ви можете подати запит через Google Play, а також написати нам. Ніщо в цьому розділі не обмежує ваших прав на повернення коштів, усунення недоліків, зниження ціни чи відмову від договору, які ви маєте за законом своєї країни.',
        () =>
          'Право на відмову (для споживачів у ЄС, ЄЕЗ та Великій Британії): для цифрового контенту, що надається одразу, під час оплати вас можуть попросити погодитися на негайне надання і підтвердити, що ви втрачаєте 14-денне право на відмову після початку надання. Якщо ви такої згоди не давали, ваше законне право на відмову зберігається.',
        () =>
          'Віртуальні предмети, монети, рівні, розблокування та подібні внутрішні цінності не мають грошової вартості, не обмінюються на гроші і не передаються за межі Застосунку, якщо закон не встановлює іншого.',
      ],
    },
    {
      id: 'consumer',
      title: '8. Ваші права як споживача',
      paras: [
        () =>
          'Якщо ви користуєтеся Застосунком як споживач, ви маєте права, передбачені імперативними нормами законодавства про захист прав споживачів країни, де ви проживаєте. У Європейському Союзі, Європейській економічній зоні та Великій Британії це, зокрема, право отримати цифровий контент, що відповідає опису, і право на засоби захисту, якщо він не відповідає. Ці Умови не виключають, не обмежують і не замінюють жодного з цих прав. Якщо будь-яке положення цих Умов суперечить імперативним нормам права споживачів, діє закон.',
        () =>
          'Zorya Tech Studio публікує цей Застосунок у Google Play як суб’єкт підприємницької діяльності (trader). Наші контактні дані зазначені на сторінці Застосунку в Google Play і в кінці цих Умов.',
      ],
    },
    {
      id: 'content',
      title: '9. Контент і точність',
      paras: [
        () =>
          'Ми готуємо Контент ретельно, але не можемо гарантувати, що він повний, безпомилковий, актуальний чи підходить саме для вашої ситуації. Контент надається для загального ознайомлення, навчання та розваги.',
        () =>
          'Застосунок не надає жодних професійних консультацій — медичних, юридичних, фінансових, інженерних, ветеринарних, психологічних чи інших. Не покладайтеся на Застосунок замість кваліфікованого фахівця, коли рішення стосується вашого здоров’я, безпеки, грошей чи майна.',
        () =>
          'Ви відповідаєте за те, як використовуєте Застосунок і які рішення ухвалюєте на його основі. Якщо ви знайшли помилку в Контенті, повідомте нас, і ми її виправимо.',
      ],
    },
    {
      id: 'estimates',
      when: 'estimates',
      title: '10. Розрахунки, вимірювання та результати',
      paras: [
        (a) =>
          `Результати, які показує «${a}» — розрахунки, оцінки, вимірювання, показники, рахунок чи розпізнавання, — є приблизними. Вони залежать від введених вами значень, закладених у Застосунок припущень, а також від датчиків, мікрофона, камери чи іншого обладнання Пристрою, яке відрізняється між моделями і може бути не відкаліброване.`,
        () =>
          'Завжди перевіряйте важливі результати незалежно, перш ніж діяти, наприклад перед купівлею матеріалів, початком робіт, оплатою чи використанням вимірювання. Враховуйте запас на відходи, округлення, місцеві умови та інструкції виробника. Застосунок не є сертифікованим засобом вимірювання.',
      ],
    },
    {
      id: 'construction',
      when: 'construction',
      title: 'Будівництво, матеріали та хімія',
      paras: [
        () =>
          'Кількість і рекомендації щодо будівельних матеріалів, ландшафтних робіт чи обробки води в басейні — лише оцінки. Дотримуйтеся інструкцій виробника, місцевих будівельних норм і правил, а за потреби звертайтеся до кваліфікованого підрядника. Поводьтеся з хімічними речовинами суворо відповідно до етикеток і паспортів безпеки, використовуйте засоби захисту та зберігайте їх подалі від дітей і тварин.',
      ],
    },
    {
      id: 'electrical',
      when: 'electrical',
      title: 'Електричні та технічні роботи',
      paras: [
        () =>
          'Роботи з електрикою, опаленням, вентиляцією та кондиціюванням можуть спричинити пожежу, травму чи смерть. Результати Застосунку мають довідковий і навчальний характер і не замінюють чинних електротехнічних норм і стандартів (наприклад NEC, IEC чи національних правил), документації виробника обладнання або рішення ліцензованого фахівця. Якщо закон вимагає ліцензованого електрика чи техніка, залучайте його. Завжди знеструмлюйте коло перед роботою.',
      ],
    },
    {
      id: 'financial',
      when: 'financial',
      title: 'Фінансові розрахунки',
      paras: [
        () =>
          'Фінансові результати (кредити, відсотки, заощадження, інвестиції, податки тощо) — спрощені моделі. Реальні пропозиції залежать від комісій, правил округлення, податків і умов банків та інших постачальників. Застосунок не є фінансовою, інвестиційною чи податковою консультацією. Перевіряйте цифри в банку або в кваліфікованого радника перед фінансовим рішенням.',
      ],
    },
    {
      id: 'health',
      when: 'health',
      title: 'Здоров’я та самопочуття',
      paras: [
        () =>
          'Застосунок не є медичним виробом і не діагностує, не лікує, не виліковує і не запобігає жодним захворюванням. Показники здоров’я, програми та рекомендації — лише загальна інформація. Порадьтеся з лікарем чи іншим кваліфікованим медичним фахівцем, перш ніж змінювати харчування, фізичні навантаження, догляд за шкірою чи волоссям, особливо якщо ви вагітні, маєте захворювання або приймаєте ліки. У разі невідкладного стану телефонуйте на місцевий номер екстреної допомоги.',
      ],
    },
    {
      id: 'physical',
      when: 'physical',
      title: 'Фізична активність, танці та голос',
      paras: [
        () =>
          'Застосунок може пропонувати рухи, танці, вправи чи вокальні тренування. Така активність пов’язана з ризиком травми чи перенапруження. Розминайтеся, займайтеся в безпечному вільному просторі, не перевищуйте своїх можливостей і негайно зупиніться, якщо відчуваєте біль, запаморочення, задишку чи дискомфорт. Якщо маєте проблеми зі здоров’ям, спершу порадьтеся з лікарем. Діти мають займатися під наглядом дорослих.',
      ],
    },
    {
      id: 'vehicle',
      when: 'vehicle',
      title: 'Транспорт і діагностика',
      paras: [
        () =>
          'Описи кодів несправностей, дані про розміри шин та інша інформація про транспорт мають загальний довідковий характер і можуть відрізнятися залежно від марки, моделі та року випуску. Завжди дотримуйтеся документації виробника, а ремонт, заміну шин і роботи, що впливають на безпеку, доручайте кваліфікованому механіку. Не користуйтеся Застосунком під час керування — лише коли транспорт безпечно припаркований. Якщо Застосунок підключається до діагностичного адаптера, ви використовуєте це підключення на власний ризик.',
      ],
    },
    {
      id: 'safety',
      when: 'safety',
      title: 'Надзвичайні ситуації та інформація про виживання',
      paras: [
        () =>
          'Інформація про виживання, першу допомогу та надзвичайні ситуації в Застосунку має загальний і навчальний характер. Вона не замінює навчання, професійних рятувальних служб, медичної допомоги чи вказівок місцевої влади. У надзвичайній ситуації спершу, якщо можете, зверніться за місцевим номером екстреної допомоги (наприклад 112 або 911). Відпрацьовуйте навички заздалегідь у безпечних умовах. Деякі техніки пов’язані з ризиком травми; ви застосовуєте їх на власний ризик.',
      ],
    },
    {
      id: 'animals',
      when: 'animals',
      title: 'Тварини та домашні улюбленці',
      paras: [
        () =>
          'Поради щодо догляду, дресирування й поведінки — загальні рекомендації. Кожна тварина індивідуальна. Застосунок не замінює ветеринара чи кваліфікованого кінолога або тренера. Звертайтеся до ветеринара, якщо тварина має ознаки хвороби, травми чи незвичної поведінки, і дотримуйтеся місцевих правил щодо добробуту тварин.',
      ],
    },
    {
      id: 'religious',
      when: 'religious',
      title: 'Священні тексти',
      paras: [
        () =>
          'Застосунок містить текст перекладу Біблії, що перебуває в суспільному надбанні, для читання й вивчення. Ми дбаємо про точність, але оцифровані тексти можуть містити друкарські чи форматувальні помилки. Застосунок не пов’язаний із жодною церквою чи релігійною організацією, а примітки та функції не є офіційним тлумаченням.',
      ],
    },
    {
      id: 'esoteric',
      when: 'esoteric',
      title: 'Розвага та саморефлексія',
      paras: [
        () =>
          'Тлумачення, розклади, сумісність, гороскопи, символічний чи нумерологічний контент у Застосунку призначені лише для розваги, культурного ознайомлення та саморефлексії. Вони не передбачають майбутнього і не мають наукового підґрунтя. Не ухвалюйте на їх основі рішень щодо здоров’я, стосунків, грошей, юридичних питань чи безпеки.',
      ],
    },
    {
      id: 'games',
      when: 'games',
      title: 'Ігри та вікторини',
      paras: [
        () =>
          'Грайте чесно. Не використовуйте чити, модифіковані версії Застосунку чи інструменти, що змінюють рахунок, прогрес або ігрові значення. Рахунок, прогрес і розблокування зберігаються для вашого задоволення і можуть бути втрачені, якщо ви видалите Застосунок чи очистите його дані. Ігрові предмети й прогрес не мають грошової вартості. Робіть регулярні перерви.',
      ],
    },
    {
      id: 'watchface',
      when: 'watchface',
      title: 'Циферблати для Wear OS',
      paras: [
        () =>
          'Циферблат потребує сумісного годинника з Wear OS. Вигляд, доступні ускладнення (complications), витрата заряду та режим Always On залежать від моделі годинника, його програмного забезпечення та ваших налаштувань. Час, дату, заряд, кроки, пульс, погоду та інші дані на циферблаті надає годинник, система чи інші застосунки; ми їх не вимірюємо і не гарантуємо їхньої точності. Циферблат не є медичним виробом.',
      ],
    },
    {
      id: 'data',
      title: '11. Ваші дані на Пристрої',
      paras: [
        () =>
          'Більшість наших застосунків зберігають налаштування, прогрес, нотатки, історію та інший ваш контент лише на Пристрої. Ми не маємо копії. Якщо ви видалите Застосунок, очистите його дані, скинете чи втратите Пристрій, цей контент може бути втрачено назавжди. Якщо Застосунок пропонує експорт чи резервну копію, користуйтеся ними регулярно.',
        () =>
          'Ви відповідаєте за контент, який створюєте чи імпортуєте в Застосунок (наприклад нотатки, щоденники, файли чи фото), і повинні мати право його використовувати. Ми не претендуємо на право власності на ваш контент.',
      ],
    },
    {
      id: 'permissions',
      title: '12. Дозволи та функції Пристрою',
      paras: [
        () =>
          'Застосунок може запитувати дозволи, як-от камера, мікрофон, геолокація, Bluetooth, сповіщення чи датчики, лише тоді, коли вони потрібні для функції. Ви можете відмовити або відкликати дозвіл у налаштуваннях Пристрою будь-коли; тоді пов’язана функція може перестати працювати. Для чого використовується кожен дозвіл, пояснено в Політиці конфіденційності.',
        () =>
          'Користуйтеся Застосунком відповідально і поважайте приватність інших. Не записуйте інших людей камерою чи мікрофоном без їхньої згоди, якщо закон цього вимагає.',
      ],
    },
    {
      id: 'thirdparty',
      title: '13. Сторонні сервіси',
      paras: [
        () =>
          'Застосунок працює із сервісами інших компаній, наприклад Google Play (поширення, оплата й оновлення), Google AdMob (реклама) та Google Firebase (звіти про збої і стабільність), якщо вони використовуються. Ці сервіси регулюються власними умовами й політиками конфіденційності, і ми за них не відповідаємо. Посилання на сторонні сайти в Застосунку надаються лише для зручності.',
      ],
    },
    {
      id: 'privacy',
      title: '14. Конфіденційність',
      paras: [
        () =>
          'Наша Політика конфіденційності пояснює, яка інформація обробляється під час використання Застосунку, ким і навіщо, а також як ви можете реалізувати свої права. Вона є частиною цих Умов.',
      ],
      privacyLink: true,
    },
    {
      id: 'ip',
      title: '15. Інтелектуальна власність',
      paras: [
        () =>
          'Застосунок, зокрема його код, дизайн, графіка, іконки, тексти, звуки, анімації та назва Zorya Tech Studio, захищений авторським правом та іншими законами про інтелектуальну власність і належить нам або нашим ліцензіарам. Сторонні матеріали (наприклад тексти в суспільному надбанні, бібліотеки з відкритим кодом, шрифти чи ліцензовані ресурси) використовуються на умовах їхніх власних ліцензій.',
        () =>
          'Якщо ви надсилаєте нам ідеї, пропозиції чи відгуки, ви дозволяєте нам використовувати їх для вдосконалення наших застосунків без будь-яких зобов’язань перед вами.',
        () =>
          'Якщо ви вважаєте, що щось у Застосунку порушує ваші права, напишіть нам із подробицями, і ми оперативно це розглянемо.',
      ],
    },
    {
      id: 'updates',
      title: '16. Оновлення, доступність і сумісність',
      paras: [
        () =>
          'Ми можемо випускати оновлення, які виправляють помилки, покращують Застосунок, змінюють чи прибирають функції або потрібні з міркувань безпеки чи вимог закону. Деякі оновлення можуть бути обов’язковими для подальшого використання. Ми підтримуємо відповідність Застосунку його опису протягом строку, встановленого законом.',
        () =>
          'Застосунок може працювати не на всіх Пристроях, версіях операційної системи чи в усіх регіонах. Деяким функціям потрібне підключення до інтернету, і ваш оператор може стягувати плату за трафік.',
        () =>
          'Ми можемо припинити пропонувати чи підтримувати Застосунок. Якщо ви оплатили Платні функції, ми діятимемо відповідно до законодавства про захист прав споживачів і правил Google Play та намагатимемося завчасно повідомити про це в Застосунку, на його сторінці в Google Play чи на нашому сайті.',
      ],
    },
    {
      id: 'warranty',
      title: '17. Відсутність інших гарантій',
      paras: [
        () =>
          'У межах, дозволених законом, Застосунок надається «як є» і «як доступно». Окрім гарантій, які надає вам закон і які не можна виключити, ми не обіцяємо, що Застосунок працюватиме безперебійно, без помилок, відповідатиме всім вашим очікуванням чи працюватиме на кожному Пристрої.',
      ],
    },
    {
      id: 'liability',
      title: '18. Обмеження відповідальності',
      paras: [
        () =>
          'У межах, дозволених законом, ми не відповідаємо за непрямі чи опосередковані збитки, втрачену вигоду, втрату даних, що зберігалися лише на вашому Пристрої, або шкоду, спричинену неналежним використанням Застосунку, недотриманням цих Умов чи інструкцій з безпеки, вашим Пристроєм чи інтернет-з’єднанням або сторонніми сервісами.',
        () =>
          'Ніщо в цих Умовах не виключає і не обмежує нашої відповідальності за смерть чи тілесні ушкодження внаслідок нашої недбалості, за шахрайство, умисні дії чи грубу недбалість, а також будь-якої іншої відповідальності, яку не можна виключити чи обмежити за чинним законом, зокрема ваших законних прав як споживача.',
      ],
    },
    {
      id: 'termination',
      title: '19. Припинення дії Умов',
      paras: [
        () =>
          'Ви можете припинити користуватися Застосунком будь-коли, видаливши його. Підписку скасовують окремо в Google Play.',
        () =>
          'Ми можемо призупинити чи припинити вашу ліцензію, якщо ви суттєво або неодноразово порушуєте ці Умови. Після припинення ліцензії ви маєте припинити використання Застосунку. Положення, які за своєю суттю мають діяти й надалі (наприклад щодо інтелектуальної власності, обмеження відповідальності та застосовного права), залишаються чинними.',
      ],
    },
    {
      id: 'changes',
      title: '20. Зміни Умов',
      paras: [
        () =>
          'Ми можемо оновлювати ці Умови, наприклад коли змінюється Застосунок або цього вимагає закон. Актуальна версія завжди опублікована на цій сторінці з датою «Останнє оновлення». Про суттєві зміни ми намагатимемося повідомити в Застосунку чи на його сторінці в Google Play. Якщо ви продовжуєте користуватися Застосунком після набрання змінами чинності, діють нові Умови; якщо ви не згодні, ви можете припинити користування. Зміни не погіршують ваших прав щодо вже здійснених покупок.',
      ],
    },
    {
      id: 'law',
      title: '21. Застосовне право і спори',
      paras: [
        () =>
          'Ці Умови регулюються законодавством України. Якщо ви споживач, за вами також зберігається захист імперативних норм права країни вашого проживання, і ви можете звернутися до суду цієї країни, якщо це дозволяє закон.',
        () =>
          'Якщо у вас виникла проблема із Застосунком, спершу напишіть нам. Ми постараємося швидко й мирно її вирішити. Ви також можете скористатися механізмами повернення коштів і вирішення спорів Google Play або звернутися до місцевого органу із захисту прав споживачів.',
      ],
    },
    {
      id: 'general',
      title: '22. Загальні положення',
      paras: [
        () =>
          'Якщо будь-яке положення цих Умов буде визнане недійсним чи таким, що не може бути виконане, решта залишається чинною. Якщо ми не реалізуємо право одразу, ми від нього не відмовляємося. Ви не можете передати свої права за цими Умовами іншій особі; ми можемо передати свої компанії, яка перебере Застосунок, без погіршення ваших прав.',
        () =>
          'Ці Умови опубліковано англійською та українською мовами. Обидві версії мають однаковий зміст; у разі розбіжностей застосовується версія тією мовою, якою ви їх читали, на вашу користь.',
      ],
    },
    {
      id: 'contact',
      title: '23. Контакти',
      paras: [
        (a) =>
          `Маєте запитання щодо «${a}», цих Умов, покупки чи можливої помилки в Контенті? Напишіть нам, і ми відповімо якнайшвидше, зазвичай протягом кількох робочих днів.`,
      ],
      contact: true,
    },
  ],
}

export const TERMS_TEXT = { en, uk }
