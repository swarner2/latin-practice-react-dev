import React from 'react';
import * as SentenceActions from '../actions/sentence-actions.js'
import SentenceContainer from './sentence-container.js'
import NavBar from './navBar.js'
import WordsStore from '../stores/wordsStore/wordsStore.js'
import Config from '../stores/config/config.js'
import GetWordInfoStore from '../stores/getWordInfo/getWordInfo.js'
import NounStemPractice from './nounStemPractice'
//import VocabularyList from './vocabularyList.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedWord : GetWordInfoStore.clickedWord,
      config : Config.getAll(),
      generatedSentence : WordsStore.generatedSentence,
      randomNoun : WordsStore.randomNoun,
      randomAdjective : WordsStore.randomAdjective,
      randomVerb : WordsStore.randomVerb,
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
        randomVerb : WordsStore.randomVerb,
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
        <NavBar/>
        <SentenceContainer
            checkCorrect={this.checkCorrect.bind(this)}
            clickedWord={this.state.clickedWord}
            config={this.state.config}
            getWordInfo={this.getWordInfo.bind(this)}
            newQuestion={this.newQuestion.bind(this)}
            toggleSetting={this.toggleSetting.bind(this)}
            wordList={ this.state.wordList }
        />
        <NounStemPractice
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
