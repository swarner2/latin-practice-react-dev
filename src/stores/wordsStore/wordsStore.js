import { EventEmitter } from 'events';
import dispatcher from '../../dispatcher';
import _ from 'lodash'
import chooseSentence from '../../data/utilities/sentences/chooseSentence';
import {newWordList} from './utilities/newWordList'
import Config from '../config/config'
import {pickWord} from '../../data/utilities/pickWord'

class WordsStore extends EventEmitter {
  constructor(){
    super();
    this.generatedSentence = chooseSentence(['transitiveSentence'],Config.stats.chapter, Config.stats.section)
    this.wordList = newWordList(this.generatedSentence)
    this.randomAdjective = pickWord('any', 'adjectives')
    this.randomNoun = pickWord('any', 'nouns')
    this.randomVerb = pickWord('any', 'verbs')
  }

  getAll() {
    return {wordList: this.wordList, generatedSentence: this.generatedSentence};
  }

  handleActions(action) {
    switch(action.type){
      case "NEW_QUESTION": {
        if (action.question === 'sentence') {
          var newSent = chooseSentence('transitiveSentence');
          this.generatedSentence = newSent
          this.wordList = newWordList(newSent)
          this.emit('change')
          break
        }
        if (action.question === 'noun') {
          this.randomNoun = pickWord('any', 'nouns')
          this.emit('change');
          break
        }
      }
    }
  }

}
const wordsStore = new WordsStore;
dispatcher.register(wordsStore.handleActions.bind(wordsStore))

export default wordsStore;
