import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Facebook,Github,Twitter,Instagram ,Linkedin} from 'react-bootstrap-icons';
import { IoIosMail } from "react-icons/io";

export default function Footer() {
    return (
        <div className="main-footer bg-dark text-center text-white">
            <div className="container p-4">
            {/* Section: Social media --> */}
            </div>
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
   
    <div className="socialmediaquote">
      <p><b>Get connected with us on social networks:</b></p>
    </div>
    
    <div className="SocialMediaIcons">
      <a href="https://www.facebook.com/profile.php?id=100007303173898" className="me-4 text-reset">
        <i ><Facebook color="royalblue" size={60} /></i>
      </a>
      <a href="https://twitter.com/RawanArnoubb?s=09" className="me-4 text-reset">
      <i ><Twitter color="royalblue" size={60} /></i>
      </a>
      <a href="mailto:rawanarnoub@gmail.com" className="me-4 text-reset">
      <i ><IoIosMail color="royalblue" size={60} /></i>
      </a>
      <a href="https://www.github.com/rawanarnoub" className="me-4 text-reset">
      <i ><Github color="royalblue" size={60} /></i>
      </a>
      <a href="https://www.instagram.com/rawanarnoub" className="me-4 text-reset">
      <i ><Instagram color="royalblue" size={60} /></i>
      </a>
      <a href="https://www.linkedin.com/in/rawan-arnoub-175180174" className="me-4 text-reset">
      <i ><Linkedin color="royalblue" size={60} /></i>
      </a>
      
      

    </div> </section>
    
   
  
  <section className="mb-4">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i> Personal Website
          </h6>
          <p>
            It does not matter how slowly you go as long as you don't stop.<b id="bold-footer"> Never give up </b>
            ,for that is just the place and time that the tide will turn.You just can't beat the person who won't
            give up.There is no failure except in no longer trying.
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Web Development</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Machine Learning</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Telecommunication</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Teaching</a>
          </p>
        </div>
        
       
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i className="fas fa-home me-3"></i> Lebanon Beirut</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
             rawan.arnoubb@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> Phone number : +961 79321644</p>
          
        </div>
       
      </div>
      
    </div>
  </section>

            <footer className="bg-dark text-center text-white">
  {/* Copyright --> */}
            <div className="text-center p-3" >
               © 2021 Personal Website All Rights Reserved
               <a className="text-dark" href="/">Rawan.com</a>
            </div>
        
            </footer>
            </div>
            
        
    );
}
