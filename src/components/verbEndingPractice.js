import React from 'react';
import Answer from './nounStemPractice/answer'
import SentenceInput from './sentence-container/sentence-input.js'
import OptionsVerbs from './sentence-container/optionsVerbs'

export default class VerbEndingPractice extends React.Component {
  render() {
    return (
      <div className="container">
            <h1 className="text-center">Verb Ending Practice</h1>
            <h2
              className="row text-center sentence">
              {this.props.randomVerb.dictionaryEntry}
              {this.props.randomVerb.subject}
            </h2>
            <h4 className="row text-center sentence">{this.props.randomVerb.person + " | " + this.props.randomVerb.number + " | " + this.props.randomVerb.tense + " | " + this.props.randomVerb.voice + " | " + this.props.randomVerb.mood }{this.props.randomVerb.gender !== undefined ? " | "  +  this.props.randomVerb.gender : ''}</h4>
            <Answer answer={this.props.randomVerb.usedStem + this.props.randomVerb.connectingVowel + this.props.randomVerb.ending} config={this.props.config} answerSentence={true}/>
            <SentenceInput
              answer={[this.props.randomVerb.usedStem + this.props.randomVerb.connectingVowel + this.props.randomVerb.ending]}
              question={'verb'}
              checkCorrect={this.props.checkCorrect}
              config={this.props.config}
              newQuestion={this.props.newQuestion}
              toggleSetting={this.props.toggleSetting}
              myStyle={''}
            />
            <OptionsVerbs
              config={this.props.config}
              toggleSetting={this.props.toggleSetting}
            />
        </div>
    )
  }
}
