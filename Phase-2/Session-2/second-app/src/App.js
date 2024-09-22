import logo from './logo.svg';
import './App.css';
import User from './component/user';
import UserCard from './component/userCard';
import Button from './component/button';
import Greeting from './component/greeting';
import Profile from './component/Profile';
import Login from './component/Login';

function App() {

  const user={
    name:'alice',
    email:'alice@gmail.com'
  };

  const handleClick=()=>{
    alert('Button Clicked');
  }
  return (
    <div className="App">

      <User name="Nikunj Soni" email="nikunj@gmail.com"/>
      <User name="Jhon Doe" email="jd@gmail.com"/>
      <UserCard user={user}/>
      <Button onClick={handleClick} lebel="Click Me"/>
      <Greeting />
      <Greeting name="Nikunj"/>
      <Profile name="Nikunj" age={30}/>
      <Login isLoggedIn={true} name="Nikunj Soni"/>
      <Login isLoggedIn={false}/>
       
    </div>
  );
}

export default App;
