import React from 'react';
import Sentence from '../components/sentence-container/sentence.js'
import SentenceInput from '../components/sentence-container/sentence-input.js'
import WordHelp from '../components/sentence-container/word-help.js'
import Options from '../components/sentence-container/options.js'

export default class SentencesContainer extends React.Component {
  render() {
    return (
      <div className="container">
      <h1 className="text-center"> Latin Sentence Generator </h1>
      {this.props.config.showHelp ?
        <WordHelp
          clickedWord={this.props.clickedWord}
          showHelp={this.props.config.showHelp}
          toggleSetting={this.props.toggleSetting}
          />  :
          <div>
            <Sentence
              config={this.props.config}
              getWordInfo={this.props.getWordInfo}
              wordList={this.props.wordList.english}
              toggleSetting={this.props.toggleSetting}
              />
            <Sentence
              answerSentence = {true}
              config={this.props.config}
              getWordInfo={this.props.getWordInfo}
              wordList={this.props.wordList.latin}
              toggleSetting={this.props.toggleSetting}
              />
          </div>
      }
        <SentenceInput
          answer={this.props.wordList.latin}
          question={'sentence'}
          checkCorrect={this.props.checkCorrect}
          config={this.props.config}
          newQuestion={this.props.newQuestion}
          toggleSetting={this.props.toggleSetting}
          />
        <Options
        config={this.props.config}
        toggleSetting={this.props.toggleSetting}
        />
      </div>

    )
  }
}
