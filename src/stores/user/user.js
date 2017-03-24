import { EventEmitter } from 'events';

import dispatcher from '../../dispatcher'
import { checkUser } from './utilities/checkUser'

class Config extends EventEmitter {
  constructor(){
    super()
    this.stats = {
        username : '1234',
        usernameCorrect : false,
        password : 'asdf',
        passwordCorrect: false,
      }
  }

  getAll() {
    return this.stats;
  }

  handleActions(action) {
    switch(action.type){
      case "CHECK_USER": {
        this.stats.answerIsCorrect = checkCorrect(action.input, action.correctAnswer);
        this.emit('change')
        break
      }
      case "TOGGLE_SETTING": {
        action.toggleTo ?
          this.stats[action.setting] = action.toggleTo :
          this.stats[action.setting] = this.stats[action.setting] ? false : true;
        this.emit('change')
        break
      }
    }
  }

}

const config = new Config;
dispatcher.register(config.handleActions.bind(config))

export default config;
