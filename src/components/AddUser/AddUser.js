import React from 'react';
import { useRef } from 'react/cjs/react.development';

const AddUser = () => {
    // 1    
    const nameRef = useRef();
    const emailRef = useRef();
    
    const handleAddUser = e => { 
        const name = nameRef.current.value;
        const email = emailRef.current.value ; 
        const newUser = {name, email};   

        fetch('http://localhost:5000/users', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
// 2 show user that data has been added            
            .then(res=>res.json())
            .then(data => {
                if(data.insertedId) {
                    alert('user added successfully')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2 title="vua users shala">Please add an User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder="name" />       
                <input type="email" name="" id="" placeholder="email" ref={emailRef} />
                <input type="submit" value="ADD"  title="kire mofiz"/> 
                </form> 
  {/*// 1 */}  
        </div>
    );
};

export default AddUser;