function Greeting(props) {
    return (  <>
                <h4>Default Props</h4>
                <h5>Hello, {props.name}</h5>
    </>);
}

Greeting.defaultProps={
    name:'Guest'
}

export default Greeting;