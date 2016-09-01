import {dictionary} from '../../../data/imports/adjectiveImport';
import utilities from '../../../data/utilities/utilities'
import {grammar} from '../../../data/grammars/verbGrammar'
import {pickWord} from '../../../data/utilities/pickWord'


export default function NewRandomAdjective(gender, number, nounCase){

  var adjective = pickWord('any', 'adjectives')
  adjective.gender = gender;
  adjective.number = number;
  adjective.nounCase = nounCase;
  adjective.meaning = adjective.meaning.match(',') ? utilities().random(adjective.meaning.split(', ')) : adjective.meaning
  if (adjective.declension === 'first/second') {
    if (gender === 'M' || gender === 'N') {
      adjective.declension = 'second';
    }
    if (gender === 'F') {
      adjective.declension = 'first';
    }
  }
  adjective.ending = grammar[nounCase][number][adjective.declension + gender]

  return adjective
}
