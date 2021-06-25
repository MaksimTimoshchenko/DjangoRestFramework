import React from 'react'


const ToDoItem = ({todo}) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    const todo_created_at = new Date(todo.createdAt).toLocaleDateString(undefined, options)
    return (
        <tr>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.project.name}
            </td>
            <td>
                {todo.creatorUser.username}
            </td>
            <td>
                {todo_created_at}
            </td>
        </tr>
    )
}

const ToDoList = ({todos}) => {
    return (
         <table className="table">
             <thead className="table-dark">
                 <tr>
                     <th scope="col">Текст ToDo</th>
                     <th scope="col">Проект</th>
                     <th scope="col">Никнейм автора</th>
                     <th scope="col">Дата создания</th>
                 </tr>
             </thead>
             <tbody>
                 {todos.map((todo) => <ToDoItem todo={todo} key={`todo${todo.id}`} />)}
             </tbody>
        </table>
    )
 }
 
 
 export default ToDoList