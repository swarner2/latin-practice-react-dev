import { pickWord } from '../pickWord';
import utilities from '../utilities';
import { grammar } from '../../grammars/verbGrammar';
import handleVerbEnglish from './handleVerbEnglish';

export default function Verb(type, subjectNumber, tense , voice, person){
  this.verb = pickWord(type, 'verbs');

  this.stem = {
    english : this.verb.meaning,
    tense : tense,
    latin : this.verb.presentStem,
  };
  if (subjectNumber === undefined) {
    subjectNumber = utilities().random(['sg','pl'])
  }
  this.ending = {
    person : person,
    number : subjectNumber,
    voice : voice,

  };
  //set person to third if not given
  if (person === undefined) { this.ending.person = 'third';}

  this.stem.english = handleVerbEnglish(this.stem.english, this.ending.number, voice);

  //get ending
  this.ending.personalEnding = grammar.verbs.personalEndings[this.stem.tense][this.ending.voice][this.ending.person + "Person"  + this.ending.number];

  //get connecting vowel
  this.ending.connectingVowel = grammar.verbs.connectingVowels[this.stem.tense][this.verb.conjugation];

  //stop int combination
  if (this.ending.personalEnding === 'nt' || this.ending.personalEnding === 'ntur'   && this.ending.connectingVowel === 'i') {
    switch (this.verb.conjugation) {
      case 'third':
          this.ending.connectingVowel = 'u';
        break;
      case 'thirdIo':
      this.ending.connectingVowel = 'iu';
        break;
      case 'fourth':
      this.ending.connectingVowel = 'iu';
        break;
      default:
      console.log('Error, passed through stop int but did not change: ' + this.verb.dictionaryEntry);
    }
  }

  this.ending.latin = this.ending.connectingVowel + this.ending.personalEnding;
  return this;
}
