import utilities from './utilities';
import {dictionary} from '../imports/adjectiveImport';
import {handleChapters} from './handleChapters';

export default function dictionaryFilter(){
  var chapters = handleChapters().chapters;
  function inChapters(word){
    return chapters.indexOf(word.chapter) !== -1
  }
  dictionary.nouns =  dictionary.nouns
  .filter(function(word){
    return inChapters(word);
  });

  dictionary.verbs =  dictionary.verbs
  .filter(function(word){
    return inChapters(word);
  });

  dictionary.adjectives =  dictionary.adjectives
  .filter(function(word){
    return inChapters(word);
  });

  return dictionary;

}
