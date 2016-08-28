import React from 'react';
import Answer from './nounStemPractice/answer'
import SentenceInput from './sentence-container/sentence-input.js'
import OptionsDeclensions from './sentence-container/optionsDeclensions'

export default class VerbStemPractice extends React.Component {
  render() {
    return (
      <div className="container">
            <h1 className="text-center">Verb Stem Practice</h1>
            <h2
            className="row text-center sentence">
            {this.props.randomVerb.dictionaryEntry}

            </h2>
            <h4 className="row text-center sentence">
              {'Give the: present stem, perfect stem, participle stem'}
            </h4>
            <Answer answer={this.props.randomVerb.presentStem + ', ' + this.props.randomVerb.perfectStem + ', ' + this.props.randomVerb.participleStem} config={this.props.config} answerSentence={true}/>
            <SentenceInput
              answer={[this.props.randomVerb.presentStem + ', ' + this.props.randomVerb.perfectStem + ', ' + this.props.randomVerb.participleStem]}
              question={'verb'}
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
