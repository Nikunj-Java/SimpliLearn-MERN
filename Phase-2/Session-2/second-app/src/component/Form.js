import { useState } from "react";

function Form() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [errors,setErrors]=useState({})

    const handleSubmit=(e)=>{
        const validationErrors={};
        e.preventDefault();
         
        if(!name){
            validationErrors.name="Name Can not be Empty"
        }
        if(!email){
            validationErrors.email="Email Can not be Empty"
        }
        if(!pass){
            validationErrors.pass="Password Can not be Empty"
        }
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors);
        }
        else{
            setErrors({});
            alert("Form Submitted !,\nName:"+name+",\nEmail:"+email+"\nPassword:"+pass)
        }
        
     //alert();
    }
    return (
        <div className="container">
            <h1>Welcome To Form Validations</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className={`form-control ${errors.name ? 'is-invalid':''}`} id="name" value={name} placeholder="Enter Your Name" onChange={(e)=>{setName(e.target.value)}}  />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    
                </div>

                <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className={`form-control ${errors.email ? 'is-invalid':''}`} id="email" value={email} placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}}  />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    
                </div>

                <div className="mb-3">
                <label htmlFor="pass" className="form-label">Password</label>
                    <input type="password" className={`form-control ${errors.pass ? 'is-invalid':''}`} id="pass" value={pass} placeholder="Enter Your Password" onChange={(e)=>{setPass(e.target.value)}}  />
                    {errors.pass && <div className="invalid-feedback">{errors.pass}</div>}
                    
                </div>

                 

                <input type="submit" className="btn btn-primary" value="Submit"/>
                
            </form>

        </div>
      );
}

export default Form;