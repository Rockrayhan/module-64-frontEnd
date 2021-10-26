import React, { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data=> setUsers(data))
    } , []);

    // DELETE AN USER 
    const handleDeleteUser = id => {
        const proceed = window.confirm('Deleting..! are you sure ??');
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0 ) {
                alert('deleted Successfully');
                const remainingUsers = users.filter(user => user._id !== id); // for dynamic UI
                setUsers(remainingUsers); 
            }
        });
        }
    }


    return (
        <div>
            <h2 title="vua users Shalara"> users Availabe {users.length}</h2>      
            <ul>
                {
                    users.map(user =>  <li key={user._id}> {user.name} -- {user.email} 
                    <Link to ={`/users/update/${user._id}`}> <button>update</button>  </Link>
                    <button onClick={ ()=>handleDeleteUser(user._id) }>X</button> 
                    </li>)
                }
            </ul>
        </div>

    );
};

export default Users;