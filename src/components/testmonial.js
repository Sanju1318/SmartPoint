import React from 'react';

const Testimonial = () => {
  return (
    <div className="testimonial-area bg-gray-3 pt-100 pb-95 ml-70 mr-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 ms-auto me-auto">
            <div className="single-testimonial text-center">
              <img 
                src="assets/img/testimonial/testi-1.png" 
                alt="Grace Alvarado" 
                className="testimonial-image"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  margin: '0 auto 20px'
                }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <div className="client-info">
                 <i class="fa fa-map-signs"></i>
                <h5>GRACE ALVARADO</h5>
                <span>Customer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;