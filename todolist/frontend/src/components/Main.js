import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import UsersPage from '../pages/users';
import ProjectsPage from '../pages/projects';
import ProjectPage from '../pages/project';
import ToDosPage from '../pages/todos';

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
                    <Route exact path='/projects/' component={ProjectsPage} />
                    <Route exact path='/project/:id' component={ProjectPage} />
                    <Route exact path='/todos/' component={ToDosPage} />
                </Switch>
            </main>
        );
    }
}

export default Main
