import logo from './logo.svg';
import './App.css';
import User from './component/user';
import UserCard from './component/userCard';
import Button from './component/button';
import Greeting from './component/greeting';
import Profile from './component/Profile';
import Login from './component/Login';
import Form from './component/Form';
import ActionButton from './component/actionbutton';
import { useState } from 'react';

function App() {

  const [name,setName]=useState('Nikunj Soni');

  const user={
    name:'alice',
    email:'alice@gmail.com'
  };

  const handleClick=()=>{
    alert('Button Clicked');
  }
  return (
    <div className="container">

      <input type='text' onChange={(e)=>{setName(e.target.value)}} value={name}/>

      {/* <User name="Nikunj Soni" email="nikunj@gmail.com"/>
      <User name="Jhon Doe" email="jd@gmail.com"/>
      <UserCard user={user}/>
      <Button onClick={handleClick} lebel="Click Me"/>
      <Greeting />
      <Greeting name="Nikunj"/>
      <Profile name="Nikunj" age={30}/>
      <Login isLoggedIn={true} name="Nikunj Soni"/>
      <Login isLoggedIn={false}/>
      <Form/> */}
     
     <Greeting name={name}/>
      
      
       
    </div>
  );
}

export default App;
