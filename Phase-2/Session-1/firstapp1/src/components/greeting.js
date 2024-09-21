import React from "react";

function Greeting(){
    let name="Nikunj Soni";
    const isLoggedIn=true;
    return <div>
        <p>Dynamic Rendering</p>
        <h1>Hello..! {name}..!:</h1>
        <h4>Conditional Rendering</h4>
        <button>{isLoggedIn?'logout':'login'}</button>
        </div>
}

export default Greeting;