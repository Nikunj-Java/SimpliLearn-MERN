
function ActionButton(){

    const handleClick=()=>{
        alert('Button Clicked');
    }

    return <button onClick={handleClick}>Click Me</button>
}

export default ActionButton;