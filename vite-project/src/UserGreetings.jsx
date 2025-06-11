function UserGreetings(props) {
      
    return (props.isLoggedIn ?
        <h1 className="greeting">Welcome back, {props.username}!</h1> :
        <h1 className="warning">Please log in.</h1>
    );
}
export default UserGreetings;