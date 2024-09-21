import React, { useState } from "react";

function UserInfo(){

    const[user,setuser]=useState({name:'',email:''});

    const handleChange=(event)=>{
        const {name, value}=event.target;
        setuser({...user,[name]:value});
    };
    const handleSubmit=(event)=>{
        alert('A Name was submitted:' +user.name +","+user.email);
         
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange}/>

        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange}/>
        
        <button type="submit">Submit</button>
        </form>
    </div>);


}

 export default UserInfo;