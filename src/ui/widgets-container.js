import React from 'react';
import Widgets from 'ui/widgets';
import { getWidgets } from 'api/data';

export default React.createClass({
  getInitialState: function () {
    return {
      widgets: []
    }
  },
  componentWillMount: function () {
    var _this = this;
    getWidgets().then(function(resp){
      _this.setState({
        widgets: resp.data
      })
    }).catch(function(err){
      console.error(err);
    })
  },
  render: function () {
    return (
      <Widgets widgets={this.state.widgets} />
    );
  }
})