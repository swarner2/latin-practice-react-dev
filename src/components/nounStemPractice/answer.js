import React from 'react';

export default class Answer extends React.Component {

  render() {
    return (
          <h2  className="row text-center sentence">{this.props.answer}</h2>
    )
  }
}
