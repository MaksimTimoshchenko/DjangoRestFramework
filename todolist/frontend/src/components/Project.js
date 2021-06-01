import React from 'react'
import { Link } from 'react-router-dom'


const ProjectItem = ({project}) => {
    return (
        <tr>
           <td>
                <Link to={`project/${project.id}`}>{project.name}</Link>
           </td>
           <td>
               {project.repositoryUrl}
           </td>
        </tr>
    )
}

export const ProjectList = ({projects}) => {
    return (
        <table className="table">
            <thead className="table-dark">
                <tr>
                    <th scope="col">Название проекта</th>
                    <th scope="col">Ссылка на репозиторий</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => <ProjectItem project={project} key={`project${project.id}`} />)}
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
