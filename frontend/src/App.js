import React from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie';

import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import LoginForm from './components/Auth';
import Footer from './components/Footer';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: false,
            authenticatedUsername: '',
            authenticatedUserId: '',
            token: ''
        }
    }

    get_token(email, password) {
        axios.post('http://127.0.0.1:8080/api/token/', {email: email, password: password})
        .then(response => {
            this.set_token(response.data.access)
        }).catch(error => alert('Неверный логин или пароль'))
    }

    set_token(token) {
        let cookies = new Cookies()
        cookies.set('token', token)

        this.setState({
            token: token
        }, function () {
            this.is_authenticated()
        })
    }

    logout() {
        this.set_token('')
    }

    get_token_from_cookies() {
        let cookies = new Cookies()
        let token = cookies.get('token')
        if (typeof(token) != 'undefined') {
            this.setState(function() {
                return {
                    token: token
                }
            }, function () {
                this.is_authenticated()
            });
        }
    }

    is_authenticated() {
        this.setState({
            isAuthenticated: this.state.token !== ''
        })
    }

    get_headers() {
        let headers = {
          'Content-Type': 'application/json'
        }

        if (this.state.token) {
            headers['Authorization'] = 'Bearer ' + this.state.token
        }
        
        return headers
    }

    componentDidMount() {
        this.get_token_from_cookies()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isAuthenticated !== prevState.isAuthenticated) {
            this.get_authenticated_user()
        }
    }

    get_authenticated_user() {
        if (!this.state.isAuthenticated || !this.state.token) {
            return []
        } else {
            let headers = this.get_headers()
            axios.get('http://127.0.0.1:8080/api/users/me/', { headers })
            .then(response => {
                this.set_authenticated_user(response.data)
            }).catch(error => this.logout())
        }
    }

    set_authenticated_user(user) {
        this.setState({
            authenticatedUsername: user.username,
            authenticatedUserId: user.id
        })
    }

    render () {
        return (
            <section className="d-flex flex-column min-vh-100">
                <Navbar isAuthenticated={this.state.isAuthenticated} authenticatedUsername={this.state.authenticatedUsername} logout={(event) => this.logout()}/>
                <LoginForm isAuthenticated={this.state.isAuthenticated} get_token={(username, password) => this.get_token(username, password)} />
                <Main token={this.state.token} authenticatedUserId={this.state.authenticatedUserId} get_headers={() => this.get_headers()}/>
                <Footer />
            </section>
        )
    }
}

export default App
