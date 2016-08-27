import utilities from '../utilities';
import {pickWord} from '../pickWord';
import { grammar } from '../../grammars/verbGrammar';
import getNounEnglish from '../getNounEnglish'

export default function CreateAdjective(noun){
  this.adjective = pickWord('any', 'adjectives');
  this.modifies = noun;
  this.ending = {
    case : noun.ending.case,
    caseUse : noun.ending.caseUse,
    number : noun.ending.number,
  };
  this.stem = {
    english : utilities().random(this.adjective.meaning.split(', ')),
    gender : noun.stem.gender,
    declension : this.adjective.declension,
    latin : this.adjective.stem,
  };
  if(this.stem.declension === 'first/second'){
    if (this.stem.gender === 'M' || this.stem.gender === 'N') {
      this.stem.declension = 'second';
    }
    else {
      this.stem.declension = 'first';
    }
  }
  this.ending.latin = grammar[this.ending.case][this.ending.number][this.stem.declension + this.stem.gender] + " ";

 //catch if ending is 'firstDict'
 if (this.ending.latin === 'firstDict ') {
   this.stem.latin = '';
   this.ending.latin = this.adjective.firstDict + " ";
 }
   return this;
}
