
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import usercontext from './context'

const Login = () => {

 const[password,setpassword]=useState()
const[email,setemail]=useState()
const{setflag}=useContext(usercontext)


const navigate=useNavigate()

const login=async()=>
{
    const data={password,email}
   
    const result=await fetch("http://localhost:4000/login",
        {
            method:'post',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json "
            }
        }
        
     
    )
    
       const rest=await result.json()
       if(rest.statuscode===1)
       {
        alert("registerd Success")
        navigate("/landing")
        setflag(rest.utype)
        sessionStorage.setItem('flag',rest.utype)

       }
       else
       {
        alert("error")
       }


}

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#333'
          }}>Login</h2>
        </div>
        
        <div>
       
          
          <div style={{
            marginBottom: '1rem'
          }}>
            <input 
              type="password" 
              placeholder="Password" 
               onChange={(e)=>setpassword(e.target.value)} 
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div style={{
            marginBottom: '1.5rem'
          }}>
            <input 
              type="email" 
              placeholder="Email" 
               onChange={(e)=>setemail(e.target.value)} 
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <button 
            type="submit"
             onClick={login}
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#4a6bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#3a5bef'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4a6bff'}
           
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login