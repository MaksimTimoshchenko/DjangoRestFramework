import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import UsersPage from '../pages/users';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <main className="mb-5">
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/users/' component={UsersPage} />
                </Switch>
            </main>
        );
    }
}

export default Main
