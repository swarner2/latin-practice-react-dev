import React from 'react';
import Login from '../components/login.js'
import User from '../stores/user/user.js'

export default class appLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user : User.getAll(),
    };
  }
  componentWillMount() {
    User.on('change', () => {
      this.setState({
        user : User.getAll(),
      });
    });
  }
  render() {
    return (
      <div>
        <Login
            user = {this.state.user}
        />
      </div>
    )
  }
}
