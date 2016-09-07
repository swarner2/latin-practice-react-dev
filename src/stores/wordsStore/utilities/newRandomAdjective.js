import utilities from '../../../data/utilities/utilities'
import {grammar} from '../../../data/grammars/verbGrammar'
import {pickWord} from '../../../data/utilities/pickWord'


export default function NewRandomAdjective(gender, number, nounCase){

  var adjective = Object.assign({}, pickWord('any', 'adjectives'))
  adjective.gender = gender;
  adjective.number = number;
  adjective.nounCase = nounCase;
  adjective.meaning = adjective.meaning.match(',') ? utilities().random(adjective.meaning.split(', ')) : adjective.meaning
  if (adjective.declension === 'first') {
    console.log('thats not suppose to happen.... ');
    console.log(adjective);
  }
  if (adjective.declension.match('first/second')) {
    if (gender === 'M') {
      adjective.declension = 'second';
    }
    if (gender === 'N') {
      adjective.declension = 'second';
    }
    if (gender === 'F') {
      adjective.declension = 'first';
    }
  }

  adjective.ending = grammar[nounCase][number][adjective.declension + gender]

  if (adjective.ending === 'firstDict') {
    if (gender === 'N' && adjective.dictionaryEntry.match(/e$/)) {
      adjective.ending = 'e'
    }
    else {
      adjective.trueStem = adjective.stem;
      adjective.stem = adjective.firstDict;
      adjective.ending = '';
    }
  }
  if (adjective.ending === undefined) {
    console.log(adjective);
  }
  return adjective
}
