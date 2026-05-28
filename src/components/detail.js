import React, { useState,useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from './footer';

const Detail = () => {
const[name,setname]=useState()
const[price,setprice]=useState()
const[pic,setpic]=useState()
const[off,setoff]=useState()

const navigate=useNavigate()

    const[params]=useSearchParams()
    const id=params.get('id')

      useEffect(() => {
        if(id) {
          showsub();
        }
      }, [id]);
    
      const showsub = async () => {
        try {
          const result = await fetch(`http://localhost:4000/detail/${id}`, {
            method: 'get'
          });
    
          const rest = await result.json();
          console.log(rest);
    
          if (rest.statuscode === 1) {
            setname(rest.data.name);
            setpic(rest.data.file);
            setprice(rest.data.price);
              setoff(rest.data.off);
          } else {
            alert("No data found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          alert("Error fetching data");
        }
      }

 const cart=async()=>
 {
    const data={name,price,pic}

    const result=await fetch("http://localhost:4000/addcart",{
        method:'post',
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json ; charset=UTF-8"
        }
    })

    const rest=await result.json()

    if(rest.statuscode===1)
    {
        alert("data send")
        navigate("/addcart")
    }
    else{
        alert("not send")
    }


 }



      
  return (
    <div>
           
      <div class="shop-area pt-100 pb-100">
         <div class="breadcrumb-area pt-35 pb-35 bg-gray-3">
                <div class="container">
                    <div class="breadcrumb-content text-center">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li class="active">Deatil-Page</li>
                        </ul>
                    </div>
                </div>
            </div>
    <div class="container " style={{marginTop:"120px"}}>
        
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <div class="product-details">
                    <div class="product-details-img">
                        <div class="tab-content jump"> 
                            <div id="shop-details-2" class="tab-pane active large-img-style">
                                <img src={`/uploads/${pic}`} alt="" />
                                <span class="dec-price">-10%</span>
                                <div class="img-popup-wrap">
                                    <a class="img-popup" href={`/uploads/${pic}`}><i class="pe-7s-expand1"></i></a>
                                </div>
                            </div>
                          
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="product-details-content ml-70">
                    <h2>{name}</h2>
                    <div class="product-details-price">
                        <span>${price} </span>
                        <span class="old">${off} </span>
                    </div>
                    <div class="pro-details-rating-wrap">
                        <div class="pro-details-rating">
                            <i class="fa fa-star-o yellow"></i>
                            <i class="fa fa-star-o yellow"></i>
                            <i class="fa fa-star-o yellow"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <span><a href="#">3 Reviews</a></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                    <div class="pro-details-list">
                        <ul>
                            <li>- 0.5 mm Dail</li>
                            <li>- Inspired vector icons</li>
                            <li>- Very modern style  </li>
                        </ul>
                    </div>
                    <div class="pro-details-size-color">
                        <div class="pro-details-color-wrap">
                            <span>Color</span>
                            <div class="pro-details-color-content">
                                <ul>
                                    <li class="blue"></li>
                                    <li class="maroon active"></li>
                                    <li class="gray"></li>
                                    <li class="green"></li>
                                    <li class="yellow"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="pro-details-quality">
                        {/* <div class="cart-plus-minus">
                            <input class="cart-plus-minus-box" type="text" name="qtybutton" value="2" />
                        </div> */}
                        <div class="pro-details-cart btn-hover" >
                           <Link to='/addcart' onClick={cart}>Add To Cart</Link> 
                        </div>
                        <div class="pro-details-wishlist">
                            <a href="#"><i class="fa fa-heart-o"></i></a>
                        </div>
                        <div class="pro-details-compare">
                            <a href="#"><i class="pe-7s-shuffle"></i></a>
                        </div>
                    </div>
                    <div class="pro-details-meta">
                        <span>Categories :</span>
                        <ul>
                            <li><a href="#">Minimal,</a></li>
                            <li><a href="#">Furniture,</a></li>
                            <li><a href="#">Fashion</a></li>
                        </ul>
                    </div>
                    <div class="pro-details-meta">
                        <span>Tag :</span>
                        <ul>
                            <li><a href="#">Fashion, </a></li>
                            <li><a href="#">Furniture,</a></li>
                            <li><a href="#">Electronic</a></li>
                        </ul>
                    </div>
                    <div class="pro-details-social">
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer/>
    </div>
  )
}

export default Detail