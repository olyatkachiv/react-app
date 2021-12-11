import React, { Component } from 'react';
import './stylesNew.css';

export default class Fetch_img extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.drinks
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p style={{marginTop: 130}}>Error {error.message} </p>
        } else if (!isLoaded) {
            return <p style={{marginTop: 130}}>Loading... </p>
        } else{
            return(
                <div>
                    <h1 style={{marginTop: 130}}>Cocktail card</h1>
                    <ul className="fetch_list">
                        {items.map(item =>(
                            <li key={item.name}>
                                <img src={item.strDrinkThumb} />
                                {item.strDrink}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }    
    
}
