import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Showsub = () => {
  const [show, setshow] = useState([]);
  const [params] = useSearchParams();
  const id = params.get('id');

  useEffect(() => {
    if(id) {
      showsub();
    }
  }, [id]);

  const showsub = async () => {
    try {
      const result = await fetch(`http://localhost:4000/showsub/${id}`, {
        method: 'get'
      });

      const rest = await result.json();
      console.log(rest);

      if (rest.statuscode === 1) {
        setshow(rest.data);
      } else {
        alert("No data found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Error fetching data");
    }
  }

  return (
    <>
      <div style={{
        paddingBottom: '90px',
        marginTop:"200px",
        backgroundColor: '#f9f9f9'
      }}>
        <div style={{
          width: '100%',
          paddingRight: '15px',
          paddingLeft: '15px',
          marginRight: 'auto',
          marginLeft: 'auto',
          maxWidth: '1200px'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '30px 0'
          }}>
            <h5 style={{ fontSize: '18px', color: '#333' }}>Who Are We</h5>
            <h1 style={{ fontSize: '36px', color: '#333', margin: '15px 0' }}>Welcome To Gadget</h1>
            <p style={{ color: '#777', maxWidth: '800px', margin: '0 auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      
      <div style={{
        paddingBottom: '60px',
        backgroundColor: '#fff'
      }}>
        <div style={{
          width: '100%',
          paddingRight: '15px',
          paddingLeft: '15px',
          marginRight: 'auto',
          marginLeft: 'auto'
        }}>
          <div style={{
            textAlign: 'center',
            paddingBottom: '55px'
          }}>
            <h4 style={{ fontSize: '24px', color: '#333' }}>New Arrivals</h4>
          </div>
          
          <div>
            <div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginRight: '-15px',
                marginLeft: '-15px'
              }}>
                {show.length > 0 ? (
                  show.map((product) => (
                    <div key={product._id} style={{
                      position: 'relative',
                      width: '100%',
                      paddingRight: '15px',
                      paddingLeft: '15px',
                      flex: '0 0 20%',
                      maxWidth: '20%'
                    }}>
                      <div style={{
                        marginBottom: '35px',
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'relative',
                          overflow: 'hidden'
                        }}>
                          <a href="" style={{ display: 'block' }}>
                            <Link to={`/detail?id=${product._id}`}>
                            <img 
                              src={`/uploads/${product.file}`} 
                              alt={product.name} 
                              style={{
                                width: '100%',
                                transition: 'all 0.3s ease 0s'
                              }}
                            />
                            </Link>
                          </a>
                          <span style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            backgroundColor: '#f2f2f2',
                            color: '#333',
                            padding: '3px 10px',
                            fontSize: '12px',
                            borderRadius: '3px'
                          }}>-10%</span>
                          <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '0',
                            right: '0',
                            textAlign: 'center',
                            opacity: '0',
                            visibility: 'hidden',
                            transition: 'all 0.3s ease 0s'
                          }}>
                            <a title="Add To Cart" href="#" style={{
                              display: 'inline-block',
                              width: '40px',
                              height: '40px',
                              lineHeight: '40px',
                              backgroundColor: '#fff',
                              color: '#333',
                              margin: '0 5px',
                              borderRadius: '50%'
                            }}><i className="fa fa-shopping-cart"></i></a>
                            <a title="Quick View" href="#" style={{
                              display: 'inline-block',
                              width: '40px',
                              height: '40px',
                              lineHeight: '40px',
                              backgroundColor: '#fff',
                              color: '#333',
                              margin: '0 5px',
                              borderRadius: '50%'
                            }}><i className="fa fa-eye"></i></a>
                            <a title="Compare" href="#" style={{
                              display: 'inline-block',
                              width: '40px',
                              height: '40px',
                              lineHeight: '40px',
                              backgroundColor: '#fff',
                              color: '#333',
                              margin: '0 5px',
                              borderRadius: '50%'
                            }}><i className="fa fa-retweet"></i></a>
                          </div>
                        </div>
                        <div style={{
                          padding: '20px 0',
                          position: 'relative'
                        }}>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}>
                            <h3 style={{
                              fontSize: '16px',
                              marginBottom: '10px'
                            }}>
                              <a href="product-details.html" style={{
                                color: '#333',
                                textDecoration: 'none'
                              }}>{product.name}</a>
                            </h3>
                            <div style={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}>
                              <span style={{
                                color: '#333',
                                fontWeight: 'bold'
                              }}>$ {product.price}</span>
                              <span style={{
                                color: '#999',
                                textDecoration: 'line-through'
                              }}>$ {product.off}</span>
                            </div>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div style={{
                    width: '100%',
                    textAlign: 'center',
                    padding: '50px 0'
                  }}>
                    <p style={{ color: '#777', fontSize: '18px' }}>No products found for this category</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Showsub;