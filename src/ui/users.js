import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="users">
        <ul>
          {this.props.users.map(function(user){
            return (
              <li key={user.id}>{user.fname} {user.lname}</li>
            )
          })}
        </ul>
      </div>
    )
  }
})