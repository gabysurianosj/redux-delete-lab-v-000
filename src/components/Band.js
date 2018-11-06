import React, { Component } from 'react';

handleOnClick = () => {
    this.props.deleteBand(this.props.id)
  }

class Band extends Component {

  render() {
    return(
      <div>
        Band Component
      </div>
    );
  }
};

export default Band;
