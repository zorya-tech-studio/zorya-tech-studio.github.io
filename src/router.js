import { createRouter, createWebHistory } from 'vue-router'
import i18n from './i18n/index.js'
import { termsAliasPaths, termsPath, termsSlugs } from './data/termsRoutes.js'

const LOCALES = ['uk', 'en']

const SITE_NAME = 'Zorya Tech Studio'
const DEFAULT_DESCRIPTION =
  'Zorya Tech Studio — Independent mobile app studio. We craft mobile experiences with care.'

const routes = [
  { path: '/:locale', name: 'home', component: () => import('./pages/HomePage.vue') },
  {
    path: '/:locale/privacy',
    name: 'privacy',
    component: () => import('./pages/PrivacyPage.vue'),
    meta: { titleKey: 'privacy.title' },
  },
  {
    path: '/:locale/projects',
    name: 'projects',
    component: () => import('./pages/ProjectsPage.vue'),
    meta: { titleKey: 'projects.title' },
  },
  {
    path: '/:locale/services',
    name: 'services',
    component: () => import('./pages/ServicesPage.vue'),
    meta: { titleKey: 'services.meta_title', descriptionKey: 'services.meta_description' },
  },
  {
    path: '/:locale/watch-faces',
    name: 'watch-faces',
    component: () => import('./pages/WatchFacesPage.vue'),
    meta: { titleKey: 'watchfaces.title', descriptionKey: 'watchfaces.meta_description' },
  },
  {
    path: '/:locale/tools',
    name: 'tools',
    component: () => import('./pages/ToolsPage.vue'),
    meta: { titleKey: 'tools.title', descriptionKey: 'tools.meta_description' },
  },
  {
    path: '/:locale/qr-code-to-phone/privacy-policy',
    name: 'qr-code-to-phone-privacy',
    component: () => import('./pages/extensions/QrCodeToPhonePrivacyPage.vue'),
    meta: { titleKey: 'qrCodeToPhone.privacy.title', app: 'qr-code-to-phone' },
  },
  // App-specific routes
  {
    path: '/:locale/denglisch/privacy-policy',
    name: 'denglisch-privacy',
    component: () => import('./pages/apps/denglisch/DenglischPrivacyPage.vue'),
    meta: { titleKey: 'denglisch.privacy.title', app: 'denglisch' },
  },
  {
    path: '/:locale/charging-speed/privacy-policy',
    name: 'charging-speed-privacy',
    component: () => import('./pages/apps/charging-speed/ChargingSpeedPrivacyPage.vue'),
    meta: { titleKey: 'chargingSpeed.privacy.title', app: 'charging-speed' },
  },
  {
    path: '/:locale/survival-guide/privacy-policy',
    name: 'survival-guide-privacy',
    component: () => import('./pages/apps/survival-guide/SurvivalGuidePrivacyPage.vue'),
    meta: { titleKey: 'survivalGuide.privacy.title', app: 'survival-guide' },
  },
  {
    path: '/:locale/crochet-row-counter/privacy-policy',
    name: 'crochet-row-counter-privacy',
    component: () => import('./pages/apps/crochet-row-counter/CrochetRowCounterPrivacyPage.vue'),
    meta: { titleKey: 'crochetRowCounter.privacy.title', app: 'crochet-row-counter' },
  },
  {
    path: '/:locale/vocal-range-test/privacy-policy',
    name: 'vocal-range-test-privacy',
    component: () => import('./pages/apps/vocal-range-test/VocalRangeTestPrivacyPage.vue'),
    meta: { titleKey: 'vocalRangeTest.privacy.title', app: 'vocal-range-test' },
  },
  {
    path: '/:locale/recorder-fingering/privacy-policy',
    name: 'recorder-fingering-privacy',
    component: () => import('./pages/apps/recorder-fingering/RecorderFingeringPrivacyPage.vue'),
    meta: { titleKey: 'recorderFingering.privacy.title', app: 'recorder-fingering' },
  },
  {
    path: '/:locale/cube-solver-3d/privacy-policy',
    name: 'cube-solver-3d-privacy',
    component: () => import('./pages/apps/cube-solver-3d/CubeSolver3dPrivacyPage.vue'),
    meta: { titleKey: 'cubeSolver3d.privacy.title', app: 'cube-solver-3d' },
  },
  {
    path: '/:locale/kpop-dance-3d/privacy-policy',
    name: 'kpop-dance-3d-privacy',
    component: () => import('./pages/apps/kpop-dance-3d/KpopDance3dPrivacyPage.vue'),
    meta: { titleKey: 'kpopDance3d.privacy.title', app: 'kpop-dance-3d' },
  },
  {
    path: '/:locale/kalimba-tuner/privacy-policy',
    name: 'kalimba-tuner-privacy',
    component: () => import('./pages/apps/kalimba-tuner/KalimbaTunerPrivacyPage.vue'),
    meta: { titleKey: 'kalimbaTuner.privacy.title', app: 'kalimba-tuner' },
  },
  {
    path: '/:locale/ballet-beginners/privacy-policy',
    name: 'ballet-beginners-privacy',
    component: () => import('./pages/apps/ballet-beginners/BalletBeginnersPrivacyPage.vue'),
    meta: { titleKey: 'balletBeginners.privacy.title', app: 'ballet-beginners' },
  },
  {
    path: '/:locale/kings-corner/privacy-policy',
    name: 'kings-corner-privacy',
    component: () => import('./pages/apps/kings-corner/KingsCornerPrivacyPage.vue'),
    meta: { titleKey: 'kingsCorner.privacy.title', app: 'kings-corner' },
  },
  {
    path: '/:locale/line-dance/privacy-policy',
    name: 'line-dance-privacy',
    component: () => import('./pages/apps/line-dance/LineDancePrivacyPage.vue'),
    meta: { titleKey: 'lineDance.privacy.title', app: 'line-dance' },
  },
  {
    path: '/:locale/tile-calculator/privacy-policy',
    name: 'tile-calculator-privacy',
    component: () => import('./pages/apps/tile-calculator/TileCalculatorPrivacyPage.vue'),
    meta: { titleKey: 'tileCalculator.privacy.title', app: 'tile-calculator' },
  },
  {
    path: '/:locale/mexican-train/privacy-policy',
    name: 'mexican-train-privacy',
    component: () => import('./pages/apps/mexican-train/MexicanTrainPrivacyPage.vue'),
    meta: { titleKey: 'mexicanTrain.privacy.title', app: 'mexican-train' },
  },
  {
    path: '/:locale/bluetooth-finder/privacy-policy',
    name: 'bluetooth-finder-privacy',
    component: () => import('./pages/apps/bluetooth-finder/BluetoothFinderPrivacyPage.vue'),
    meta: { titleKey: 'bluetoothFinder.privacy.title', app: 'bluetooth-finder' },
  },
  {
    path: '/:locale/chicken-egg-tracker/privacy-policy',
    name: 'chicken-egg-tracker-privacy',
    component: () => import('./pages/apps/chicken-egg-tracker/ChickenEggTrackerPrivacyPage.vue'),
    meta: { titleKey: 'chickenEggTracker.privacy.title', app: 'chicken-egg-tracker' },
  },
  {
    path: '/:locale/pickleball-scorekeeper/privacy-policy',
    name: 'pickleball-scorekeeper-privacy',
    component: () =>
      import('./pages/apps/pickleball-scorekeeper/PickleballScorekeeperPrivacyPage.vue'),
    meta: { titleKey: 'pickleballScorekeeper.privacy.title', app: 'pickleball-scorekeeper' },
  },
  {
    path: '/:locale/cat-jam/privacy-policy',
    name: 'cat-jam-privacy',
    component: () => import('./pages/apps/cat-jam/CatJamPrivacyPage.vue'),
    meta: { titleKey: 'catJam.privacy.title', app: 'cat-jam' },
  },
  {
    path: '/:locale/rabbit-care/privacy-policy',
    name: 'rabbit-care-privacy',
    component: () => import('./pages/apps/rabbit-care/RabbitCarePrivacyPage.vue'),
    meta: { titleKey: 'rabbitCare.privacy.title', app: 'rabbit-care' },
  },
  {
    path: '/:locale/lofi-generator/privacy-policy',
    name: 'lofi-generator-privacy',
    component: () => import('./pages/apps/lofi-generator/LofiGeneratorPrivacyPage.vue'),
    meta: { titleKey: 'lofiGenerator.privacy.title', app: 'lofi-generator' },
  },
  {
    path: '/:locale/biblia-almeida/privacy-policy',
    name: 'biblia-almeida-privacy',
    component: () => import('./pages/apps/biblia-almeida/BibliaAlmeidaPrivacyPage.vue'),
    meta: { titleKey: 'bibliaAlmeida.privacy.title', app: 'biblia-almeida' },
  },
  {
    path: '/:locale/guitar-tuner/privacy-policy',
    name: 'guitar-tuner-privacy',
    component: () => import('./pages/apps/guitar-tuner/GuitarTunerPrivacyPage.vue'),
    meta: { titleKey: 'guitarTuner.privacy.title', app: 'guitar-tuner' },
  },
  {
    path: '/:locale/kpop-piano/privacy-policy',
    name: 'kpop-piano-privacy',
    component: () => import('./pages/apps/kpop-piano/KpopPianoPrivacyPage.vue'),
    meta: { titleKey: 'kpopPiano.privacy.title', app: 'kpop-piano' },
  },
  {
    path: '/:locale/biblia-reina-valera/privacy-policy',
    name: 'biblia-reina-valera-privacy',
    component: () => import('./pages/apps/biblia-reina-valera/BibliaReinaValeraPrivacyPage.vue'),
    meta: { titleKey: 'bibliaReinaValera.privacy.title', app: 'biblia-reina-valera' },
  },
  {
    path: '/:locale/learn-excel-offline/privacy-policy',
    name: 'learn-excel-offline-privacy',
    component: () => import('./pages/apps/learn-excel-offline/LearnExcelOfflinePrivacyPage.vue'),
    meta: { titleKey: 'learnExcelOffline.privacy.title', app: 'learn-excel-offline' },
  },
  {
    path: '/:locale/cat-training-care/privacy-policy',
    name: 'cat-training-care-privacy',
    component: () => import('./pages/apps/cat-training-care/CatTrainingCarePrivacyPage.vue'),
    meta: { titleKey: 'catTrainingCare.privacy.title', app: 'cat-training-care' },
  },
  {
    path: '/:locale/braille-alphabet/privacy-policy',
    name: 'braille-alphabet-privacy',
    component: () => import('./pages/apps/braille-alphabet/BrailleAlphabetPrivacyPage.vue'),
    meta: { titleKey: 'brailleAlphabet.privacy.title', app: 'braille-alphabet' },
  },
  {
    path: '/:locale/morse-code/privacy-policy',
    name: 'morse-code-privacy',
    component: () => import('./pages/apps/morse-code/MorseCodePrivacyPage.vue'),
    meta: { titleKey: 'morseCode.privacy.title', app: 'morse-code' },
  },
  {
    path: '/:locale/pool-chemistry/privacy-policy',
    name: 'pool-chemistry-privacy',
    component: () => import('./pages/apps/pool-chemistry/PoolChemistryPrivacyPage.vue'),
    meta: { titleKey: 'poolChemistry.privacy.title', app: 'pool-chemistry' },
  },
  {
    path: '/:locale/five-tibetan-rites/privacy-policy',
    name: 'five-tibetan-rites-privacy',
    component: () => import('./pages/apps/five-tibetan-rites/FiveTibetanRitesPrivacyPage.vue'),
    meta: { titleKey: 'fiveTibetanRites.privacy.title', app: 'five-tibetan-rites' },
  },
  {
    path: '/:locale/financial-calculators/privacy-policy',
    name: 'financial-calculators-privacy',
    component: () =>
      import('./pages/apps/financial-calculators/FinancialCalculatorsPrivacyPage.vue'),
    meta: { titleKey: 'financialCalculators.privacy.title', app: 'financial-calculators' },
  },
  {
    path: '/:locale/hvac-calculator/privacy-policy',
    name: 'hvac-calculator-privacy',
    component: () => import('./pages/apps/hvac-calculator/HvacCalculatorPrivacyPage.vue'),
    meta: { titleKey: 'hvacCalculator.privacy.title', app: 'hvac-calculator' },
  },
  {
    path: '/:locale/slavic-mythology/privacy-policy',
    name: 'slavic-mythology-privacy',
    component: () => import('./pages/apps/slavic-mythology/SlavicMythologyPrivacyPage.vue'),
    meta: { titleKey: 'slavicMythology.privacy.title', app: 'slavic-mythology' },
  },
  {
    path: '/:locale/angel-numbers/privacy-policy',
    name: 'angel-numbers-privacy',
    component: () => import('./pages/apps/angel-numbers/AngelNumbersPrivacyPage.vue'),
    meta: { titleKey: 'angelNumbers.privacy.title', app: 'angel-numbers' },
  },
  {
    path: '/:locale/antysurzhyk/privacy-policy',
    name: 'antysurzhyk-privacy',
    component: () => import('./pages/apps/antysurzhyk/AntysurzhykPrivacyPage.vue'),
    meta: { titleKey: 'antysurzhyk.privacy.title', app: 'antysurzhyk' },
  },
  {
    path: '/:locale/parrot-training/privacy-policy',
    name: 'parrot-training-privacy',
    component: () => import('./pages/apps/parrot-training/ParrotTrainingPrivacyPage.vue'),
    meta: { titleKey: 'parrotTraining.privacy.title', app: 'parrot-training' },
  },
  {
    path: '/:locale/lux-meter/privacy-policy',
    name: 'lux-meter-privacy',
    component: () => import('./pages/apps/lux-meter/LuxMeterPrivacyPage.vue'),
    meta: { titleKey: 'luxMeter.privacy.title', app: 'lux-meter' },
  },
  {
    path: '/:locale/hair-care-routine/privacy-policy',
    name: 'hair-care-routine-privacy',
    component: () => import('./pages/apps/hair-care-routine/HairCareRoutinePrivacyPage.vue'),
    meta: { titleKey: 'hairCareRoutine.privacy.title', app: 'hair-care-routine' },
  },
  {
    path: '/:locale/molemap/privacy-policy',
    name: 'molemap-privacy',
    component: () => import('./pages/apps/molemap/MoleMapPrivacyPage.vue'),
    meta: { titleKey: 'molemap.privacy.title', app: 'molemap' },
  },
  {
    path: '/:locale/molemap/disclaimer',
    name: 'molemap-disclaimer',
    component: () => import('./pages/apps/molemap/MoleMapDisclaimerPage.vue'),
    meta: { titleKey: 'molemap.disclaimer.title', app: 'molemap' },
  },
  {
    path: '/:locale/health-calculator/privacy-policy',
    name: 'health-calculator-privacy',
    component: () => import('./pages/apps/health-calculator/HealthCalculatorPrivacyPage.vue'),
    meta: { titleKey: 'healthCalculator.privacy.title', app: 'health-calculator' },
  },
  {
    path: '/:locale/health-calculator/disclaimer',
    name: 'health-calculator-disclaimer',
    component: () => import('./pages/apps/health-calculator/HealthCalculatorDisclaimerPage.vue'),
    meta: { titleKey: 'healthCalculator.disclaimer.title', app: 'health-calculator' },
  },
  {
    path: '/:locale/markdown-reader/privacy-policy',
    name: 'markdown-reader-privacy',
    component: () => import('./pages/apps/markdown-reader/MarkdownReaderPrivacyPage.vue'),
    meta: { titleKey: 'markdownReader.privacy.title', app: 'markdown-reader' },
  },
  {
    path: '/:locale/wire-size-calc/privacy-policy',
    name: 'wire-size-calc-privacy',
    component: () => import('./pages/apps/wire-size-calc/WireSizeCalcPrivacyPage.vue'),
    meta: {
      titleKey: 'wireSizeCalc.privacy.title',
      app: 'wire-size-calc',
    },
  },
  {
    path: '/:locale/tire-size-calculator/privacy-policy',
    name: 'tire-size-calculator-privacy',
    component: () => import('./pages/apps/tire-size-calculator/TireSizeCalculatorPrivacyPage.vue'),
    meta: {
      titleKey: 'tireSizeDecoder.privacy.title',
      app: 'tire-size-calculator',
    },
  },
  {
    path: '/:locale/truck-fault-codes/privacy-policy',
    name: 'truck-fault-codes-privacy',
    component: () => import('./pages/apps/truck-fault-codes/TruckFaultCodesPrivacyPage.vue'),
    meta: {
      titleKey: 'truckFaultCodes.privacy.title',
      app: 'truck-fault-codes',
    },
  },
  {
    path: '/:locale/runes/privacy-policy',
    name: 'runes-privacy',
    component: () => import('./pages/apps/runes/RunesPrivacyPage.vue'),
    meta: { titleKey: 'runes.privacy.title', app: 'runes' },
  },
  {
    path: '/:locale/taro/privacy-policy',
    name: 'taro-privacy',
    component: () => import('./pages/apps/taro/TaroPrivacyPage.vue'),
    meta: { titleKey: 'taro.privacy.title', app: 'taro' },
  },
  {
    path: '/:locale/starguide/privacy-policy',
    name: 'starguide-privacy',
    component: () => import('./pages/apps/starguide/StarGuidePrivacyPage.vue'),
    meta: { titleKey: 'starguide.privacy.title', app: 'starguide' },
  },
  {
    path: '/:locale/senso/privacy-policy',
    name: 'senso-privacy',
    component: () => import('./pages/apps/senso/SensoPrivacyPage.vue'),
    meta: { titleKey: 'senso.privacy.title', app: 'senso' },
  },
  {
    path: '/:locale/movogra/privacy-policy',
    name: 'movogra-privacy',
    component: () => import('./pages/apps/movogra/MovograPrivacyPage.vue'),
    meta: { titleKey: 'movogra.privacy.title', app: 'movogra' },
  },
  {
    path: '/:locale/ytaudit/privacy-policy',
    name: 'ytaudit-privacy',
    component: () => import('./pages/apps/ytaudit/YtAuditPrivacyPage.vue'),
    meta: { titleKey: 'ytaudit.privacy.title', app: 'ytaudit' },
  },
  {
    path: '/:locale/proverb/privacy-policy',
    name: 'proverb-privacy',
    component: () => import('./pages/apps/proverb/ProverbPrivacyPage.vue'),
    meta: { titleKey: 'proverb.privacy.title', app: 'proverb' },
  },
  {
    path: '/:locale/alias/privacy-policy',
    name: 'alias-privacy',
    component: () => import('./pages/apps/alias/AliasPrivacyPage.vue'),
    meta: { titleKey: 'alias.privacy.title', app: 'alias' },
  },
  {
    path: '/:locale/auto-obd2/privacy-policy',
    name: 'auto-obd2-privacy',
    component: () => import('./pages/apps/auto-obd2/AutoObd2PrivacyPage.vue'),
    meta: { titleKey: 'autoObd2.privacy.title', app: 'auto-obd2' },
  },
  {
    path: '/:locale/hueroom/privacy-policy',
    name: 'hueroom-privacy',
    component: () => import('./pages/apps/hueroom/HueRoomPrivacyPage.vue'),
    meta: { titleKey: 'hueroom.privacy.title', app: 'hueroom' },
  },
  {
    path: '/:locale/sudokulens/privacy-policy',
    name: 'sudokulens-privacy',
    component: () => import('./pages/apps/sudokulens/SudokuLensPrivacyPage.vue'),
    meta: { titleKey: 'sudokulens.privacy.title', app: 'sudokulens' },
  },
  {
    path: '/:locale/chromatic/privacy-policy',
    name: 'chromatic-privacy',
    component: () => import('./pages/apps/chromatic/ChromaticPrivacyPage.vue'),
    meta: { titleKey: 'chromatic.privacy.title', app: 'chromatic' },
  },
  {
    path: '/:locale/minesweeper/privacy-policy',
    name: 'minesweeper-privacy',
    component: () => import('./pages/apps/minesweeper/MinesweeperPrivacyPage.vue'),
    meta: { titleKey: 'minesweeper.privacy.title', app: 'minesweeper' },
  },
  {
    path: '/:locale/zodiac-compatibility/privacy-policy',
    name: 'zodiac-compatibility-privacy',
    component: () => import('./pages/apps/zodiac-compatibility/ZodiacCompatibilityPrivacyPage.vue'),
    meta: { titleKey: 'zodiacCompatibility.privacy.title', app: 'zodiac-compatibility' },
  },
  {
    path: '/:locale/zodiac-compatibility/disclaimer',
    name: 'zodiac-compatibility-disclaimer',
    component: () =>
      import('./pages/apps/zodiac-compatibility/ZodiacCompatibilityDisclaimerPage.vue'),
    meta: { titleKey: 'zodiacCompatibility.disclaimer.title', app: 'zodiac-compatibility' },
  },
  {
    path: '/:locale/concrete-calculator/privacy-policy',
    name: 'concrete-calculator-privacy',
    component: () => import('./pages/apps/concrete-calculator/ConcreteCalculatorPrivacyPage.vue'),
    meta: { titleKey: 'concreteCalculator.privacy.title', app: 'concrete-calculator' },
  },
  {
    path: '/:locale/landscaping-calculator/privacy-policy',
    name: 'landscaping-calculator-privacy',
    component: () =>
      import('./pages/apps/landscaping-calculator/LandscapingCalculatorPrivacyPage.vue'),
    meta: { titleKey: 'landscapingCalculator.privacy.title', app: 'landscaping-calculator' },
  },
  {
    path: '/:locale/gravel-calculator/privacy-policy',
    name: 'gravel-calculator-privacy',
    component: () => import('./pages/apps/gravel-calculator/GravelCalculatorPrivacyPage.vue'),
    meta: { titleKey: 'gravelCalculator.privacy.title', app: 'gravel-calculator' },
  },
  {
    path: '/:locale/kpop-dance-lessons/privacy-policy',
    name: 'kpop-dance-lessons-privacy',
    component: () => import('./pages/apps/kpop-dance-lessons/KpopDanceLessonsPrivacyPage.vue'),
    meta: { titleKey: 'kpopDanceLessons.privacy.title', app: 'kpop-dance-lessons' },
  },
  {
    path: '/:locale/resistor-color-code/privacy-policy',
    name: 'resistor-color-code-privacy',
    component: () => import('./pages/apps/resistor-color-code/ResistorColorCodePrivacyPage.vue'),
    meta: { titleKey: 'resistorColorCode.privacy.title', app: 'resistor-color-code' },
  },
  {
    path: '/:locale/ohms-law-calculator/privacy-policy',
    name: 'ohms-law-calculator-privacy',
    component: () => import('./pages/apps/ohms-law-calculator/OhmsLawCalculatorPrivacyPage.vue'),
    meta: { titleKey: 'ohmsLawCalculator.privacy.title', app: 'ohms-law-calculator' },
  },
  {
    path: '/:locale/block-brick-calculator/privacy-policy',
    name: 'block-brick-calculator-privacy',
    component: () =>
      import('./pages/apps/block-brick-calculator/BlockBrickCalculatorPrivacyPage.vue'),
    meta: { titleKey: 'blockBrickCalculator.privacy.title', app: 'block-brick-calculator' },
  },
  {
    path: '/:locale/dog-training-cards/privacy-policy',
    name: 'dog-training-cards-privacy',
    component: () => import('./pages/apps/dog-training-cards/DogTrainingCardsPrivacyPage.vue'),
    meta: { titleKey: 'dogTraining.privacy.title', app: 'dog-training-cards' },
  },
  {
    path: '/:locale/cat-training-behavior/privacy-policy',
    name: 'cat-training-behavior-privacy',
    component: () =>
      import('./pages/apps/cat-training-behavior/CatTrainingBehaviorPrivacyPage.vue'),
    meta: { titleKey: 'catTraining.privacy.title', app: 'cat-training-behavior' },
  },
  {
    path: '/:locale/human-tetris/privacy-policy',
    name: 'human-tetris-privacy',
    component: () => import('./pages/apps/human-tetris/HumanTetrisPrivacyPage.vue'),
    meta: { titleKey: 'humanTetris.privacy.title', app: 'human-tetris' },
  },
  {
    path: '/lux-meter/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/lux-meter/privacy-policy`,
  },
  {
    path: '/hair-care-routine/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/hair-care-routine/privacy-policy`,
  },
  {
    path: '/markdown-reader/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/markdown-reader/privacy-policy`,
  },
  {
    path: '/molemap/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/molemap/privacy-policy`,
  },
  {
    path: '/molemap/disclaimer',
    redirect: () => `/${i18n.global.locale.value}/molemap/disclaimer`,
  },
  {
    path: '/concrete-calculator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/concrete-calculator/privacy-policy`,
  },
  {
    path: '/landscaping-calculator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/landscaping-calculator/privacy-policy`,
  },
  {
    path: '/gravel-calculator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/gravel-calculator/privacy-policy`,
  },
  {
    path: '/kpop-dance-lessons/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/kpop-dance-lessons/privacy-policy`,
  },
  {
    path: '/resistor-color-code/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/resistor-color-code/privacy-policy`,
  },
  {
    path: '/ohms-law-calculator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/ohms-law-calculator/privacy-policy`,
  },
  {
    path: '/block-brick-calculator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/block-brick-calculator/privacy-policy`,
  },
  {
    path: '/dog-training-cards/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/dog-training-cards/privacy-policy`,
  },
  {
    path: '/cat-training-behavior/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/cat-training-behavior/privacy-policy`,
  },
  {
    path: '/health-calculator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/health-calculator/privacy-policy`,
  },
  {
    path: '/health-calculator/disclaimer',
    redirect: () => `/${i18n.global.locale.value}/health-calculator/disclaimer`,
  },
  {
    path: '/human-tetris/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/human-tetris/privacy-policy`,
  },
  { path: '/', redirect: () => `/${i18n.global.locale.value}` },
  { path: '/privacy', redirect: () => `/${i18n.global.locale.value}/privacy` },
  { path: '/projects', redirect: () => `/${i18n.global.locale.value}/projects` },
  { path: '/services', redirect: () => `/${i18n.global.locale.value}/services` },
  {
    path: '/kalimba-tuner/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/kalimba-tuner/privacy-policy`,
  },
  {
    path: '/kalimba_tuner/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/kalimba-tuner/privacy-policy`,
  },
  {
    path: '/kalimba_tuner/terms-of-use',
    redirect: () => `/${i18n.global.locale.value}/kalimba-tuner/terms-of-use`,
  },
  {
    path: '/kalimba-tuner/privacy',
    redirect: () => `/${i18n.global.locale.value}/kalimba-tuner/privacy-policy`,
  },
  {
    path: '/kalimba_tuner/privacy',
    redirect: () => `/${i18n.global.locale.value}/kalimba-tuner/privacy-policy`,
  },
  {
    path: '/kalimba_tuner/terms',
    redirect: () => `/${i18n.global.locale.value}/kalimba-tuner/terms-of-use`,
  },
  {
    path: '/kings-corner/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/kings-corner/privacy-policy`,
  },
  {
    path: '/kings-corner/privacy',
    redirect: () => `/${i18n.global.locale.value}/kings-corner/privacy-policy`,
  },
  {
    path: '/denglisch/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/denglisch/privacy-policy`,
  },
  {
    path: '/denglisch/privacy',
    redirect: () => `/${i18n.global.locale.value}/denglisch/privacy-policy`,
  },
  {
    path: '/charging-speed/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/charging-speed/privacy-policy`,
  },
  {
    path: '/charging-speed/privacy',
    redirect: () => `/${i18n.global.locale.value}/charging-speed/privacy-policy`,
  },
  {
    path: '/survival-guide/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/survival-guide/privacy-policy`,
  },
  {
    path: '/survival-guide/privacy',
    redirect: () => `/${i18n.global.locale.value}/survival-guide/privacy-policy`,
  },
  {
    path: '/survival_guide/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/survival-guide/privacy-policy`,
  },
  {
    path: '/survival_guide/terms-of-use',
    redirect: () => `/${i18n.global.locale.value}/survival-guide/terms-of-use`,
  },
  {
    path: '/survival_guide/privacy',
    redirect: () => `/${i18n.global.locale.value}/survival-guide/privacy-policy`,
  },
  {
    path: '/survival_guide/terms',
    redirect: () => `/${i18n.global.locale.value}/survival-guide/terms-of-use`,
  },
  {
    path: '/crochet-row-counter/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/crochet-row-counter/privacy-policy`,
  },
  {
    path: '/crochet-row-counter/privacy',
    redirect: () => `/${i18n.global.locale.value}/crochet-row-counter/privacy-policy`,
  },
  {
    path: '/crochet_row_counter/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/crochet-row-counter/privacy-policy`,
  },
  {
    path: '/crochet_row_counter/terms-of-use',
    redirect: () => `/${i18n.global.locale.value}/crochet-row-counter/terms-of-use`,
  },
  {
    path: '/crochet_row_counter/privacy',
    redirect: () => `/${i18n.global.locale.value}/crochet-row-counter/privacy-policy`,
  },
  {
    path: '/crochet_row_counter/terms',
    redirect: () => `/${i18n.global.locale.value}/crochet-row-counter/terms-of-use`,
  },
  {
    path: '/row-counter/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/crochet-row-counter/privacy-policy`,
  },
  {
    path: '/row-counter/terms-of-use',
    redirect: () => `/${i18n.global.locale.value}/crochet-row-counter/terms-of-use`,
  },
  {
    path: '/row-counter/privacy',
    redirect: () => `/${i18n.global.locale.value}/crochet-row-counter/privacy-policy`,
  },
  {
    path: '/row-counter/terms',
    redirect: () => `/${i18n.global.locale.value}/crochet-row-counter/terms-of-use`,
  },
  {
    path: '/vocal-range-test/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/vocal-range-test/privacy-policy`,
  },
  {
    path: '/vocal-range-test/privacy',
    redirect: () => `/${i18n.global.locale.value}/vocal-range-test/privacy-policy`,
  },
  {
    path: '/vocal_range_test/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/vocal-range-test/privacy-policy`,
  },
  {
    path: '/vocal_range_test/terms-of-use',
    redirect: () => `/${i18n.global.locale.value}/vocal-range-test/terms-of-use`,
  },
  {
    path: '/vocal_range_test/privacy',
    redirect: () => `/${i18n.global.locale.value}/vocal-range-test/privacy-policy`,
  },
  {
    path: '/vocal_range_test/terms',
    redirect: () => `/${i18n.global.locale.value}/vocal-range-test/terms-of-use`,
  },
  {
    path: '/recorder-fingering/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/recorder-fingering/privacy-policy`,
  },
  {
    path: '/recorder-fingering/privacy',
    redirect: () => `/${i18n.global.locale.value}/recorder-fingering/privacy-policy`,
  },
  {
    path: '/recorder_fingering/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/recorder-fingering/privacy-policy`,
  },
  {
    path: '/recorder_fingering/terms-of-use',
    redirect: () => `/${i18n.global.locale.value}/recorder-fingering/terms-of-use`,
  },
  {
    path: '/recorder_fingering/privacy',
    redirect: () => `/${i18n.global.locale.value}/recorder-fingering/privacy-policy`,
  },
  {
    path: '/recorder_fingering/terms',
    redirect: () => `/${i18n.global.locale.value}/recorder-fingering/terms-of-use`,
  },
  {
    path: '/cube-solver-3d/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/cube-solver-3d/privacy-policy`,
  },
  {
    path: '/cube_solver_3d/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/cube-solver-3d/privacy-policy`,
  },
  {
    path: '/cube_solver_3d/terms-of-use',
    redirect: () => `/${i18n.global.locale.value}/cube-solver-3d/terms-of-use`,
  },
  {
    path: '/cube-solver-3d/privacy',
    redirect: () => `/${i18n.global.locale.value}/cube-solver-3d/privacy-policy`,
  },
  {
    path: '/cube_solver_3d/privacy',
    redirect: () => `/${i18n.global.locale.value}/cube-solver-3d/privacy-policy`,
  },
  {
    path: '/cube_solver_3d/terms',
    redirect: () => `/${i18n.global.locale.value}/cube-solver-3d/terms-of-use`,
  },
  {
    path: '/kpop-dance-3d/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/kpop-dance-3d/privacy-policy`,
  },
  {
    path: '/ballet-beginners/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/ballet-beginners/privacy-policy`,
  },
  {
    path: '/line-dance/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/line-dance/privacy-policy`,
  },
  {
    path: '/tile-calculator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/tile-calculator/privacy-policy`,
  },
  {
    path: '/mexican-train/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/mexican-train/privacy-policy`,
  },
  {
    path: '/bluetooth-finder/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/bluetooth-finder/privacy-policy`,
  },
  {
    path: '/chicken-egg-tracker/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/chicken-egg-tracker/privacy-policy`,
  },
  {
    path: '/pickleball-scorekeeper/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/pickleball-scorekeeper/privacy-policy`,
  },
  {
    path: '/cat-jam/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/cat-jam/privacy-policy`,
  },
  {
    path: '/rabbit-care/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/rabbit-care/privacy-policy`,
  },
  {
    path: '/guitar-tuner/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/guitar-tuner/privacy-policy`,
  },
  {
    path: '/kpop-piano/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/kpop-piano/privacy-policy`,
  },
  {
    path: '/lofi-generator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/lofi-generator/privacy-policy`,
  },
  {
    path: '/biblia-almeida/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/biblia-almeida/privacy-policy`,
  },
  {
    path: '/biblia-reina-valera/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/biblia-reina-valera/privacy-policy`,
  },
  {
    path: '/learn-excel-offline/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/learn-excel-offline/privacy-policy`,
  },
  {
    path: '/cat-training-care/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/cat-training-care/privacy-policy`,
  },
  { path: '/tools', redirect: () => `/${i18n.global.locale.value}/tools` },
  {
    path: '/qr-code-to-phone/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/qr-code-to-phone/privacy-policy`,
  },
  {
    path: '/braille-alphabet/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/braille-alphabet/privacy-policy`,
  },
  {
    path: '/morse-code/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/morse-code/privacy-policy`,
  },
  {
    path: '/pool-chemistry/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/pool-chemistry/privacy-policy`,
  },
  {
    path: '/five-tibetan-rites/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/five-tibetan-rites/privacy-policy`,
  },
  {
    path: '/financial-calculators/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/financial-calculators/privacy-policy`,
  },
  {
    path: '/hvac-calculator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/hvac-calculator/privacy-policy`,
  },
  {
    path: '/slavic-mythology/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/slavic-mythology/privacy-policy`,
  },
  {
    path: '/angel-numbers/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/angel-numbers/privacy-policy`,
  },
  {
    path: '/antysurzhyk/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/antysurzhyk/privacy-policy`,
  },
  {
    path: '/parrot-training/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/parrot-training/privacy-policy`,
  },
  {
    path: '/wire-size-calc/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/wire-size-calc/privacy-policy`,
  },
  {
    path: '/tire-size-calculator/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/tire-size-calculator/privacy-policy`,
  },
  {
    path: '/truck-fault-codes/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/truck-fault-codes/privacy-policy`,
  },
  {
    path: '/runes/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/runes/privacy-policy`,
  },
  {
    path: '/taro/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/taro/privacy-policy`,
  },
  {
    path: '/starguide/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/starguide/privacy-policy`,
  },
  {
    path: '/senso/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/senso/privacy-policy`,
  },
  {
    path: '/movogra/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/movogra/privacy-policy`,
  },
  {
    path: '/ytaudit/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/ytaudit/privacy-policy`,
  },
  {
    path: '/proverb/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/proverb/privacy-policy`,
  },
  {
    path: '/alias/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/alias/privacy-policy`,
  },
  {
    path: '/auto-obd2/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/auto-obd2/privacy-policy`,
  },
  {
    path: '/sudokulens/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/sudokulens/privacy-policy`,
  },
  {
    path: '/hueroom/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/hueroom/privacy-policy`,
  },
  {
    path: '/chromatic/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/chromatic/privacy-policy`,
  },
  {
    path: '/minesweeper/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/minesweeper/privacy-policy`,
  },
  {
    path: '/zodiac-compatibility/privacy-policy',
    redirect: () => `/${i18n.global.locale.value}/zodiac-compatibility/privacy-policy`,
  },
  {
    path: '/zodiac-compatibility/disclaimer',
    redirect: () => `/${i18n.global.locale.value}/zodiac-compatibility/disclaimer`,
  },
]

// Terms of Use for every app and watch face, generated from src/data/termsRoutes.js:
// /:locale/<slug>/terms-of-use (universal text, AppTermsPage.vue), plus redirects from the old
// /<slug>/terms, /<slug>/offer and /terms/<slug> URLs (with and without the locale).
for (const slug of termsSlugs()) {
  routes.push({
    path: `/:locale/${termsPath(slug)}`,
    component: () => import('./pages/AppTermsPage.vue'),
    meta: { titleKey: 'appTerms.title', app: slug, terms: true },
  })
  for (const alias of termsAliasPaths(slug)) {
    routes.push({
      path: `/:locale/${alias}`,
      redirect: (to) => `/${to.params.locale}/${termsPath(slug)}`,
    })
  }
  for (const seg of [termsPath(slug), ...termsAliasPaths(slug)]) {
    routes.push({
      path: `/${seg}`,
      redirect: () => `/${i18n.global.locale.value}/${termsPath(slug)}`,
    })
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.beforeEach((to) => {
  const locale = to.params.locale
  if (locale && LOCALES.includes(locale) && i18n.global.locale.value !== locale) {
    i18n.global.locale.value = locale
    localStorage.setItem('locale', locale)
  }
  if (to.params.locale && !LOCALES.includes(to.params.locale)) {
    return `/${i18n.global.locale.value}`
  }
})

router.afterEach((to) => {
  const titleKey = to.meta.titleKey
  if (titleKey) {
    document.title = `${i18n.global.t(titleKey)} — ${SITE_NAME}`
  } else {
    document.title = SITE_NAME
  }

  // Update html lang attribute to match current locale
  document.documentElement.lang = i18n.global.locale.value

  // Update canonical URL to match current page
  const canonical = document.getElementById('canonical')
  if (canonical) {
    canonical.href = `https://zorya-tech-studio.github.io${to.path}`
  }

  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.content = to.meta.descriptionKey
      ? i18n.global.t(to.meta.descriptionKey)
      : DEFAULT_DESCRIPTION
  }
})

export default router
