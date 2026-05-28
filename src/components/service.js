import React from 'react';
import Footer from './footer';

const Service = () => {
  return (
    <div className="container-fluid px-0" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Section */}
                 <div className="row align-items-center py-5" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c)center/cover fixed no-repeat',
        minHeight: '500px',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="col-lg-8 mx-auto text-center py-5 position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold mb-4" style={{ 
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            animation: 'fadeInDown 1s ease',
            color:'white'
          }}>
            
            Our Premium Services</h1>
          <p className="lead mb-4" style={{ 
            fontSize: '1.25rem',
            animation: 'fadeInUp 1s ease',
            color:'lightblue'
          }}>
            Enhancing your shopping experience with exceptional services
          </p>
        </div>
      </div>

      {/* Services Cards */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Fast Delivery */}
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '15px', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="card-body p-4 text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                  style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-shipping-fast text-primary" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="fw-bold mb-3">Lightning Fast Delivery</h3>
                <p className="mb-4">
                  Get your gadgets delivered within 24 hours in metro cities and 2-3 days in other locations. Our express delivery ensures you never wait long.
                </p>
                <div className="d-flex justify-content-center">
                  <span className="badge bg-primary rounded-pill px-3 py-2">Same Day Delivery Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Authentic Products */}
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '15px', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="card-body p-4 text-center">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                  style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-check-circle text-success" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="fw-bold mb-3">100% Authentic Products</h3>
                <p className="mb-4">
                  Every product is sourced directly from manufacturers and comes with a authenticity guarantee. No fakes, no compromises.
                </p>
                <div className="d-flex justify-content-center">
                  <span className="badge bg-success rounded-pill px-3 py-2">Manufacturer Warranty Included</span>
                </div>
              </div>
            </div>
          </div>

          {/* Easy Returns */}
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '15px', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="card-body p-4 text-center">
                <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                  style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-exchange-alt text-warning" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="fw-bold mb-3">Hassle-Free Returns</h3>
                <p className="mb-4">
                  15-day no-questions-asked return policy. We make returns easy with free pickup and instant refunds.
                </p>
                <div className="d-flex justify-content-center">
                  <span className="badge bg-warning text-dark rounded-pill px-3 py-2">15-Day Return Window</span>
                </div>
              </div>
            </div>
          </div>

          {/* COD */}
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '15px', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="card-body p-4 text-center">
                <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                  style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-money-bill-wave text-info" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="fw-bold mb-3">Cash On Delivery</h3>
                <p className="mb-4">
                  Pay when you receive. We offer COD across all pin codes with no extra charges. Your convenience is our priority.
                </p>
                <div className="d-flex justify-content-center">
                  <span className="badge bg-info rounded-pill px-3 py-2">Available Nationwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '15px', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="card-body p-4 text-center">
                <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                  style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-headset text-danger" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="fw-bold mb-3">24/7 Customer Support</h3>
                <p className="mb-4">
                  Our expert support team is available round the clock via chat, email and phone to resolve any queries.
                </p>
                <div className="d-flex justify-content-center">
                  <span className="badge bg-danger rounded-pill px-3 py-2">Instant Response</span>
                </div>
              </div>
            </div>
          </div>

          {/* Warranty */}
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm h-100" style={{ borderRadius: '15px', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div className="card-body p-4 text-center">
                <div className="bg-purple bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                  style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-shield-alt text-purple" style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="fw-bold mb-3">Extended Warranty</h3>
                <p className="mb-4">
                  Get up to 2 years additional warranty on select products. Our protection plans cover repairs and replacements.
                </p>
                <div className="d-flex justify-content-center">
                  <span className="badge bg-purple rounded-pill px-3 py-2">Up to 2 Years Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Process */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3">Our Delivery Process</h2>
              <p className="lead">
                Fast, reliable and transparent delivery tracking
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                  style={{ width: '70px', height: '70px' }}>
                  <span className="text-primary fw-bold">1</span>
                </div>
                <h5 className="fw-bold mb-2">Order Placed</h5>
                <p className="mb-0">We receive your order instantly</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                  style={{ width: '70px', height: '70px' }}>
                  <span className="text-primary fw-bold">2</span>
                </div>
                <h5 className="fw-bold mb-2">Processing</h5>
                <p className="mb-0">Quality check & packaging</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                  style={{ width: '70px', height: '70px' }}>
                  <span className="text-primary fw-bold">3</span>
                </div>
                <h5 className="fw-bold mb-2">Shipped</h5>
                <p className="mb-0">Dispatched from nearest warehouse</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                  style={{ width: '70px', height: '70px' }}>
                  <span className="text-primary fw-bold">4</span>
                </div>
                <h5 className="fw-bold mb-2">Delivered</h5>
                <p className="mb-0">At your doorstep with care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Return Policy */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da" 
              alt="Return Policy" 
              className="img-fluid rounded shadow-lg" 
              style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Our Return Policy</h2>
            <div className="accordion" id="returnPolicyAccordion">
              <div className="accordion-item mb-3 border-0 shadow-sm rounded">
                <h3 className="accordion-header" id="headingOne">
                  <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    Easy Returns Process
                  </button>
                </h3>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
                  <div className="accordion-body">
                    <p>Initiate returns directly from your account. We'll schedule a pickup at your convenience. Refunds processed within 24 hours of receiving the product.</p>
                    <ul className="mb-0">
                      <li>15-day return window</li>
                      <li>Free pickup service</li>
                      <li>Original packaging required</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-3 border-0 shadow-sm rounded">
                <h3 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    Refund Options
                  </button>
                </h3>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
                  <div className="accordion-body">
                    <p>Choose your preferred refund method:</p>
                    <ul className="mb-0">
                      <li>Instant refund to original payment method</li>
                      <li>Store credit with 10% bonus</li>
                      <li>Gift card options available</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 shadow-sm rounded">
                <h3 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                    Warranty Claims
                  </button>
                </h3>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
                  <div className="accordion-body">
                    <p>Our warranty covers manufacturing defects:</p>
                    <ul className="mb-0">
                      <li>1-year standard manufacturer warranty</li>
                      <li>Extended warranty options available</li>
                      <li>Dedicated support for warranty claims</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
<Footer/>
    </div>
  );
};

export default Service;