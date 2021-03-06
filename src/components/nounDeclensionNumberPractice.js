import React from 'react';
import Answer from './nounStemPractice/answer'
import SentenceInput from './sentence-container/sentence-input.js'
import OptionsDeclensions from './sentence-container/optionsDeclensions'

export default class NounDeclensionNumberPractice extends React.Component {
  render() {
    return (
      <div className="container">
            <h1 className="text-center">Noun Declension Number Practice</h1>
            <h2 className="text-center sentence">
              { this.props.randomNoun.dictionaryEntry}
            </h2>

            <Answer answer={this.props.randomNoun.declension} config={this.props.config} answerSentence={true}/>
            <SentenceInput
              answer={[this.props.randomNoun.declension]}
              question={'noun'}
              checkCorrect={this.props.checkCorrect}
              config={this.props.config}
              newQuestion={this.props.newQuestion}
              toggleSetting={this.props.toggleSetting}
              myStyle={''}
              />
            <OptionsDeclensions
              config={this.props.config}
              toggleSetting={this.props.toggleSetting}
            />

        </div>
    )
  }
}

//
// <div style={color: 'green';}>
//   <div>{this.props.randomNoun.dictionaryEntry + " | " + "Case: " + this.props.randomNoun.case + " | " +  "Number: " + this.props.randomNoun.number}</div>
//   <div>{this.props.randomNoun.stem + this.props.randomNoun.ending + /n}</div>
// </div>
