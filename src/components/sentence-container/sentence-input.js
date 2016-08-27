import React from 'react';

export default class SentenceInput extends React.Component {

  handleChange(e){
    //check to see if answer is correct
    const value = e.target.value;
    this.props.checkCorrect(value, this.props.answer);

    //set the shadow color based on input
    var input = document.getElementById('inputForAnswer');
    if (input.value === '') {
      input.style.textShadow = '';
    }
    else {
      input.style.textShadow = this.props.config.answerIsCorrect ?
        '2px 2px 10px #0555ff' : '2px 2px 10px red';
    }
  }
  handleClick(e){
    this.hitButton(e);
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.hitButton(e);
    }
  }

  hitButton (e){
    if(this.props.config.showAnswer){
      //make a new sentence if the correct sentence was shown
      this.props.newSentence();
      //reset the input field to restart
      var input = document.getElementById('inputForAnswer');
      input.value = '';
      input.style.textShadow = '';
      input.focus();
      //hide the helper card if it is showing
      if(this.props.config.showHelp){
        this.props.toggleSetting('showHelp');
      }
    }
    //switch show answer's value the answer again
    this.props.toggleSetting('showAnswer');
  }

  render() {
    var input = document.getElementById('inputForAnswer');
    return (
      <div className="row text-center">
        <input onKeyPress={this.handleKeyPress.bind(this)} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" className="text-center" id='inputForAnswer' autoFocus type="text" placeholder="Type your answer here!" onChange={this.handleChange.bind(this)}/>
        <div>
        <button className="btn btn-primary" onClick={this.handleClick.bind(this)}>{this.props.config.showAnswer ? 'New Sentence' : 'Show Answer'}</button>
        </div>
      </div>
    )
  }
}
