import React from 'react';
import Users from 'ui/users';
import { getUsers } from 'api/data';

export default React.createClass({
  getInitialState: function () {
    return {
      users: []
    }
  },
  componentWillMount: function () {
    var _this = this;
    var id = 0;
    if (this.props.params) {
      id = this.props.params.userId
    }

    getUsers(id).then(function(resp){
      _this.setState({
        users: resp.data
      });
    }).catch(function(err){
      console.error(err);
    });
  },
  componentWillReceiveProps: function (nextProps) {
    var _this = this;
    var id = 0;
    if (nextProps.params) {
      id = nextProps.params.userId
    }

    getUsers(id).then(function(resp){
      _this.setState({
        users: resp.data
      });
    }).catch(function(err){
      console.error(err);
    });
  },
  render: function () {
    return (
      <Users users={this.state.users} />
    );
  }
})