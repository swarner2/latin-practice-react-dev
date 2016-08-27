import React from 'react';
import _ from 'lodash';
import Word from './sentence/word.js';

export default class Sentence extends React.Component {

  renderWords(){
    return _.map(this.props.wordList, (word, index) => <Word key ={index} {...word} toggleSetting={this.props.toggleSetting} getWordInfo={this.props.getWordInfo}/>);
  }

  render() {
    return (
          <h2
            className="row text-center sentence"
            style={
              this.props.answerSentence === true ?
                this.props.config.showAnswer ?
                  {visibility : 'visible'} : {visibility : 'hidden'} :
                {}
              }
            >
            {this.renderWords()}
          </h2>
    )
  }
}
