import React from 'react';
import SignIn from './components/SignIn';
import Login from "./components/Login";
import MainPage from './components/MainPage1';
import HotelRes from './components/HotelRes';
//import Flight from './components/Flight';
//<Route path='/Flight' element={<Flight/>}/>
import History from './components/History';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  //no funciona el redirect del Login
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login />}/>  
        <Route path='/Mainpage' element={<MainPage/>}/>  
        <Route path='/Reservations' element={<HotelRes/>}/> 
        <Route path='/History' element={<History/>}/> 
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
