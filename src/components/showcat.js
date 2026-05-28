import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Showcat = () => {
  const [show, setshow] = useState([]);

  useEffect(() => {
    view();
  }, []);

  const view = async () => {
    try {
      const result = await fetch("http://localhost:4000/showcat", {
        method: 'get'
      });
      const rest = await result.json();

      if (rest.statuscode === 1) {
        setshow(rest.data);
      } else {
        alert("No categories found");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      alert("Error loading categories");
    }
  }

  return (
    <div 
      className="collections-area py-5"
      style={{
        backgroundColor: '#f8f9fa',
        minHeight: 'calc(100vh - 300px)',
        paddingTop: '30px',
        // marginTop:"250px"
        paddingTop:"250px"
      }}
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center"
>
            <h2 
              className="mb-3" 
              style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#2c3e50',
                position: 'relative',
                display: 'inline-block',
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              Our Categories
              <span 
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '4px',
                  backgroundColor: '#1a73e8ff',
                  borderRadius: '2px'
                }}
              ></span>
            </h2>
            <p 
              className="text-muted" 
              style={{
                maxWidth: '700px',
                margin: '0 auto',
                fontSize: '1.1rem',
                fontFamily: "'Open Sans', sans-serif"
              }}
            >
              Discover our exclusive collection of products
            </p>
          </div>
        </div>

        <div className="row g-4"
                  style={{
            marginLeft:'-100px',
            marginRight:"-100px"

          }}>
          {show.map((category, index) => (
            <div 
              key={index} 
              className="col-12 col-sm-6 col-md-4 col-lg-3"
            >
              <div 
                className="card h-100 border-0 shadow-sm"
                style={{
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  ':hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.12)'
                  }
                }}
              >
                <Link 
                  to={`/showsub?id=${category._id}`}
                  style={{
                    display: 'block',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    style={{
                      height: '200px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <img 
                      src={`/uploads/${category.file}`} 
                      alt={category.name} 
                      className="img-fluid w-100 h-100"
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        ':hover': {
                          transform: 'scale(1.1)'
                        }
                      }}
                    />
                    <div 
                      style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        backgroundColor: 'rgba(255,107,107,0.9)',
                        color: 'white',
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}
                    >
                      {category.quantity} Products
                    </div>
                  </div>
                </Link>
                
                <div 
                  className="card-body text-center"
                  style={{
                    padding: '20px',
                    backgroundColor: '#fff'
                  }}
                >
                  <h4 
                    className="mb-0"
                    style={{
                      fontSize: '1.3rem',
                      color: '#2c3e50',
                      fontWeight: '600',
                      fontFamily: "'Poppins', sans-serif",
                      marginBottom: '10px'
                    }}
                  >
                    {category.name}
                  </h4>
                  <Link 
                    to={`/showsub?id=${category._id}`}
                    className="btn btn-sm"
                    style={{
                      backgroundColor: '#ff6b6b',
                      color: 'white',
                      borderRadius: '30px',
                      padding: '8px 20px',
                      fontWeight: '500',
                      border: 'none',
                      transition: 'all 0.3s ease',
                      ':hover': {
                        backgroundColor: '#e05555',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {show.length === 0 && (
          <div 
            className="text-center py-5"
            style={{
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div 
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#f1f1f1',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}
            >
              <i 
                className="fa fa-folder-open" 
                style={{
                  fontSize: '2.5rem',
                  color: '#ff6b6b'
                }}
              ></i>
            </div>
            <h4 
              style={{
                color: '#6c757d',
                marginBottom: '20px',
                fontSize: '1.5rem',
                fontWeight: '500'
              }}
            >
              No categories available
            </h4>
            <button 
              className="btn"
              onClick={view}
              style={{
                padding: '10px 30px',
                borderRadius: '30px',
                backgroundColor: '#ff6b6b',
                color: 'white',
                border: 'none',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                ':hover': {
                  backgroundColor: '#e05555',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <i className="fa fa-sync-alt me-2"></i> Refresh Categories
            </button>
          </div>
        )}
      </div>
  
    </div>
  );
};

export default Showcat;