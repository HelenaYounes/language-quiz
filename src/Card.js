import React, { Component } from 'react';
import { string } from  'prop-types';

class Card extends Component{

  render(){
    return(

      <div
        id='cardArea'
        onClick={this.props.onCliiick}
      >
        <div className='card' >
          <div className="cardContent">
            <b>{this.props.spelling}</b>
          </div>
        </div>
      </div>

    );
  }
}

export default Card;
