import {dictionary} from '../../../data/imports/adjectiveImport';
import utilities from '../../../data/utilities/utilities'
import {grammar} from '../../../data/grammars/verbGrammar'
import {pickWord} from '../../../data/utilities/pickWord'


export default function NewRandomNoun(Config){
  var noun = pickWord('any', 'nouns', 'declension')
  var usedCaseUse = []
  if(Config.subject){
    usedCaseUse.push('subject')
  }
  if(Config.predicateNominative){
    usedCaseUse.push('predicateNominative')
  }
  if(Config.possession){
    usedCaseUse.push('possession')
  }
  if(Config.indirectObject){
    usedCaseUse.push('indirectObject')
  }
  if(Config.directObject){
    usedCaseUse.push('directObject')
  }
  if(Config.placeToWhere){
    usedCaseUse.push('placeToWhere')
  }
  if(Config.placeWithinWhich){
    usedCaseUse.push('placeWithinWhich')
  }
  if(Config.accusativeSubject){
    usedCaseUse.push('accusativeSubject')
  }
  if(Config.placeToWhereCities){
    usedCaseUse.push('placeToWhereCities')
  }  if(Config.placeWhere){
    usedCaseUse.push('placeWhere')
  }
  if(Config.placeFrom){
    usedCaseUse.push('placeFrom')
  }
  if(Config.accompaniment){
    usedCaseUse.push('accompaniment')
  }
  if(Config.placeFromCities){
    usedCaseUse.push('placeFromCities')
  }
  if(Config.instrument){
    usedCaseUse.push('instrument')
  }
  if(Config.agent){
    usedCaseUse.push('agent')
  }
  if(Config.directAddress){
    usedCaseUse.push('directAddress')
  }
  if(Config.placeWhereCities){
    usedCaseUse.push('placeWhereCities')
  }
  noun.caseUse = utilities().random(usedCaseUse)

  if (grammar.caseUses[noun.caseUse].preps === undefined) {
    noun.prep = undefined;
  }
  else {
    noun.prep = utilities().random(grammar.caseUses[noun.caseUse].preps)
  }

  noun.case = grammar.caseUses[noun.caseUse].case
  noun.number = utilities().random(['sg','pl'])
  if (noun.gender === 'C') {
    noun.gender = 'M';
  }

  // if (grammar.caseUses.prep !== undefined) {
  //   var prep = utilities()random(grammar.caseUses.prep);
  //   if (prep === 'ex') {
  //     if (noun.stem.match(/[aeiouhAEIOUH]/)) {
  //       prep = 'e'
  //     }
  //   }
  //   if (prep === 'ab') {
  //     if (noun.stem.match(/[aeiouhAEIOUH]/)) {
  //       prep = 'a'
  //     }
  //   }
  // }

  function getTranslation(noun){
    var result = []
    result.push(grammar.caseUses[noun.caseUse][noun.number].prefix);
    result.push(grammar.caseUses[noun.caseUse][noun.number].suffix);
    if (grammar.caseUses[noun.caseUse][noun.number].extraSuffix) {
      result.push(grammar.caseUses[noun.caseUse][noun.number].extraSuffix)
    }
    return result.map(function(section){
      if (section === 'prep') {
        return  noun.prep.english
      }
      noun.meaning = noun.meaning.match(',') ? utilities().random(noun.meaning.split(', ')) : noun.meaning
      if (section === 'this') {
        if (noun.number === 'sg') {
          return  'the ' + noun.meaning
        }
        else {
          return 'the ' + noun.meaning + 's'
        }
      }
      else {
        return section
      }
    }).join(' ')

  }
  noun.translation = getTranslation(noun);
  noun.nonCamelCaseUse = grammar.caseUses[noun.caseUse].nonCamelCaseUse
  console.log(noun);
  noun.ending = grammar[noun.case][noun.number][noun.declension + noun.gender]
  noun.trueStem = noun.stem;
  if (noun.ending === 'firstDict') {
    noun.stem = noun.firstDict;
    noun.ending = '';
  }

  return noun
}
