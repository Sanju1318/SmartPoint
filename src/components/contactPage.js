import React, { useState } from 'react';
import Footer from './footer';
import Brandlogo from './brandlogo';

const ContactPage = () => {

    const[name,setname]=useState()
    const[email,setemail]=useState()
    const[subject,setsubject]=useState()
    const[message,setmessage]=useState()

    const send=async()=>
    {
        const data={name,email,subject,message}
        const result=await fetch("http://localhost:4000/contact",{
            method:'post',
            body:JSON.stringify(data),
            headers:{
                "Content-Type": "application/json ; charset=UTF-8"
            }
        })

        const rest=await result.json()

        if(rest.statuscode===1)
        {
            alert("Message Reach")
        }
        else
        {
            alert("Not Vallid")
        }
    }
    
    return (
        <div>
            <style>
                {`
                    /* Responsive styles */
                    @media (max-width: 767px) {
                        .breadcrumb-area {
                            padding: 20px 0 !important;
                        }
                        
                        .contact-area {
                            padding: 50px 0 !important;
                        }
                        
                        .custom-row-2 {
                            flex-direction: column;
                        }
                        
                        .col-lg-4, .col-lg-8, .col-md-5, .col-md-7 {
                            width: 100% !important;
                            max-width: 100% !important;
                            padding: 0 15px !important;
                        }
                        
                        .contact-info-wrap {
                            margin-bottom: 30px;
                            text-align: center;
                        }
                        
                        .single-contact-info {
                            flex-direction: column;
                            align-items: center;
                            margin-bottom: 20px;
                        }
                        
                        .contact-icon {
                            margin-right: 0;
                            margin-bottom: 10px;
                        }
                        
                        .contact-form-style .row {
                            flex-direction: column;
                        }
                        
                        .col-lg-6, .col-lg-12 {
                            width: 100% !important;
                            padding: 0 !important;
                            margin-bottom: 15px;
                        }
                        
                        input, textarea {
                            width: 100% !important;
                        }
                        
                        .submit {
                            width: 100% !important;
                        }
                        
                        .contact-social ul {
                            justify-content: center;
                        }
                    }
                    
                    @media (min-width: 768px) and (max-width: 991px) {
                        .contact-area {
                            padding: 70px 0 !important;
                        }
                        
                        .col-lg-4, .col-lg-8 {
                            width: 50% !important;
                        }
                    }
                `}
            </style>
            
            <div class="breadcrumb-area pt-25 pb-35  bg-gray-3">
                <div class="container ">
                    <div class="breadcrumb-content text-center mt-35">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li class="active">Contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="contact-area pt-100 pb-100">
                <div class="container">
                    <div class="custom-row-2">
                        <div class="col-lg-4 col-md-5">
                            <div class="contact-info-wrap">
                                <div class="single-contact-info">
                                    <div class="contact-icon">
                                        <i class="fa fa-phone"></i>
                                    </div>
                                    <div class="contact-info-dec">
                                        <p>+012 345 678 102</p>
                                        <p>+012 345 678 102</p>
                                    </div>
                                </div>
                                <div class="single-contact-info">
                                    <div class="contact-icon">
                                        <i class="fa fa-globe"></i>
                                    </div>
                                    <div class="contact-info-dec">
                                        <p><a href="#">urname@email.com</a></p>
                                        <p><a href="#">urwebsitenaem.com</a></p>
                                    </div>
                                </div>
                                <div class="single-contact-info">
                                    <div class="contact-icon">
                                        <i class="fa fa-map-marker"></i>
                                    </div>
                                    <div class="contact-info-dec">
                                        <p>Address goes here, </p>
                                        <p>phagwara, KPT 123.</p>
                                    </div>
                                </div>
                                <div class="contact-social text-center">
                                    <h3>Follow Us</h3>
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i class="fa fa-tumblr"></i></a></li>
                                        <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-7">
                            <div class="contact-form">
                                <div class="contact-title mb-30">
                                    <h2>Get In Touch</h2>
                                </div>
                                <div class="contact-form-style">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <input name="name" placeholder="Name*" type="text" onChange={(e)=>setname(e.target.value)} />
                                        </div>
                                        <div class="col-lg-6">
                                            <input name="email" placeholder="Email*" type="email"  onChange={(e)=>setemail(e.target.value)}/>
                                        </div>
                                        <div class="col-lg-12">
                                            <input name="subject" placeholder="Subject*" type="text" onChange={(e)=>setsubject(e.target.value)} />
                                        </div>
                                        <div class="col-lg-12">
                                            <textarea name="message" placeholder="Your Message*" onChange={(e)=>setmessage(e.target.value)}></textarea>
                                            <button class="submit" type="submit" onClick={send}>SEND</button>
                                        </div>
                                    </div>
                                </div>
                                <p class="form-messege"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactPage;