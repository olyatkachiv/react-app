import React, { Component } from 'react';
import Home from './Home';
import Todo_1 from './Todo_1';
import Todo_2 from './Todo_2';
import Fetch_img from './Fetch_img';
import './stylesNew.css';
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
                        <ul className="nav_menu">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/todo_1">Todo list №1</Link>
                            </li>
                            <li>
                                <Link to="/todo_2">Todo list №2</Link>
                            </li>
                            <li>
                                <Link to="/fetch_img">Fetch img</Link>
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/Todo_1" element={<Todo_1 />}></Route>
                        <Route path="/Todo_2" element={<Todo_2 />}></Route>
                        <Route path="/Fetch_img" element={<Fetch_img />}></Route>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </div>
            </Router>
        )
    }    
    
}
