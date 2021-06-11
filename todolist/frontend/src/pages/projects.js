import React, { Component } from 'react'
import axios from 'axios'

import { ProjectList } from '../components/Project.js'


class ProjectsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'projects': []
        }
    }

    componentDidMount() {
        const headers = this.props.headers
        axios.get('http://127.0.0.1/api/projects/', { headers })
            .then(response => {
                const projects = response.data.results
                this.setState({
                    'projects': projects
                })
            }
        ).catch(error => console.log(error))
    }

    render() {
        return (
            <section className='TODOListProjectsPage container'>
                <h1>Список проектов</h1>
                <ProjectList projects={this.state.projects} />
            </section>
        )
    }
}

export default ProjectsPage
