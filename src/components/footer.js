import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid p-0" style={{ fontFamily: "'Open Sans', sans-serif" }}>
        <footer className="footer-area bg-gray pt-100 pb-70" style={{ 
            backgroundColor: '#f8f9fa',
            borderTop: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 -5px 15px rgba(0,0,0,0.03)'
        }}>
    <div className="container">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="copyright mb-30" style={{ textAlign: 'center' }}>
                    <div className="footer-logo">
                        <a href="index.html">
                            <img 
                              alt="Smart Point Logo" 
                              src="https://i.pinimg.com/1200x/c4/7a/c0/c47ac0936b956f9a4de17893826e7cdc.jpg" 
                              className="img-fluid rounded"
                              style={{
                                maxWidth: '80px', 
                                height: 'auto',
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                                border: '3px solid #fff',
                                padding: '5px',
                                backgroundColor: '#fff',
                                transition: 'all 0.3s ease'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </a>
                    </div>
                    <p style={{ 
                        marginTop: '15px',
                        color: '#6c757d',
                        fontSize: '14px'
                    }}>
                        © Sanju <a href="#" style={{ color: '#007bff', textDecoration: 'none' }}>Smart-Point</a>.<br/> All Rights Reserved
                    </p>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="footer-widget mb-30 ml-lg-30">
                    <div className="footer-title">
                        <h3 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: '#343a40',
                            marginBottom: '1.2rem',
                            position: 'relative',
                            paddingBottom: '0.5rem'
                        }}>
                            ABOUT US
                            <span style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '40px',
                                height: '2px',
                                backgroundColor: '#007bff'
                            }}></span>
                        </h3>
                    </div>
                    <div className="footer-list">
                        <ul className="list-unstyled">
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="about.html" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>About us</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="#" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>Store location</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="contact.html" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>Contact</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="#" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>Orders tracking</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="footer-widget mb-30 ml-lg-50">
                    <div className="footer-title">
                        <h3 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: '#343a40',
                            marginBottom: '1.2rem',
                            position: 'relative',
                            paddingBottom: '0.5rem'
                        }}>
                            USEFUL LINKS
                            <span style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '40px',
                                height: '2px',
                                backgroundColor: '#007bff'
                            }}></span>
                        </h3>
                    </div>
                    <div className="footer-list">
                        <ul className="list-unstyled">
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="#" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>Returns</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="#" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>Support Policy</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="#" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>Size guide</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="#" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>FAQs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget mb-30 ml-lg-75">
                    <div className="footer-title">
                        <h3 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: '#343a40',
                            marginBottom: '1.2rem',
                            position: 'relative',
                            paddingBottom: '0.5rem'
                        }}>
                            FOLLOW US
                            <span style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '40px',
                                height: '2px',
                                backgroundColor: '#007bff'
                            }}></span>
                        </h3>
                    </div>
                    <div className="footer-list">
                        <ul className="list-unstyled">
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="#" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>Facebook</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="#" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>Twitter</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="#" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>Instagram</a>
                            </li>
                            <li style={{ marginBottom: '0.5rem' }}>
                                <a href="#" style={{
                                    color: '#6c757d',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    display: 'inline-block'
                                }} onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#007bff';
                                    e.currentTarget.style.paddingLeft = '5px';
                                }} onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#6c757d';
                                    e.currentTarget.style.paddingLeft = '0';
                                }}>Youtube</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget mb-30 ml-lg-70">
                    <div className="footer-title">
                        <h3 style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            color: '#343a40',
                            marginBottom: '1.2rem',
                            position: 'relative',
                            paddingBottom: '0.5rem'
                        }}>
                            SUBSCRIBE
                            <span style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                width: '40px',
                                height: '2px',
                                backgroundColor: '#007bff'
                            }}></span>
                        </h3>
                    </div>
                    <div className="subscribe-style">
                        <p style={{ color: '#6c757d', marginBottom: '1rem' }}>
                            Get E-mail updates about our latest shop and special offers.
                        </p>
                        <div id="mc_embed_signup" className="subscribe-form">
                            <form id="mc-embedded-subscribe-form" className="validate" noValidate target="_blank" name="mc-embedded-subscribe-form" method="post" action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef">
                                <div id="mc_embed_signup_scroll" className="mc-form">
                                    <input 
                                        className="email form-control mb-3" 
                                        type="email" 
                                        required 
                                        placeholder="Enter your email here.." 
                                        name="EMAIL" 
                                        value=""
                                        style={{
                                            borderRadius: '4px',
                                            border: '1px solid #ced4da',
                                            padding: '10px 15px',
                                            fontSize: '14px'
                                        }}
                                    />
                                    <div className="mc-news" aria-hidden="true">
                                        <input type="text" value="" tabIndex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"/>
                                    </div>
                                    <div className="clear">
                                        <input 
                                            id="mc-embedded-subscribe" 
                                            className="button btn btn-primary w-100" 
                                            type="submit" 
                                            name="subscribe" 
                                            value="Subscribe"
                                            style={{
                                                backgroundColor: '#007bff',
                                                border: 'none',
                                                padding: '10px',
                                                fontSize: '14px',
                                                fontWeight: '600',
                                                borderRadius: '4px',
                                                transition: 'all 0.3s',
                                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = '#0069d9';
                                                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = '#007bff';
                                                e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                                            }}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
      
    </div>
  )
}

export default Footer