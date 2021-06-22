import React, { Component } from 'react'
import axios from 'axios'

import { ProjectList } from '../components/Project.js'


class ProjectsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'projects': [],
            'search_string': ''
        }
    }

    delete_project(project_id) {
        const headers = this.props.headers
        axios
        .delete(`http://127.0.0.1:8000/api/projects/${project_id}/`, {headers})
        .then(response => {
            this.setState({
                'projects': this.state.projects.filter((project) => project.id !== project_id)
            })
        })
        .catch(error => {console.log(error)})
    }

    create_project(name, repository_url) {
        axios
        .post(
            'http://127.0.0.1:8000/api/projects/',
            {"name": name, "repository_url": repository_url}
        )
        .then(response => {
            this.fetch_projects();
        })
        .catch(error => console.log('Wrong password'))
    }

    fetch_projects() {
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

    handleSearchInputChange(event) {
        this.setState({
            'search_string': event.target.value
        });
    }

    handleSubmitSearchProjects(event) {
        event.preventDefault();
        const headers = this.props.headers
        axios
        .get(
            'http://127.0.0.1:8000/api/projects/?name=' + this.state.search_string, {headers}
        )
        .then(response => {
            this.setState({
                'projects': response.data.results
            })
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.fetch_projects()
    }

    render() {
        return (
            <section className='TODOListProjectsPage container'>
                <h1>Список проектов</h1>

                <form onSubmit={(event)=> this.handleSubmitSearchProjects(event)} className="d-flex mb-3">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Поиск по проектам" onChange={(event)=>this.handleSearchInputChange(event)} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                <ProjectList projects={this.state.projects} delete_project={(project_id) => this.delete_project(project_id)} />
            </section>
        )
    }
}

export default ProjectsPage
