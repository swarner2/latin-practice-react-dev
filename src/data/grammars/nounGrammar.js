export var grammar = {
  nominative: {
    sg:{
      firstF: 'a',
      firstM: 'a',
      secondM: 'us',
      secondN: 'um',
      secondF: 'us',
      thirdF: 'firstDict',
      thirdM: 'firstDict',
      thirdN: 'firstDict',
      fourthF: 'us',
      fourthM: 'us',
      fourthN: 'U',
      fifthM: 'Es',
      fifthF: 'Es',
    },
    pl:{
      firstF: 'ae',
      firstM: 'ae',
      secondM: 'i',
      secondF: 'i',
      secondN: 'a',
      thirdF: 'Es',
      thirdM: 'Es',
      thirdN: 'a',
      fourthF: 'Us',
      fourthM: 'Us',
      fourthN: 'a',
      fifthM: 'Es',
      fifthF: 'Es',
    }
  },
  accusative: {
    sg:{
      firstF: 'am',
      firstM: 'am',
      secondM: 'um',
      secondF: 'um',
      secondN: 'um',
      thirdF: 'em',
      thirdM: 'em',
      thirdN: 'firstDict',
      fourthF: 'um',
      fourthM: 'um',
      fourthN: 'firstDict',
      fifthM: 'em',
      fifthF: 'em',
    },
    pl:{
      firstF: 'As',
      firstM: 'As',
      secondM: 'Os',
      secondF: 'Os',
      secondN: 'a',
      thirdF: 'Es',
      thirdM: 'Es',
      thirdN: 'a',
      fourthF: 'Us',
      fourthM: 'Us',
      fourthN: 'Us',
      fifthM: 'Es',
      fifthF: 'Es',
    }
  },
  ablative: {
    sg:{
      firstF: 'A',
      firstM: 'A',
      secondM: 'O',
      secondF: 'O',
      secondN: 'O',
      thirdF: 'e',
      thirdM: 'e',
      thirdN: 'e',
      fourthF: 'U',
      fourthM: 'U',
      fourthN: 'U',
      fifthM: 'E',
      fifthF: 'E',
    },
    pl:{
      firstF: 'is',
      firstM: 'is',
      secondM: 'is',
      secondF: 'is',
      secondN: 'is',
      thirdF: 'ibus',
      thirdM: 'ibus',
      thirdN: 'ibus',
      fourthF: 'ibus',
      fourthM: 'ibus',
      fourthN: 'ibus',
      fifthM: 'ebus',
      fifthF: 'ebus',
    }
  },
  dative: {
    sg:{
      firstF: 'ae',
      firstM: 'ae',
      secondM: 'O',
      secondF: 'O',
      secondN: 'O',
      thirdF: 'i',
      thirdM: 'i',
      thirdN: 'i',
      fourthF: 'ui',
      fourthM: 'ui',
      fourthN: 'ui',
      fifthM: 'ei',
      fifthF: 'ei',
    },
    pl:{
      firstF: 'is',
      firstM: 'is',
      secondM: 'is',
      secondF: 'is',
      secondN: 'is',
      thirdF: 'ibus',
      thirdM: 'ibus',
      thirdN: 'ibus',
      fourthF: 'ibus',
      fourthM: 'ibus',
      fourthN: 'ibus',
      fifthM: 'ebus',
      fifthF: 'ebus',
    }
  },
  genitive: {
    sg:{
      firstF: 'ae',
      firstM: 'ae',
      secondM: 'i',
      secondF: 'i',
      secondN: 'i',
      thirdF: 'is',
      thirdM: 'is',
      thirdN: 'is',
      fourthF: 'Us',
      fourthM: 'Us',
      fourthN: 'Us',
      fifthM: 'ei',
      fifthF: 'ei',
    },
    pl:{
      firstF: 'Arum',
      firstM: 'Arum',
      secondM: 'Orum',
      secondF: 'Orum',
      secondN: 'Orum',
      thirdF: 'um',
      thirdM: 'um',
      thirdN: 'um',
      fourthF: 'uum',
      fourthM: 'uum',
      fourthN: 'uum',
      fifthM: 'Erum',
      fifthF: 'Erum',
    }
  },
  locative: {
    sg:{
      firstF: 'ae',
      firstM: 'ae',
      secondM: 'i',
      secondF: 'i',
      secondN: 'i',
      thirdF: 'is',
      thirdM: 'is',
      thirdN: 'is',
      fourthF: 'Us',
      fourthM: 'Us',
      fourthN: 'Us',
      fifthM: 'ei',
      fifthF: 'ei',
    },
    pl:{
      firstF: 'is',
      firstM: 'is',
      secondM: 'is',
      secondF: 'is',
      secondN: 'is',
      thirdF: 'ibus',
      thirdM: 'ibus',
      thirdN: 'ibus',
      fourthF: 'ibus',
      fourthM: 'ibus',
      fourthN: 'ibus',
      fifthM: 'ebus',
      fifthF: 'ebus',
    }
  },
  vocative: {
    sg:{
      firstF: 'a',
      firstM: 'a',
      secondM: 'e',
      secondN: 'um',
      secondF: 'e',
      thirdF: 'firstDict',
      thirdM: 'firstDict',
      thirdN: 'firstDict',
      fourthF: 'us',
      fourthM: 'us',
      fourthN: 'U',
      fifthM: 'Es',
      fifthF: 'Es',
    },
    pl:{
      firstF: 'ae',
      firstM: 'ae',
      secondM: 'i',
      secondF: 'i',
      secondN: 'a',
      thirdF: 'Es',
      thirdM: 'Es',
      thirdN: 'a',
      fourthF: 'Us',
      fourthM: 'Us',
      fourthN: 'a',
      fifthM: 'Es',
      fifthF: 'Es',
    }
  },

  caseUses : {
    //noun translation config
    //nomincative
    subject : {
      nonCamelCaseUse : 'subject',
      case : 'nominative',
      sg : {
        englishPrefix : 'this',
        englishSuffix : ' is verbing',
        latinPrefix : "firstDict",
        latinSuffix : "",
      },
      pl : {
        englishPrefix : 'this',
        englishSuffix : ' are verbing',
        latinPrefix : "stem",
        latinSuffix : "ending",
      }
    },
    predicateNominative : {
      nonCamelCaseUse : 'predicate',
      case : 'nominative',
        sg : {
          englishPrefix : 'something is ',
          englishSuffix : 'this',
          latinPrefix : "firstDict",
          latinSuffix : "",
          extraLatinSuffix : " est"
        },
        pl : {
          englishPrefix : 'somethings are ',
          englishSuffix : 'this',
          latinPrefix : "stem",
          latinSuffix : "ending",
          extraLatinSuffix : " sunt"
        }
    },
    //genitive
    possession : {
      nonCamelCaseUse : 'possession',
      case : 'genitive',
      sg : {
        englishPrefix : 'something of ',
        englishSuffix : 'this',
        latinPrefix : "stem",
        latinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'something of',
        englishSuffix : 'this',
        latinPrefix : "stem",
        latinSuffix : "ending",
      }
    },
    //dative
    indirectObject : {
      nonCamelCaseUse : 'indirect object',
      case : 'dative',
      sg : {
        englishPrefix : 'the action happens for',
        englishSuffix : 'this',
        latinPrefix : "stem",
        latinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'the action happens for',
        englishSuffix : 'this',
        latinPrefix : "stem",
        latinSuffix : "ending",
      }
    },
    //accusative
    directObject : {
      nonCamelCaseUse : 'direct object',
      case : 'accusative',
      sg : {
        englishPrefix : 'the subject verbs',
        englishSuffix : 'this',
        latinPrefix : "stem",
        latinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'the subject verbs',
        englishSuffix : 'this',
        latinPrefix : "stem",
        latinSuffix : "ending",
      }
    },
    placeToWhere : {
      nonCamelCaseUse : 'place to where',
      case : 'accusative',
      preps : [
        { latin:'ad', english:'toward'},
        { latin:'in', english:'into'},
        { latin:'per', english:'through'},
        { latin:'trans', english: 'across'}
      ],
      sg : {
        englishPrefix : 'prep',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'prep',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      }
    },
    placeWithinWhich : {
      nonCamelCaseUse : 'place within',
      case : 'accusative',
      preps : [
        {latin:'inter', english: 'between'},
        {latin:'circum', english: 'around'},
        {latin:'post', english: 'behind'},
        {latin:'ante', english: 'in front of'},
      ],
      sg : {
        englishPrefix : 'prep',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'prep',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      }
    },
    accusativeSubject : {
      nonCamelCaseUse : 'subject',
      case : 'accusative',
      sg : {
        englishPrefix : 'the subject perceives/says that',
        englishSuffix : 'this',
        extraSuffix : 'verbs',
        latinPrefix : "stem",
        latinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'the subject perceives that',
        englishSuffix : 'this',
        extraSuffix : 'verb',
        latinPrefix : "stem",
        latinSuffix : "ending",
      }
    },
    placeToWhereCities : {
      nonCamelCaseUse : 'place to where',
      case : 'accusative',
      sg : {
        englishPrefix : 'toward',
        englishSuffix : 'this',
        extraSuffix : '(as if a city)',
        latinPrefix : "stem",
        latinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'toward',
        englishSuffix : 'this',
        extraSuffix : "(as if a city)",
        latinPrefix : "stem",
        latinSuffix : "ending",
      }
    },
    //ablative
    placeWhere : {
      nonCamelCaseUse : 'place where',
      case : 'ablative',
      preps : [
        {latin: 'in', english : 'in'},
        {latin: 'sub', english : 'under'},
        {latin: 'super', english : 'above'},
      ],
      sg : {
        englishPrefix : 'prep',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'prep',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      }
    },
    agent : {
      nonCamelCaseUse : 'agent',
      case : 'ablative',
      preps : [
        {latin : 'ab', english : 'by'}
      ],
      sg : {
        englishPrefix : 'the subject is verbed by',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'the subject is verbed by',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      }
    },
    accompaniment : {
      nonCamelCaseUse : 'accompaniment',
      case : 'ablative',
      preps : [
        {latin : 'cum', english : 'together with'},
        {latin : 'sine', english : 'without'}
      ],
      sg : {
        englishPrefix : 'the subject verbs together with',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'the subject verbs together with',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      }
    },
    placeFrom : {
      nonCamelCaseUse : 'place from',
      case : 'ablative',
      preps : [
        {latin: 'de', english: 'down from'},
        {latin: 'ex', english: 'out of'},
        {latin: 'ab', english: 'from'}
      ],
      sg : {
        englishPrefix : 'prep',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'prep',
        englishSuffix : 'this',
        latinPrefix : "prep",
        latinSuffix : "stem",
        extraLatinSuffix : "ending",
      }
    },
    placeFromCities: {
      nonCamelCaseUse : 'place from',
      case : 'ablative',
      sg : {
        englishPrefix : 'from',
        englishSuffix : 'this',
        extraSuffix : '(as if a city)',
        latinPrefix : "stem",
        latinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'from',
        englishSuffix : 'this',
        extraSuffix : "(as if a city)",
        latinPrefix : "stem",
        latinSuffix : "ending",
      }
    },
    instrument : {
      nonCamelCaseUse : 'instrument',
      case : 'ablative',
      sg : {
        englishPrefix : 'the subject uses',
        englishSuffix : 'this',
        latinPrefix : "stem",
        latinSuffix : "ending",
        extraSuffix : 'to verb'
      },
      pl : {
        englishPrefix : 'the subject uses',
        englishSuffix : 'this',
        latinPrefix : "stem",
        latinSuffix : "ending",
        extraSuffix : 'to verb'
      }
    },
    //vocative
    directAddress : {
      nonCamelCaseUse : 'directAddress',
      case : 'vocative',
      sg : {
        englishPrefix : 'this',
        englishSuffix : '!',
        latinPrefix : "stem",
        latinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'this',
        englishSuffix : '!',
        latinPrefix : "stem",
        latinSuffix : "ending",
      }
    },
    //locative
    placeWhereCities : {
      nonCamelCaseUse : 'place where',
      case : 'locative',
      sg : {
        englishPrefix : 'in',
        englishSuffix : 'this',
        extraSuffix : "(as if a city)",
        latinPrefix : "stem",
        latinSuffix : "ending",
      },
      pl : {
        englishPrefix : 'in',
        englishSuffix : 'this',
        extraSuffix : "(as if a city)",
        latinPrefix : "stem",
        latinSuffix : "ending",
      }
    },
  },
};
