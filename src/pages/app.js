import React from 'react';
import * as SentenceActions from '../actions/sentence-actions.js'
import NavBar from '../components/navBar.js'
import WordsStore from '../stores/wordsStore/wordsStore.js'
import Config from '../stores/config/config.js'
import GetWordInfoStore from '../stores/getWordInfo/getWordInfo.js'

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
        {this.props.children}
      </div>
    )
  }
}
