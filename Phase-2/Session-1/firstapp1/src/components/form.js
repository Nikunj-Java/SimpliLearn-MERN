import React, { useState } from "react";

function Form(){
    const [name,setName]=useState('');
    const [age,setAge]=useState(0);

    const handleChange=(event)=>{
        setName(event.target.value);
    }

    const handleAge=(event)=>{
        setAge(event.target.value);
    }

    const handleSubmit=(event)=>{
        alert('A Name was submitted:' +name+","+age);
         
    };

    return <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleChange}/>

        <label>Age:</label>
        <input type="number" value={age} onChange={handleAge}/>

        <button type="submit">Submit</button>
    </form>
}

export default Form;