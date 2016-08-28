import React from 'react';
import Answer from './nounStemPractice/answer'
import SentenceInput from './sentence-container/sentence-input.js'

export default class NounStemPractice extends React.Component {
  render() {
    return (
      <div className="container">
            <h1 className="text-center">Noun Stem Practice</h1>
            <h2
            className="row text-center sentence">
            {this.props.randomNoun.dictionaryEntry}
            </h2>
            <Answer answer={this.props.randomNoun.trueStem} config={this.props.config} answerSentence={true}/>
            <SentenceInput
              answer={[this.props.randomNoun.trueStem]}
              question={'noun'}
              checkCorrect={this.props.checkCorrect}
              config={this.props.config}
              newQuestion={this.props.newQuestion}
              toggleSetting={this.props.toggleSetting}
              myStyle={''}
              />
        </div>
    )
  }
}
