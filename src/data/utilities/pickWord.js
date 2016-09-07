import utilities from './utilities';
import dictionaryFilter from './dictionaryFilter'

//pickWord takes a string to check the type of a noun
//any takes all nouns
//if more than one type can be present accept an array of the desired types.
export var pickWord = function(type, partOfSpeech, filter){
  var dictionary = dictionaryFilter(filter)
  var word;
  if (type === 'any') {
    word = utilities().random(dictionary[partOfSpeech]);
  }
  //  if it is an array of types one will be randomly selected here
  else if (Array.isArray(type)){
    var chosenType = utilities().random(type);
    filterForType = dictionary[partOfSpeech].filter ( function(x){
      return x.types == chosenType;
    })
    if (filterForType.length === 0) {
      word = utilities().random(dictionary[partOfSpeech]);
    }
    else {
      word = utilities().random(filterForType);
    }
  }

  // if one chosenType is given get it here
  else{
    word = utilities().random(dictionary[partOfSpeech].filter( function(x){
      return x.types == type;
    }));
  }
  // //if the word is already used in usedWords make a newWord
  // if(usedWords.indexOf(word) === -1){
  //   usedWords.push(word);
  if (partOfSpeech === 'adjectives') {
    if (word.declension === 'second' || word.declension === 'first') {
      console.log(word);
    }
  }
    return word;
  // }
  // else{
    //
    // return pickWord(type, partOfSpeech);
  // }
};
