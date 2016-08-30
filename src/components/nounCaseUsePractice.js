import React from 'react';
import Answer from './nounStemPractice/answer'
import SentenceInput from './sentence-container/sentence-input.js'
import OptionsCaseUse from './sentence-container/optionsCaseUse'

export default class NounCaseUsePractice extends React.Component {
  render() {
    return (
      <div className="container">
            <h1 className="text-center">Noun Case Use English Practice</h1>
            <h2 className="text-center sentence">
              { this.props.randomNoun.translation}
            </h2>
            <h3 className=" text-center sentence">
              <div>Give the Case and Case Use</div>
            </h3>

            <Answer answer={this.props.randomNoun.case + " " + this.props.randomNoun.nonCamelCaseUse} config={this.props.config} answerSentence={true}/>
            <SentenceInput
              answer={[this.props.randomNoun.case + " " + this.props.randomNoun.nonCamelCaseUse]}
              question={'noun'}
              checkCorrect={this.props.checkCorrect}
              config={this.props.config}
              newQuestion={this.props.newQuestion}
              toggleSetting={this.props.toggleSetting}
              myStyle={''}
              />
            <OptionsCaseUse
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
