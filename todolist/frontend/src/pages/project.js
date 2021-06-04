import React, { Component } from 'react'
import axios from 'axios'

import { ProjectDetailed } from '../components/Project.js'


class ProjectPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'project': {}
        }
    }

    componentDidMount() {
        const headers = this.props.headers
        axios.get('http://127.0.0.1/api/projects/' + this.props.match.params.id + '/', { headers })
            .then(response => {
                const project = response.data
                this.setState({
                    'project': project
                })
            }
        ).catch(error => console.log(error))
    }

    render() {
        return (
            <section className='TODOListProjectPage container'>
                <h1>Страница проекта: {this.state.project.name}</h1>
                <ProjectDetailed project={this.state.project} />
            </section>
        )
    }
}

export default ProjectPage
