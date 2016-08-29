import React from 'react';

export default class OptionsVerbs extends React.Component {
  handleChange(e){
    console.log(e.target);
    this.props.toggleSetting(e.target.name);
  }
  render() {
    return (

<div className="container" >
  <div style={{color : 'white', paddingTop:"5px", paddingBottom:"5px", textShadow:"1px 1px 7px black"}} className="row text-center">
    <div className="col-sm-4">
      <h4>Tense</h4>
      <div>
        <input onChange={this.handleChange.bind(this)}  checked={this.props.config.present} type="checkbox" name="present" value="present"/>Present
      </div>
      <div>
        <input onChange={this.handleChange.bind(this)}  checked={this.props.config.imperfect} type="checkbox" name="imperfect" value="imperfect"/>Imperfect
      </div>
      <div>
        <input onChange={this.handleChange.bind(this)}  checked={this.props.config.future} type="checkbox" name="future" value="future"/>Future
      </div>
      <div>
        <input onChange={this.handleChange.bind(this)}  checked={this.props.config.perfect} type="checkbox" name="perfect" value="perfect"/>Perfect
      </div>
      <div>
        <input onChange={this.handleChange.bind(this)}  checked={this.props.config.pluperfect} type="checkbox" name="pluperfect" value="pluperfect"/>Pluperfect
      </div>
      <div>
        <input onChange={this.handleChange.bind(this)}  checked={this.props.config.futurePerfect} type="checkbox" name="futurePerfect" value="futurePerfect"/>Future Perfect
      </div>
    </div>
    <div className="col-sm-4">
      <h4>Person</h4>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.firstPerson} type="checkbox" name="firstPerson" value="firstPerson"/>First
      </div>
      <div>
        <input onChange={this.handleChange.bind(this)}  checked={this.props.config.secondPerson} type="checkbox" name="secondPerson" value="secondPerson"/>Second
      </div>
      <div>
        <input onChange={this.handleChange.bind(this)}  checked={this.props.config.thirdPerson} type="checkbox" name="thirdPerson" value="thirdPerson"/>Third
      </div>
    </div>
    <div  className="col-sm-4">
      <h4>Voice</h4>
      <div>
        <input onChange={this.handleChange.bind(this)}  checked={this.props.config.activeVoice} type="checkbox" name="activeVoice" value="activeVoice"/>Active
      </div>
      <div>
        <input onChange={this.handleChange.bind(this)}  checked={this.props.config.passiveVoice} type="checkbox" name="passiveVoice" value="passiveVoice"/>Passive
      </div>
    </div>
  </div>
</div>
    )
  }
}
