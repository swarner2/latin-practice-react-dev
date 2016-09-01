import React from 'react';
import * as SentenceActions from '../actions/sentence-actions.js'
import NavBar from '../components/navBar.js'
import WordsStore from '../stores/wordsStore/wordsStore.js'
import Config from '../stores/config/config.js'
import GetWordInfoStore from '../stores/getWordInfo/getWordInfo.js'
import AdjectivePlusNounEndingPractice from '../components/adjectivePlusNounEndingPractice'

export default class appAdjectivePlusNounEndingPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedWord : GetWordInfoStore.clickedWord,
      config : Config.getAll(),
      randomNoun : WordsStore.randomNoun,
      wordList : WordsStore.wordList,
    };
  }

  componentWillMount() {
    Config.on('change', () => {
      this.setState({
        config : Config.getAll(),
      });
    });
    GetWordInfoStore.on('change', () => {
      this.setState({
        clickedWord : GetWordInfoStore.clickedWord
      });
    });
    WordsStore.on('change', () => {
      this.setState({
        generatedSentence : WordsStore.generatedSentence,
        wordList : WordsStore.wordList,
        randomNoun : WordsStore.randomNoun,
        randomAdjective : WordsStore.randomAdjective,
        randomNoun : WordsStore.randomNoun,
      });
    });
  }

  checkCorrect(value, answer){
    SentenceActions.checkCorrect(value, answer)
  }
  getWordInfo(word) {
    SentenceActions.getWordInfo(word)
  }
  newQuestion(question){
    SentenceActions.newQuestion(question)
  }
  toggleSetting(setting, toggleTo) {
    SentenceActions.toggleSetting(setting, toggleTo);
  }

  render() {
    return (
      <div>
        <AdjectivePlusNounEndingPractice
          checkCorrect={this.checkCorrect.bind(this)}
          randomNoun={this.state.randomNoun}
          config={this.state.config}
          newQuestion={this.newQuestion.bind(this)}
          toggleSetting={this.toggleSetting.bind(this)}
        />
      </div>
    )
  }
}
