import React from 'react';
import _ from 'lodash';

export default class Card extends React.Component {

  renderHelp(){
    return _.map(this.props.other, (item, index) => <div className={'cardInfo'} key={this.props.title + '-' + index}>
      <span><b>{index + ": "}</b></span>
      <span>{item}</span>
      </div>);
  }

  render() {
    return (
        <div className="row">
          <h4 className="col-xs-12" id={'cardTitle'}>
            <b>{this.props.title}</b><i> {this.props.titleDescription}</i>
          </h4>
          <div id='cardInfoDiv' className="col-xs-12" >
            {this.renderHelp()}
          </div>
        </div>
    )
  }
}
