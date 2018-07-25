
//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Content.css';

class Content extends Component {
  static propTypes = {
    body: PropTypes.object.isRequired
  };

  constructor(){
    super();
    this.state = {
      count: null
    };
    this.handleCountCLick = this.handleCountCLick.bind(this);
    this.handleResultCLick = this.handleResultCLick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
  }
  //Existen metodos en react para seguir el tiempo de vida de un componente
  //Comprueba si el componente ya cargo
  componentDidMount(){
    this.setState({
      count: 0,
      number1: 0,
      number2: 0,
      result: 0
    });
  }

  handleCountCLick(event){
    if(event.target.id === "add"){
      this.setState({ count: this.state.count + 1 });
    }
    else if(event.target.id === "subtract" && this.state.count > 0){
      this.setState({count: this.state.count - 1});
    } else {
      this.setState({count: this.state.count = 0});
    }

  }

  handleResultCLick(event){
    this.setState({
      result: this.state.number1 + this.state.number2
    });
  }

  handleInputChanged(event){
    if(event.target.id === "number1"){
      this.setState({
        number1: Number(event.target.value)
      });
    } else{
      this.setState({
        number2: Number(event.target.value)
      });
    }
  }

  render() {
    return (
      <div className="Content">
       <h1> Counter: { this.state.count } </h1>
       <p>
         <button id = "add" onClick = {this.handleCountCLick}>+</button>
         <button id = "subtract" onClick = {this.handleCountCLick}>-</button>
         <button id = "reset" onClick = {this.handleCountCLick}>reset</button>

       </p>

       <h2>Calculator</h2>

       <p>
         <input id = "number1" type = "number" value = {this.state.number1} onChange = {this.handleInputChanged}/>
         +
         <input id = "number2" type = "number" value = {this.state.number2} onChange = {this.handleInputChanged}/>
         <button id = "result" onClick = {this.handleResultCLick}>=</button>
         {this.state.result}
       </p>
      </div>
    );
  }
}

export default Content;
