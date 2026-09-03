"""One-shot: insert the antysurzhyk block into src/i18n/{en,uk}.json.

Kept in the repo so the wording has a single source rather than living only in
a shell history. Safe to re-run: it overwrites the block in place.
"""

import collections
import io
import json

UK = {
    "name": "Українська мова: Антисуржик",
    "subtitle": "Тренажер української: суржик, кальки, наголоси й правопис",
    "desc_short": "Тренажер української мови для тих, хто щодня хоче говорити чистіше й точніше. Поширені кальки, суржикові форми, складні наголоси й чинний правопис — у коротких вправах, які не потребують інтернету. 1200+ слів і речень зі словника з поясненням до кожного, пошук в обидва боки й інтервальне повторення, яке саме повертає те, у чому ви помилилися. Режими: швидкі раунди, наголоси, виправ речення, коми, разом чи окремо, рід іменника, картки для запам'ятовування. «Перевір текст» підсвічує слова зі словника прямо у вашому тексті — навіть виділеному в іншому застосунку. Окремі розділи: правила й лайфхаки, крилаті фрази, 180+ регіональних слів, командна гра для компанії, слово дня, тест чистоти мови з карткою для поширення, серії, досягнення та статистика. Тональність спокійна: норма, розмовний варіант, поширена калька — тут не соромлять. Безкоштовно з рекламою, є разова покупка для вимкнення реклами назавжди.",
    "platform": "Android",
    "privacy": {
        "title": "Політика конфіденційності",
        "updated": "Дата набрання чинності",
        "intro": "Zorya Tech Studio («ми», «нас», «наш») створила застосунок «Українська мова: Антисуржик» — тренажер української мови для Android. Ця Політика конфіденційності пояснює, як ми поводимося з інформацією, коли ви користуєтесь застосунком. Коротко: застосунок не має реєстрації, не створює акаунтів і не збирає ваших персональних даних, а весь прогрес зберігається лише на вашому пристрої.",
        "collect_title": "Збір персональних даних",
        "collect_text": "Ми не збираємо жодних персональних даних. Застосунок не потребує реєстрації, облікового запису чи входу. Ми не запитуємо й не зберігаємо ваше ім'я, електронну пошту, номер телефону, контакти, місцезнаходження, фотографії чи файли. У застосунку немає ні аналітики, ні систем звітування про збої. Кнопка «Запропонувати виправлення» відкриває ваш поштовий застосунок із готовим листом: лист складаєте й надсилаєте ви самі, і ми отримуємо рівно те, що ви вирішили написати.",
        "storage_title": "Зберігання даних",
        "storage_text": "Щоб застосунок працював, він зберігає локально: ваш прогрес у вправах і слова, у яких ви помилялися; обране; статистику — серії днів, відсоток правильних відповідей, досягнення; налаштування — тему оформлення, тактильний відгук, сповіщення. Ці дані лежать у базі на вашому пристрої, не покидають його й не передаються на наші сервери: серверної інфраструктури для даних користувачів у нас немає взагалі. Вони зникають повністю, коли ви видаляєте застосунок.",
        "text_title": "Текст, який ви перевіряєте",
        "text_text": "Функція «Перевір текст» працює повністю на вашому пристрої. Текст, який ви вставили, надрукували або надіслали із іншого застосунку через меню виділення тексту чи кнопку «Поділитися», порівнюється зі словником, вбудованим у сам застосунок. Цей текст нікуди не надсилається, не зберігається на серверах і не показується нікому. Він тримається в пам'яті лише на час обробки.",
        "tts_title": "Озвучення",
        "tts_text": "Якщо на пристрої встановлено український голос синтезу мовлення, застосунок може озвучити слово. Використовується системний синтезатор вашого пристрою. Ми не записуємо звук і не маємо доступу до мікрофона — дозволу на мікрофон застосунок не запитує взагалі. Якщо українського голосу на пристрої немає, кнопка озвучення просто не показується.",
        "notifications_title": "Сповіщення",
        "notifications_text": "Застосунок може надсилати одне сповіщення на добу — «Слово дня» о 19:30. Воно формується й планується виключно на вашому пристрої, без сервера й без інтернету: для його доставлення жодні дані не залишають пристрій. На Android 13 і новіших система спершу запитує ваш дозвіл. Якщо ви відмовите, застосунок працюватиме повністю — ви просто не отримуватимете нагадування. Вимкнути їх можна будь-коли в налаштуваннях застосунку або системи.",
        "permissions_title": "Дозволи",
        "permissions_text": "Застосунок запитує мінімум дозволів і не має доступу до мікрофона, камери, місцезнаходження, контактів, фотографій, календаря чи файлів:",
        "permissions_internet": "Інтернет — потрібен лише для завантаження реклами Google AdMob, форми згоди та перевірки покупки в Google Play. Уроки, словник, «Перевір текст» і «Слово дня» працюють без мережі.",
        "permissions_ad_id": "Рекламний ідентифікатор (AD_ID) — може використовуватися Google AdMob для показу релевантної реклами. Ви можете скинути або обмежити цей ідентифікатор у налаштуваннях Google чи Android.",
        "permissions_notifications": "Сповіщення (POST_NOTIFICATIONS) — потрібен лише для щоденного нагадування «Слово дня». Точних будильників застосунок не використовує й не запитує.",
        "ads_title": "Реклама",
        "ads_text": "Застосунок безкоштовний і підтримується рекламою через Google AdMob: банер унизу екрана, прямокутний блок на екранах результату, оголошення в списках, зрідка повноекранне оголошення на виході з результату та оголошення при поверненні до застосунку. Щоб показати рекламу, Google може збирати й обробляти рекламний ідентифікатор пристрою, IP-адресу, знеособлені дані про взаємодію із застосунком і рекламою та технічну діагностику. Ці дані збирає безпосередньо Google як рекламна платформа — ми їх не отримуємо. Докладніше в Політиці конфіденційності Google за адресою https://policies.google.com/privacy та в інформації про рекламу Google за адресою https://policies.google.com/technologies/ads. За перегляд короткого ролика застосунок пропонує бонус — кілька хвилин без реклами, заморозку серії або підказку. Це добровільно: жодне слово, пояснення чи розділ довідника за рекламою не сховані. Реклами немає на онбордингу, всередині раунду, у грі для компанії й у «Перевір текст».",
        "consent_title": "Згода на рекламу в ЄЕЗ, Великій Британії та Швейцарії",
        "consent_text": "Там, де цього вимагає закон, застосунок показує сертифіковану Google форму згоди (UMP) перед завантаженням будь-якої реклами, і жоден рекламний запит не робиться, поки згода цього не дозволяє. Свій вибір можна будь-коли змінити або відкликати через пункт «Параметри конфіденційності» в налаштуваннях застосунку — він показується там, де ця форма застосовна. Відмова не обмежує функцій застосунку: реклама просто показується без персоналізації або не показується зовсім.",
        "purchase_title": "Покупка «Без реклами»",
        "purchase_text": "Застосунок пропонує одну разову покупку, яка вимикає всю рекламу назавжди. Підписок немає. Покупку оформлює й обробляє Google Play — ми не отримуємо й не зберігаємо даних вашої платіжної картки, імені чи адреси. Застосунок зберігає на пристрої лише позначку про те, що реклама вимкнена, щоб вона не з'являлася й без мережі. Ціна показується тією, яку повертає Google Play для вашої країни. Кнопка «Відновити покупку» в налаштуваннях повертає право на новому пристрої через ваш обліковий запис Google.",
        "backup_title": "Резервні копії та перенесення прогресу",
        "backup_text": "Застосунок підтримує стандартне резервне копіювання Android: якщо ви увімкнули його в налаштуваннях системи, база прогресу може копіюватися до вашого облікового запису Google і відновлюватися на новому пристрої. Ця копія належить вам і Google, а не нам — доступу до неї ми не маємо. Окремо в налаштуваннях є ручний експорт прогресу у файл та імпорт із нього: файл зберігається туди, куди ви його збережете, і ми його ніде не бачимо. Позначка про покупку «Без реклами» до цього файлу свідомо не потрапляє — право доступу відновлюється тільки з Google Play.",
        "third_title": "Сторонні сервіси",
        "third_text": "Застосунок звертається лише до сервісів Google: Google AdMob разом з інструментом згоди UMP для реклами та Google Play Billing для разової покупки. Обидва працюють згідно з власною політикою конфіденційності Google. Систему синтезу мовлення надає ваш пристрій. Сервісів аналітики, відстеження чи звітування про збої в застосунку немає.",
        "children_title": "Конфіденційність дітей",
        "children_text": "Застосунок «Українська мова: Антисуржик» не призначений для дітей віком до 13 років і не спрямований на них. Ми свідомо не збираємо інформацію від дітей до 13 років. Якщо ви вважаєте, що ваша дитина надала нам будь-яку інформацію, зв'яжіться з нами, і ми її видалимо.",
        "rights_title": "Ваші права",
        "rights_text": "Оскільки ми не зберігаємо ваших даних, вам не потрібно звертатися до нас, щоб їх видалити: видаліть застосунок — і локальна база зникне разом із ним. Рекламний профіль скидається в налаштуваннях Android, а згода на персоналізовану рекламу відкликається в налаштуваннях застосунку. Якщо ви в Європейському Союзі, вам належать права за GDPR: доступ, виправлення, видалення, обмеження обробки, заперечення проти обробки й перенесення даних. Щодо даних, які збирає рекламна платформа, звертайтеся до Google за посиланням вище — ми зі свого боку не маємо жодних ваших даних, які можна було б надати чи видалити.",
        "changes_title": "Зміни до цієї Політики",
        "changes_text": "Ми можемо час від часу оновлювати цю Політику конфіденційності. Будь-які зміни будуть опубліковані на цій сторінці з оновленою датою набрання чинності.",
        "contact_title": "Зв'язатися з нами",
        "contact_text": "Якщо у вас є запитання щодо цієї Політики конфіденційності, напишіть нам:",
    },
    "terms": {
        "title": "Договір публічної оферти",
        "updated": "Дата набрання чинності",
        "intro": "Цей документ є публічною офертою Zorya Tech Studio (далі — «Студія», «ми») щодо порядку використання мобільного додатку «Українська мова: Антисуржик» (далі — «Додаток»). Завантажуючи, встановлюючи або використовуючи Додаток, ви (далі — «Користувач») беззастережно приймаєте всі умови цього Договору. Якщо ви не згодні з будь-якою з умов — не використовуйте Додаток.",
        "definitions_title": "Терміни та визначення",
        "definitions_text": "Додаток — мобільний застосунок «Українська мова: Антисуржик» для платформи Android, що розповсюджується через Google Play. Сторони — Студія та Користувач. Договір — цей договір публічної оферти разом із Політикою конфіденційності.",
        "subject_title": "Предмет договору",
        "subject_text": "Студія надає Користувачу право безоплатного використання Додатку в особистих, некомерційних цілях відповідно до умов цього Договору. Додаток містить навчальні вправи з української мови, словник поширених кальок і суржикових форм із нормативними відповідниками, довідник правил, розділ регіональної лексики та інструмент перевірки власного тексту, і працює без підключення до мережі.",
        "acceptance_title": "Прийняття оферти",
        "acceptance_text": "Прийняттям цієї оферти (акцептом) є будь-яка з наступних дій: завантаження Додатку з Google Play, встановлення на пристрій або фактичне використання. З моменту акцепту цей Договір вважається укладеним між Студією та Користувачем.",
        "license_title": "Ліцензія на використання",
        "license_text": "Студія надає Користувачу невиключну, безоплатну, відкличну, непередавану ліцензію на встановлення та використання Додатку на пристроях під керуванням Android, які належать Користувачу або перебувають у його законному користуванні. Ліцензія діє протягом усього часу використання Додатку та обмежена особистим, некомерційним використанням.",
        "restrictions_title": "Обмеження використання",
        "restrictions_text": "Користувач зобов'язується не вчиняти таких дій:",
        "restrictions_reverse": "здійснювати декомпіляцію, дизасемблювання, реверс-інжиніринг Додатку, окрім випадків, прямо дозволених чинним законодавством;",
        "restrictions_modify": "модифікувати, адаптувати, перекладати чи створювати похідні твори на основі Додатку;",
        "restrictions_distribute": "копіювати, поширювати, продавати, здавати в оренду, передавати в субліцензію або іншим чином комерційно використовувати Додаток чи його навчальний контент, зокрема словникову базу;",
        "restrictions_circumvent": "обходити чи намагатися обходити будь-які технічні засоби захисту Додатку, зокрема механізм внутрішньої покупки.",
        "disclaimer_title": "Характер контенту",
        "disclaimer_text": "Додаток має освітній характер. Він не є офіційним виданням, не представляє державні органи й не замінює «Українського правопису», академічних словників чи консультації фахівця. Пояснення написані спеціально для Додатку з опертям на чинний правопис і авторитетні джерела. Мова жива, і подекуди мовознавці розходяться в оцінках — такі форми позначені в Додатку окремо й не подаються як однозначна помилка; питомі діалектизми позначені як регіональна лексика, а не як помилки. Рекомендації Додатку є довідковими: остаточне рішення щодо власного тексту завжди залишається за Користувачем. Якщо Користувач помітив неточність, на кожній картці є кнопка, щоб написати Студії.",
        "price_title": "Ціна та реклама",
        "price_text": "Додаток надається безкоштовно й підтримується за рахунок реклами через Google AdMob — банерна, прямокутна, вбудована в списки, міжсторінкова реклама, реклама при поверненні до Додатку та необов'язкові відео з винагородою. Використовуючи Додаток, Користувач погоджується на показ реклами; відповідний збір даних регулюється політикою Google і описаний у Політиці конфіденційності. Жоден навчальний матеріал не схований за рекламою: перегляд відео з винагородою дає лише короткий період без реклами, заморозку серії або додаткову підказку і ніколи не є обов'язковим.",
        "iap_title": "Внутрішні покупки",
        "iap_text": "Додаток пропонує одну разову внутрішню покупку, яка назавжди вимикає всю рекламу. Підписок Додаток не містить, тому немає ані автоматичного поновлення, ані періодичних списань. Покупка оформлюється та обробляється системою виставлення рахунків Google Play; Студія не отримує даних платіжної картки. Ціна визначається для країни Користувача самим Google Play і показується в Додатку тим значенням, яке повертає Google Play. Повернення коштів здійснюється відповідно до політики Google Play. Придбане право прив'язане до облікового запису Google Користувача й відновлюється на іншому пристрої кнопкою «Відновити покупку» в налаштуваннях.",
        "ip_title": "Інтелектуальна власність",
        "ip_text": "Усі виключні майнові права на Додаток, його код, дизайн, графіку, навчальний контент, пояснення, приклади та інші складові належать Студії. Цей Договір не передає Користувачу жодних прав інтелектуальної власності на Додаток, окрім прямо передбаченої ліцензії на використання.",
        "warranty_title": "Відмова від гарантій",
        "warranty_text": "Додаток надається на умовах «як є» (as is) та «як доступно» (as available), без жодних гарантій, прямих чи непрямих, включаючи гарантії придатності для конкретної мети, відсутності помилок чи безперервної роботи. Результати навчання залежать від багатьох чинників, зокрема від регулярності занять; Студія не гарантує досягнення Користувачем будь-якого конкретного рівня володіння мовою.",
        "liability_title": "Обмеження відповідальності",
        "liability_text": "У максимально допустимих чинним законодавством межах Студія не несе відповідальності за будь-які прямі, непрямі, випадкові, спеціальні чи похідні збитки, що виникли внаслідок використання чи неможливості використання Додатку, рішень, ухвалених на основі його контенту, або втрати даних, локально збережених на пристрої Користувача. Загальна відповідальність Студії, якщо такою буде визнана, не перевищує суму, фактично сплачену Користувачем за внутрішні покупки протягом останніх 12 місяців.",
        "privacy_title": "Конфіденційність",
        "privacy_text": "Обробка інформації при використанні Додатку регулюється окремим документом — Політикою конфіденційності, яка є невід'ємною частиною цього Договору:",
        "termination_title": "Припинення дії",
        "termination_text": "Користувач має право в будь-який момент припинити використання Додатку, видаливши його зі свого пристрою. Студія залишає за собою право припинити надання Додатку або окремих його функцій, попередньо повідомивши про це через оновлення в Google Play чи на сайті Студії. Припинення Договору не звільняє Сторони від виконання обов'язків, що виникли до моменту такого припинення.",
        "changes_title": "Зміни умов оферти",
        "changes_text": "Студія залишає за собою право в односторонньому порядку змінювати умови цього Договору. Актуальна редакція завжди публікується на цій сторінці із зазначенням дати набрання чинності. Продовження використання Додатку після внесення змін означає згоду Користувача з новою редакцією.",
        "law_title": "Застосовне право",
        "law_text": "Цей Договір регулюється законодавством України. Усі спори, що виникають у зв'язку з виконанням цього Договору, Сторони намагатимуться вирішити шляхом переговорів; у разі недосягнення згоди — у судовому порядку відповідно до законодавства України.",
        "contact_title": "Контактна інформація",
        "contact_text": "Питання щодо умов цього Договору можна надсилати на електронну пошту:",
    },
}

EN = {
    "name": "Українська мова: Антисуржик",
    "subtitle": "Ukrainian language trainer: surzhyk, calques, stress and spelling",
    "desc_short": "A Ukrainian language trainer for anyone who wants to speak more cleanly and precisely every day. Common calques, surzhyk forms, tricky stress placement and the current 2019 orthography, delivered as short exercises that need no internet connection. 1200+ words and sentences with an explanation for every entry, two-way dictionary search, and spaced repetition that brings back exactly what you got wrong. Modes include quick rounds, stress placement, fix-the-sentence, commas, one word or two, noun gender and flashcards. The text checker highlights dictionary entries inside your own text, including text you selected in another app. Separate sections cover rules and mnemonics, well-known sayings, 180+ regional words, a team game for a group, a word of the day, a language purity test with a shareable card, plus streaks, achievements and statistics. The tone stays calm — standard form, colloquial variant, common calque — never shaming. Free with ads, with a single one-time purchase that removes them for good. The app interface and all content are in Ukrainian only.",
    "platform": "Android",
    "privacy": {
        "title": "Privacy Policy",
        "updated": "Effective date",
        "intro": "Zorya Tech Studio (\"we\", \"us\", \"our\") built the Українська мова: Антисуржик app — a Ukrainian language trainer for Android. This Privacy Policy explains how we handle information when you use the app. In short: the app has no registration, creates no accounts and collects no personal data, and all your progress stays on your device.",
        "collect_title": "Personal Data Collection",
        "collect_text": "We do not collect any personal data. The app requires no registration, account or sign-in. We do not request or store your name, email address, phone number, contacts, location, photos or files. There is no analytics and no crash reporting in the app. The \"Suggest a correction\" button opens your own email app with a prepared message: you write and send it yourself, and we receive exactly what you chose to write.",
        "storage_title": "Data Storage",
        "storage_text": "To work, the app stores locally: your exercise progress and the words you got wrong; your favourites; your statistics — day streaks, accuracy, achievements; and your settings — theme, haptics, notifications. This data lives in a database on your device, never leaves it and is never sent to our servers: we operate no server infrastructure for user data at all. It is removed entirely when you uninstall the app.",
        "text_title": "The Text You Check",
        "text_text": "The text checker runs entirely on your device. Text you paste, type or send in from another app through the text-selection menu or the share sheet is compared against the dictionary bundled inside the app itself. That text is never uploaded, never stored on any server and never shown to anyone. It is held in memory only for as long as it takes to process it.",
        "tts_title": "Speech Playback",
        "tts_text": "If a Ukrainian text-to-speech voice is installed on your device, the app can read a word aloud using your device's own speech synthesizer. We do not record audio and have no access to the microphone — the app requests no microphone permission at all. If no Ukrainian voice is present, the playback button simply does not appear.",
        "notifications_title": "Notifications",
        "notifications_text": "The app can send one notification per day — the word of the day at 19:30. It is composed and scheduled entirely on your device, with no server and no internet: no data leaves the device to deliver it. On Android 13 and later the system asks for your permission first. If you decline, the app works in full — you simply receive no reminder. You can turn reminders off at any time in the app settings or in your device settings.",
        "permissions_title": "Permissions",
        "permissions_text": "The app requests a minimum of permissions and has no access to the microphone, camera, location, contacts, photos, calendar or files:",
        "permissions_internet": "Internet, required only to load Google AdMob ads, show the consent form and verify a purchase with Google Play. The exercises, the dictionary, the text checker and the word of the day all work without a connection.",
        "permissions_ad_id": "Advertising ID (AD_ID), may be used by Google AdMob to serve relevant ads. You can reset or limit this identifier in your Google or Android settings.",
        "permissions_notifications": "Notifications (POST_NOTIFICATIONS), required only for the daily word-of-the-day reminder. The app neither uses nor requests exact alarms.",
        "ads_title": "Advertising",
        "ads_text": "The app is free and supported by advertising through Google AdMob: a banner at the bottom of the screen, a rectangle unit on result screens, units inside lists, an occasional full-screen ad when leaving a result screen, and an ad when you return to the app. To deliver ads, Google may collect and process your device's advertising identifier, IP address, anonymised data about your interactions with the app and the ads, and technical diagnostics. This data is collected directly by Google as the advertising platform — we never receive it. Learn more in Google's Privacy Policy at https://policies.google.com/privacy and Google's advertising information at https://policies.google.com/technologies/ads. In exchange for watching a short video the app offers a bonus — a few minutes without ads, a streak freeze or a hint. This is entirely optional: no word, explanation or reference section is ever locked behind an ad. There are no ads during onboarding, inside a round, in the team game or in the text checker.",
        "consent_title": "Advertising Consent in the EEA, UK and Switzerland",
        "consent_text": "Where required by law, the app shows a Google-certified consent (UMP) form before any ad loads, and no ad request is made unless consent allows it. You can change or withdraw your choice at any time via \"Privacy options\" in the app settings, which appears where that form applies. Declining does not limit any app feature: ads are simply shown without personalization, or not shown at all.",
        "purchase_title": "The Ad-Free Purchase",
        "purchase_text": "The app offers a single one-time purchase that removes all advertising permanently. There are no subscriptions. The purchase is processed by Google Play — we never receive or store your payment card details, name or address. The app keeps only a flag on the device recording that ads are disabled, so they stay off even with no connection. The price shown is the one Google Play returns for your country. A \"Restore purchase\" button in the settings brings the entitlement back on a new device through your Google account.",
        "backup_title": "Backups and Moving Your Progress",
        "backup_text": "The app supports standard Android backup: if you have enabled it in your system settings, the progress database can be copied to your Google account and restored on a new device. That copy belongs to you and Google, not to us — we have no access to it. Separately, the settings offer a manual export of your progress to a file and an import from one: the file goes wherever you choose to save it, and we never see it. The ad-free entitlement is deliberately excluded from that file — it is restored only through Google Play.",
        "third_title": "Third-Party Services",
        "third_text": "The app talks only to Google services: Google AdMob together with the UMP consent tool for advertising, and Google Play Billing for the one-time purchase. Both operate under Google's own privacy policy. Speech synthesis is provided by your device. The app contains no analytics, tracking or crash-reporting services.",
        "children_title": "Children's Privacy",
        "children_text": "Українська мова: Антисуржик is not directed at children under the age of 13. We do not knowingly collect information from children under 13. If you believe your child has provided us with any information, please contact us and we will delete it.",
        "rights_title": "Your Rights",
        "rights_text": "Because we store none of your data, you do not need to contact us to have it deleted: uninstall the app and the local database goes with it. Your advertising profile can be reset in your Android settings, and consent to personalized advertising can be withdrawn in the app settings. If you are in the European Union, the GDPR gives you rights of access, rectification, erasure, restriction of processing, objection to processing and data portability. For data collected by the advertising platform, please contact Google at the link above — on our side we hold none of your data to provide or delete.",
        "changes_title": "Changes to This Policy",
        "changes_text": "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
        "contact_title": "Contact Us",
        "contact_text": "If you have questions about this Privacy Policy, please contact us at:",
    },
    "terms": {
        "title": "Terms of Use",
        "updated": "Effective date",
        "intro": "This document is a public offer by Zorya Tech Studio (\"Studio\", \"we\") regarding the use of the Українська мова: Антисуржик mobile app (the \"App\"). By downloading, installing or using the App, you (the \"User\") unconditionally accept all terms of this Agreement. If you do not agree to any of the terms, please do not use the App.",
        "definitions_title": "Definitions",
        "definitions_text": "App — the Українська мова: Антисуржик mobile application for Android, distributed via Google Play. Parties — the Studio and the User. Agreement — these Terms of Use together with the Privacy Policy.",
        "subject_title": "Subject of the Agreement",
        "subject_text": "The Studio grants the User the right to use the App free of charge for personal, non-commercial purposes subject to this Agreement. The App provides Ukrainian language exercises, a dictionary of common calques and surzhyk forms with their standard equivalents, a rules reference, a section on regional vocabulary and a tool for checking the User's own text, and it works without a network connection.",
        "acceptance_title": "Acceptance of the Offer",
        "acceptance_text": "Acceptance of this offer occurs through any of the following actions: downloading the App from Google Play, installing it on a device, or actually using it. From the moment of acceptance, this Agreement is deemed concluded between the Studio and the User.",
        "license_title": "License to Use",
        "license_text": "The Studio grants the User a non-exclusive, royalty-free, revocable, non-transferable license to install and use the App on Android devices owned or lawfully controlled by the User. The license remains in force for as long as the User uses the App and is limited to personal, non-commercial use.",
        "restrictions_title": "Use Restrictions",
        "restrictions_text": "The User agrees not to:",
        "restrictions_reverse": "decompile, disassemble or reverse-engineer the App, except as expressly permitted by applicable law;",
        "restrictions_modify": "modify, adapt, translate or create derivative works based on the App;",
        "restrictions_distribute": "copy, distribute, sell, rent, sublicense or otherwise commercially exploit the App or its educational content, including its dictionary database;",
        "restrictions_circumvent": "circumvent or attempt to circumvent any technical protection measures of the App, including the in-app purchase mechanism.",
        "disclaimer_title": "Nature of the Content",
        "disclaimer_text": "The App is educational. It is not an official publication, does not represent any government body, and does not replace the Ukrainian Orthography, academic dictionaries or professional advice. The explanations are written specifically for the App and rest on the current orthography and authoritative sources. Language is alive, and linguists sometimes disagree — such forms are marked separately in the App and are never presented as a clear-cut error; native regionalisms are marked as regional vocabulary rather than mistakes. The App's suggestions are advisory: the final decision about the User's own text always rests with the User. If the User spots an inaccuracy, every card carries a button for writing to the Studio.",
        "price_title": "Price and Advertising",
        "price_text": "The App is provided free of charge and is supported by advertising through Google AdMob — banner, rectangle, in-list, interstitial and app-open ads, plus optional rewarded videos. By using the App, the User consents to the display of advertising; the related data collection is governed by Google's policies and described in the Privacy Policy. No educational material is placed behind an ad: watching a rewarded video only grants a short ad-free period, a streak freeze or an extra hint, and is never required.",
        "iap_title": "In-App Purchases",
        "iap_text": "The App offers a single one-time in-app purchase that permanently removes all advertising. The App contains no subscriptions, so there is neither automatic renewal nor recurring billing. The purchase is processed through Google Play's billing system; the Studio never receives payment card details. The price is set by Google Play for the User's country and is displayed in the App exactly as Google Play returns it. Refunds are handled in accordance with Google Play policy. The entitlement is tied to the User's Google account and can be restored on another device with the \"Restore purchase\" button in the settings.",
        "ip_title": "Intellectual Property",
        "ip_text": "All exclusive proprietary rights to the App, including its code, design, graphics, educational content, explanations, examples and other components, belong to the Studio. This Agreement does not transfer any intellectual property rights in the App to the User, other than the limited license to use expressly granted herein.",
        "warranty_title": "Disclaimer of Warranties",
        "warranty_text": "The App is provided \"as is\" and \"as available\", without warranties of any kind, express or implied, including warranties of fitness for a particular purpose, error-free operation or uninterrupted availability. Learning results depend on many factors, including how consistently the User practises; the Studio does not warrant that the User will reach any particular level of language proficiency.",
        "liability_title": "Limitation of Liability",
        "liability_text": "To the maximum extent permitted by applicable law, the Studio is not liable for any direct, indirect, incidental, special or consequential damages arising out of the use or inability to use the App, decisions made based on its content, or loss of data stored locally on the User's device. The Studio's total liability, if any is established, does not exceed the amount actually paid by the User for in-app purchases during the preceding 12 months.",
        "privacy_title": "Privacy",
        "privacy_text": "The handling of information when using the App is governed by a separate document — the Privacy Policy — which forms an integral part of this Agreement:",
        "termination_title": "Termination",
        "termination_text": "The User may stop using the App at any time by uninstalling it from their device. The Studio reserves the right to discontinue the App or any of its features, giving prior notice through an update on Google Play or on the Studio's website. Termination does not release the Parties from obligations that arose before such termination.",
        "changes_title": "Changes to These Terms",
        "changes_text": "The Studio reserves the right to unilaterally amend this Agreement. The current version is always published on this page with its effective date. Continued use of the App after changes are published constitutes the User's acceptance of the new version.",
        "law_title": "Governing Law",
        "law_text": "This Agreement is governed by the law of Ukraine. The Parties will seek to resolve any dispute arising under this Agreement through negotiation; failing that, disputes are resolved in court in accordance with the law of Ukraine.",
        "contact_title": "Contact Information",
        "contact_text": "Questions about these Terms can be sent by email to:",
    },
}

FORBIDDEN = set("@{}|")


def check(node, path=""):
    if isinstance(node, dict):
        for k, v in node.items():
            check(v, f"{path}.{k}")
    elif isinstance(node, str):
        bad = FORBIDDEN & set(node)
        if bad:
            raise SystemExit(f"vue-i18n syntax char {bad} in {path}: {node[:80]}")


if set(UK["privacy"]) != set(EN["privacy"]) or set(UK["terms"]) != set(EN["terms"]):
    raise SystemExit("uk/en key sets differ")

for locale, block in (("en", EN), ("uk", UK)):
    check(block, locale)
    path = f"src/i18n/{locale}.json"
    with io.open(path, encoding="utf-8") as f:
        data = json.load(f, object_pairs_hook=collections.OrderedDict)
    data["antysurzhyk"] = block
    with io.open(path, "w", encoding="utf-8", newline="\n") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"wrote antysurzhyk into {path}")
