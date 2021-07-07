import React, { Component } from 'react'


class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '', 
            password: ''
        }
    }
    
    handleChange(event) {    
        this.setState({
            [event.target.name]: event.target.value
        });  
    }
  
    handleSubmit(event) {
        event.preventDefault()
        this.props.get_token(this.state.email, this.state.password)
    }

    render() {
        let loginform = ''
        if (!this.props.isAuthenticated) { 
            loginform = <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-bs-backdrop="false">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <form onSubmit={ (event)=> this.handleSubmit(event)} >
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalCenterTitle">Sing In Form</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-3">
                                                <label htmlFor="formControlInputEmail" className="form-label">Email address</label>
                                                <input type="email" name="email" className="form-control" id="formControlInputEmail" placeholder="name@example.com" onChange={ (event) => this.handleChange(event) } />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="formControlInputPassword" className="form-label">Password</label>
                                                <input type="password" name="password" className="form-control" id="formControlInputPassword" placeholder="" onChange={ (event) => this.handleChange(event) } />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
        } else {
            loginform = ''
        }
        return (
            loginform
        )
    }
  
}

export default LoginForm
