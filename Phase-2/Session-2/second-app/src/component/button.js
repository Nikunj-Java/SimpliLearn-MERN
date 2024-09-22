function Button(props) {
    return ( <div>
        <button  onClick={props.onClick}>{props.lebel}</button>
    </div> );
}

export default Button;