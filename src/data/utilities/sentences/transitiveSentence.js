import subject from '../caseUses/subject';
import Verb from '../verb/verb';
import placeWhere from '../caseUses/placeWhere';
import directObject from '../caseUses/directObject';
import insertAdjective from '../adjective/insertAdjective';

export default function transitiveSentence(){
  var usedWords = [];
  var sentence = {};
  sentence.subject = subject();
  sentence.verb = new Verb('t', sentence.subject.ending.number ,'present', 'active');
  sentence.placeWhere = placeWhere();
  sentence.directObject = directObject(sentence.verb.verb.directObjectTypes);
  sentence.english = [sentence.subject, sentence.verb, sentence.directObject, sentence.placeWhere ];
  sentence.latin = [
    sentence.subject.stem, sentence.subject.ending,
    sentence.placeWhere.stem, sentence.placeWhere.ending,
    sentence.directObject.stem, sentence.directObject.ending,
    sentence.verb.stem, sentence.verb.ending,
  ];

  sentence = insertAdjective(sentence, ['subject', 'placeWhere', 'directObject']);

  return sentence;
};
