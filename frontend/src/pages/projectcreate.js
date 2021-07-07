import React, { Component } from 'react'
import axios from 'axios'


export default class ProjectCreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          'name': '',
          'repository_url': '',
          'form_users': [],
          'users': []
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleChangeUsers(event) {
        if (!event.target.selectedOptions) {
            return;
        }

        let users = [];
        for (let i = 0; i < event.target.selectedOptions.length; i++){
            users.push(event.target.selectedOptions.item(i).value);
        }

        this.setState( {
            'users': users
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const headers = this.props.headers
        axios
        .post(
            'http://127.0.0.1:8080/api/projects/',
            {'name': this.state.name, 'repository_url': this.state.repository_url, 'users': this.state.users},
            {headers}
        )
        .then(response => {
            window.location.href = '/projects'
        })
        .catch(error => console.log(error))
    }

    componentDidMount() {
        const headers = this.props.headers
        axios
        .get('http://127.0.0.1:8080/api/users/', {headers})
        .then(response => {
            const users = response.data.results
            this.setState({
                'form_users': users
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <section className='TODOListProjectsCreatePage container'>
                <h1>Страница создания проекта</h1>
                <form onSubmit={(event)=> this.handleSubmit(event)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputProjectName" className="form-label">Название проекта</label>
                        <input type="text" class="form-control" id="exampleInputProjectName" name="name" onChange={(event)=>this.handleChange(event)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputProjectRepoUrl" className="form-label">Ссылка на репозиторий проекта</label>
                        <input type="text" class="form-control" id="exampleInputProjectRepoUrl" name="repository_url" onChange={(event)=>this.handleChange(event)}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputProjectUsers" className="form-label">Пользователи</label>
                        <select className="form-select" id="exampleInputProjectUsers" multiple aria-label="multiple select example" name="users"  onChange={(event)=>this.handleChangeUsers(event)}>
                            {this.state.form_users.map((user)=><option value={user.id}>{user.username}</option>)} 
                        </select>
                    </div>
        
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </section>
        );  
    }
}
