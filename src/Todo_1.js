import React, { Component } from 'react';
import Fcomponent from './Fcomponent';
import Fncomponent from './Fncomponent';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        })
    }
    
    render() {
        return (
            <div>
               <h1 style={{color: "yellow", backgroundColor: "darkblue", borderRadius: 50, marginTop: 130}}>Form №1</h1>
               <Fcomponent 
               input={this.state.inputValue} 
               handleChange={this.handleChange} />
               <Fncomponent input={this.state.inputValue} />
            </div>
        )
    }    
    
}
