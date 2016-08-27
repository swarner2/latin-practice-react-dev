import React from 'react';

export default class Word extends React.Component {
  handleClick(e){
    this.props.getWordInfo(this.props);
    this.props.toggleSetting('showHelp', true)
  }
  render() {
    return (
          <span className="word" onClick={this.handleClick.bind(this)}>{this.props.meaning}</span>
    )
  }
}
