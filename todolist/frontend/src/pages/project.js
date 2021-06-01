import React, { Component } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

import { ProjectDetailed } from '../components/Project.js'


class ProjectPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'project': {}
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1/api/projects/' + this.props.match.params.id + '/')
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
