import subject from '../caseUses/subject';
import Verb from '../verb/verb';
import placeWhere from '../caseUses/placeWhere';
import utilities from '../utilities';
import insertAdjective from '../adjective/insertAdjective';

export default function intransitiveSentence(){
  var usedWords = [];
  var sentence = {};
  sentence.subject = subject();
  sentence.verb = new Verb('i', sentence.subject.ending.number ,'present', 'active');
  sentence.placeWhere = placeWhere();

  sentence.english = [sentence.subject, sentence.verb, sentence.placeWhere ];
  sentence.latin = [
    sentence.subject.stem, sentence.subject.ending,
    sentence.placeWhere.stem, sentence.placeWhere.ending,
    sentence.verb.stem, sentence.verb.ending,
  ];

sentence = insertAdjective(sentence, ['subject', 'placeWhere']);

  return sentence;
};
