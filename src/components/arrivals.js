import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Arrivals = () => {
  const [show, setshow] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Arrivals();
  }, []);

  const Arrivals = async () => {
    try {
      const result = await fetch('http://localhost:4000/arrivals', {
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
    } finally {
      setLoading(false);
    }
  }

  // Function to generate random ratings (for demo purposes)
  const generateRandomRating = () => {
    return {
      stars: Math.floor(Math.random() * 5) + 1, // Random between 1-5
      reviews: Math.floor(Math.random() * 100) + 1 // Random between 1-100
    };
  };

  // Format price with commas
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
 
      
      <div className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h1 fw-bold text-primary">New Arrivals</h2>
            <p className="text-muted">Discover our latest collection of premium products</p>
          </div>
          
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading products...</p>
            </div>
          ) : (
            <div className="row g-4">
              {show.length > 0 ? (
                show.map((product, index) => {
                  const rating = generateRandomRating();
                  
                  return (
                    <div key={index} className="col-6 col-md-4 col-lg-3 col-xl-2">
                      <div className="card h-100 border-0 shadow-sm mb-4 product-card">
                        <div className="position-relative overflow-hidden">
                          <Link to={`/detail?id=${product._id}`} className="d-block product-image-wrapper">
                            <img 
                              src={`/uploads/${product.file}`} 
                              alt={product.name} 
                              className="img-fluid w-100 product-image"
                              style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                              onError={(e) => {
                                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9kdWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                              }}
                            />
                            <div className="image-overlay"></div>
                          </Link>
                          <span className="position-absolute top-0 start-0 bg-danger text-white small m-2 px-2 py-1 rounded fw-bold">
                            -10%
                          </span>
                          <button className="btn btn-icon position-absolute top-0 end-0 m-2 bg-white text-dark rounded-circle shadow-sm">
                            <i className="far fa-heart"></i>
                          </button>
                        </div>
                        <div className="card-body p-3">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h3 className="h6 mb-2 text-truncate">
                              <Link to={`/detail?id=${product._id}`} className="text-dark text-decoration-none">
                                {product.name}
                              </Link>
                            </h3>
                          </div>
                          
                          {/* Star Rating Section */}
                          <div className="mb-2">
                            <div className="d-flex align-items-center">
                              {[...Array(5)].map((_, i) => (
                                <i 
                                  key={i} 
                                  className={`fas fa-star${i < rating.stars ? ' text-warning' : '-alt text-muted'}`}
                                  style={{ fontSize: '0.8rem' }}
                                ></i>
                              ))}
                              <small className="text-muted ms-1">({rating.reviews})</small>
                            </div>
                          </div>
                          
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              <span className="fw-bold text-dark d-block">${formatPrice(product.price)}</span>
                              <span className="text-muted small text-decoration-line-through">${product.off && formatPrice(product.off)}</span>
                            </div>
                            <button className="btn btn-outline-primary btn-sm rounded-circle">
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-12 text-center py-5">
                  <i className="fas fa-box-open display-1 text-muted mb-3"></i>
                  <p className="text-muted h5">No products found</p>
                  <button className="btn btn-primary mt-3" onClick={Arrivals}>
                    <i className="fas fa-redo me-2"></i>Try Again
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Add custom CSS for enhanced styling */}
      <style>{`
        .product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(230, 218, 218, 0.1) !important;
        }
        
        .product-image-wrapper {
          overflow: hidden;
          position: relative;
        }
        
        .product-image {
          transition: transform 0.5s ease;
        }
        
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.03);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .product-card:hover .image-overlay {
          opacity: 1;
        }
        
        .product-actions {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }
        
        .product-card:hover .product-actions {
          opacity: 1;
          transform: translateY(0);
        }
        
        .btn-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
        }
      `}</style>
    </>
  );
};

export default Arrivals;