import React from 'react';
import Showcat from './showcat';
import Benararia from './benararia';
import Testmonial from './testmonial';
import Brandlogo from './brandlogo';
import Blog from './blog';
import Footer from './footer';
import Arrivals from './arrivals';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-page">
      {/* static hero section */}
      <div className="slider-area">
        <div className="slider-height-7 bg-glaucous d-flex align-items-center" style={{ minHeight: '500px' }}>
          <div className="container">
            <div className="row align-items-center slider-h9-mrg">
              <div className="col-lg-6 col-md-6 col-12 col-sm-6 order-md-1 order-2">
                <div className="slider-content-7 slider-animated-1 text-center text-md-start">
                  <h3 className="animated mb-3">New Arrival</h3>
                  <h1 className="animated mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
                    New Design <br />Bluetooth Speaker
                  </h1>
                  <Link to='/arrival'>
                  <div className="slider-btn-9 btn-hover">
                    <a className="animated" href="">SHOP NOW</a>
                  </div></Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 col-sm-6 order-md-2 order-1 mb-4 mb-md-0">
                <div className="slider-singleimg-hm9 slider-animated-1 text-center">
                  <img
                    className="animated img-fluid"
                    src="assets/img/slider/single-slide-3.png"
                    alt="Bluetooth Speaker"
                    style={{ maxHeight: '300px', width: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <Showcat />
      <Arrivals />
      <Benararia/>
      <Testmonial/>
      <Brandlogo/>
      <Blog/>
      <Footer/>
    </div>
  );
};

export default Landing;