import React, { Component } from 'react'
import axios from 'axios'

import ToDoList from '../components/ToDo.js'


class ToDosPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'todos': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1/api/todos/')
            .then(response => {
                const todos = response.data.results
                this.setState({
                    'todos': todos
                })
            }
        ).catch(error => console.log(error))
    }

    render() {
        return (
            <section className='TODOListToDosPage container'>
                <h1>Список ToDo</h1>
                <ToDoList todos={this.state.todos} />
            </section>
        )
    }
}

export default ToDosPage
