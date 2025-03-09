import axios from "axios";
import { useEffect, useState } from "react";
import UserForm from "./userform";

function UserList() {
    const [users,setUsers]= useState([]);
    const fetchData=async ()=>{
        try {
            const resp= await 
            axios.get('http://localhost:5000/api/user');
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    //run when the components load
    useEffect(()=>{
        fetchData()
    },[])//it runs only once due to []
     
    return ( 
        <div>
            <h3>User List Component</h3>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr><th>Name</th><th>Email</th><th>UserName</th></tr>
                </thead>
                <tbody>
                    {
                        users.map(item=>(
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                 </tr>
                        ))
                    }
                </tbody>
            </table>
            <UserForm  fetchData={fetchData}/>
        </div>
     );
}

export default UserList;