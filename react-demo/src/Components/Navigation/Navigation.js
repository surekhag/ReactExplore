import React from 'react';
import './Navigation.scss';
import { connect } from 'react-redux';
import react, { Component } from 'react';
import { clearUserData } from '../../actions/loginAction';

class Navigation extends Component {
  clearDataHandler = () => {
    this.props.clearGlobalUserData();
  };

  render() {
    return (
      <div className="navigation">
        <ul className="menu">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/featured products"> Featured Products </a>
          </li>
          <li>
            {this.props.profile_user_name ? (
              <span className="logout" onClick={this.clearDataHandler}>
                {' '}
                Logout{' '}
              </span>
            ) : (
              ''
            )}
          </li>
        </ul>
        <span class="userName">
          {' '}
          {this.props.profile_user_name
            ? 'Welcome ' + this.props.profile_user_name + '!'
            : ''}{' '}
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile_user_name: state.profile_user_name
  };
};
const mapDispatchToProps = dispatch => ({
  clearGlobalUserData: () => dispatch(clearUserData())
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
