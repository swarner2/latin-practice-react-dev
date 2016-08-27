import React from 'react';
import Answer from './nounStemPractice/answer'
import SentenceInput from './sentence-container/sentence-input.js'

export default class NounStemPractice extends React.Component {
  render() {
    return (
      <div className="container">
            <h2
            className="row text-center sentence">
            {this.props.randomNoun.dictionaryEntry}
            </h2>
            <Answer answer={this.props.randomNoun.stem} answerSentence={true}/>
            <SentenceInput
              answer={[this.props.randomNoun.stem]}
              checkCorrect={this.props.checkCorrect}
              config={this.props.config}
              newSentence={this.props.newSentence}
              toggleSetting={this.props.toggleSetting}
              myStyle={''}
              />
        </div>
    )
  }
}
