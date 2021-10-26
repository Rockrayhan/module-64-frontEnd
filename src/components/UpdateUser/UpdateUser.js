import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user, setUser] = useState({});
    const {id} = useParams()

    useEffect( ()=> {
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
            .then(res=>res.json())
            .then(data => setUser(data));
    } ,[] )
    return (
        <div>
            <h2>Update User : {user.name}</h2>
            <p><small><b>user id :  {id}</b></small></p>
        </div>
    );
};

export default UpdateUser;