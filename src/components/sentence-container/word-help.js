import React from 'react';
import Card from './word-help/card.js';

export default class WordHelp extends React.Component {
  handleClick(e){
    this.props.toggleSetting('showHelp');
  }
  render() {
    return (

<content onClick={this.handleClick.bind(this)}
  style={this.props.showHelp ? {visibility : 'visible'} : {visibility : 'hidden'}}
  >
  <ul className='noteCard'>
    <li className="container"  >
        <Card
          partOfSpeech={this.props.clickedWord.info.partOfSpeech}
          title={this.props.clickedWord.info.title}
          titleDescription={this.props.clickedWord.info.titleDescription}
          other={this.props.clickedWord.info.other}
          />
    </li>
  </ul>
</content>

    )
  }
}
// <content onClick={this.handleClick.bind(this)}
//   style={this.props.showHelp ? {visibility : 'visible'} : {visibility : 'hidden'}}>
//   <WordStat
//     partOfSpeech={this.props.clickedWord.info.partOfSpeech}
//     title={this.props.clickedWord.info.title}
//     titleDescription={this.props.clickedWord.info.titleDescription}
//     other={this.props.clickedWord.info.other}
//     />
// </content>
