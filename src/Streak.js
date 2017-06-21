import React, { Component, PropTypes} from 'react';

class Streak extends Component {

  render(){
    return(
      <div id='streak' style={{display:'flex', flexWrap:'wrap', justifyContent:'center', marginTop:20}}>
        {this.props.results.map( item => {
          return (
            <span className={item.correct === true ? 'correct' : 'incorrect'}>
            {item.spelling}
            </span>
          );
        })}
      </div>
    );
  }
}


export default Streak;
