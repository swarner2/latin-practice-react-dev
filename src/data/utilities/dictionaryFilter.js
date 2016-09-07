import utilities from './utilities';
import {dictionary} from '../imports/adjectiveImport';
import {handleChapters} from './handleChapters';
import Config from '../../stores/config/config'

export default function dictionaryFilter(filter){
  var filteredDictionary = {};
  if (filter === 'declension') {
    var usedDeclensions = [];
    if(Config.stats.firstDeclension) {
      usedDeclensions.push('first');
    }
    if(Config.stats.secondDeclension) {
      usedDeclensions.push('second');
    }
    if(Config.stats.thirdDeclension) {
      usedDeclensions.push('third');
    }
    if(Config.stats.fourthDeclension) {
      usedDeclensions.push('fourth');
    }
    if(Config.stats.fifthDeclension) {
      usedDeclensions.push('fifth');
    }
    if (usedDeclensions.length === 0) {
      return dictionary;
    }
    filteredDictionary.nouns =  dictionary.nouns
    .filter(function(word){
      return usedDeclensions.indexOf(word.declension) !== -1;
    });
  }
  else {
    var chapters = handleChapters().chapters;
    function inChapters(word){
      return chapters.indexOf(word.chapter) !== -1
    }
    filteredDictionary.nouns =  dictionary.nouns
    .filter(function(word){
      return inChapters(word);
    });

    filteredDictionary.verbs =  dictionary.verbs
    .filter(function(word){
      return inChapters(word);
    });

    filteredDictionary.adjectives =  dictionary.adjectives
    .filter(function(word){
      return inChapters(word);
    });

     }
  return filteredDictionary;

}
