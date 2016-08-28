import { EventEmitter } from 'events';
import dispatcher from '../../dispatcher';
import _ from 'lodash'
import chooseSentence from '../../data/utilities/sentences/chooseSentence';
import {newWordList} from './utilities/newWordList'
import Config from '../config/config'
import NewRandomVerb from './utilities/NewRandomVerb'
import NewRandomNoun from './utilities/NewRandomNoun'

class WordsStore extends EventEmitter {
  constructor(){
    super();
    this.generatedSentence = chooseSentence(['transitiveSentence'],Config.stats.chapter, Config.stats.section)
    this.wordList = newWordList(this.generatedSentence)
    this.randomNoun = NewRandomNoun(Config.stats);
    this.randomVerb = NewRandomVerb(Config.stats);
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
          this.randomNoun = NewRandomNoun(Config.stats)
        }
        if (action.question === 'verb') {
          this.randomVerb = NewRandomVerb(Config.stats);
        }
          this.emit('change');
          break
      }
    }
  }

}
const wordsStore = new WordsStore;
dispatcher.register(wordsStore.handleActions.bind(wordsStore))

export default wordsStore;
