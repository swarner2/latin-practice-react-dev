import subject from '../caseUses/subject';
import placeWhere from '../caseUses/placeWhere';
import Verb from '../verb/verb';
import insertAdjective from '../adjective/insertAdjective';

export default function linkingVerbSentence(){
  var usedWords = [];
  var sentence = {};
  var linkingVerb = {
    sg : {
      ending: {
        connectingVowel : 'none',
        latin : 't ',
        number : 'sg',
        person : 'third',
        personalEnding : 't ',
        voice : 'none',
      },
      stem: {
        english: 'is ',
        latin: 'es',
        tense: 'present',
      },
      verb: {
        chapter: 'I',
        section: 1,
        type: 'irregular',
        conjugation : 'irregular',
        deponent : false,
        dictionaryEntry : 'sum, esse, fui, futurus',
        directObjectTypes : 'none',
        meaning: 'to be',
        participleStem: 'futur',
        perfectStem: 'fu',
        presentStem: 's/es',
      },
    },
    pl : {
      ending: {
        connectingVowel : 'none',
        latin : 'nt ',
        number : 'pl',
        person : 'third',
        personalEnding : 'nt ',
        voice : 'none',
      },
      stem: {
        english: 'are ',
        latin: 'su',
        tense: 'present',
      },
      verb: {
        chapter: 'I',
        section: 1,
        type: 'irregular',
        conjugation : 'irregular',
        deponent : false,
        dictionaryEntry : 'sum, esse, fui, futurus',
        directObjectTypes : 'none',
        meaning: 'to be',
        participleStem: 'futur',
        perfectStem: 'fu',
        presentStem: 's/es',
      },
    }
  }
  sentence.subject = subject();
  sentence.placeWhere = placeWhere();
  sentence.verb = linkingVerb[sentence.subject.ending.number];
  sentence.english = [sentence.subject, sentence.placeWhere, sentence.verb];
  sentence.latin = [
    sentence.subject.stem, sentence.subject.ending,
    sentence.placeWhere.stem, sentence.placeWhere.ending,
    sentence.verb.stem, sentence.verb.ending,
  ];

  sentence = insertAdjective(sentence, ['subject'], 'linkingVerb');

  return sentence;
};
