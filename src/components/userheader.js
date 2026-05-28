import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Userheader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div style={{ 
      marginBottom: '190px',
      '@media (max-width: 991px)': {
        marginBottom: '100px'
      }
    }}>
      <header className="header-area clearfix header-hm9" style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
      }}>
        {/* Top Header Section */}
        <div className="header-top-area" style={{
          borderBottom: '1px solid #f1f1f1',
          padding: '10px 0'
        }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-8 col-12">
                <div className="language-currency-wrap d-flex align-items-center" style={{ gap: '20px' }}>
                  <div className="same-language-currency language-style position-relative">
                    <a href="#" className="d-flex align-items-center" style={{
                      color: '#333',
                      fontWeight: '500'
                    }}>
                      English <i className="fa fa-angle-down ms-2"></i>
                    </a>
                    <div className="lang-car-dropdown position-absolute bg-white p-3" style={{
                      minWidth: '150px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      display: 'none',
                      zIndex: 1001
                    }}>
                      <ul className="list-unstyled mb-0">
                        <li className="py-1"><a href="#" className="text-dark">Arabic</a></li>
                        <li className="py-1"><a href="#" className="text-dark">Bangla</a></li>
                        <li className="py-1"><a href="#" className="text-dark">Hindi</a></li>
                        <li className="py-1"><a href="#" className="text-dark">Spanish</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="same-language-currency use-style position-relative">
                    <a href="#" className="d-flex align-items-center" style={{
                      color: '#333',
                      fontWeight: '500'
                    }}>
                      USD <i className="fa fa-angle-down ms-2"></i>
                    </a>
                    <div className="lang-car-dropdown position-absolute bg-white p-3" style={{
                      minWidth: '150px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      display: 'none',
                      zIndex: 1001
                    }}>
                      <ul className="list-unstyled mb-0">
                        <li className="py-1"><a href="#" className="text-dark">Taka (BDT)</a></li>
                        <li className="py-1"><a href="#" className="text-dark">Riyal (SAR)</a></li>
                        <li className="py-1"><a href="#" className="text-dark">Rupee (INR)</a></li>
                        <li className="py-1"><a href="#" className="text-dark">Dirham (AED)</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="same-language-currency">
                    <p className="mb-0" style={{
                      color: '#333',
                      fontWeight: '500'
                    }}>
                      <i className="fa fa-phone me-2"></i> Call Us 9674853212
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-2 d-none d-lg-block">
                <div className="logo-hm9 text-center">
                  <a href="index.html">
                    <img 
                      style={{ 
                        height: "80px", 
                        width: "170px",
                        objectFit: "contain",
                        transition: 'all 0.3s ease',
                        ':hover': {
                          transform: 'scale(1.05)'
                        }
                      }} 
                      alt="Logo" 
                      src="https://i.pinimg.com/1200x/c4/7a/c0/c47ac0936b956f9a4de17893826e7cdc.jpg" 
                    />
                  </a>
                </div>
              </div>
              
              <div className="col-lg-5 col-md-4 col-12">
                <div className="header-right-wrap d-flex justify-content-end align-items-center" style={{ gap: '15px' }}>
                  <div className="same-style header-search position-relative">
                    <a className="search-active" href="#" style={{
                      fontSize: '20px',
                      color: '#333'
                    }}>
                      <i className="pe-7s-search"></i>
                    </a>
                    <div className="search-content position-absolute bg-white p-3" style={{
                      width: '300px',
                      right: 0,
                      top: '100%',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      display: 'none',
                      zIndex: 1001
                    }}>
                      <form action="#" className="d-flex">
                        <input 
                          type="text" 
                          placeholder="Search..." 
                          className="form-control"
                          style={{
                            border: '1px solid #ddd',
                            borderRadius: '4px 0 0 4px'
                          }}
                        />
                        <button 
                          className="button-search btn btn-dark" 
                          type="submit"
                          style={{
                            borderRadius: '0 4px 4px 0'
                          }}
                        >
                          <i className="pe-7s-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  
                  <div className="same-style account-setting position-relative">
                    <a 
                      style={{
                        fontSize: "20px",
                        color: '#333',
                        cursor: 'pointer'
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        const dropdown = e.currentTarget.nextElementSibling;
                        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                      }}
                    >
                      <i className="pe-7s-user-female"></i>
                    </a>
                    <div className="dropdown-content bg-white" style={{
                      position: 'absolute',
                      right: 0,
                      minWidth: '160px',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      zIndex: 1001,
                      display: 'none',
                      borderRadius: '4px'
                    }}>
                      <ul className="list-unstyled mb-0">
                        <li>
                          <Link to="/login"
                            className="d-block px-3 py-2 text-dark"
                            style={{
                              transition: 'all 0.3s ease',
                              ':hover': {
                                backgroundColor: '#f8f9fa',
                                color: '#ff6b6b'
                              }
                            }}
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link to='/signup'
                            className="d-block px-3 py-2 text-dark"
                            style={{
                              transition: 'all 0.3s ease',
                              ':hover': {
                                backgroundColor: '#f8f9fa',
                                color: '#ff6b6b'
                              }
                            }}
                          >
                            Register
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="same-style header-wishlist">
                  <Link to='/addcart'><a href="" style={{
                                       fontSize: '20px',
                                       color: '#333',
                                       position: 'relative'
                                     }}>
                                       <i className="pe-7s-like"></i>
                                     
                                     </a>
                                     </Link> 
                                   </div>
                                   <div className="same-style cart-wrap position-relative">
                                    <Link to='/addcart'><button className="icon-cart border-0 bg-transparent position-relative" style={{
                                       fontSize: '20px',
                                       color: '#333'
                                     }}>
                                       <i className="pe-7s-shopbag"></i>
                                     </button></Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="header-bottom sticky-bar" style={{
          backgroundColor: '#fff',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 d-block d-lg-none">
                <div className="d-flex justify-content-between align-items-center py-2">
                  <div className="logo">
                    <a href="index.html">
                      <img 
                        style={{ 
                          height: "50px", 
                          width: "auto",
                          maxWidth: "150px",
                          objectFit: "contain" 
                        }} 
                        alt="Logo" 
                        src="https://i.pinimg.com/1200x/c4/7a/c0/c47ac0936b956f9a4de17893826e7cdc.jpg" 
                      />
                    </a>
                  </div>
                  <button 
                    className="mobile-menu-button border-0 bg-transparent" 
                    onClick={toggleMobileMenu}
                    style={{
                      fontSize: '24px',
                      color: '#333',
                      padding: '5px 10px'
                    }}
                  >
                    {mobileMenuOpen ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                  </button>
                </div>
              </div>
              
              <div className="col-xl-12 col-lg-12 d-none d-lg-block">
                <div className="main-menu">
                  <nav>
                    <ul className="d-flex justify-content-center mb-0" style={{ gap: '30px' }}>
                      <li>
                        <Link 
                          to='/landing' 
                          className="text-dark fw-medium position-relative py-3 d-block"
                          style={{
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            ':hover': {
                              color: '#ff6b6b'
                            },
                            '::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: '0',
                              left: '0',
                              width: '0',
                              height: '2px',
                              backgroundColor: '#ff6b6b',
                              transition: 'width 0.3s ease'
                            },
                            ':hover::after': {
                              width: '100%'
                            }
                          }}
                        >
                         Home
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to='/service' 
                          className="text-dark fw-medium position-relative py-3 d-block"
                          style={{
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            ':hover': {
                              color: '#ff6b6b'
                            },
                            '::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: '0',
                              left: '0',
                              width: '0',
                              height: '2px',
                              backgroundColor: '#ff6b6b',
                              transition: 'width 0.3s ease'
                            },
                            ':hover::after': {
                              width: '100%'
                            }
                          }}
                        >
                          Service
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to='/contact' 
                          className="text-dark fw-medium position-relative py-3 d-block"
                          style={{
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            ':hover': {
                              color: '#ff6b6b'
                            },
                            '::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: '0',
                              left: '0',
                              width: '0',
                              height: '2px',
                              backgroundColor: '#ff6b6b',
                              transition: 'width 0.3s ease'
                            },
                            ':hover::after': {
                              width: '100%'
                            }
                          }}
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link 
                          to='/about' 
                          className="text-dark fw-medium position-relative py-3 d-block"
                          style={{
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            ':hover': {
                              color: '#ff6b6b'
                            },
                            '::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: '0',
                              left: '0',
                              width: '0',
                              height: '2px',
                              backgroundColor: '#ff6b6b',
                              transition: 'width 0.3s ease'
                            },
                            ':hover::after': {
                              width: '100%'
                            }
                          }}
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`mobile-menu bg-white ${mobileMenuOpen ? 'open' : ''}`}
          style={{
            maxHeight: mobileMenuOpen ? '500px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease-in-out',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            position: 'absolute',
            width: '100%',
            zIndex: 1000
          }}
        >
          <nav>
            <ul className="list-unstyled mb-0">
              <li className="border-bottom">
                <Link 
                  to='/landing' 
                  className="d-block px-4 py-3 text-dark fw-medium"
                  style={{
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      backgroundColor: '#f8f9fa',
                      color: '#ff6b6b'
                    }
                  }}
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="border-bottom">
                <Link 
                  to='/service' 
                  className="d-block px-4 py-3 text-dark fw-medium"
                  style={{
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      backgroundColor: '#f8f9fa',
                      color: '#ff6b6b'
                    }
                  }}
                  onClick={toggleMobileMenu}
                >
                  Service
                </Link>
              </li>
              <li className="border-bottom">
                <Link 
                  to='/contact' 
                  className="d-block px-4 py-3 text-dark fw-medium"
                  style={{
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      backgroundColor: '#f8f9fa',
                      color: '#ff6b6b'
                    }
                  }}
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="border-bottom">
                <Link 
                  to='/about' 
                  className="d-block px-4 py-3 text-dark fw-medium"
                  style={{
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    ':hover': {
                      backgroundColor: '#f8f9fa',
                      color: '#ff6b6b'
                    }
                  }}
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Userheader;