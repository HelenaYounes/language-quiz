import React, { Component, PropTypes} from 'react';
import Choice from './Choice';
class Choices extends Component {


  render(){
    debugger;
    return (
      <div id='choices' style={{display:'flex',flexWrap:'wrap', justifyContent:'center', marginTop:20}}>
        {this.props.choices.map(choice => {
          return (
            <Choice
              onClick={this.props.onClick}
              value={choice}
            />
          );
        })}
      </div>
    )
  }
}

Choices.propTypes={
  choices: PropTypes.array
}
export default Choices;
