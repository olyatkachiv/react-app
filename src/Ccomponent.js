import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { Route, BrowserRouter as Router, Link, Routes } from 'react-router-dom';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {

        };
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/About" element={<About />}></Route>
                        <Route path="/Users" element={<Users />}></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </div>
            </Router>
        )
    }    
    
}
