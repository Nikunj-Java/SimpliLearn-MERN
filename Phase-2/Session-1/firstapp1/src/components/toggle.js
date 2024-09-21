import React, { useState } from "react";

function Toggle(){
    const[isToggeled,setIsToggled]=useState(true);

    return <div>
        <p>{isToggeled ?'ON':'OFF'}</p>
        <button onClick={()=>setIsToggled(!isToggeled)}>Toggle</button>
    </div>
}

export default Toggle;