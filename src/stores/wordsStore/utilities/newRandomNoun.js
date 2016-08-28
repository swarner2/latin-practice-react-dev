import {dictionary} from '../../../data/imports/adjectiveImport';
import utilities from '../../../data/utilities/utilities'
import {grammar} from '../../../data/grammars/verbGrammar'
import {pickWord} from '../../../data/utilities/pickWord'


export default function NewRandomNoun(configuration){
  var noun = pickWord('any', 'nouns', 'declension')
  noun.case = utilities().random(['nominative', 'genitive', 'accusative', 'ablative', 'dative'])
  noun.number = utilities().random(['sg','pl'])
  if (noun.gender === 'C') {
    noun.gender = 'M';
  }
  noun.ending = grammar[noun.case][noun.number][noun.declension + noun.gender]
  noun.trueStem = noun.stem;
  if (noun.ending === 'firstDict') {
    noun.stem = noun.firstDict;
    noun.ending = '';
  }
  return noun
}
