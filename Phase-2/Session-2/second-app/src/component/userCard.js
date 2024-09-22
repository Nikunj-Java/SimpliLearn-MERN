function UserCard(props) {
    return ( <div>

        <h4>{props.user.name}</h4>
        <h4>{props.user.email}</h4>
    </div> );
}

export default UserCard;