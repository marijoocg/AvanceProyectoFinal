import React from 'react';

function Footer(){
    const home="https://www.freeiconspng.com/uploads/home-icon-png-31.png";
    const email="https://www.freeiconspng.com/thumbs/email-icon/email-icon--clipart-best-22.png";
    const phone="";

    return(
        <div class="footer">
            <div class="row">
                <div class="col">
                    <b>TRAVEL AGENCY</b>
                </div>
                <div class="col">
                    <b>SERVICES</b>
                </div>
                <div class="col">
                    <b>CONTACT US</b>
                </div>
            </div>
            <div class="row"><hr></hr></div>
            <div class="row">
                <div class="col">
                    <p>Here you can use rows and columns to organize your footer content. 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="col">
                    <div class="row">
                        <a href="MainPage">Home</a>
                    </div>
                    <div class="row">
                        <a href="Flights">Flights</a>
                    </div>
                    <div class="row">
                        <a href="#Hotels">Hotels</a>
                    </div>
                    <div class="row">
                        <a href="History">Reservations</a>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <a href="https://www.google.com.mx/maps/place/Nueva+York,+EE.+UU./@40.6971494,-74.2598796,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728">New York, NY, 10012 US</a>
                    </div>
                    <div class="row"> <b>Email</b></div>
                    <div class="row">
                        <a href="https://gmail.com">travelagency@contact.com</a>
                    </div>
                    <div class="row"> <b>Phone</b> </div>
                    <div class="row">
                        <p>+01 2345 6789</p>
                    </div>
                </div>
            </div>
            <div class="row"><hr></hr></div>
            <div class="row">
                <a href="MainPage"><b>TravelAgency.com</b></a>
            </div>  
        </div>
   
    );
}

export default Footer;