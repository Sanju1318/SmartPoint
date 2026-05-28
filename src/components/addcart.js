import React, { useContext, useEffect, useState } from 'react'
import usercontext from './context'
import { useNavigate, Link } from 'react-router-dom'
import Footer from './footer'

const Addcart = () => {
  const [show, setshow] = useState([])
  const { settprice } = useContext(usercontext)
  const navigate = useNavigate()

  useEffect(() => {
    showcart()
  }, [])

  useEffect(() => {
    const total = show.reduce((item, ss) => item + ss.quantity * ss.price, 0)
    settprice(total)
  }, [show])

  const del = async (id) => {
    const result = await fetch(`http://localhost:4000/delcart/${id}`, {
      method: 'delete'
    })
    const rest = await result.json()

    if (rest.statuscode === 1) {
      alert("Item removed from cart");
    } else {
      alert('Failed to remove item')
    }
  }

  const showcart = async () => {
    const result = await fetch("http://localhost:4000/showcart", {
      method: 'get'
    })
    const rest = await result.json()

    if (rest.statuscode === 1) {
      const updated = rest.data.map(item => ({
        ...item,
        quantity: 1
      }))
      setshow(updated)
    } else {
      alert("not valid")
    }
  }

  let increament = (index) => {
    var inc = [...show]
    inc[index].quantity += 1
    setshow(inc)
  }

  let decreament = (index) => {
    var dec = [...show]
    if (dec[index].quantity > 1) {
      dec[index].quantity -= 1
      setshow(dec)
    }
  }

  const calculate = (item) => {
    return item.price * item.quantity
  }

  const proceedToCheckout = () => {
    navigate("/payment")
  }

  return (
    <div>
      <div className="cart-main-area pt-90 pb-100">
        <div className="container">
          <h3 className="cart-page-title">Your Shopping Cart</h3>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div>
                <div className="table-content table-responsive cart-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {show.map((a, index) =>
                        <tr key={index}>
                          <td className="product-thumbnail">
                            <a href="#"><img src={`/uploads/${a.file}`} style={{ height: "80px" }} alt={a.name} /></a>
                          </td>
                          <td className="product-name"><a href="#">{a.name}</a></td>
                          <td className="product-price-cart"><span className="amount">${a.price}</span></td>
                          <td className="product-quantity">
                            <div className="cart-plus-minus"
                              style={{
                                display: 'inline-block',
                                position: 'relative',
                                width: '100px',
                                height: '30px',
                                padding: '0',
                                margin: '0'
                              }}>
                              <button onClick={() => decreament(index)} style={{
                                position: 'absolute',
                                left: '0',
                                top: '0',
                                width: '30px',
                                height: '30px',
                                border: '1px solid #ddd',
                                backgroundColor: '#f5f5f5',
                                cursor: 'pointer'
                              }}>-</button>
                              <input className="cart-plus-minus-box" type="text" name="qtybutton" value={a.quantity} readOnly style={{
                                width: '40px',
                                height: '28px',
                                textAlign: 'center',
                                borderLeft: 'none',
                                borderRight: 'none',
                                borderTop: '1px solid #ddd',
                                borderBottom: '1px solid #ddd',
                                position: 'absolute',
                                left: '30px',
                                top: '0'
                              }} />
                              <button onClick={() => increament(index)} style={{
                                position: 'absolute',
                                right: '0',
                                top: '0',
                                width: '30px',
                                height: '30px',
                                border: '1px solid #ddd',
                                backgroundColor: '#f5f5f5',
                                cursor: 'pointer'
                              }}>+</button>
                            </div>
                          </td>
                          <td className="product-subtotal">${calculate(a)}</td>
                          <td className="product-remove">
                            <a href="#" onClick={(e) => { e.preventDefault(); del(a._id) }}>
                              <i className="fa fa-times"></i>
                            </a>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-7">
                  {/* New attractive content box for gadgets */}
                  <div className="premium-gadgets-box bg-light p-4 rounded shadow-sm h-100" style={{minHeight: '350px'}}>
                    <h4 className="mb-3 text-primary">
                      <i className="fas fa-headphones me-2"></i> 
                      Upgrade Your Experience
                    </h4>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div className="bg-white p-2 rounded-circle me-3 shadow-sm">
                            <i className="fas fa-headphones text-primary fa-lg"></i>
                          </div>
                          <div>
                            <h6 className="mb-1">Premium Headphones</h6>
                            <p className="text-muted small mb-0">Noise cancellation • 30hr battery</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div className="bg-white p-2 rounded-circle me-3 shadow-sm">
                            <i className="fas fa-music text-success fa-lg"></i>
                          </div>
                          <div>
                            <h6 className="mb-1">Wireless Earbuds</h6>
                            <p className="text-muted small mb-0">Crystal clear audio • IPX7 waterproof</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div className="bg-white p-2 rounded-circle me-3 shadow-sm">
                            <i className="fas fa-volume-up text-warning fa-lg"></i>
                          </div>
                          <div>
                            <h6 className="mb-1">Bluetooth Speakers</h6>
                            <p className="text-muted small mb-0">360° sound • Party lights</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 mb-15">
                        <div className="d-flex align-items-center">
                          <div className="bg-white p-2 rounded-circle me-3 shadow-sm">
                            <i className="fas fa-gamepad text-danger fa-lg"></i>
                          </div>
                          <div>
                            <h6 className="mb-1">Gaming Headsets</h6>
                            <p className="text-muted small mb-0">7.1 surround • RGB lighting</p>
                          </div>
                        </div>
                      </div>
                          <div>
            <h6 className="mb-1">Bluetooth Speakers</h6>
            <p className="text-muted small mb-0">Party starts here, sound surrounds, memories made in every beat. bass that pounds, noise fades away </p>
          </div>
            <div>
            <h6 className="mb-1">Gaming Headsets</h6>
            <p className="text-muted small mb-0">Victory sounds sweet, hear footsteps, chat with teammates clearly. bass that pounds, noise fades away</p>
          </div>

               <div>
            <h6 className="mb-1">Premium Headphones</h6>
            <p className="text-muted small mb-0">Immerse in crystal clarity, bass that pounds, noise fades away. bass that pounds, noise fades away</p>
          </div>

              <div>
            <h6 className="mb-1">Wireless Earbuds</h6>
            <p className="text-muted small mb-0">Freedom in your ears, music follows wherever life leads you. bass that pounds, noise fades away

</p>
          </div>

                    </div>
                   
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-5">
                  <div className="grand-totall bg-white p-4 rounded shadow-sm h-100 d-flex flex-column justify-content-between" style={{minHeight: '350px'}}>
                    <div>
                      <div className="title-wrap mb-3">
                        <h4 className="cart-bottom-title mt-4">Cart Total</h4>
                      </div>
                      <div className="total-shipping mb-3">
                        <h5 className="mb-2">Payment Method</h5>
                        <div className="form-check mb-2">
                          <input className="form-check-input" type="radio" name="paymentMethod" id="upi" />
                          <label className="form-check-label" htmlFor="upi">
                            UPI Payment
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="paymentMethod" id="cod" />
                          <label className="form-check-label" htmlFor="cod">
                            Cash on Delivery
                          </label>
                        </div>
                      </div>
                      <div className="border-top pt-3 mb-3">
                        <h4 className="grand-totall-title d-flex justify-content-between">
                          Grand Total
                          <span className="text-primary">${show.reduce((item, ss) => item + ss.quantity * ss.price, 0)}</span>
                        </h4>
                      </div>
                    </div>
                    
                    <div>
                      <button 
                        className="btn btn-primary w-100 py-2 fw-bold" 
                        onClick={proceedToCheckout}
                        disabled={show.length === 0}
                      >
                        <i className="fas fa-lock me-2"></i>
                        Proceed to Checkout
                      </button>
                      
                      <div className="mt-3 text-center">
                        <small className="text-muted">
                          <i className="fas fa-shield-alt me-1"></i>
                          Secure payment • 100% protection
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for additional styling */}
      <style>{`
        .premium-gadgets-box {
          border-left: 4px solid #0d6efd;
          transition: transform 0.3s ease;
          position: relative;
        }
        
        .premium-gadgets-box:hover {
          transform: translateY(-5px);
        }
        
        .grand-totall {
          border: 1px solid #e9ecef;
        }
        
        .cart-bottom-title {
          color: #2c3e50;
          font-weight: 600;
          padding-bottom: 10px;
          border-bottom: 2px solid #0d6efd;
        }
        
        .product-remove a {
          color: #dc3545;
          transition: color 0.3s;
        }
        
        .product-remove a:hover {
          color: #bd2130;
        }
        
        .grand-totall-title {
          font-weight: 600;
          font-size: 1.25rem;
        }
        
        .btn:disabled {
          cursor: not-allowed;
        }
        
        .table-content table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .table-content th {
          background-color: #f8f9fa;
          padding: 15px;
          text-align: left;
          font-weight: 600;
        }
        
        .table-content td {
          padding: 15px;
          vertical-align: middle;
          border-bottom: 1px solid #dee2e6;
        }

        @media (min-width: 768px) {
          .premium-gadgets-box,
          .grand-totall {
            height: 100% !important;
            display: flex;
            flex-direction: column;
          }
        }
        
        @media (max-width: 767.98px) {
          .premium-gadgets-box,
          .grand-totall {
            min-height: auto !important;
            margin-bottom: 20px;
          }
          
          .premium-gadgets-box .text-center {
            position: static !important;
            margin-top: 20px;
          }
        }
      `}</style>
      <Footer/>
    </div>
  )
}

export default Addcart