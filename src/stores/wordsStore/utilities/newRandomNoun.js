import {dictionary} from '../../../data/imports/adjectiveImport';
import utilities from '../../../data/utilities/utilities'
import {grammar} from '../../../data/grammars/verbGrammar'
import {pickWord} from '../../../data/utilities/pickWord'
import NewRandomAdjective from './NewRandomAdjective'


export default function NewRandomNoun(Config){
  var noun = pickWord('any', 'nouns', 'declension')
  var usedCaseUse = []
  console.log(noun)
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
  }
  if(Config.placeWhere){
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
  noun.adjective = NewRandomAdjective(noun.gender, noun.number, noun.case)
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
    result.push(grammar.caseUses[noun.caseUse][noun.number].englishPrefix);
    result.push(grammar.caseUses[noun.caseUse][noun.number].englishSuffix);
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

  function getLatin(noun){
    var result = []
    result.push(grammar.caseUses[noun.caseUse][noun.number].latinPrefix);
    result.push(grammar.caseUses[noun.caseUse][noun.number].latinSuffix);
    if (grammar.caseUses[noun.caseUse][noun.number].extraLatinSuffix) {
      result.push(grammar.caseUses[noun.caseUse][noun.number].extraLatinSuffix)
    }
    return result.map(function(section){
      if (section === 'prep') {
        return  noun.prep.latin + " "
      }
      // noun.meaning = noun.meaning.match(',') ? utilities().random(noun.meaning.split(', ')) : noun.meaning
      if (section === 'stem') {
          //clear Neuter accusative singular going to first dictionary entry
          if (noun.gender === 'N' && noun.caseUse.case === 'accusative' && noun.number === 'sg') {
            return '';
          }
          else{
            return  noun.stem
          }
        }
      if (section === 'ending' ) {
          var ending = grammar[grammar.caseUses[noun.caseUse].case][noun.number][noun.declension + noun.gender];
          if (ending === 'firstDict') {
            ending = noun.firstDict
          }
          return ending;
        }
      if (section === 'firstDict') {
          return noun.firstDict
      }

      else {
        return section
      }
    }).join('')
  }
  noun.getLatin = getLatin(noun);

  noun.translationWithAdjective = noun.translation.replace(noun.meaning, noun.adjective.meaning + " " + noun.meaning)

  noun.nonCamelCaseUse = grammar.caseUses[noun.caseUse].nonCamelCaseUse
  noun.trueStem = noun.stem;
  noun.ending = grammar[noun.case][noun.number][noun.declension + noun.gender]
  if (noun.ending === 'firstDict') {
    noun.stem = noun.firstDict;
    noun.ending = '';
  }

  return noun
}
