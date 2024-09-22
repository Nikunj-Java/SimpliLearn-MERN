import { useState } from "react";

function Form() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Form Submitted !,\nName:"+name+",\nEmail:"+email+"\nPassword:"+pass)
     //alert();
    }
    return (
        <div className="container">
            <h1>Welcome To Form Validations</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control mb-3" value={name} placeholder="Enter Your Name" onChange={(e)=>{setName(e.target.value)}}  />
                </div>

                <div className="form-group">
                    <input type="email" className="form-control mb-3" value={email}   placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}}  />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control mb-3" value={pass}  placeholder="Enter Your Password" onChange={(e)=>{setPass(e.target.value)}}  />
                </div>

                <input type="submit" className="btn btn-primary" value="Submit"/>
                
            </form>

        </div>
      );
}

export default Form;