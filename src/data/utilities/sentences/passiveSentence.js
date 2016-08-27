import subject from '../caseUses/subject';
import Verb from '../verb/verb';
import placeWhere from '../caseUses/placeWhere';
import agent from '../caseUses/agent';
import insertAdjective from '../adjective/insertAdjective';

export default function passiveSentence(){
  var sentence = {};
  sentence.verb = new Verb('t', undefined ,'present', 'passive');
  sentence.verb.stem.english = sentence.verb.stem.english;
  sentence.subject = subject(sentence.verb.verb.directObjectTypes, sentence.verb.ending.number);
  sentence.placeWhere = placeWhere();
  sentence.agent = agent();
  sentence.english = [sentence.subject, sentence.verb, sentence.agent, sentence.placeWhere ];
  sentence.latin = [
    sentence.subject.stem, sentence.subject.ending,
    sentence.placeWhere.stem, sentence.placeWhere.ending,
    sentence.agent.stem, sentence.agent.ending,
    sentence.verb.stem, sentence.verb.ending,
  ];

  sentence = insertAdjective(sentence, ['subject', 'placeWhere', 'agent']);

  return sentence;
};
