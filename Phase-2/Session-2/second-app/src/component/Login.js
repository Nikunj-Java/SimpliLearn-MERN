function Login(props) {
    if(props.isLoggedIn){
        return ( <div>
                        <h1>Welcome ! {props.name}</h1>
            </div> );
    }
    else{
        return ( <div>
                        <h1>Please Sign Up.</h1>
            </div> );
    }
    
}

export default Login;