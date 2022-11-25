import './App.css';
import React, {useState} from "react";
import Card from "./Card";
//import contacts from "./data/contacts";
import Login from "./Login";
import TaskList from './TaskList';

const contacts = [{
  name: "Pedro",
  image:"https://img.a.transfermarkt.technology/portrait/big/65278-1602077251.jpg?lm=1",
  phone: "123456789",
  email: "pedro@mail.com"
  },{
    name: "Juano",
    image:"https://upload.wikimedia.org/wikipedia/commons/1/19/Juan_Gabriel_---_Pepsi_Center_---_09.26.14_%28cropped_2%29.jpg",
    phone: "987654321",
    email: "juan@mail.com"
    }];

function App(){
  var subName="o";
  var [isLoggedIn, setIsLoggedIn] = useState(false);

  function logUser(profile){
    var prof = profile;
    console.log(prof);
    setIsLoggedIn(true);
  }

  function logOutUser(){
    setIsLoggedIn(false);
  }

  function createCard(contact){
    return <Card contact={contact}/>
  }

  function renderContent(subName){
    return (
      <div>
        <hr/>
        <button onClick={logOutUser}>Log Out</button>
        <h1>My Contacts</h1>
        {contacts
          .filter((contact)=>{
          return contact.name.includes(subName);
        })
        .map(createCard)}
      </div>
    );
  }

  return (
    <div>
      {isLoggedIn ? renderContent(subName) : <Login handler={logUser}/>}
      <TaskList />
    </div>
  )
}
export default App;
