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
        const headers = this.props.get_headers()
        
        return (
            <main className="mb-5">
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/users/' component={(props) => <UsersPage headers={headers} />} />
                    <Route exact path='/projects/' component={(props) => <ProjectsPage headers={headers} />} />
                    <Route exact path='/project/:id' component={(props) => <ProjectPage headers={headers} />} />
                    <Route exact path='/todos/'  component={(props) => <ToDosPage headers={headers} />} />
                </Switch>
            </main>
        );
    }
}

export default Main
