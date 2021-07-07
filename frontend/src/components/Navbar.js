import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {

    render() {
        const isAuthenticated = this.props.isAuthenticated
        let navbar_button
        if (isAuthenticated) {
            navbar_button = <div className="dropdown float-end">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">{this.props.authenticatedUsername}</a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" href="#" onClick={() => this.props.logout()}>Log Out</a></li>
                                </ul>
                            </div>
        } else {
            navbar_button = <button type="button" className="btn btn-primary float-end" data-bs-toggle="modal" data-bs-backdrop="false" data-bs-target="#exampleModalCenter">Sing In</button>
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">TODO List App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/projects">Projects list</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/projects/create">Project create</Link></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/todos">ToDos</Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ToDos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/todos">ToDos list</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/todos/create">ToDo create</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {navbar_button}
                </div>
            </nav>
        );
    }
}

export default Navbar
