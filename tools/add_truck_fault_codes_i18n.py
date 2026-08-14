"""One-shot: insert the truckFaultCodes block into src/i18n/{en,uk}.json.

Kept in the repo so the wording has a single source rather than living only in
a shell history. Safe to re-run: it overwrites the block in place.
"""

import collections
import io
import json

EN = {
    "name": "Truck Fault Codes: J1939 SPN",
    "subtitle": "Offline J1939 / J1587 fault code reference",
    "desc_short": "An offline reference for diesel truck fault codes. Type the SPN, FMI or J1587 code your dash or scan tool gave you and get a plain-language explanation: what the parameter measures, what the failure mode means, the likely causes and what to check first. 8141 J1939 SPN entries, the J1587 / J1708 tables for older trucks, a raw DTC byte decoder, PGN and source-address references, dash-lamp meanings, symptom-first entry points and long-form guides. Everything works with no signal at all. 41 languages. Not a scan tool: it does not connect to the truck and does not clear anything. Free and ad-supported.",
    "platform": "Android",
    "privacy": {
        "title": "Privacy Policy",
        "updated": "Effective date",
        "intro": "Zorya Tech Studio (\"we\", \"us\", \"our\") built Truck Fault Codes: J1939 SPN, an offline fault-code reference for diesel trucks on Android. The app explains fault codes you have already read from your dashboard or your own scan tool. It is a reference work: it does not connect to a vehicle, does not read codes from any control unit, and does not clear or modify anything on the truck. This Privacy Policy explains how we handle information when you use the app.",
        "collect_title": "Personal Data Collection",
        "collect_text": "We do not collect personally identifiable information ourselves. The app requires no registration, no account and no sign-in, and we do not request or store your name, email address or phone number. We do not collect the fault codes you look up. However, the advertising service we use (Google AdMob) may collect a device advertising identifier, IP address and app-usage data in accordance with its own policy.",
        "storage_title": "Data Storage",
        "storage_text": "Your favourites, your lookup history, your chosen language and your display settings are stored exclusively on your device using SharedPreferences. We operate no server infrastructure for this content and it is never uploaded anywhere. Clearing the app data or uninstalling the app removes it permanently. Sharing a code as text or as an image opens the Android share sheet, and what happens to that content afterwards is decided by you and the app you send it to.",
        "permissions_title": "Permissions",
        "permissions_text": "Truck Fault Codes requests only minimal permissions. It does not access the microphone, camera, location, contacts, Bluetooth, USB or any other sensitive device data. In particular, it requests no permission to communicate with a vehicle, because it never does:",
        "permissions_internet": "Internet, required only to load Google AdMob ads. Every fault code entry, reference table, decoder and guide works fully offline; the entire database ships inside the app.",
        "permissions_ad_id": "Advertising ID (AD_ID), may be used by Google AdMob to serve relevant ads. You can reset or limit this identifier in your Google or Android settings.",
        "third_title": "Third-Party Services",
        "third_text": "Truck Fault Codes displays ads via Google AdMob: a banner, an occasional full-screen ad between lookups, a native card at the bottom of a code page, and an optional rewarded ad you can choose to watch in exchange for a short period with no ads of any kind. No diagnostic content is ever placed behind an ad, and the plain-text share is always free. AdMob may collect device identifiers, IP address and usage data under Google's own privacy policy. The app contains no in-app purchases and no subscriptions, so we never receive or store any payment details. The optional web and YouTube search buttons hand off to your browser; from that point the destination site's own policy applies.",
        "consent_title": "Advertising Consent in the EEA and UK",
        "consent_text": "Where required by law, the app shows a Google-certified consent message (UMP) before any ad is requested, and no ad request is made unless consent allows it. You can reopen that form at any time from the More screen, where an \"Ad privacy options\" row appears in regions where it applies, and change or withdraw your choice.",
        "children_title": "Children's Privacy",
        "children_text": "Truck Fault Codes is a professional and technical reference aimed at commercial-vehicle drivers, mechanics and fleet staff. It is not directed at children, and we do not knowingly collect information from children.",
        "changes_title": "Changes to This Policy",
        "changes_text": "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
        "contact_title": "Contact Us",
        "contact_text": "If you have questions about this Privacy Policy, please contact us at:",
    },
    "terms": {
        "title": "Terms of Use",
        "updated": "Effective date",
        "intro": "This document is a public offer by Zorya Tech Studio (\"Studio\", \"we\") regarding the use of the Truck Fault Codes: J1939 SPN mobile app (the \"App\"). The App is a reference work that explains diesel-truck fault codes the User has already obtained elsewhere. It is not a diagnostic instrument and not a substitute for the manufacturer's service documentation or for a qualified technician. By downloading, installing or using the App, you (the \"User\") unconditionally accept all terms of this Agreement. If you do not agree to any of the terms, please do not use the App.",
        "definitions_title": "Definitions",
        "definitions_text": "App, the Truck Fault Codes: J1939 SPN mobile application for Android, distributed via Google Play. Parties, the Studio and the User. Agreement, these Terms of Use together with the Privacy Policy.",
        "subject_title": "Subject of the Agreement",
        "subject_text": "The Studio grants the User the right to use the App free of charge subject to this Agreement. The App presents 8141 J1939 SPN entries with failure-mode explanations, the J1587 and J1708 tables used by older trucks, a raw DTC byte decoder, PGN and source-address references, dash-lamp meanings, symptom-first entry points and long-form guides, in 41 languages. All of this content works offline. The App is fully free and supported by advertising, with no in-app purchases and no subscriptions.",
        "acceptance_title": "Acceptance of the Offer",
        "acceptance_text": "Acceptance of this offer occurs through any of the following actions: downloading the App from Google Play, installing it on a device, or actually using it. From the moment of acceptance, this Agreement is deemed concluded between the Studio and the User.",
        "license_title": "License to Use",
        "license_text": "The Studio grants the User a non-exclusive, royalty-free, revocable, non-transferable license to install and use the App on Android devices owned or lawfully controlled by the User. Use in the course of the User's own professional repair or fleet work is permitted; redistribution of the App or its content as a product is not.",
        "notascantool_title": "The App Is Not a Scan Tool",
        "notascantool_text": "The App does not connect to any vehicle by cable, Bluetooth, Wi-Fi or any other means. It does not read fault codes from an engine control unit, does not write to one, does not clear codes, does not command a regeneration and does not alter any vehicle setting. The User enters a code that a dashboard or a separate scan tool has already produced, and the App explains it. Any procedure suggested in the App is a starting point for a qualified person, not an instruction to be followed blindly.",
        "restrictions_title": "Use Restrictions",
        "restrictions_text": "The User agrees not to:",
        "restrictions_reverse": "decompile, disassemble or reverse-engineer the App, except as expressly permitted by applicable law;",
        "restrictions_modify": "modify, adapt, translate or create derivative works based on the App;",
        "restrictions_distribute": "copy, distribute, sell, rent, sublicense or otherwise commercially exploit the App, its database or any part of it;",
        "restrictions_circumvent": "circumvent or attempt to circumvent any technical protection measures of the App.",
        "ads_title": "Advertising",
        "ads_text": "The App is free and supported by advertising, displayed via Google AdMob: a banner, an occasional full-screen ad shown only on the way out of a code page and subject to strict pacing limits, a native card placed below the content on a code page, and an optional rewarded ad the User may choose to watch in exchange for a short period with no ads of any kind. No diagnostic content is ever placed behind an ad; the plain-text share stays free and always available. Refusing the rewarded ad costs the User nothing. By using the App, the User consents to the display of ads; the related data collection is governed by Google's policy and is described in our Privacy Policy.",
        "iap_title": "Payments and In-App Purchases",
        "iap_text": "The App contains no in-app purchases and no subscriptions. Every feature, including the whole code database, the decoder, every reference table and every guide, is available free of charge with no paywall and no premium tier. The Studio does not process any payments and never receives payment card data.",
        "ip_title": "Intellectual Property",
        "ip_text": "All exclusive proprietary rights to the App, including its code, design and original explanatory text, belong to the Studio. SPN, FMI, PGN and PID numbering derives from the SAE J1939 and SAE J1587 standards, which are the property of SAE International; the App is not published by, affiliated with or endorsed by SAE International. The App is an independent reference and is not affiliated with, endorsed by or sponsored by any vehicle or engine manufacturer. All manufacturer names are the property of their respective owners and are used only to identify the equipment a code may relate to.",
        "warranty_title": "Disclaimer of Warranties",
        "warranty_text": "The App is provided \"as is\" and \"as available\", without warranties of any kind, express or implied. Fault code definitions vary between manufacturers, model years and software versions, and the same SPN can mean something different on a different vehicle. The manufacturer's service documentation for the specific vehicle always takes precedence over anything the App says. The Studio gives no warranty that any explanation, cause or check listed in the App is correct or applicable for a particular vehicle.",
        "liability_title": "Limitation of Liability",
        "liability_text": "To the maximum extent permitted by applicable law, the Studio is not liable for any direct, indirect, incidental, special or consequential damages arising out of the use or inability to use the App. This includes, without limitation, damage to a vehicle or its components, an incorrect or incomplete repair, parts replaced unnecessarily, downtime, lost cargo or revenue, and any injury arising from work carried out on a vehicle. Diagnosis and repair of a commercial vehicle is skilled work with real safety consequences; where a warning lamp indicates that the vehicle should be stopped, it must be stopped. The User uses the App at their own discretion and risk.",
        "privacy_title": "Privacy",
        "privacy_text": "The handling of information when using the App is governed by a separate document, the Privacy Policy, which forms an integral part of this Agreement.",
        "termination_title": "Termination",
        "termination_text": "The User may stop using the App at any time by uninstalling it from their device. The Studio reserves the right to discontinue the App or any of its features upon notice via a Google Play update or on the Studio's website. Termination does not relieve either Party from obligations that arose prior to such termination.",
        "changes_title": "Changes to the Terms",
        "changes_text": "The Studio reserves the right to unilaterally modify the terms of this Agreement. The current version is always posted on this page with the effective date. Continued use of the App after changes constitutes the User's acceptance of the new version.",
        "law_title": "Governing Law",
        "law_text": "This Agreement is governed by the laws of Ukraine. Any disputes arising in connection with this Agreement shall first be resolved through negotiations between the Parties; failing that, in court in accordance with the laws of Ukraine.",
        "contact_title": "Contact Information",
        "contact_text": "Questions about the terms of this Agreement can be sent to:",
    },
}

UK = {
    "name": "Truck Fault Codes: J1939 SPN",
    "subtitle": "Офлайн-довідник кодів несправностей J1939 / J1587",
    "desc_short": "Офлайн-довідник кодів несправностей дизельних вантажівок. Введіть SPN, FMI або код J1587, який показала панель приладів чи сканер, і отримайте пояснення людською мовою: що вимірює параметр, що означає режим відмови, ймовірні причини та що перевірити першим. 8141 запис J1939 SPN, таблиці J1587 / J1708 для старіших вантажівок, декодер сирих байтів DTC, довідники PGN і адрес джерел, значення ламп на панелі, вхід за симптомом і докладні посібники. Усе працює взагалі без зв'язку. 41 мова. Це не сканер: додаток не підключається до вантажівки й нічого не стирає. Безкоштовний, з рекламою.",
    "platform": "Android",
    "privacy": {
        "title": "Політика конфіденційності",
        "updated": "Дата набрання чинності",
        "intro": "Zorya Tech Studio («ми», «нас», «наш») створила Truck Fault Codes: J1939 SPN — офлайн-довідник кодів несправностей дизельних вантажівок для Android. Додаток пояснює коди, які ви вже зчитали з панелі приладів або власним сканером. Це саме довідник: він не підключається до транспортного засобу, не зчитує коди з жодного блока керування і нічого не стирає та не змінює у вантажівці. Ця Політика конфіденційності пояснює, як ми поводимося з інформацією під час користування додатком.",
        "collect_title": "Збір персональних даних",
        "collect_text": "Ми самі не збираємо персональних даних. Додаток не потребує реєстрації, облікового запису чи входу, і ми не запитуємо та не зберігаємо ваше ім'я, електронну пошту чи номер телефону. Ми не збираємо коди, які ви шукаєте. Проте рекламна служба, яку ми використовуємо (Google AdMob), може збирати рекламний ідентифікатор пристрою, IP-адресу та дані про користування додатком відповідно до власної політики.",
        "storage_title": "Зберігання даних",
        "storage_text": "Обране, історія пошуку, вибрана мова та налаштування відображення зберігаються виключно на вашому пристрої через SharedPreferences. Ми не маємо серверної інфраструктури для цього вмісту, і він нікуди не завантажується. Очищення даних додатка або його видалення прибирає все остаточно. Надсилання коду текстом чи картинкою відкриває системне вікно поширення Android, і подальша доля цього вмісту залежить від вас та застосунку, до якого ви його надішлете.",
        "permissions_title": "Дозволи",
        "permissions_text": "Truck Fault Codes запитує лише мінімальні дозволи. Він не звертається до мікрофона, камери, геолокації, контактів, Bluetooth, USB чи будь-яких інших чутливих даних пристрою. Зокрема, він не запитує дозволу на зв'язок із транспортним засобом, бо ніколи цього не робить:",
        "permissions_internet": "Інтернет — потрібен виключно для завантаження реклами Google AdMob. Кожен запис про код, довідкова таблиця, декодер і посібник працюють повністю офлайн; уся база йде всередині додатка.",
        "permissions_ad_id": "Рекламний ідентифікатор (AD_ID) — може використовуватися Google AdMob для показу релевантної реклами. Ви можете скинути або обмежити цей ідентифікатор у налаштуваннях Google чи Android.",
        "third_title": "Сторонні сервіси",
        "third_text": "Truck Fault Codes показує рекламу через Google AdMob: банер, зрідка повноекранне оголошення між переглядами, нативну картку внизу сторінки коду та необов'язкове оголошення з винагородою, яке ви можете переглянути за власним бажанням в обмін на короткий період узагалі без реклами. Жоден діагностичний вміст ніколи не ховається за рекламою, а поширення звичайним текстом завжди безкоштовне. AdMob може збирати ідентифікатори пристрою, IP-адресу та дані про використання відповідно до власної політики Google. Додаток не має вбудованих покупок і підписок, тож ми ніколи не отримуємо та не зберігаємо платіжних даних. Необов'язкові кнопки пошуку в вебі та на YouTube передають запит у ваш браузер; далі діє політика сайту призначення.",
        "consent_title": "Згода на рекламу в ЄЕЗ і Великій Британії",
        "consent_text": "Там, де цього вимагає закон, додаток показує сертифіковане Google повідомлення про згоду (UMP) до будь-якого запиту реклами, і запит не надсилається, якщо згода цього не дозволяє. Ви будь-коли можете знову відкрити цю форму з екрана «Ще», де в відповідних регіонах з'являється рядок «Налаштування конфіденційності реклами», і змінити або відкликати свій вибір.",
        "children_title": "Конфіденційність дітей",
        "children_text": "Truck Fault Codes — професійний технічний довідник для водіїв вантажівок, механіків і працівників автопарків. Він не призначений для дітей, і ми свідомо не збираємо інформацію від дітей.",
        "changes_title": "Зміни до цієї Політики",
        "changes_text": "Ми можемо час від часу оновлювати цю Політику конфіденційності. Будь-які зміни публікуються на цій сторінці з оновленою датою набрання чинності.",
        "contact_title": "Зв'язатися з нами",
        "contact_text": "Якщо у вас є запитання щодо цієї Політики конфіденційності, напишіть нам:",
    },
    "terms": {
        "title": "Умови використання",
        "updated": "Дата набрання чинності",
        "intro": "Цей документ є публічною офертою Zorya Tech Studio («Студія», «ми») щодо використання мобільного додатка Truck Fault Codes: J1939 SPN («Додаток»). Додаток є довідником, який пояснює коди несправностей дизельних вантажівок, уже отримані Користувачем в інший спосіб. Він не є діагностичним приладом і не замінює сервісної документації виробника або кваліфікованого механіка. Завантажуючи, встановлюючи або використовуючи Додаток, ви («Користувач») беззастережно приймаєте всі умови цієї Угоди. Якщо ви не згодні з будь-якою з умов, не користуйтеся Додатком.",
        "definitions_title": "Визначення",
        "definitions_text": "Додаток — мобільний застосунок Truck Fault Codes: J1939 SPN для Android, що поширюється через Google Play. Сторони — Студія та Користувач. Угода — ці Умови використання разом із Політикою конфіденційності.",
        "subject_title": "Предмет Угоди",
        "subject_text": "Студія надає Користувачеві право безкоштовно користуватися Додатком на умовах цієї Угоди. Додаток містить 8141 запис J1939 SPN із поясненнями режимів відмови, таблиці J1587 та J1708 для старіших вантажівок, декодер сирих байтів DTC, довідники PGN і адрес джерел, значення ламп на панелі, вхід за симптомом і докладні посібники — 41 мовою. Увесь цей вміст працює офлайн. Додаток повністю безкоштовний і підтримується рекламою, без вбудованих покупок і підписок.",
        "acceptance_title": "Акцепт оферти",
        "acceptance_text": "Акцепт цієї оферти відбувається будь-якою з таких дій: завантаження Додатка з Google Play, встановлення його на пристрій або фактичне користування ним. З моменту акцепту ця Угода вважається укладеною між Студією та Користувачем.",
        "license_title": "Ліцензія на використання",
        "license_text": "Студія надає Користувачеві невиключну, безоплатну, відкличну ліцензію без права передачі на встановлення та використання Додатка на пристроях Android, що належать Користувачеві або законно ним контролюються. Використання в межах власної професійної ремонтної чи автопаркової роботи Користувача дозволяється; поширення Додатка або його вмісту як продукту — ні.",
        "notascantool_title": "Додаток не є сканером",
        "notascantool_text": "Додаток не підключається до жодного транспортного засобу — ні кабелем, ні через Bluetooth, ні через Wi-Fi, ні в будь-який інший спосіб. Він не зчитує коди несправностей із блока керування двигуном, не записує в нього, не стирає кодів, не запускає регенерації і не змінює жодного налаштування транспортного засобу. Користувач вводить код, який уже видала панель приладів або окремий сканер, а Додаток його пояснює. Будь-яка запропонована в Додатку процедура є відправною точкою для кваліфікованої людини, а не інструкцією до сліпого виконання.",
        "restrictions_title": "Обмеження використання",
        "restrictions_text": "Користувач зобов'язується не:",
        "restrictions_reverse": "декомпілювати, дизасемблювати чи здійснювати зворотну розробку Додатка, окрім випадків, прямо дозволених чинним законодавством;",
        "restrictions_modify": "змінювати, адаптувати, перекладати чи створювати похідні твори на основі Додатка;",
        "restrictions_distribute": "копіювати, поширювати, продавати, здавати в оренду, субліцензувати чи іншим чином комерційно використовувати Додаток, його базу даних або будь-яку їх частину;",
        "restrictions_circumvent": "обходити або намагатися обійти будь-які технічні засоби захисту Додатка.",
        "ads_title": "Реклама",
        "ads_text": "Додаток безкоштовний і підтримується рекламою через Google AdMob: банер, зрідка повноекранне оголошення лише при виході зі сторінки коду й із суворими обмеженнями частоти, нативна картка під вмістом сторінки коду та необов'язкове оголошення з винагородою, яке Користувач може переглянути за бажанням в обмін на короткий період узагалі без реклами. Жоден діагностичний вміст ніколи не ховається за рекламою; поширення звичайним текстом лишається безкоштовним і доступним завжди. Відмова від оголошення з винагородою нічого не коштує Користувачеві. Користуючись Додатком, Користувач погоджується на показ реклами; відповідний збір даних регулюється політикою Google і описаний у нашій Політиці конфіденційності.",
        "iap_title": "Платежі та вбудовані покупки",
        "iap_text": "Додаток не має вбудованих покупок і підписок. Кожна функція, включно з усією базою кодів, декодером, кожною довідковою таблицею та кожним посібником, доступна безкоштовно, без платного доступу та преміум-рівня. Студія не обробляє жодних платежів і ніколи не отримує даних платіжних карток.",
        "ip_title": "Інтелектуальна власність",
        "ip_text": "Усі виключні майнові права на Додаток, включно з його кодом, дизайном і оригінальними пояснювальними текстами, належать Студії. Нумерація SPN, FMI, PGN і PID походить зі стандартів SAE J1939 та SAE J1587, які є власністю SAE International; Додаток не видається SAE International, не пов'язаний із нею і нею не схвалений. Додаток є незалежним довідником і не пов'язаний із жодним виробником транспортних засобів чи двигунів, не схвалений і не спонсорований ним. Усі назви виробників є власністю відповідних власників і використовуються лише для позначення техніки, якої може стосуватися код.",
        "warranty_title": "Відмова від гарантій",
        "warranty_text": "Додаток надається «як є» та «як доступно», без будь-яких гарантій, прямих чи непрямих. Визначення кодів несправностей різняться між виробниками, модельними роками та версіями програмного забезпечення, і той самий SPN може означати інше на іншому транспортному засобі. Сервісна документація виробника для конкретного транспортного засобу завжди має перевагу над тим, що каже Додаток. Студія не гарантує, що будь-яке пояснення, причина чи перевірка, наведені в Додатку, є правильними або застосовними для конкретного транспортного засобу.",
        "liability_title": "Обмеження відповідальності",
        "liability_text": "У максимальному обсязі, дозволеному чинним законодавством, Студія не несе відповідальності за будь-які прямі, непрямі, випадкові, спеціальні чи побічні збитки, що виникають унаслідок використання або неможливості використання Додатка. Це включає, зокрема, пошкодження транспортного засобу чи його вузлів, неправильний або неповний ремонт, безпідставно замінені деталі, простій, втрачений вантаж чи дохід, а також будь-які травми, що виникли під час робіт на транспортному засобі. Діагностика й ремонт комерційного транспорту — кваліфікована робота з реальними наслідками для безпеки; якщо сигнальна лампа вказує, що транспортний засіб треба зупинити, його треба зупинити. Користувач користується Додатком на власний розсуд і ризик.",
        "privacy_title": "Конфіденційність",
        "privacy_text": "Поводження з інформацією під час користування Додатком регулюється окремим документом — Політикою конфіденційності, яка є невід'ємною частиною цієї Угоди.",
        "termination_title": "Припинення",
        "termination_text": "Користувач може будь-коли припинити користування Додатком, видаливши його з пристрою. Студія залишає за собою право припинити роботу Додатка або будь-якої його функції з повідомленням через оновлення в Google Play чи на сайті Студії. Припинення не звільняє жодну зі Сторін від зобов'язань, що виникли до такого припинення.",
        "changes_title": "Зміни до Умов",
        "changes_text": "Студія залишає за собою право в односторонньому порядку змінювати умови цієї Угоди. Чинна версія завжди опублікована на цій сторінці із зазначенням дати набрання чинності. Продовження користування Додатком після змін означає прийняття Користувачем нової версії.",
        "law_title": "Застосовне право",
        "law_text": "Ця Угода регулюється законодавством України. Будь-які спори, що виникають у зв'язку з цією Угодою, спершу вирішуються шляхом переговорів між Сторонами; у разі недосягнення згоди — у суді відповідно до законодавства України.",
        "contact_title": "Контактна інформація",
        "contact_text": "Запитання щодо умов цієї Угоди можна надіслати на:",
    },
}

# vue-i18n treats @ { } | as syntax. A stray one blanks the whole prod build,
# so refuse to write rather than find out after deploying.
FORBIDDEN = set("@{}|")


def check(node, path=""):
    if isinstance(node, dict):
        for k, v in node.items():
            check(v, f"{path}.{k}")
    elif isinstance(node, str):
        bad = FORBIDDEN & set(node)
        if bad:
            raise SystemExit(f"vue-i18n syntax char {bad} in {path}: {node[:80]}")


for locale, block in (("en", EN), ("uk", UK)):
    check(block, locale)
    path = f"src/i18n/{locale}.json"
    with io.open(path, encoding="utf-8") as f:
        data = json.load(f, object_pairs_hook=collections.OrderedDict)
    data["truckFaultCodes"] = block
    with io.open(path, "w", encoding="utf-8", newline="\n") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"wrote truckFaultCodes into {path}")
