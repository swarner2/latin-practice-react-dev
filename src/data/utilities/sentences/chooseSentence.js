import sentenceStructuresUsed from './sentenceStructuresUsed';
import utilities from '../utilities';

export default function chooseSentence(types, chapter, section){
  var chosenSentence = function (type){
    return type();
  };
  return chosenSentence(utilities().random(sentenceStructuresUsed()));
}
