import React from 'react';

export default class OptionsChapters extends React.Component {
  handleChange(e){
    this.props.toggleSetting(e.target.name, e.target.value);
  }
  render() {
    return (

<div className="container" >
  <div className="row text-center">
    <div style={{color : 'white', paddingTop:"5px", paddingBottom:"5px", textShadow:"1px 1px 7px black"}}>Vocabulary Up To Chapter</div>
    <select name = "chapter" value={this.props.config.chapter} onChange={this.handleChange.bind(this)} >
      <option value = 'I'>I </option>
      <option value = 'II'>II </option>
      <option value = 'III'>III </option>
      <option value = 'IV'>IV </option>
      <option value = 'V'>V </option>
      <option value = 'VI'>VI </option>
      <option value = 'VII'>VII </option>
      <option value = 'VIII'>VIII </option>
      <option value = 'IX'>IX </option>
      <option value = 'X'>X </option>
      <option value = 'XI'>XI</option>
      <option value = 'XII'>XII</option>
      <option value = 'XIII'>XIII</option>
      <option value = 'XIV'>XIV</option>
      <option value = 'XV'>XV</option>
      <option value = 'XVI'>XVI</option>
      <option value = 'XVII'>XVII</option>
      <option value = 'XVIII'>XVIII</option>
      <option value = 'XIX'>XIX</option>
      <option value = 'XX'>XX</option>
      <option value = 'XXI'>XXI</option>
      <option value = 'XXII'>XXII</option>
      <option value = 'XXIII'>XXIII</option>
      <option value = 'XXIV'>XXIV</option>
      <option value = 'XXV'>XXV</option>
      <option value = 'XXVI'>XXVI</option>
      <option value = 'XXVII'>XXVII</option>
      <option value = 'XXVIII'>XXVIII</option>
      <option value = 'XXIX'>XXIX</option>
      <option value = 'XXX'>XXX</option>
      <option value = 'XXXI'>XXXI</option>
      <option value = 'XXXII'>XXXII</option>
      <option value = 'XXXIII'>XXXIII</option>
      <option value = 'XXXVI'>XXXVI</option>
    </select>
  </div>

</div>

    )
  }
}
