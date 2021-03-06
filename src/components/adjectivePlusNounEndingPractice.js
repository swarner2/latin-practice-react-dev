import React from 'react';
import Answer from './nounStemPractice/answer'
import SentenceInput from './sentence-container/sentence-input.js'
import OptionsDeclensions from './sentence-container/optionsDeclensions'

export default class AdjectivePlusNounEndingPractice extends React.Component {
  render() {
    return (
      <div className="container">
            <h1 className="text-center">Adjective Plus Noun Ending Practice</h1>
            <h2 className="text-center sentence">
              <div>{this.props.randomNoun.dictionaryEntry}</div>
              <div>{this.props.randomNoun.adjective.dictionaryEntry}</div>
            </h2>
            <h3 className=" text-center sentence">
              <div>{ this.props.randomNoun.case + " " + this.props.randomNoun.adjective.number}</div>
            </h3>

            <Answer answer={  this.props.randomNoun.stem + this.props.randomNoun.ending + " " + this.props.randomNoun.adjective.stem + this.props.randomNoun.adjective.ending} config={this.props.config} answerSentence={true}/>
            <SentenceInput
              answer={[this.props.randomNoun.stem + this.props.randomNoun.ending + " " + this.props.randomNoun.adjective.stem + this.props.randomNoun.adjective.ending]}
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
//   <div>{this.props.randomNoun.adjective.dictionaryEntry + " | " + "Case: " + this.props.randomNoun.adjective.case + " | " +  "Number: " + this.props.randomNoun.adjective.number}</div>
//   <div>{this.props.randomNoun.adjective.stem + this.props.randomNoun.adjective.ending + /n}</div>
// </div>
