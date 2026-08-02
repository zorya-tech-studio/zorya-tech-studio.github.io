# -*- coding: utf-8 -*-
"""Adds the luxMeter i18n block to src/i18n/en.json and uk.json.

Kept in the repo so the wording can be re-applied if the files are regenerated.
Strings must not contain unescaped @, {, } or | — vue-i18n treats those as
syntax and the production build renders blank pages. See CLAUDE.md.
"""

import collections
import io
import json
import os

ROOT = os.path.join(os.path.dirname(__file__), "..")

EN = {
    "name": "Lux Meter: Light Meter, PPFD",
    "subtitle": "Lux and light meter for plants, rooms and photography",
    "desc_short": "Measure light in lux with your phone's ambient light sensor — for indoor plants, rooms, workspaces and photography. Read live lux with min, average and max values, switch to foot-candles, and create plant profiles with a target range that tells you instantly whether a spot is too dim, good or too bright. Grow-light mode estimates PPFD (PAR) and DLI from your light source and daily light hours. Photography mode converts light into EV and suggested exposure settings. Save readings, log a session over time and export to CSV. An optional camera mode estimates colour temperature. Works offline, no account required, available in 50+ languages. An estimation tool, not a certified laboratory instrument.",
    "status": "Released",
    "platform": "Android",
    "privacy": {
        "title": "Privacy Policy",
        "updated": "Effective date",
        "intro": "Zorya Tech Studio (\"we\", \"us\", \"our\") built Lux Meter: Light Meter, PPFD — a light measurement app for Android. This Privacy Policy explains how we handle information when you use the app.",
        "collect_title": "Personal Data Collection",
        "collect_text": "We do not collect any personal data. The app requires no registration, account, or sign-in. We do not request or store your name, email, phone number, or any other personally identifiable information. The app has no access to your location, contacts, microphone, or files.",
        "sensor_title": "Light Sensor",
        "sensor_text": "Measurements are taken by your device's ambient light sensor, which needs no runtime permission. Readings are processed on your device in real time. If your device has no ambient light sensor, the app tells you so instead of showing an invented value.",
        "camera_title": "Camera",
        "camera_text": "The optional colour temperature mode uses the camera only to estimate the colour of the light in front of you, entirely on your device. No photo or video is captured, saved, or transmitted, and the camera is active only while that screen is open. The permission is requested at the moment you open the mode, and declining it leaves every other feature working.",
        "storage_title": "Data Storage",
        "storage_text": "Saved measurements, plant and room profiles, logging sessions, calibration offsets, and your chosen language, theme and units are stored exclusively on your device (local storage). We operate no server for user content, and none of this is transmitted to us. You can delete it from within the app at any time, and uninstalling removes all of it. CSV exports are created only when you ask for one and are shared wherever you choose to send them.",
        "permissions_title": "Permissions",
        "permissions_text": "The app requests a minimal set of permissions, used only for the features described below:",
        "permissions_internet": "Internet — used solely to load ads and request advertising consent. Your measurements, profiles and settings are never uploaded.",
        "permissions_camera": "Camera — used only for the optional colour temperature mode, on your device. Nothing is recorded or sent anywhere.",
        "permissions_adid": "Advertising ID — used by Google AdMob to serve ads, as required from Android 13 onwards. It identifies a device for advertising purposes and can be reset or limited in your Android settings.",
        "third_title": "Third-Party Services",
        "third_text": "The app shows ads served by Google AdMob. To deliver ads, Google may collect and process certain data (such as your device's advertising identifier, IP address and in-app interactions). For users in the EEA, the UK and Switzerland we display a Google-certified consent (UMP) form before any ad loads, and you can change your choice at any time via \"Privacy options\" in the app settings, which is shown wherever that form applies. Declining does not lock you out of anything: ads are then served without personalisation, or not at all where Google's consent tools require it. You may optionally watch a rewarded video to hide ads for a while — this is never required. Apart from AdMob we use no analytics or tracking services and do not collect or share any personal data ourselves. Learn more in Google's Privacy Policy at https://policies.google.com/privacy and Google's advertising information at https://policies.google.com/technologies/ads.",
        "children_title": "Children's Privacy",
        "children_text": "Lux Meter: Light Meter, PPFD is not directed at children under the age of 13. We do not knowingly collect information from children under 13. If you believe your child has provided us with any information, please contact us and we will delete it.",
        "changes_title": "Changes to This Policy",
        "changes_text": "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
        "contact_title": "Contact Us",
        "contact_text": "If you have questions about this Privacy Policy, please contact us at:",
    },
    "terms": {
        "title": "Terms of Use",
        "updated": "Effective date",
        "intro": "This document is a public offer by Zorya Tech Studio (\"Studio\", \"we\") regarding the use of the Lux Meter: Light Meter, PPFD mobile app (the \"App\"). By downloading, installing, or using the App, you (the \"User\") unconditionally accept all terms of this Agreement. If you do not agree to any of the terms, please do not use the App.",
        "definitions_title": "Definitions",
        "definitions_text": "App — the Lux Meter: Light Meter, PPFD mobile application for Android, distributed via Google Play. Parties — the Studio and the User. Agreement — these Terms of Use together with the Privacy Policy.",
        "subject_title": "Subject of the Agreement",
        "subject_text": "The Studio grants the User the right to use the App free of charge for personal, non-commercial purposes subject to this Agreement. The App measures ambient light with the device's light sensor and presents it in lux and foot-candles, estimates PPFD and DLI for grow lights, converts light into photographic EV values, and lets the User save readings, keep profiles, record logging sessions and export data as CSV.",
        "acceptance_title": "Acceptance of the Offer",
        "acceptance_text": "Acceptance of this offer occurs through any of the following actions: downloading the App from Google Play, installing it on a device, or actually using it. From the moment of acceptance, this Agreement is deemed concluded between the Studio and the User.",
        "license_title": "License to Use",
        "license_text": "The Studio grants the User a non-exclusive, royalty-free, revocable, non-transferable license to install and use the App on Android devices owned or lawfully controlled by the User. The license remains in force for as long as the User uses the App and is limited to personal, non-commercial use.",
        "restrictions_title": "Use Restrictions",
        "restrictions_text": "The User agrees not to:",
        "restrictions_reverse": "decompile, disassemble, or reverse-engineer the App, except as expressly permitted by applicable law;",
        "restrictions_modify": "modify, adapt, translate, or create derivative works based on the App;",
        "restrictions_distribute": "copy, distribute, sell, rent, sublicense, or otherwise commercially exploit the App or its content;",
        "restrictions_circumvent": "circumvent or attempt to circumvent any technical protection measures of the App.",
        "accuracy_title": "Measurement Accuracy",
        "accuracy_text": "The App is an estimation tool, not a certified or professional-grade light meter. It reads the ambient light sensor built into a consumer phone, and the result depends on that sensor's quality, its position behind the screen glass, the angle of the device, any case or film covering it, and the spectrum of the light source. PPFD, DLI, colour temperature and EV values are calculated estimates derived from the lux reading and the light source you select, not direct spectral measurements. Readings must not be relied upon where certified measurement is required, including workplace safety assessments, regulatory compliance, laboratory work, horticultural certification, or any decision with legal or financial consequences. Where accuracy matters, use a calibrated instrument. The calibration feature adjusts readings against a reference you supply and does not make the App a certified instrument.",
        "price_title": "Price and Purchases",
        "price_text": "The App is provided free of charge and is supported by advertising through Google AdMob (banner, interstitial, app-open and optional rewarded ads). The App contains no in-app purchases and no subscription. You may optionally watch a rewarded video to hide ads for a limited time, but this is never required to use any feature.",
        "ip_title": "Intellectual Property",
        "ip_text": "All exclusive proprietary rights to the App, including its code, design, graphics, content, text, and other components, belong to the Studio. This Agreement does not transfer any intellectual property rights in the App to the User, other than the limited license to use expressly granted herein.",
        "warranty_title": "Disclaimer of Warranties",
        "warranty_text": "The App is provided \"as is\" and \"as available\", without warranties of any kind, express or implied, including warranties of fitness for a particular purpose, error-free operation, measurement accuracy, or uninterrupted availability. The Studio does not warrant that a device has a usable ambient light sensor or that its readings match those of a calibrated instrument.",
        "liability_title": "Limitation of Liability",
        "liability_text": "To the maximum extent permitted by applicable law, the Studio is not liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the App, including decisions made on the basis of a reading, damage to or loss of plants, unsuitable lighting conditions, photographic results, equipment purchases, or loss of data stored locally on the User's device.",
        "privacy_title": "Privacy",
        "privacy_text": "The handling of information when using the App is governed by a separate document — the Privacy Policy — which forms an integral part of this Agreement.",
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
    "name": "Lux Meter: Light Meter, PPFD",
    "subtitle": "Люксметр для рослин, приміщень і фотографії",
    "desc_short": "Вимірюйте освітленість у люксах датчиком освітлення вашого телефона — для кімнатних рослин, приміщень, робочих місць і фотографії. Дивіться поточне значення разом із мінімумом, середнім і максимумом, перемикайтеся на фут-кандели, створюйте профілі рослин із цільовим діапазоном, який одразу показує, чи місце затемне, добре, чи засвітле. Режим фітолампи оцінює PPFD (PAR) і DLI за типом джерела світла й тривалістю досвічування. Режим фотографії переводить світло в EV і підказує параметри експозиції. Зберігайте виміри, записуйте сесію в часі та експортуйте в CSV. Додатковий режим камери оцінює колірну температуру. Працює офлайн, без реєстрації, доступний 50+ мовами. Це інструмент оцінки, а не сертифікований лабораторний прилад.",
    "status": "Опубліковано",
    "platform": "Android",
    "privacy": {
        "title": "Політика конфіденційності",
        "updated": "Дата набрання чинності",
        "intro": "Zorya Tech Studio (\"ми\", \"нас\", \"наш\") створила Lux Meter: Light Meter, PPFD — застосунок для вимірювання освітленості на Android. Ця Політика конфіденційності пояснює, як ми поводимося з інформацією, коли ви користуєтеся застосунком.",
        "collect_title": "Збір персональних даних",
        "collect_text": "Ми не збираємо жодних персональних даних. Застосунок не потребує реєстрації, облікового запису чи входу. Ми не запитуємо й не зберігаємо ваше ім'я, електронну пошту, номер телефону чи будь-яку іншу інформацію, що дає змогу вас ідентифікувати. Застосунок не має доступу до вашого місцезнаходження, контактів, мікрофона чи файлів.",
        "sensor_title": "Датчик освітлення",
        "sensor_text": "Виміри виконує вбудований датчик освітлення вашого пристрою, який не потребує окремого дозволу. Показники обробляються на пристрої в реальному часі. Якщо у пристрої немає датчика освітлення, застосунок прямо про це повідомляє, а не показує вигадане значення.",
        "camera_title": "Камера",
        "camera_text": "Додатковий режим колірної температури використовує камеру лише для того, щоб оцінити колір світла перед вами, і робить це повністю на вашому пристрої. Жодне фото чи відео не знімається, не зберігається й не передається, а камера активна тільки поки відкритий цей екран. Дозвіл запитується саме в момент відкриття режиму, і відмова від нього не впливає на решту функцій.",
        "storage_title": "Зберігання даних",
        "storage_text": "Збережені виміри, профілі рослин і приміщень, сесії запису, калібрувальні поправки, а також обрані мова, тема й одиниці зберігаються виключно на вашому пристрої (локальне сховище). Ми не маємо сервера для користувацького вмісту, і нічого з цього нам не передається. Ви можете будь-коли видалити ці дані в самому застосунку, а видалення застосунку прибирає їх повністю. Експорт у CSV створюється лише на ваш запит і надсилається туди, куди ви самі оберете.",
        "permissions_title": "Дозволи",
        "permissions_text": "Застосунок запитує мінімальний набір дозволів, які використовуються лише для описаних нижче функцій:",
        "permissions_internet": "Інтернет — використовується виключно для завантаження реклами та запиту згоди на неї. Ваші виміри, профілі й налаштування ніколи не завантажуються на сервер.",
        "permissions_camera": "Камера — використовується лише для додаткового режиму колірної температури, безпосередньо на пристрої. Нічого не записується й нікуди не надсилається.",
        "permissions_adid": "Рекламний ідентифікатор — використовується Google AdMob для показу реклами, як цього вимагає Android 13 і новіші версії. Він ідентифікує пристрій для рекламних цілей, і його можна скинути або обмежити в налаштуваннях Android.",
        "third_title": "Сторонні сервіси",
        "third_text": "Застосунок показує рекламу через Google AdMob. Для її показу Google може збирати й обробляти певні дані (зокрема рекламний ідентифікатор пристрою, IP-адресу та взаємодії в застосунку). Користувачам з ЄЕЗ, Великої Британії та Швейцарії ми показуємо сертифіковану Google форму згоди (UMP) до завантаження будь-якої реклами, і ви можете будь-коли змінити свій вибір через пункт \"Налаштування конфіденційності\" в застосунку, який відображається там, де ця форма застосовна. Відмова нічого не блокує: реклама тоді показується без персоналізації або не показується взагалі, якщо цього вимагають інструменти згоди Google. За бажанням ви можете переглянути відео з винагородою, щоб на певний час прибрати рекламу — це ніколи не є обов'язковим. Окрім AdMob ми не використовуємо жодних сервісів аналітики чи відстеження і самі не збираємо й не передаємо персональних даних. Докладніше — у Політиці конфіденційності Google за адресою https://policies.google.com/privacy та в інформації про рекламу Google за адресою https://policies.google.com/technologies/ads.",
        "children_title": "Конфіденційність дітей",
        "children_text": "Lux Meter: Light Meter, PPFD не призначений для дітей віком до 13 років. Ми свідомо не збираємо інформацію від дітей до 13 років. Якщо ви вважаєте, що ваша дитина надала нам якусь інформацію, зв'яжіться з нами, і ми її видалимо.",
        "changes_title": "Зміни до цієї Політики",
        "changes_text": "Ми можемо час від часу оновлювати цю Політику конфіденційності. Будь-які зміни публікуються на цій сторінці з оновленою датою набрання чинності.",
        "contact_title": "Зв'язок з нами",
        "contact_text": "Якщо у вас є запитання щодо цієї Політики конфіденційності, напишіть нам:",
    },
    "terms": {
        "title": "Умови використання",
        "updated": "Дата набрання чинності",
        "intro": "Цей документ є публічною офертою Zorya Tech Studio (\"Студія\", \"ми\") щодо використання мобільного застосунку Lux Meter: Light Meter, PPFD (\"Застосунок\"). Завантажуючи, встановлюючи або використовуючи Застосунок, ви (\"Користувач\") беззастережно приймаєте всі умови цієї Угоди. Якщо ви не згодні з будь-якою з умов, будь ласка, не використовуйте Застосунок.",
        "definitions_title": "Визначення",
        "definitions_text": "Застосунок — мобільний застосунок Lux Meter: Light Meter, PPFD для Android, що розповсюджується через Google Play. Сторони — Студія та Користувач. Угода — ці Умови використання разом із Політикою конфіденційності.",
        "subject_title": "Предмет Угоди",
        "subject_text": "Студія надає Користувачеві право безоплатно використовувати Застосунок в особистих некомерційних цілях на умовах цієї Угоди. Застосунок вимірює освітленість датчиком світла пристрою та показує її в люксах і фут-канделах, оцінює PPFD і DLI для фітоламп, переводить світло у фотографічні значення EV, а також дає змогу зберігати виміри, вести профілі, записувати сесії й експортувати дані у CSV.",
        "acceptance_title": "Акцепт оферти",
        "acceptance_text": "Акцептом цієї оферти є будь-яка з таких дій: завантаження Застосунку з Google Play, встановлення його на пристрій або фактичне використання. З моменту акцепту ця Угода вважається укладеною між Студією та Користувачем.",
        "license_title": "Ліцензія на використання",
        "license_text": "Студія надає Користувачеві невиключну, безоплатну, відкличну ліцензію без права передачі на встановлення та використання Застосунку на пристроях Android, що належать Користувачеві або законно ним контролюються. Ліцензія діє протягом усього часу використання Застосунку та обмежена особистим некомерційним використанням.",
        "restrictions_title": "Обмеження використання",
        "restrictions_text": "Користувач зобов'язується не:",
        "restrictions_reverse": "декомпілювати, дизасемблювати або здійснювати зворотну розробку Застосунку, окрім випадків, прямо дозволених чинним законодавством;",
        "restrictions_modify": "змінювати, адаптувати, перекладати або створювати похідні твори на основі Застосунку;",
        "restrictions_distribute": "копіювати, розповсюджувати, продавати, здавати в оренду, субліцензувати або іншим чином комерційно використовувати Застосунок чи його вміст;",
        "restrictions_circumvent": "обходити або намагатися обійти будь-які технічні засоби захисту Застосунку.",
        "accuracy_title": "Точність вимірювань",
        "accuracy_text": "Застосунок є інструментом оцінки, а не сертифікованим чи професійним люксметром. Він зчитує датчик освітлення, вбудований у споживчий телефон, і результат залежить від якості цього датчика, його розташування за склом екрана, кута нахилу пристрою, чохла чи плівки, що його перекривають, а також від спектра джерела світла. Значення PPFD, DLI, колірної температури та EV є розрахунковими оцінками на основі показника в люксах і обраного вами типу джерела світла, а не прямими спектральними вимірюваннями. На ці показники не можна покладатися там, де потрібне сертифіковане вимірювання, зокрема при оцінці безпеки робочих місць, дотриманні нормативних вимог, лабораторній роботі, сертифікації в рослинництві чи будь-яких рішеннях із правовими або фінансовими наслідками. Там, де точність має значення, використовуйте калібрований прилад. Функція калібрування коригує показники за наданим вами еталоном і не робить Застосунок сертифікованим приладом.",
        "price_title": "Вартість і покупки",
        "price_text": "Застосунок надається безкоштовно та підтримується рекламою через Google AdMob (банерна, міжсторінкова, на екрані завантаження та додаткова реклама з винагородою). Застосунок не містить вбудованих покупок і підписок. За бажанням ви можете переглянути відео з винагородою, щоб на певний час прибрати рекламу, але це ніколи не є обов'язковим для доступу до будь-якої функції.",
        "ip_title": "Інтелектуальна власність",
        "ip_text": "Усі виключні майнові права на Застосунок, включно з його кодом, дизайном, графікою, вмістом, текстами та іншими компонентами, належать Студії. Ця Угода не передає Користувачеві жодних прав інтелектуальної власності на Застосунок, окрім прямо наданої обмеженої ліцензії на використання.",
        "warranty_title": "Відмова від гарантій",
        "warranty_text": "Застосунок надається \"як є\" та \"як доступно\", без гарантій будь-якого роду, прямих чи непрямих, включно з гарантіями придатності для певної мети, безпомилкової роботи, точності вимірювань або безперебійної доступності. Студія не гарантує, що пристрій має придатний датчик освітлення або що його показники збігатимуться з показниками каліброваного приладу.",
        "liability_title": "Обмеження відповідальності",
        "liability_text": "У максимальному обсязі, дозволеному чинним законодавством, Студія не несе відповідальності за будь-які прямі, непрямі, випадкові, спеціальні чи побічні збитки, що виникли внаслідок використання або неможливості використання Застосунку, включно з рішеннями, ухваленими на основі показників, пошкодженням або загибеллю рослин, непридатними умовами освітлення, результатами зйомки, придбанням обладнання чи втратою даних, збережених локально на пристрої Користувача.",
        "privacy_title": "Конфіденційність",
        "privacy_text": "Поводження з інформацією під час використання Застосунку регулюється окремим документом — Політикою конфіденційності, яка є невід'ємною частиною цієї Угоди.",
        "termination_title": "Припинення",
        "termination_text": "Користувач може будь-коли припинити використання Застосунку, видаливши його з пристрою. Студія залишає за собою право припинити роботу Застосунку чи будь-якої з його функцій, повідомивши про це через оновлення в Google Play або на сайті Студії. Припинення не звільняє жодну зі Сторін від зобов'язань, що виникли до такого припинення.",
        "changes_title": "Зміни до Умов",
        "changes_text": "Студія залишає за собою право в односторонньому порядку змінювати умови цієї Угоди. Чинна версія завжди розміщена на цій сторінці із зазначенням дати набрання чинності. Продовження використання Застосунку після змін означає прийняття Користувачем нової версії.",
        "law_title": "Застосовне право",
        "law_text": "Ця Угода регулюється законодавством України. Будь-які спори, що виникають у зв'язку з цією Угодою, вирішуються спершу шляхом переговорів між Сторонами, а в разі недосягнення згоди — у суді відповідно до законодавства України.",
        "contact_title": "Контактна інформація",
        "contact_text": "Запитання щодо умов цієї Угоди можна надіслати на:",
    },
}

BANNED = ("@", "{", "}", "|")


def check(node, path=""):
    """vue-i18n treats these as syntax; an unescaped one blanks the prod build."""
    if isinstance(node, dict):
        for k, v in node.items():
            check(v, path + "." + k)
    else:
        for ch in BANNED:
            assert ch not in node, "%s contains %r" % (path, ch)


def main():
    for locale, block in (("en", EN), ("uk", UK)):
        check(block, locale + ".luxMeter")
        path = os.path.join(ROOT, "src", "i18n", "%s.json" % locale)
        with io.open(path, encoding="utf-8") as f:
            data = json.load(f, object_pairs_hook=collections.OrderedDict)
        data["luxMeter"] = block
        with io.open(path, "w", encoding="utf-8", newline="\n") as f:
            f.write(json.dumps(data, ensure_ascii=False, indent=2))
            f.write("\n")
        print("updated", path)


if __name__ == "__main__":
    main()
