import React from 'react';

export default class OptionsDeclensions extends React.Component {
  handleChange(e){
    console.log(e.target);
    this.props.toggleSetting(e.target.name);
  }
  render() {
    return (

<div className="container" >
  <div style={{color : 'white', paddingTop:"5px", paddingBottom:"5px", textShadow:"1px 1px 7px black"}} className="row text-center">Vocabulary Up To Chapter
    <div>
      <div>
        <input value={this.props.config.chapter} onChange={this.handleChange.bind(this)}  checked={this.props.config.firstDeclension} type="checkbox" name="firstDeclension" value="first"/>First Declension
      </div>
      <div>
        <input value={this.props.config.chapter} onChange={this.handleChange.bind(this)}  checked={this.props.config.secondDeclension} type="checkbox" name="secondDeclension" value="second"/>Second Declension
      </div>
      <div>
        <input value={this.props.config.chapter} onChange={this.handleChange.bind(this)}  checked={this.props.config.thirdDeclension} type="checkbox" name="thirdDeclension" value="third"/>Third Declension
      </div>
      <div>
        <input value={this.props.config.chapter} onChange={this.handleChange.bind(this)}  checked={this.props.config.fourthDeclension} type="checkbox" name="fourthDeclension" value="fourth"/>Fourth Declension
      </div>
      <div>
        <input value={this.props.config.chapter} onChange={this.handleChange.bind(this)}  checked={this.props.config.fifthDeclension} type="checkbox" name="fifthDeclension" value="fifth"/>Fifth Declension
      </div>
    </div>
  </div>
</div>

    )
  }
}
