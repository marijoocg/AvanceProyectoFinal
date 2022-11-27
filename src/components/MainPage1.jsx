import React, { Component } from 'react';
import ReviewCard from './ReviewCard1';
//import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import '../App.css';

class MainPage extends React.Component {
    render() {
    const image="https://media.istockphoto.com/id/1142873622/vector/travel.jpg?s=612x612&w=0&k=20&c=IzNwO_x-ENHTLfuObj5NFITXapRxgaMlgfVLqYjGT-0=";
    const flight="https://cdn-icons-png.flaticon.com/512/870/870143.png";
    const hotel="https://cdn-icons-png.flaticon.com/512/2286/2286054.png";
    const reservations="https://cdn-icons-png.flaticon.com/128/7860/7860463.png";
    return <div>

        <div class="container text-center">

            <div class="row">
                <div class="col">
                    <img src={image} width="90%" height="auto"></img>
                </div>
                <div class="col">
                    <br></br>
                    <br></br>
                    <h1 className='title'>About us</h1>
                    <p className='subtitle'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat."</p>
                </div>
            </div>
        </div>
        <br></br>
        <hr></hr>
        <br></br>

        <div class="container text-center">
            <b class="title">Services</b>
            <p class="subtitle">See all our services for the trip of a lifetime.</p>
            <div class="row">
                <div class="col">
                    <div class="servicecard">
                        <br></br>
                        <img src={flight} width="33%" height="auto"></img>
                        <br></br>
                        <Link to="/flights">  <button type="submit" className="btn btn-danger" style={{ marginTop: '30px' }}>Search for Flights!</button></Link>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div class="col">
                    <div class="servicecard">
                        <img src={hotel} width="40%" height="auto"></img>
                        <br></br>
                        <Link to='/'>  <button type="submit" className="btn btn-danger" style={{ marginTop: '30px' }}>Book your Hotel!</button></Link>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div class="col">
                    <div class="servicecard">
                        <br></br>
                        <img src={reservations} width="33%" height="auto"></img>
                        <br></br>
                        <Link to='/History'>  <button type="submit" className="btn btn-danger" style={{ marginTop: '30px' }}>Manage your Reservations!</button></Link>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <hr></hr>

        <div class="container text-center">
            <b class="title">Reviews</b>
            <p class="subtitle">Read what other users have to say!</p>
            <div class="row">
                <div class="col">
                    <ReviewCard
                        title="Great service!"
                        destination="Paris, France"
                        info="Using TravelAgency made going on my trip super easy!"
                    />
                </div>
                <div class="col">
                    <ReviewCard
                        title="Great service!"
                        destination="Paris, France"
                        info="Using TravelAgency made going on my trip super easy!"
                    />
                </div>
                <div class="col">
                    <ReviewCard
                        title="Great service!"
                        destination="Paris, France"
                        info="Using TravelAgency made going on my trip super easy!"
                    />
                </div>
            </div>

        </div>

    </div>; //return
  }
}

export default MainPage;

