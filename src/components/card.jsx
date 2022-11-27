import React from 'react';
import './flights.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function Card(props){
    return(
        <div class="cardback">
            <center>
            <br></br>
            <img src={props.img}></img><br></br>
            <h2 class="cardtitle">{props.name}</h2><br></br>
            <h2 class="cardinfo">{props.info}</h2><br></br>
            <hr></hr>
            <h2 class="cardinfo2">Details:</h2><br></br><br></br>
            <div class="descrip">
                <div class="descrip">
                    {props.desc}<br></br>
                </div>
            </div><br></br><br></br>
            <div>
                <img class="icons" src="https://www.pngall.com/wp-content/uploads/2016/10/Calendar-Download-PNG.png"></img>
               <h2 class="cardinfo">  {props.days} days</h2><br></br>
            </div><br></br>
            
            <div>
                <img class="icons" src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png"></img>
                <h2 class="cardinfo">  {props.npeople}</h2><br></br>
            </div><br></br>
            
            <div>
                <img class="icons" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Dollar_sign_in_circle_cleaned_%28PD_version%29.svg/2048px-Dollar_sign_in_circle_cleaned_%28PD_version%29.svg.png"></img>
                <h2 class="cardinfo">  {props.price}</h2><br></br>
            </div><br></br>

            <div>
                <img class="icons" src="https://cdn-icons-png.flaticon.com/512/2933/2933772.png"></img>
                <h2 class="cardinfo" href={props.linkh}>  {props.hotel}</h2><br></br>
            </div><br></br>
            
            <br></br>

            <Link to="/form"><button class="contactbutton" type="submit">BOOK NOW<br></br></button></Link>
         
            </center>
            <br></br>
        </div>
    )
}
