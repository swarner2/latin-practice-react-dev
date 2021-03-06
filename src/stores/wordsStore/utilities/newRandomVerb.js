import {dictionary} from '../../../data/imports/adjectiveImport';
import utilities from '../../../data/utilities/utilities'
import {grammar} from '../../../data/grammars/verbGrammar'

export default function NewRandomVerb(Config){
  var filteredDictionary = dictionary;
  var chosenVerb = utilities().random(filteredDictionary.verbs);

  var usedTenses = []
  if(Config.present){
    usedTenses.push('present')
  }
  if(Config.imperfect){
    usedTenses.push('imperfect')
  }
  if(Config.future){
    usedTenses.push('future')
  }
  if(Config.perfect){
    usedTenses.push('perfect')
  }
  if(Config.pluperfect){
    usedTenses.push('pluperfect')
  }
  if(Config.futurePerfect){
    usedTenses.push('futurePerfect')
  }
  chosenVerb.tense = utilities().random(usedTenses)

  if (chosenVerb.deponent) {
    chosenVerb.voice = 'passive'
  }
  else if (chosenVerb.type === 'i' || chosenVerb.participleStem === 'none') {
    chosenVerb.voice = 'active'
  }
  else {
    var usedVoices = []
    if(Config.activeVoice){
      usedVoices.push('active')
    }
    if(Config.passiveVoice){
      usedVoices.push('passive')
    }
    chosenVerb.voice = utilities().random(usedVoices)
  }

  var usedMoods = []
  if(Config.indicativeMood){
    usedMoods.push('indicative')
  }
  if(Config.subjunctiveMood){
    usedMoods.push('subjunctive')
  }
  if(Config.imperativeMood){
    usedMoods.push('imperative')
  }
  chosenVerb.mood = utilities().random(usedMoods)

  var usedPersons = []
  if(Config.firstPerson){
    usedPersons.push('firstPerson')
  }
  if(Config.secondPerson){
    usedPersons.push('secondPerson')
  }
  if(Config.thirdPerson){
    usedPersons.push('thirdPerson')
  }
  chosenVerb.person = utilities().random(usedPersons)
  chosenVerb.number = utilities().random(['sg','pl'])
  chosenVerb.usedStem = chosenVerb[grammar.verbs.stem[chosenVerb.voice][chosenVerb.tense]]
  chosenVerb.connectingVowel = grammar.verbs.connectingVowels[chosenVerb.tense][chosenVerb.conjugation]
  chosenVerb.ending = grammar.verbs.personalEndings[chosenVerb.tense][chosenVerb.voice][chosenVerb.person + chosenVerb.number]


  if (chosenVerb.ending === 'or' || chosenVerb.ending === 'o') {
    if (chosenVerb.conjugation === 'first' || chosenVerb.conjugation === 'third') {
      chosenVerb.connectingVowel = '';
    }
  }
  if (chosenVerb.ending === 'ris') {
    if (chosenVerb.tense === 'present' && chosenVerb.conjugation === 'third') {
      chosenVerb.connectingVowel = 'e';
    }
  }
  //catch different future
  if (chosenVerb.conjugation === 'third' || chosenVerb.conjugation === 'thirdIo' || chosenVerb.conjugation === 'fourth') {
    if (chosenVerb.tense === 'future') {
      chosenVerb.ending = grammar.verbs.personalEndings['present'][chosenVerb.voice][chosenVerb.person + chosenVerb.number]
      if(chosenVerb.ending === 'o'){
        choscenVerb.ending = 'm';
        chosenVerb.connectingVowel = chosenVerb.connectingVowel.replace('e', 'a')
      }
      if(chosenVerb.ending === 'or'){
          chosenVerb.ending = 'r'
          chosenVerb.connectingVowel = chosenVerb.connectingVowel.replace('e', 'a')
        }
      }
    }


  //add noun ending onto stem if passive perfect system
  if (chosenVerb.usedStem === chosenVerb.participleStem) {
    chosenVerb.gender = utilities().random(['M', 'F', 'N'])
    if (chosenVerb.number === 'sg') {
      if (chosenVerb.gender === 'M') {
        chosenVerb.usedStem = chosenVerb.usedStem + 'us'
      }
      if (chosenVerb.gender === 'F') {
        chosenVerb.usedStem = chosenVerb.usedStem + 'a'
      }
      if (chosenVerb.gender === 'N') {
        chosenVerb.usedStem = chosenVerb.usedStem + 'um'
      }
    }
    else {
      if (chosenVerb.gender === 'M') {
        chosenVerb.usedStem = chosenVerb.usedStem + 'i'
      }
      if (chosenVerb.gender === 'F') {
        chosenVerb.usedStem = chosenVerb.usedStem + 'ae'
      }
      if (chosenVerb.gender === 'N') {
        chosenVerb.usedStem = chosenVerb.usedStem + 'a'
      }    }
  }
  if (chosenVerb.connectingVowel === 'i' && chosenVerb.ending.match('nt')) {
    if(chosenVerb.conjugation === 'fourth' || chosenVerb.conjugation === 'thirdIo'){
      chosenVerb.connectingVowel = 'iu';
    }
    else {
      chosenVerb.connectingVowel = 'u'
    }
  }

  //reset for deponents
  if (chosenVerb.deponent) {
    console.log('deponent', chosenVerb.usedStem);
    chosenVerb.voice = 'active'
  }

  if (chosenVerb.person === 'firstPerson') {
    chosenVerb.person = 'first person'
  }
  if (chosenVerb.person === 'secondPerson') {
    chosenVerb.person = 'second person'
  }
  if (chosenVerb.person === 'thirdPerson') {
    chosenVerb.person = 'third person'
  }

  return chosenVerb
}
