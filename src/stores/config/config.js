import { EventEmitter } from 'events';

import dispatcher from '../../dispatcher'
import { checkCorrect } from './utilities/checkCorrect'

class Config extends EventEmitter {
  constructor(){
    super()
    this.stats = {
        answerIsCorrect : true,
        showHelp : false,
        showAnswer : false,

        //chapter config
        chapter : 'XXXIV',
        section : '3',

        //noun config
        firstDeclension : true,
        secondDeclension : true,
        thirdDeclension : true,
        fourthDeclension : true,
        fifthDeclension : true,

        //verb config
        present: true,
        imperfect: true,
        perfect: true,
        future: true,
        pluperfect: true,
        futurePerfect: true,
        activeVoice : true,
        passiveVoice : true,
        indicativeMood : true,
        subjunctiveMood : false,
        imperativeMood : false,
        firstPerson : true,
        secondPerson : true,
        thirdPerson : true,

        //noun translation config
        //nomincative
        subject : true,
        predicateNominative : true,
        //genitive
        possession : true,
        //dative
        indirectObject : true,
        //accusative
        directObject : true,
        placeToWhere : true,
        placeWithinWhich : true,
        accusativeSubject : true,
        placeToWhereCities : true,
        //ablative
        placeWhere : true,
        agent : true,
        accompaniment : true,
        placeFrom : true,
        placeFromCities: true,
        instrument : true,
        //vocative
        directAddress : true,
        //locative
        placeWhereCities : true,
      }
  }

  getAll() {
    return this.stats;
  }

  handleActions(action) {
    switch(action.type){
      case "CHECK_CORRECT": {
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
