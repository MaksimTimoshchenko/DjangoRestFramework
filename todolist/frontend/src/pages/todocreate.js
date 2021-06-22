import React, { Component } from 'react'
import axios from 'axios'


export default class TodoCreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          'text': '',
          'status': 1,
          'project': '',
          'form_projects': []
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const headers = this.props.headers
        axios
        .post(
            'http://127.0.0.1:8000/api/todos/',
            {'text': this.state.text, 'status': this.state.status, 'project': this.state.project, 'creator_user': this.props.authenticatedUserId},
            {headers}
        )
        .then(response => {
            window.location.href = '/todos'
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        const headers = this.props.headers
        axios
        .get('http://127.0.0.1:8000/api/projects/', {headers})
        .then(response => {
            const projects = response.data.results
            this.setState({
                'form_projects': projects
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <section className='TODOListToDoCreatePage container'>
                <h1>Страница создания ToDo</h1>
                <form onSubmit={(event)=> this.handleSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputToDoText" className="form-label">Название ToDo</label>
                        <input type="text" class="form-control" id="exampleInputToDoText" name="text" onChange={(event)=>this.handleChange(event)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputToDoStatus" className="form-label">Статус ToDo</label>
                        <select className="form-select" id="exampleInputToDoStatus" aria-label="select example" name="status" onChange={(event)=>this.handleChange(event)}>
                            <option selected value="1">Активный</option>
                            <option value="0">Неактивный</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputProjects" className="form-label">Проекты</label>
                        <select className="form-select" id="exampleInputProjects" aria-label="select example" name="project" onChange={(event)=>this.handleChange(event)}>
                            {this.state.form_projects.map((project)=><option value={project.id}>{project.name}</option>)} 
                        </select>
                    </div>
        
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </section>
        );  
    }
}
