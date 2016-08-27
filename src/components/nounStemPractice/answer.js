import React from 'react';

export default class Answer extends React.Component {

  render() {
    return (
          <h2  className="row text-center sentence"
            style={
              this.props.answerSentence === true ?
                this.props.config.showAnswer ?
                  {visibility : 'visible'} : {visibility : 'hidden'} :
                {}
              }>
          {this.props.answer}</h2>
    )
  }
}
