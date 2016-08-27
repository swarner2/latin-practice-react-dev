import transitiveSentence from './transitiveSentence';
import intransitiveSentence from './intransitiveSentence';
import passiveSentence from './passiveSentence';
import linkingVerbSentence from './linkingVerbSentence';
import {handleChapters} from '../handleChapters'
import utilities from '../utilities';

export default function sentenceStructuresUsed(){

  var chapters = handleChapters().chapters;

  var structureChapters = {
    linkingVerbSentence : 'I',
    transitiveSentence : 'III',
    intransitiveSentence : 'III',
    passiveSentence : 'VI',
  }

  var functionMap = {
    linkingVerbSentence : linkingVerbSentence,
    transitiveSentence : transitiveSentence,
    intransitiveSentence : intransitiveSentence,
    passiveSentence : passiveSentence,  }

  var result = []

  for(var sentence in structureChapters){
    if (chapters.indexOf(structureChapters[sentence]) !== -1) {
      result.push(functionMap[sentence])
    }
  }

  return result;
}
