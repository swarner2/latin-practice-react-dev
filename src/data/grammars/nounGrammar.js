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
        prefix : 'this',
        suffix : ' is verbing',
      },
      pl : {
        prefix : 'this',
        suffix : ' are verbing',
      }
    },
    predicateNominative : {
      nonCamelCaseUse : 'predicate',
      case : 'nominative',
      sg : {
        prefix : 'something is ',
        suffix : 'this',
      },
      pl : {
        prefix : 'somethings are ',
        suffix : 'this',
      }
    },
    //genitive
    possession : {
      nonCamelCaseUse : 'possession',
      case : 'genitive',
      sg : {
        prefix : 'something of ',
        suffix : 'this',
      },
      pl : {
        prefix : 'something of',
        suffix : 'this',
      }
    },
    //dative
    indirectObject : {
      nonCamelCaseUse : 'indirect object',
      case : 'dative',
      sg : {
        prefix : 'the action happens for',
        suffix : 'this',
      },
      pl : {
        prefix : 'the action happens for',
        suffix : 'this',
      }
    },
    //accusative
    directObject : {
      nonCamelCaseUse : 'direct object',
      case : 'accusative',
      sg : {
        prefix : 'the subject verbs',
        suffix : 'this',
      },
      pl : {
        prefix : 'the subject verbs',
        suffix : 'this',
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
        prefix : 'prep',
        suffix : 'this',
      },
      pl : {
        prefix : 'prep',
        suffix : 'this',
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
        prefix : 'prep',
        suffix : 'this',
      },
      pl : {
        prefix : 'prep',
        suffix : 'this',
      }
    },
    accusativeSubject : {
      nonCamelCaseUse : 'subject',
      case : 'accusative',
      sg : {
        prefix : 'the subject perceives/says that',
        suffix : 'this',
        extraSuffix : 'verbs'
      },
      pl : {
        prefix : 'the subject perceives that',
        suffix : 'this',
        extraSuffix : 'verb'
      }
    },
    placeToWhereCities : {
      nonCamelCaseUse : 'place to where',
      case : 'accusative',
      sg : {
        prefix : 'toward',
        suffix : 'this',
      },
      pl : {
        prefix : 'toward',
        suffix : 'this',
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
        prefix : 'prep',
        suffix : 'this',
      },
      pl : {
        prefix : 'prep',
        suffix : 'this',
      }
    },
    agent : {
      nonCamelCaseUse : 'agent',
      case : 'ablative',
      preps : [
        {latin : 'ab', english : 'by'}
      ],
      sg : {
        prefix : 'the subject is verbed by',
        suffix : 'this',
      },
      pl : {
        prefix : 'the subject is verbed by',
        suffix : 'this',
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
        prefix : 'the subject verbs together with',
        suffix : 'this',
      },
      pl : {
        prefix : 'the subject verbs together with',
        suffix : 'this',
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
        prefix : 'prep',
        suffix : 'this',
      },
      pl : {
        prefix : 'prep',
        suffix : 'this',
      }
    },
    placeFromCities: {
      nonCamelCaseUse : 'place from',
      case : 'ablative',
      sg : {
        prefix : 'from',
        suffix : 'this',
      },
      pl : {
        prefix : 'from',
        suffix : 'this',
      }
    },
    instrument : {
      nonCamelCaseUse : 'instrument',
      case : 'ablative',
      sg : {
        prefix : 'the subject uses',
        suffix : 'this',
        extraSuffix : 'to verb'
      },
      pl : {
        prefix : 'the subject uses',
        suffix : 'this',
        extraSuffix : 'to verb'
      }
    },
    //vocative
    directAddress : {
      nonCamelCaseUse : 'directAddress',
      case : 'vocative',
      sg : {
        prefix : 'this',
        suffix : '!',
      },
      pl : {
        prefix : 'this',
        suffix : '!',
      }
    },
    //locative
    placeWhereCities : {
      nonCamelCaseUse : 'place where',
      case : 'locative',
      sg : {
        prefix : 'in',
        suffix : 'this',
      },
      pl : {
        prefix : 'in',
        suffix : 'this',
      }
    },
  }
};
