import { EventEmitter } from 'events';
import dispatcher from '../../dispatcher';

class GetWordInfoStore extends EventEmitter {
  constructor(){
    super();
    this.clickedWord = {
      info: {
        title: ""
      }
    };
  }
  getWordInfo(word) {
    this.clickedWord = word;
    this.emit('change')
  }

  handleActions(action) {
    switch(action.type){
      case "GET_WORD_INFO": {
        this.getWordInfo(action.word)
        break
      }
    }
  }

}
const getWordInfoStore = new GetWordInfoStore;
dispatcher.register(getWordInfoStore.handleActions.bind(getWordInfoStore))

export default getWordInfoStore;
