import React from 'react'


const UserItem = ({user}) => {
   return (
       <tr>
           <td>
               {user.email}
           </td>
           <td>
               {user.username}
           </td>
           <td>
               {user.firstname}
           </td>
           <td>
               {user.lastname}
           </td>
       </tr>
   )
}


const UserList = ({users}) => {
   return (
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Электронный адрес</th>
                    <th scope="col">Username</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Фамилия</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <UserItem user={user} />)}
            </tbody>
       </table>
   )
}


export default UserList
