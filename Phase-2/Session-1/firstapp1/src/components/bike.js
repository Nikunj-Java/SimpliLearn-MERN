import React, { useState } from "react";

function Bike() {
    const [bikes,setBikes]=useState([]);
    const [model,setModel]=useState('')
    const [price,setPrice]=useState('')


    const handleSubmit=(e)=>{
        e.preventDefault();
        const id= Math.floor(Math.random()*100);
        setBikes([...bikes,{id,model,price}]);

    }


    return ( <div>

        <h3>Bike List</h3>

        <table className="table  table-bordered table-striped">
            <thead>
                <tr>
                    <th>No</th> <th>Model</th><th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    bikes.map(bike=>(
                        <tr key={bike.id}>
                            <td>{bike.id}</td>
                            <td>{bike.model}</td>
                            <td>{bike.price}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

        <h3>Bike Form</h3>

        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control mb-3" value={model} onChange={(e)=>setModel(e.target.value)} placeholder="Enter Model Name" />
        
            <input type="text" className="form-control mb-3"  value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price Value" />
        
            <button type="submit" className="btn btn-primary" >Add </button>
        </form>

    </div>);
}

export default Bike;