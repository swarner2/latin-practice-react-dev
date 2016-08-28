import { EventEmitter } from 'events';
import dispatcher from '../../dispatcher';
import _ from 'lodash'
import chooseSentence from '../../data/utilities/sentences/chooseSentence';
import {newWordList} from './utilities/newWordList'
import Config from '../config/config'
import {pickWord} from '../../data/utilities/pickWord'
import utilities from '../../data/utilities/utilities'
import {grammar} from '../../data/grammars/verbGrammar'

class WordsStore extends EventEmitter {
  constructor(){
    super();
    this.generatedSentence = chooseSentence(['transitiveSentence'],Config.stats.chapter, Config.stats.section)
    this.wordList = newWordList(this.generatedSentence)
    this.randomAdjective = pickWord('any', 'adjectives')
    this.randomNoun = pickWord('any', 'nouns', 'declension')
    this.randomNoun.case = utilities().random(['nominative', 'genitive', 'accusative', 'ablative', 'dative'])
    this.randomNoun.number = utilities().random(['sg','pl'])
    if (this.randomNoun.gender === 'C') {
      this.randomNoun.gender = 'M';
    }
    this.randomNoun.ending = grammar[this.randomNoun.case][this.randomNoun.number][this.randomNoun.declension + this.randomNoun.gender]
    this.randomNoun.trueStem = this.randomNoun.stem;
    if (this.randomNoun.ending === 'firstDict') {
      console.log(this.randomNoun.trueStem);
      this.randomNoun.stem = this.randomNoun.firstDict;
      this.randomNoun.ending = '';
    }
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
          var noun = pickWord('any', 'nouns', 'declension')
          this.randomNoun = noun;
          this.randomNoun.case = utilities().random(['nominative', 'genitive', 'accusative', 'ablative', 'dative'])
          this.randomNoun.number = utilities().random(['sg','pl'])
          if (this.randomNoun.gender === 'C') {
            this.randomNoun.gender = 'M';
          }
          this.randomNoun.ending = grammar[this.randomNoun.case][this.randomNoun.number][this.randomNoun.declension + this.randomNoun.gender]
          this.randomNoun.trueStem = this.randomNoun.stem
          if (this.randomNoun.ending === 'firstDict') {
            console.log(this.randomNoun.trueStem);
            this.randomNoun.stem = this.randomNoun.firstDict;
            this.randomNoun.ending = '';
          }          this.emit('change');
          break
        }
      }
    }
  }

}
const wordsStore = new WordsStore;
dispatcher.register(wordsStore.handleActions.bind(wordsStore))

export default wordsStore;
