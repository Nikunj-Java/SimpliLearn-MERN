

function NumberList(){
    const numbers=[1,2,3,4,5,6,7];
    const listItem= numbers.map((number)=>
    <li key={number.toString()}>{number}</li>);

    return (
        <ul>{listItem}</ul>
    )
}

export default NumberList;