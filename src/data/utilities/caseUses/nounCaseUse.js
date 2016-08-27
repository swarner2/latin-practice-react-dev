import utilities from '../utilities';
import {pickWord} from '../pickWord';
import { grammar } from '../../grammars/verbGrammar';
import getNounEnglish from '../getNounEnglish'

export default function NounCaseUse(nounCase, caseUse, types, custom, number){
  //handle types
  var type = utilities().random(types).trim();
  if(type === 'thing'){
    type = utilities().random(['instrument', 'food', 'body part','jewelry','material','event', 'action']);
  }
  this.noun = pickWord(type, 'nouns');

  if (this.noun === undefined) {
    this.noun = pickWord('any', 'nouns')
  }

  this.ending = {
    case : nounCase,
    caseUse : caseUse,
    number : number === undefined ? utilities().random(['sg','pl']) : number,
  };
  this.stem = {
    english : this.noun.meaning.match(',') ? utilities().random(this.noun.meaning.split(', ')) : this.noun.meaning,
    gender : this.noun.gender,
    declension : this.noun.declension,
    latin : this.noun.stem,
  };

  if(this.stem.gender === 'C'){this.stem.gender = utilities().random(['M','F']);}
  this.ending.latin = grammar[this.ending.case][this.ending.number][this.stem.declension + this.stem.gender] + " ";

  var that = this;
  getNounEnglish(that);
  custom(that);

 //catch if ending is 'firstDict'
 if (this.ending.latin === 'firstDict ') {
   this.stem.latin = '';
   this.ending.latin = this.noun.firstDict + " ";
 }

   return this;
}
