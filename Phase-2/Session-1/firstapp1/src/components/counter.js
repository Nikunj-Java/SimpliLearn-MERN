import React, { useState } from "react";

function Counter(){
    //top level of component
    const[count,setCount]=useState(0);
    //const count=0;

    return <div>
        <p>You Have Clicked {count} times !</p>
        <button onClick={()=>setCount(count+1)}> Click Me</button>
    </div>
}

export default Counter;