/**
 * App-specific points from each app's earlier Terms page, shown on the universal Terms page
 * (/:locale/<slug>/terms-of-use) in a section "About <app>". Only points that are specific to the app
 * are listed (what it does, ads, purchases, accuracy, age, data...). Generic clauses (license, warranty,
 * liability, law, changes, contact) are covered by the universal text in appTerms.js and left out.
 *
 * Values are vue-i18n keys in src/i18n/{uk,en}.json, so both languages stay translated.
 * Block: { title?: key, paras?: key[], list?: key[] }
 */
export const APP_TERMS_EXTRAS = {
  denglisch: [
    {
      list: [
        'denglisch.terms.b1',
        'denglisch.terms.b2',
        'denglisch.terms.b3',
        'denglisch.terms.b4',
      ],
    },
  ],
  'charging-speed': [
    {
      list: [
        'chargingSpeed.terms.b1',
        'chargingSpeed.terms.b2',
        'chargingSpeed.terms.b3',
        'chargingSpeed.terms.b4',
        'chargingSpeed.terms.b5',
        'chargingSpeed.terms.b6',
      ],
    },
  ],
  'survival-guide': [
    {
      list: [
        'survivalGuide.terms.b1',
        'survivalGuide.terms.b2',
        'survivalGuide.terms.b3',
        'survivalGuide.terms.b4',
        'survivalGuide.terms.b5',
        'survivalGuide.terms.b6',
      ],
    },
  ],
  'crochet-row-counter': [
    {
      list: [
        'crochetRowCounter.terms.b1',
        'crochetRowCounter.terms.b3',
        'crochetRowCounter.terms.b5',
      ],
    },
  ],
  'vocal-range-test': [
    {
      title: 'vocalRangeTest.terms.app_title',
      paras: ['vocalRangeTest.terms.app_p1'],
      list: [],
    },
    {
      title: 'vocalRangeTest.terms.age_title',
      paras: ['vocalRangeTest.terms.age_p1'],
      list: [],
    },
    {
      title: 'vocalRangeTest.terms.data_title',
      paras: ['vocalRangeTest.terms.data_p1'],
      list: [],
    },
    {
      title: 'vocalRangeTest.terms.content_title',
      paras: ['vocalRangeTest.terms.content_p1'],
      list: [],
    },
    {
      title: 'vocalRangeTest.terms.adsterms_title',
      paras: ['vocalRangeTest.terms.adsterms_p1'],
      list: [],
    },
  ],
  'recorder-fingering': [
    {
      title: 'recorderFingering.terms.app_title',
      paras: ['recorderFingering.terms.app_p1'],
      list: [],
    },
    {
      title: 'recorderFingering.terms.age_title',
      paras: ['recorderFingering.terms.age_p1'],
      list: [],
    },
    {
      title: 'recorderFingering.terms.data_title',
      paras: ['recorderFingering.terms.data_p1'],
      list: [],
    },
    {
      title: 'recorderFingering.terms.content_title',
      paras: ['recorderFingering.terms.content_p1'],
      list: [],
    },
    {
      title: 'recorderFingering.terms.adsterms_title',
      paras: ['recorderFingering.terms.adsterms_p1'],
      list: [],
    },
  ],
  'cube-solver-3d': [
    {
      title: 'cubeSolver3d.terms.app_title',
      paras: ['cubeSolver3d.terms.app_p1'],
      list: [],
    },
    {
      title: 'cubeSolver3d.terms.age_title',
      paras: ['cubeSolver3d.terms.age_p1'],
      list: [],
    },
    {
      title: 'cubeSolver3d.terms.data_title',
      paras: ['cubeSolver3d.terms.data_p1'],
      list: [],
    },
    {
      title: 'cubeSolver3d.terms.content_title',
      paras: ['cubeSolver3d.terms.content_p1'],
      list: [],
    },
    {
      title: 'cubeSolver3d.terms.adsterms_title',
      paras: ['cubeSolver3d.terms.adsterms_p1'],
      list: [],
    },
  ],
  'kpop-dance-3d': [
    {
      title: 'kpopDance3d.terms.app_title',
      paras: ['kpopDance3d.terms.app_p1'],
      list: [],
    },
    {
      title: 'kpopDance3d.terms.safety_title',
      paras: ['kpopDance3d.terms.safety_p1', 'kpopDance3d.terms.safety_p2'],
      list: [],
    },
    {
      title: 'kpopDance3d.terms.age_title',
      paras: ['kpopDance3d.terms.age_p1'],
      list: [],
    },
    {
      title: 'kpopDance3d.terms.data_title',
      paras: ['kpopDance3d.terms.data_p1'],
      list: [],
    },
    {
      title: 'kpopDance3d.terms.content_title',
      paras: ['kpopDance3d.terms.content_p1'],
      list: [],
    },
    {
      title: 'kpopDance3d.terms.adsterms_title',
      paras: ['kpopDance3d.terms.adsterms_p1'],
      list: [],
    },
  ],
  'kalimba-tuner': [
    {
      title: 'kalimbaTuner.terms.s2_title',
      paras: ['kalimbaTuner.terms.s2_p1'],
      list: [],
    },
    {
      title: 'kalimbaTuner.terms.s3_title',
      paras: ['kalimbaTuner.terms.s3_p1'],
      list: [],
    },
    {
      title: 'kalimbaTuner.terms.s4_title',
      paras: ['kalimbaTuner.terms.s4_p1'],
      list: [],
    },
  ],
  'ballet-beginners': [
    {
      title: 'balletBeginners.terms.app_title',
      paras: ['balletBeginners.terms.app_p1'],
      list: [],
    },
    {
      title: 'balletBeginners.terms.safety_title',
      paras: ['balletBeginners.terms.safety_p1', 'balletBeginners.terms.safety_p2'],
      list: [],
    },
    {
      title: 'balletBeginners.terms.age_title',
      paras: ['balletBeginners.terms.age_p1'],
      list: [],
    },
    {
      title: 'balletBeginners.terms.data_title',
      paras: ['balletBeginners.terms.data_p1'],
      list: [],
    },
    {
      title: 'balletBeginners.terms.content_title',
      paras: ['balletBeginners.terms.content_p1'],
      list: [],
    },
    {
      title: 'balletBeginners.terms.adsterms_title',
      paras: ['balletBeginners.terms.adsterms_p1'],
      list: [],
    },
  ],
  'kings-corner': [
    {
      title: 'kingsCorner.terms.s2_title',
      paras: ['kingsCorner.terms.s2_p1'],
      list: [],
    },
    {
      title: 'kingsCorner.terms.s3_title',
      paras: ['kingsCorner.terms.s3_p1'],
      list: [],
    },
    {
      title: 'kingsCorner.terms.s4_title',
      paras: ['kingsCorner.terms.s4_p1'],
      list: [],
    },
  ],
  'line-dance': [
    {
      title: 'lineDance.terms.content_title',
      paras: ['lineDance.terms.content_text'],
      list: [],
    },
    {
      title: 'lineDance.terms.health_title',
      paras: ['lineDance.terms.health_text'],
      list: [],
    },
    {
      title: 'lineDance.terms.ads_title',
      paras: ['lineDance.terms.ads_text'],
      list: [],
    },
    {
      title: 'lineDance.terms.data_title',
      paras: ['lineDance.terms.data_text'],
      list: [],
    },
  ],
  'tile-calculator': [
    {
      title: 'tileCalculator.terms.estimates_title',
      paras: ['tileCalculator.terms.estimates_text'],
      list: [],
    },
    {
      title: 'tileCalculator.terms.academy_title',
      paras: ['tileCalculator.terms.academy_text'],
      list: [],
    },
    {
      title: 'tileCalculator.terms.ads_title',
      paras: ['tileCalculator.terms.ads_text'],
      list: [],
    },
    {
      title: 'tileCalculator.terms.data_title',
      paras: ['tileCalculator.terms.data_text'],
      list: [],
    },
  ],
  'mexican-train': [
    {
      title: 'mexicanTrain.terms.game_title',
      paras: ['mexicanTrain.terms.game_text'],
      list: [],
    },
    {
      title: 'mexicanTrain.terms.ads_title',
      paras: ['mexicanTrain.terms.ads_text'],
      list: [],
    },
    {
      title: 'mexicanTrain.terms.data_title',
      paras: ['mexicanTrain.terms.data_text'],
      list: [],
    },
  ],
  'bluetooth-finder': [
    {
      title: 'bluetoothFinder.terms.finder_title',
      paras: ['bluetoothFinder.terms.finder_text'],
      list: [],
    },
    {
      title: 'bluetoothFinder.terms.heart_title',
      paras: ['bluetoothFinder.terms.heart_text'],
      list: [],
    },
    {
      title: 'bluetoothFinder.terms.trackers_title',
      paras: ['bluetoothFinder.terms.trackers_text'],
      list: [],
    },
    {
      title: 'bluetoothFinder.terms.use_title',
      paras: ['bluetoothFinder.terms.use_text'],
      list: [],
    },
    {
      title: 'bluetoothFinder.terms.ads_title',
      paras: ['bluetoothFinder.terms.ads_text'],
      list: [],
    },
    {
      title: 'bluetoothFinder.terms.data_title',
      paras: ['bluetoothFinder.terms.data_text'],
      list: [],
    },
  ],
  'chicken-egg-tracker': [
    {
      title: 'chickenEggTracker.terms.info_title',
      paras: ['chickenEggTracker.terms.info_text'],
      list: [],
    },
    {
      title: 'chickenEggTracker.terms.results_title',
      paras: ['chickenEggTracker.terms.results_text'],
      list: [],
    },
    {
      title: 'chickenEggTracker.terms.ads_title',
      paras: ['chickenEggTracker.terms.ads_text'],
      list: [],
    },
    {
      title: 'chickenEggTracker.terms.data_title',
      paras: ['chickenEggTracker.terms.data_text'],
      list: [],
    },
  ],
  'pickleball-scorekeeper': [
    {
      title: 'pickleballScorekeeper.terms.rules_title',
      paras: ['pickleballScorekeeper.terms.rules_text'],
      list: [],
    },
    {
      title: 'pickleballScorekeeper.terms.scoring_title',
      paras: ['pickleballScorekeeper.terms.scoring_text'],
      list: [],
    },
    {
      title: 'pickleballScorekeeper.terms.ads_title',
      paras: ['pickleballScorekeeper.terms.ads_text'],
      list: [],
    },
    {
      title: 'pickleballScorekeeper.terms.independence_title',
      paras: ['pickleballScorekeeper.terms.independence_text'],
      list: [],
    },
  ],
  'rabbit-care': [
    {
      title: 'rabbitCare.terms.subject_title',
      paras: ['rabbitCare.terms.subject_text'],
      list: [],
    },
    {
      title: 'rabbitCare.terms.notadvice_title',
      paras: ['rabbitCare.terms.notadvice_text'],
      list: [],
    },
    {
      title: 'rabbitCare.terms.price_title',
      paras: ['rabbitCare.terms.price_text'],
      list: [],
    },
    {
      title: 'rabbitCare.terms.iap_title',
      paras: ['rabbitCare.terms.iap_text'],
      list: [],
    },
  ],
  'lofi-generator': [
    {
      title: 'lofiGenerator.terms.subject_title',
      paras: ['lofiGenerator.terms.subject_text'],
      list: [],
    },
    {
      title: 'lofiGenerator.terms.content_title',
      paras: ['lofiGenerator.terms.content_text'],
      list: [],
    },
    {
      title: 'lofiGenerator.terms.price_title',
      paras: ['lofiGenerator.terms.price_text'],
      list: [],
    },
    {
      title: 'lofiGenerator.terms.rewarded_title',
      paras: ['lofiGenerator.terms.rewarded_text'],
      list: [],
    },
    {
      title: 'lofiGenerator.terms.iap_title',
      paras: ['lofiGenerator.terms.iap_text'],
      list: [],
    },
  ],
  'biblia-almeida': [
    {
      title: 'bibliaAlmeida.terms.subject_title',
      paras: ['bibliaAlmeida.terms.subject_text'],
      list: [],
    },
    {
      title: 'bibliaAlmeida.terms.content_title',
      paras: ['bibliaAlmeida.terms.content_text'],
      list: [],
    },
    {
      title: 'bibliaAlmeida.terms.audio_title',
      paras: ['bibliaAlmeida.terms.audio_text'],
      list: [],
    },
    {
      title: 'bibliaAlmeida.terms.price_title',
      paras: ['bibliaAlmeida.terms.price_text'],
      list: [],
    },
    {
      title: 'bibliaAlmeida.terms.iap_title',
      paras: ['bibliaAlmeida.terms.iap_text'],
      list: [],
    },
  ],
  'guitar-tuner': [
    {
      title: 'guitarTuner.terms.subject_title',
      paras: ['guitarTuner.terms.subject_text'],
      list: [],
    },
    {
      title: 'guitarTuner.terms.content_title',
      paras: ['guitarTuner.terms.content_text'],
      list: [],
    },
    {
      title: 'guitarTuner.terms.audio_title',
      paras: ['guitarTuner.terms.audio_text'],
      list: [],
    },
    {
      title: 'guitarTuner.terms.price_title',
      paras: ['guitarTuner.terms.price_text'],
      list: [],
    },
    {
      title: 'guitarTuner.terms.iap_title',
      paras: ['guitarTuner.terms.iap_text'],
      list: [],
    },
  ],
  'kpop-piano': [
    {
      title: 'kpopPiano.terms.app_title',
      paras: ['kpopPiano.terms.app_text'],
      list: [],
    },
    {
      title: 'kpopPiano.terms.fiction_title',
      paras: ['kpopPiano.terms.fiction_text'],
      list: [],
    },
    {
      title: 'kpopPiano.terms.rewards_title',
      paras: ['kpopPiano.terms.rewards_text'],
      list: [],
    },
    {
      title: 'kpopPiano.terms.availability_title',
      paras: ['kpopPiano.terms.availability_text'],
      list: [],
    },
  ],
  'biblia-reina-valera': [
    {
      title: 'bibliaReinaValera.terms.subject_title',
      paras: ['bibliaReinaValera.terms.subject_text'],
      list: [],
    },
    {
      title: 'bibliaReinaValera.terms.content_title',
      paras: ['bibliaReinaValera.terms.content_text'],
      list: [],
    },
    {
      title: 'bibliaReinaValera.terms.audio_title',
      paras: ['bibliaReinaValera.terms.audio_text'],
      list: [],
    },
    {
      title: 'bibliaReinaValera.terms.price_title',
      paras: ['bibliaReinaValera.terms.price_text'],
      list: [],
    },
    {
      title: 'bibliaReinaValera.terms.iap_title',
      paras: ['bibliaReinaValera.terms.iap_text'],
      list: [],
    },
  ],
  'learn-excel-offline': [
    {
      title: 'learnExcelOffline.terms.subject_title',
      paras: ['learnExcelOffline.terms.subject_text'],
      list: [],
    },
    {
      title: 'learnExcelOffline.terms.educational_title',
      paras: ['learnExcelOffline.terms.educational_text'],
      list: [],
    },
    {
      title: 'learnExcelOffline.terms.engine_title',
      paras: ['learnExcelOffline.terms.engine_text'],
      list: [],
    },
    {
      title: 'learnExcelOffline.terms.trademark_title',
      paras: ['learnExcelOffline.terms.trademark_text'],
      list: [],
    },
    {
      title: 'learnExcelOffline.terms.price_title',
      paras: ['learnExcelOffline.terms.price_text'],
      list: [],
    },
    {
      title: 'learnExcelOffline.terms.iap_title',
      paras: ['learnExcelOffline.terms.iap_text'],
      list: [],
    },
  ],
  'cat-training-care': [
    {
      title: 'catTrainingCare.terms.subject_title',
      paras: ['catTrainingCare.terms.subject_text'],
      list: [],
    },
    {
      title: 'catTrainingCare.terms.notadvice_title',
      paras: ['catTrainingCare.terms.notadvice_text'],
      list: [],
    },
    {
      title: 'catTrainingCare.terms.games_title',
      paras: ['catTrainingCare.terms.games_text'],
      list: [],
    },
    {
      title: 'catTrainingCare.terms.price_title',
      paras: ['catTrainingCare.terms.price_text'],
      list: [],
    },
    {
      title: 'catTrainingCare.terms.iap_title',
      paras: ['catTrainingCare.terms.iap_text'],
      list: [],
    },
  ],
  'braille-alphabet': [
    {
      title: 'brailleAlphabet.terms.subject_title',
      paras: ['brailleAlphabet.terms.subject_text'],
      list: [],
    },
    {
      title: 'brailleAlphabet.terms.notadvice_title',
      paras: ['brailleAlphabet.terms.notadvice_text'],
      list: [],
    },
    {
      title: 'brailleAlphabet.terms.price_title',
      paras: ['brailleAlphabet.terms.price_text'],
      list: [],
    },
    {
      title: 'brailleAlphabet.terms.iap_title',
      paras: ['brailleAlphabet.terms.iap_text'],
      list: [],
    },
  ],
  'morse-code': [
    {
      title: 'morseCode.terms.subject_title',
      paras: ['morseCode.terms.subject_text'],
      list: [],
    },
    {
      title: 'morseCode.terms.notadvice_title',
      paras: ['morseCode.terms.notadvice_text'],
      list: [],
    },
    {
      title: 'morseCode.terms.flash_title',
      paras: ['morseCode.terms.flash_text'],
      list: [],
    },
    {
      title: 'morseCode.terms.price_title',
      paras: ['morseCode.terms.price_text'],
      list: [],
    },
    {
      title: 'morseCode.terms.iap_title',
      paras: ['morseCode.terms.iap_text'],
      list: [],
    },
  ],
  'pool-chemistry': [
    {
      title: 'poolChemistry.terms.subject_title',
      paras: ['poolChemistry.terms.subject_text'],
      list: [],
    },
    {
      title: 'poolChemistry.terms.notadvice_title',
      paras: ['poolChemistry.terms.notadvice_text'],
      list: [],
    },
    {
      title: 'poolChemistry.terms.price_title',
      paras: ['poolChemistry.terms.price_text'],
      list: [],
    },
    {
      title: 'poolChemistry.terms.iap_title',
      paras: ['poolChemistry.terms.iap_text'],
      list: [],
    },
  ],
  'five-tibetan-rites': [
    {
      title: 'fiveTibetanRites.terms.subject_title',
      paras: ['fiveTibetanRites.terms.subject_text'],
      list: [],
    },
    {
      title: 'fiveTibetanRites.terms.notadvice_title',
      paras: ['fiveTibetanRites.terms.notadvice_text'],
      list: [],
    },
    {
      title: 'fiveTibetanRites.terms.origin_title',
      paras: ['fiveTibetanRites.terms.origin_text'],
      list: [],
    },
    {
      title: 'fiveTibetanRites.terms.price_title',
      paras: ['fiveTibetanRites.terms.price_text'],
      list: [],
    },
    {
      title: 'fiveTibetanRites.terms.iap_title',
      paras: ['fiveTibetanRites.terms.iap_text'],
      list: [],
    },
  ],
  'financial-calculators': [
    {
      title: 'financialCalculators.terms.subject_title',
      paras: ['financialCalculators.terms.subject_text'],
      list: [],
    },
    {
      title: 'financialCalculators.terms.notadvice_title',
      paras: ['financialCalculators.terms.notadvice_text'],
      list: [],
    },
    {
      title: 'financialCalculators.terms.price_title',
      paras: ['financialCalculators.terms.price_text'],
      list: [],
    },
    {
      title: 'financialCalculators.terms.iap_title',
      paras: ['financialCalculators.terms.iap_text'],
      list: [],
    },
  ],
  'hvac-calculator': [
    {
      title: 'hvacCalculator.terms.subject_title',
      paras: ['hvacCalculator.terms.subject_text'],
      list: [],
    },
    {
      title: 'hvacCalculator.terms.notadvice_title',
      paras: ['hvacCalculator.terms.notadvice_text'],
      list: [],
    },
    {
      title: 'hvacCalculator.terms.price_title',
      paras: ['hvacCalculator.terms.price_text'],
      list: [],
    },
    {
      title: 'hvacCalculator.terms.iap_title',
      paras: ['hvacCalculator.terms.iap_text'],
      list: [],
    },
  ],
  'slavic-mythology': [
    {
      title: 'slavicMythology.terms.subject_title',
      paras: ['slavicMythology.terms.subject_text'],
      list: [],
    },
    {
      title: 'slavicMythology.terms.disclaimer_title',
      paras: ['slavicMythology.terms.disclaimer_text'],
      list: [],
    },
    {
      title: 'slavicMythology.terms.price_title',
      paras: ['slavicMythology.terms.price_text'],
      list: [],
    },
    {
      title: 'slavicMythology.terms.iap_title',
      paras: ['slavicMythology.terms.iap_text'],
      list: [],
    },
  ],
  'angel-numbers': [
    {
      title: 'angelNumbers.terms.subject_title',
      paras: ['angelNumbers.terms.subject_text'],
      list: [],
    },
    {
      title: 'angelNumbers.terms.disclaimer_title',
      paras: ['angelNumbers.terms.disclaimer_text'],
      list: [],
    },
    {
      title: 'angelNumbers.terms.price_title',
      paras: ['angelNumbers.terms.price_text'],
      list: [],
    },
    {
      title: 'angelNumbers.terms.iap_title',
      paras: ['angelNumbers.terms.iap_text'],
      list: [],
    },
  ],
  antysurzhyk: [
    {
      title: 'antysurzhyk.terms.subject_title',
      paras: ['antysurzhyk.terms.subject_text'],
      list: [],
    },
    {
      title: 'antysurzhyk.terms.disclaimer_title',
      paras: ['antysurzhyk.terms.disclaimer_text'],
      list: [],
    },
    {
      title: 'antysurzhyk.terms.price_title',
      paras: ['antysurzhyk.terms.price_text'],
      list: [],
    },
    {
      title: 'antysurzhyk.terms.iap_title',
      paras: ['antysurzhyk.terms.iap_text'],
      list: [],
    },
  ],
  'parrot-training': [
    {
      title: 'parrotTraining.terms.subject_title',
      paras: ['parrotTraining.terms.subject_text'],
      list: [],
    },
    {
      title: 'parrotTraining.terms.disclaimer_title',
      paras: ['parrotTraining.terms.disclaimer_text'],
      list: [],
    },
    {
      title: 'parrotTraining.terms.price_title',
      paras: ['parrotTraining.terms.price_text'],
      list: [],
    },
  ],
  'wire-size-calc': [
    {
      title: 'wireSizeCalc.terms.subject_title',
      paras: ['wireSizeCalc.terms.subject_text'],
      list: [],
    },
    {
      title: 'wireSizeCalc.terms.notadvice_title',
      paras: ['wireSizeCalc.terms.notadvice_text'],
      list: [],
    },
    {
      title: 'wireSizeCalc.terms.ads_title',
      paras: ['wireSizeCalc.terms.ads_text'],
      list: [],
    },
    {
      title: 'wireSizeCalc.terms.iap_title',
      paras: ['wireSizeCalc.terms.iap_text'],
      list: [],
    },
  ],
  'tire-size-calculator': [
    {
      title: 'tireSizeDecoder.terms.subject_title',
      paras: ['tireSizeDecoder.terms.subject_text'],
      list: [],
    },
    {
      title: 'tireSizeDecoder.terms.notadvice_title',
      paras: ['tireSizeDecoder.terms.notadvice_text'],
      list: [],
    },
    {
      title: 'tireSizeDecoder.terms.ads_title',
      paras: ['tireSizeDecoder.terms.ads_text'],
      list: [],
    },
    {
      title: 'tireSizeDecoder.terms.iap_title',
      paras: ['tireSizeDecoder.terms.iap_text'],
      list: [],
    },
  ],
  'truck-fault-codes': [
    {
      title: 'truckFaultCodes.terms.subject_title',
      paras: ['truckFaultCodes.terms.subject_text'],
      list: [],
    },
    {
      title: 'truckFaultCodes.terms.notascantool_title',
      paras: ['truckFaultCodes.terms.notascantool_text'],
      list: [],
    },
    {
      title: 'truckFaultCodes.terms.ads_title',
      paras: ['truckFaultCodes.terms.ads_text'],
      list: [],
    },
    {
      title: 'truckFaultCodes.terms.iap_title',
      paras: ['truckFaultCodes.terms.iap_text'],
      list: [],
    },
  ],
  runes: [
    {
      title: 'runes.offer.subject_title',
      paras: ['runes.offer.subject_text'],
      list: [],
    },
    {
      title: 'runes.offer.ads_title',
      paras: ['runes.offer.ads_text'],
      list: [],
    },
    {
      title: 'runes.offer.iap_title',
      paras: ['runes.offer.iap_text'],
      list: [],
    },
    {
      title: 'runes.offer.ugc_title',
      paras: ['runes.offer.ugc_text'],
      list: [],
    },
  ],
  'health-calculator': [
    {
      title: 'healthCalculator.terms.what_title',
      paras: ['healthCalculator.terms.what_text'],
      list: [],
    },
    {
      title: 'healthCalculator.terms.medical_title',
      paras: ['healthCalculator.terms.medical_text'],
      list: ['healthCalculator.terms.medical_margins', 'healthCalculator.terms.medical_more'],
    },
    {
      title: 'healthCalculator.terms.age_title',
      paras: ['healthCalculator.terms.age_text'],
      list: [],
    },
    {
      title: 'healthCalculator.terms.accuracy_title',
      paras: ['healthCalculator.terms.accuracy_text'],
      list: [
        'healthCalculator.terms.accuracy_endorsement',
        'healthCalculator.terms.accuracy_corrections',
      ],
    },
    {
      title: 'healthCalculator.terms.responsibility_title',
      paras: ['healthCalculator.terms.responsibility_text'],
      list: [],
    },
    {
      title: 'healthCalculator.terms.ads_title',
      paras: ['healthCalculator.terms.ads_text'],
      list: ['healthCalculator.terms.ads_rewarded', 'healthCalculator.terms.ads_third_party'],
    },
  ],
  minesweeper: [
    {
      title: 'minesweeper.offer.subject_title',
      paras: ['minesweeper.offer.subject_text'],
      list: [],
    },
    {
      title: 'minesweeper.offer.ads_title',
      paras: ['minesweeper.offer.ads_text'],
      list: [],
    },
    {
      title: 'minesweeper.offer.iap_title',
      paras: ['minesweeper.offer.iap_text'],
      list: [],
    },
  ],
  'lux-meter': [
    {
      title: 'luxMeter.terms.subject_title',
      paras: ['luxMeter.terms.subject_text'],
      list: [],
    },
    {
      title: 'luxMeter.terms.accuracy_title',
      paras: ['luxMeter.terms.accuracy_text'],
      list: [],
    },
    {
      title: 'luxMeter.terms.price_title',
      paras: ['luxMeter.terms.price_text'],
      list: [],
    },
  ],
  'hair-care-routine': [
    {
      title: 'hairCareRoutine.offer.subject_title',
      paras: ['hairCareRoutine.offer.subject_text'],
      list: [],
    },
    {
      title: 'hairCareRoutine.offer.health_title',
      paras: ['hairCareRoutine.offer.health_text'],
      list: [],
    },
    {
      title: 'hairCareRoutine.offer.price_title',
      paras: ['hairCareRoutine.offer.price_text'],
      list: [],
    },
  ],
  'landscaping-calculator': [
    {
      title: 'landscapingCalculator.terms.accuracy_title',
      paras: ['landscapingCalculator.terms.accuracy_text'],
      list: [],
    },
    {
      title: 'landscapingCalculator.terms.ads_title',
      paras: ['landscapingCalculator.terms.ads_text'],
      list: [],
    },
  ],
  'kpop-dance-lessons': [
    {
      title: 'kpopDanceLessons.offer.subject_title',
      paras: ['kpopDanceLessons.offer.subject_text'],
      list: [],
    },
    {
      title: 'kpopDanceLessons.offer.independence_title',
      paras: ['kpopDanceLessons.offer.independence_text'],
      list: [],
    },
    {
      title: 'kpopDanceLessons.offer.health_title',
      paras: ['kpopDanceLessons.offer.health_text'],
      list: [],
    },
    {
      title: 'kpopDanceLessons.offer.price_title',
      paras: ['kpopDanceLessons.offer.price_text'],
      list: [],
    },
  ],
  'resistor-color-code': [
    {
      title: 'resistorColorCode.terms.accuracy_title',
      paras: ['resistorColorCode.terms.accuracy_text'],
      list: [],
    },
    {
      title: 'resistorColorCode.terms.safety_title',
      paras: ['resistorColorCode.terms.safety_text'],
      list: [],
    },
    {
      title: 'resistorColorCode.terms.ads_title',
      paras: ['resistorColorCode.terms.ads_text'],
      list: [],
    },
  ],
  'ohms-law-calculator': [
    {
      title: 'ohmsLawCalculator.terms.accuracy_title',
      paras: ['ohmsLawCalculator.terms.accuracy_text'],
      list: [],
    },
    {
      title: 'ohmsLawCalculator.terms.safety_title',
      paras: ['ohmsLawCalculator.terms.safety_text'],
      list: [],
    },
    {
      title: 'ohmsLawCalculator.terms.ads_title',
      paras: ['ohmsLawCalculator.terms.ads_text'],
      list: [],
    },
  ],
  'gravel-calculator': [
    {
      title: 'gravelCalculator.terms.accuracy_title',
      paras: ['gravelCalculator.terms.accuracy_text'],
      list: [],
    },
    {
      title: 'gravelCalculator.terms.ads_title',
      paras: ['gravelCalculator.terms.ads_text'],
      list: [],
    },
  ],
  'concrete-calculator': [
    {
      title: 'concreteCalculator.terms.accuracy_title',
      paras: ['concreteCalculator.terms.accuracy_text'],
      list: [],
    },
    {
      title: 'concreteCalculator.terms.ads_title',
      paras: ['concreteCalculator.terms.ads_text'],
      list: [],
    },
  ],
  'block-brick-calculator': [
    {
      title: 'blockBrickCalculator.terms.accuracy_title',
      paras: ['blockBrickCalculator.terms.accuracy_text'],
      list: [],
    },
    {
      title: 'blockBrickCalculator.terms.ads_title',
      paras: ['blockBrickCalculator.terms.ads_text'],
      list: [],
    },
  ],
  'markdown-reader': [
    {
      title: 'markdownReader.terms.content_title',
      paras: ['markdownReader.terms.content_text'],
      list: [],
    },
    {
      title: 'markdownReader.terms.ads_title',
      paras: ['markdownReader.terms.ads_text'],
      list: [],
    },
  ],
  'zodiac-compatibility': [
    {
      title: 'zodiacCompatibility.offer.subject_title',
      paras: ['zodiacCompatibility.offer.subject_text'],
      list: [],
    },
    {
      title: 'zodiacCompatibility.offer.ads_title',
      paras: ['zodiacCompatibility.offer.ads_text'],
      list: [],
    },
    {
      title: 'zodiacCompatibility.offer.entertainment_title',
      paras: ['zodiacCompatibility.offer.entertainment_text'],
      list: [],
    },
    {
      title: 'zodiacCompatibility.offer.disclaimer_title',
      paras: ['zodiacCompatibility.offer.disclaimer_text'],
      list: [],
    },
  ],
  taro: [
    {
      title: 'taro.offer.subject_title',
      paras: ['taro.offer.subject_text'],
      list: [],
    },
    {
      title: 'taro.offer.ads_title',
      paras: ['taro.offer.ads_text'],
      list: [],
    },
    {
      title: 'taro.offer.iap_title',
      paras: ['taro.offer.iap_text'],
      list: [],
    },
    {
      title: 'taro.offer.ugc_title',
      paras: ['taro.offer.ugc_text'],
      list: [],
    },
  ],
  starguide: [
    {
      title: 'starguide.offer.subject_title',
      paras: ['starguide.offer.subject_text'],
      list: [],
    },
    {
      title: 'starguide.offer.ads_title',
      paras: ['starguide.offer.ads_text'],
      list: [],
    },
    {
      title: 'starguide.offer.accuracy_title',
      paras: ['starguide.offer.accuracy_text'],
      list: [],
    },
  ],
  alias: [
    {
      title: 'alias.offer.subject_title',
      paras: ['alias.offer.subject_text'],
      list: [],
    },
    {
      title: 'alias.offer.ads_title',
      paras: ['alias.offer.ads_text'],
      list: [],
    },
    {
      title: 'alias.offer.iap_title',
      paras: ['alias.offer.iap_text'],
      list: [],
    },
    {
      title: 'alias.offer.ugc_title',
      paras: ['alias.offer.ugc_text'],
      list: [],
    },
  ],
  'auto-obd2': [
    {
      title: 'autoObd2.offer.subject_title',
      paras: ['autoObd2.offer.subject_text'],
      list: [],
    },
    {
      title: 'autoObd2.offer.ads_title',
      paras: ['autoObd2.offer.ads_text'],
      list: [],
    },
    {
      title: 'autoObd2.offer.iap_title',
      paras: ['autoObd2.offer.iap_text'],
      list: [],
    },
    {
      title: 'autoObd2.offer.search_title',
      paras: ['autoObd2.offer.search_text'],
      list: [],
    },
  ],
  ytaudit: [
    {
      title: 'ytaudit.offer.subject_title',
      paras: ['ytaudit.offer.subject_text'],
      list: [],
    },
    {
      title: 'ytaudit.offer.youtube_title',
      paras: ['ytaudit.offer.youtube_text'],
      list: [],
    },
    {
      title: 'ytaudit.offer.ads_title',
      paras: ['ytaudit.offer.ads_text'],
      list: [],
    },
  ],
  chromatic: [
    {
      title: 'chromatic.offer.subject_title',
      paras: ['chromatic.offer.subject_text'],
      list: [],
    },
    {
      title: 'chromatic.offer.ads_title',
      paras: ['chromatic.offer.ads_text'],
      list: [],
    },
    {
      title: 'chromatic.offer.iap_title',
      paras: ['chromatic.offer.iap_text'],
      list: [],
    },
  ],
  hueroom: [
    {
      title: 'hueroom.offer.subject_title',
      paras: ['hueroom.offer.subject_text'],
      list: [],
    },
    {
      title: 'hueroom.offer.ads_title',
      paras: ['hueroom.offer.ads_text'],
      list: [],
    },
    {
      title: 'hueroom.offer.iap_title',
      paras: ['hueroom.offer.iap_text'],
      list: [],
    },
  ],
  'cat-training-behavior': [
    {
      title: 'catTraining.offer.subject_title',
      paras: ['catTraining.offer.subject_text'],
      list: [],
    },
    {
      title: 'catTraining.offer.disclaimer_title',
      paras: ['catTraining.offer.disclaimer_text'],
      list: [],
    },
    {
      title: 'catTraining.offer.price_title',
      paras: ['catTraining.offer.price_text'],
      list: [],
    },
  ],
  'dog-training-cards': [
    {
      title: 'dogTraining.offer.subject_title',
      paras: ['dogTraining.offer.subject_text'],
      list: [],
    },
    {
      title: 'dogTraining.offer.disclaimer_title',
      paras: ['dogTraining.offer.disclaimer_text'],
      list: [],
    },
    {
      title: 'dogTraining.offer.price_title',
      paras: ['dogTraining.offer.price_text'],
      list: [],
    },
  ],
  'human-tetris': [
    {
      title: 'humanTetris.offer.subject_title',
      paras: ['humanTetris.offer.subject_text'],
      list: [],
    },
    {
      title: 'humanTetris.offer.ads_title',
      paras: ['humanTetris.offer.ads_text'],
      list: [],
    },
    {
      title: 'humanTetris.offer.price_title',
      paras: ['humanTetris.offer.price_text'],
      list: [],
    },
    {
      title: 'humanTetris.offer.safety_title',
      paras: ['humanTetris.offer.safety_text'],
      list: [],
    },
  ],
  molemap: [
    {
      title: 'molemap.offer.subject_title',
      paras: ['molemap.offer.subject_text'],
      list: [],
    },
    {
      title: 'molemap.offer.ads_title',
      paras: ['molemap.offer.ads_text'],
      list: [],
    },
    {
      title: 'molemap.offer.entertainment_title',
      paras: ['molemap.offer.entertainment_text'],
      list: [],
    },
    {
      title: 'molemap.offer.medical_title',
      paras: ['molemap.offer.medical_text'],
      list: [],
    },
    {
      title: 'molemap.offer.disclaimer_title',
      paras: ['molemap.offer.disclaimer_text'],
      list: [],
    },
  ],
}
