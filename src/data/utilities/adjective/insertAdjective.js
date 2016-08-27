import utilities from '../utilities';
import CreateAdjective from './CreateAdjective'

export default function insertAdjective(sentence, caseUses, special){

  var nounForAdjective = sentence[utilities().random(caseUses)];
  sentence.adjective = new CreateAdjective(nounForAdjective);
  // console.log(nounForAdjective);
  sentence.english.forEach(function(noun, index, arr){
    if (nounForAdjective === noun) {
      //handle english
      if (special === undefined) {
        if ('prep' in noun) {
          noun.stem.english = noun.stem.english.replace(noun.prep.english + " the", '')
          sentence.adjective.stem.english = noun.prep.english + ' the ' + sentence.adjective.stem.english
        }
        else {
          noun.stem.english = noun.stem.english.replace("the", '')
          sentence.adjective.stem.english = ' the ' + sentence.adjective.stem.english
        }
        //add into sentence
        sentence.english.splice(index, 0, sentence.adjective)
        nounForAdjective = null;
      }
      else if (special === 'linkingVerb') {
        sentence.adjective.ending.caseUse = 'predicate nominative'
        sentence.english.push(sentence.adjective)
      }
    }
  })
    var nounForAdjective = sentence.adjective.modifies;

    sentence.latin.forEach(function(wordPart, index, arr){
      if (nounForAdjective.stem.english === wordPart.english) {
        if (special === 'linkingVerb') {
          sentence.latin.push(sentence.adjective.stem);
          sentence.latin.push(sentence.adjective.ending);
        }
        else{
          sentence.latin.splice(index + 2, 0, sentence.adjective.stem);
          sentence.latin.splice(index + 3, 0, sentence.adjective.ending);
        }
      }
    })
  return sentence;
}
