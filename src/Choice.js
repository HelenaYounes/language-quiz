import React, { Component, PropTypes } from 'react';

class Choice extends Component {
  render(){
    return(
      <button
        onClick={() => this.props.onClick(this.props.value)}
        style={{
          border: '1px solid black',
          fontSize:15,
          padding:5,
          margin:5,
          height:60,
          width:100
        }}>
          {this.props.value}
        </button>
    );
  }
}

Choice.propTypes={
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Choice;
