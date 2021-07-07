import React from 'react'
import { Link } from 'react-router-dom'


const ProjectItem = ({project, delete_project}) => {
    return (
        <tr>
            <td>
                <Link to={`project/${project.id}`}>{project.name}</Link>
            </td>
            <td>
                {project.repositoryUrl}
            </td>
            <td>
                <button type="button" data-bs-toggle="modal" data-bs-backdrop="false" data-bs-target={`#exampleModalCenterDeletion${project.id}`} className="btn btn-danger">Delete</button>

                <div className="modal fade" id={`exampleModalCenterDeletion${project.id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" data-bs-backdrop="false">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <form onSubmit={ (event)=> this.handleSubmit(event)} >
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Confirm delete project «{project.name}»‎</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>You are about to delete project, this procedure is irreversible.</p>
                                    <p>Are you sure you want to proceed?</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>delete_project(project.id)}>Confirm delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export const ProjectList = ({projects, delete_project}) => {
    return (
        <table className="table">
            <thead className="table-dark">
                <tr>
                    <th scope="col">Название проекта</th>
                    <th scope="col">Ссылка на репозиторий</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => <ProjectItem key={`project${project.id}`} project={project} delete_project={delete_project} />)}
            </tbody>
        </table>
    )
}

export const ProjectDetailed = ({project}) => {
    return (
        <div>
            {project.name}
        </div>
    )
}

export default {ProjectList, ProjectDetailed}
