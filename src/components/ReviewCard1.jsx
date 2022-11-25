import React from 'react';
import './ReviewCard1.css'

export default function ReviewCard(props){
    //<img src={stars} class="stars"></img>
    const stars="https://cdn-icons-png.flaticon.com/512/1601/1601243.png";
    const icon="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png";
    return(
        <div class="cardback">
            <center>
                <br></br>
                <img src={icon} class="image"></img><br></br>
                <h2 class="cardtext">{props.title}</h2>
                <p>{props.destination}</p>
                <p class="cardinfo">{props.info}</p>
                <b>Rating:</b>
                <img src={stars} class="stars"></img>
                <img src={stars} class="stars"></img>
                <img src={stars} class="stars"></img>
                <img src={stars} class="stars"></img>
            </center>
            <br></br>
        </div>
    );
}