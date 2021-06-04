import React, { Component } from 'react';
import axios from 'axios';

import UserList from '../components/User.js'


class UsersPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
           'users': []
        }
    }

    componentDidMount() {
        let headers = this.props.headers
        axios.get('http://127.0.0.1:8000/api/users/', { headers })
            .then(response => {
                const users = response.data.results
                this.setState({
                    'users': users
                })
            }
        ).catch(error => console.log(error))
    }
 
    
    render() {
        return(
            <section className='TODOListUsersPage container'>
                <h1>Список пользователей</h1>
                <UserList users={this.state.users} />
            </section>
        );
    }
}

export default UsersPage
