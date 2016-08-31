import React from 'react';

export default class OptionsCaseUse extends React.Component {
  handleChange(e){
    console.log(e.target);
    this.props.toggleSetting(e.target.name);
  }
  render() {
    return (

<div className="container" >
  <div style={{color : 'white', paddingTop:"5px", paddingBottom:"5px", textShadow:"1px 1px 7px black"}} className="row text-center">Declension Up To Chapter
    <div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.subject} type="checkbox" name="subject" value="first"/>subject
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.predicateNominative} type="checkbox" name="predicateNominative" value="second"/>predicate
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.possession} type="checkbox" name="possession" value="third"/>possession
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.indirectObject} type="checkbox" name="indirectObject" value="fourth"/>indirect object
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.directObject} type="checkbox" name="directObject" value="fifth"/>direct object
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.placeToWhere} type="checkbox" name="placeToWhere" value="fifth"/>place to
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.placeWithinWhich} type="checkbox" name="placeWithinWhich" value="fifth"/>place within
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.accusativeSubject} type="checkbox" name="accusativeSubject" value="fifth"/>subject of indirect statement
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.placeToWhereCities} type="checkbox" name="placeToWhereCities" value="fifth"/>place to (Cities/islands)
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.placeWhere} type="checkbox" name="placeWhere" value="fifth"/>place where
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.placeFrom} type="checkbox" name="placeFrom" value="fifth"/>place from
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.agent} type="checkbox" name="agent" value="fifth"/>agent
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.instrument} type="checkbox" name="instrument" value="fifth"/>instrument
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.accompaniment} type="checkbox" name="accompaniment" value="fifth"/>accompaniment
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.directAddress} type="checkbox" name="directAddress" value="fifth"/>direct address
      </div>
      <div>
        <input  onChange={this.handleChange.bind(this)}  checked={this.props.config.placeWhereCities} type="checkbox" name="placeWhereCities" value="fifth"/>place where cities
      </div>
    </div>
  </div>
</div>
    )
  }
}
