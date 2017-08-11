import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Profile from './Profile';
import Products from './Products';

export default class App extends Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (
            <div>
                <Header tab={this.state.tab} />
                <Switch>
                    <Route exact path="/" component={Home} /> 
                    <Route path="/profile" component={Profile} /> 
                    <Route path="/products" component={Products} /> 
                </Switch>
            </div>
        )
    }
}