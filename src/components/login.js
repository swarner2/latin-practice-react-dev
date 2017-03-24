import React from 'react';

export default class Login extends React.Component {
  handleChange(e){
    if (this.props.user[e.target.name] === e.target.value) {
      this.props.user[e.target.name + 'Correct'] = true;
      console.log(this.props.user);
    }
    else {
      this.props.user[e.target.name + 'Correct'] = false;
    }
    console.log(e.target.name, e.target.value);
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
    if (this.props.user.usernameCorrect && this.props.user.passwordCorrect) {
      console.log('you may enter!');
    }
    else {
      console.log('you shall not pass!');
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center"> Login </h1>
        <p>{console.log(this.props.user)}</p>
        <div>
          <h3 className="text-center">User Name:
            <input
            name="username"
            onKeyPress={this.handleKeyPress.bind(this)}
            onChange={this.handleChange.bind(this)}
            autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
            type='text'/><br/>
          </h3>
          <h3 className="text-center">Password:
            <input
            name="password"
            onKeyPress={this.handleKeyPress.bind(this)}
            onChange={this.handleChange.bind(this)}
            autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
            type='text'/><br/>
            <input
            onClick={this.handleClick.bind(this)}
            type ='submit'/>
          </h3>
        </div>
      </div>
    )
  }
}
