import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <ul className="widgets">
        {this.props.widgets.map(function(widget){
          return(
            <li key={widget.id}>
              <img src={widget.img} />
            </li>
          )
        })}
      </ul>
    );
  }
})