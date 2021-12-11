import React, { Component } from 'react';
import './stylesNew.css';
import { Button } from '@material-ui/core';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: '',
             items: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]
        });
    }
    
    render() {
        const styles ={
            backgroundColor: "lightblue",
            height: 40,
            width: 400
        }
        return(
            <div>
                <h1 style={{color: "yellow", backgroundColor: "darkblue", borderRadius: 50, marginTop: 130}} >Form №2</h1>
                <form style={styles} onSubmit={this.handleSubmit}>
                    <input value={this.state.input} onChange={this.handleChange} />
                    <Button type="submit" variant="contained" color="primary">
                        Submit!
                    </Button>
                </form>
                <ul className="list">
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}