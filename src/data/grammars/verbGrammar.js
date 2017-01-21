import { grammar } from './nounGrammar'

grammar.verbs = {
  stem : {
    active : {
      present : 'presentStem',
      imperfect : 'presentStem',
      future : 'presentStem',
      perfect : 'perfectStem',
      pluperfect : 'perfectStem',
      futurePerfect : 'perfectStem',
    },
    passive : {
      present : 'presentStem',
      imperfect : 'presentStem',
      future : 'presentStem',
      perfect : 'participleStem',
      pluperfect : 'participleStem',
      futurePerfect : 'participleStem',
    },
  },
  connectingVowels : {
    present: {
      first: 'a',
      second: 'e',
      third: 'i',
      thirdIo: 'i',
      fourth: 'i',
    },
    imperfect:{
      first: 'a',
      second: 'e',
      third: 'e',
      thirdIo: 'ie',
      fourth: 'ie',
    },
    future:{
      first: 'a',
      second: 'e',
      third: 'e',
      thirdIo: 'ie',
      fourth: 'ie',
    },
    perfect: {
      first: '',
      second: '',
      third: '',
      thirdIo: '',
      fourth: '',
    },
    pluperfect: {
      first: '',
      second: '',
      third: '',
      thirdIo: '',
      fourth: '',
    },
    futurePerfect: {
      first: '',
      second: '',
      third: '',
      thirdIo: '',
      fourth: '',
    },
  },
  personalEndings : {
    present : {
      active: {
        firstPersonsg: 'o',
        secondPersonsg: 's',
        thirdPersonsg: 't',
        firstPersonpl: 'mus',
        secondPersonpl: 'tis',
        thirdPersonpl: 'nt'
      },
      passive: {
        firstPersonsg: 'or',
        secondPersonsg: 'ris',
        thirdPersonsg: 'tur',
        firstPersonpl: 'mur',
        secondPersonpl: 'mini',
        thirdPersonpl: 'ntur'
      },
    },
    imperfect : {
      active: {
        firstPersonsg: 'bam',
        secondPersonsg: 'bas',
        thirdPersonsg: 'bat',
        firstPersonpl: 'bamus',
        secondPersonpl: 'batis',
        thirdPersonpl: 'bant'
      },
      passive: {
        firstPersonsg: 'bar',
        secondPersonsg: 'baris',
        thirdPersonsg: 'batur',
        firstPersonpl: 'bamur',
        secondPersonpl: 'bamini',
        thirdPersonpl: 'bantur'
      },
    },
    future : {
      active: {
        firstPersonsg: 'bo',
        secondPersonsg: 'bis',
        thirdPersonsg: 'bit',
        firstPersonpl: 'bimus',
        secondPersonpl: 'bitis',
        thirdPersonpl: 'bunt'
      },
      passive: {
        firstPersonsg: 'bor',
        secondPersonsg: 'beris',
        thirdPersonsg: 'bitur',
        firstPersonpl: 'bimur',
        secondPersonpl: 'bimini',
        thirdPersonpl: 'buntur'
      },
    },
    perfect : {
      active: {
        firstPersonsg: 'i',
        secondPersonsg: 'isti',
        thirdPersonsg: 'it',
        firstPersonpl: 'imus',
        secondPersonpl: 'istis',
        thirdPersonpl: 'erunt'
      },
      passive: {
        firstPersonsg: ' sum',
        secondPersonsg: ' es',
        thirdPersonsg: ' est',
        firstPersonpl: ' sumus',
        secondPersonpl: ' estis',
        thirdPersonpl: ' sunt'
      },
    },
    pluperfect : {
      active: {
        firstPersonsg: 'eram',
        secondPersonsg: 'eras',
        thirdPersonsg: 'erat',
        firstPersonpl: 'eramus',
        secondPersonpl: 'eratis',
        thirdPersonpl: 'erant'
      },
      passive: {
        firstPersonsg: ' eram',
        secondPersonsg: ' eras',
        thirdPersonsg: ' erat',
        firstPersonpl: ' eramus',
        secondPersonpl: ' eratis',
        thirdPersonpl: ' erant'
      },
    },
    futurePerfect : {
      active: {
        firstPersonsg: 'ero',
        secondPersonsg: 'eris',
        thirdPersonsg: 'erit',
        firstPersonpl: 'erimus',
        secondPersonpl: 'eritis',
        thirdPersonpl: 'erunt'
      },
      passive: {
        firstPersonsg: ' ero',
        secondPersonsg: ' eris',
        thirdPersonsg: ' erit',
        firstPersonpl: ' erimus',
        secondPersonpl: ' eritis',
        thirdPersonpl: ' erunt'
      },
    },
  },
};

export { grammar }
