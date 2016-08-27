import React from 'react';
import Answer from './nounStemPractice/answer'
import SentenceInput from './sentence-container/sentence-input.js'
import OptionsDeclensions from './sentence-container/optionsDeclensions'

export default class NounEndingPractice extends React.Component {
  render() {
    return (
      <div className="container">
            <h1 className="text-center">Noun Ending Practice</h1>
            <h2 className="text-center sentence">
              { this.props.randomNoun.dictionaryEntry}
            </h2>
            <h3 className=" text-center sentence">
              <div>{"Case: " + this.props.randomNoun.case + " "}</div>
              <div>{"Number: " + this.props.randomNoun.number}</div>
            </h3>

            <Answer answer={this.props.randomNoun.stem + this.props.randomNoun.ending} config={this.props.config} answerSentence={true}/>
            <SentenceInput
              answer={[this.props.randomNoun.stem + this.props.randomNoun.ending]}
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
