function Greeting(props) {
    return (  <div>
                <h4>Default Props</h4>
                <h5>Hello, {props.name}</h5>
    </div>);
}

Greeting.defaultProps={
    name:'Guest'
}

export default Greeting;