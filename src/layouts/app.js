import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <div className="app">
        <div className="header">
          <ul id="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/widgets">Widgets</Link></li>
            <li><Link to="/users/1">Mike</Link></li>
          </ul>
        </div>
        {this.props.children}
        <div clasName="footer">
          <p>&copy; 2016 TIY</p>
        </div>
      </div>
    );
  }
})