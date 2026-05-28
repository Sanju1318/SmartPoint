import React, { useState } from 'react'

const Register = () => {
  const [name, setname] = useState()
  const [password, setpassword] = useState()
  const [email, setemail] = useState()

  const register = async() => {
    // e.preventDefault() // Prevent default form submission behavior
    
    const data = { name, password, email }
    const result = await fetch("http://localhost:4000/register", {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    
    const rest = await result.json()
    if (rest.statuscode === 1) {
      alert("Registered Successfully")
    } else {
      alert("Error: " + (rest.message || "Something went wrong"))
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
          }}>Register</h2>
        </div>
        
        <div >
          <div style={{
            marginBottom: '1rem'
          }}>
            <input 
              type="text" 
              placeholder="Username"
              value={name}
              onChange={(e) => setname(e.target.value)} 
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
              required
            />
          </div>
          
          <div style={{
            marginBottom: '1rem'
          }}>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setpassword(e.target.value)} 
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
              required
            />
          </div>
          
          <div style={{
            marginBottom: '1.5rem'
          }}>
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setemail(e.target.value)} 
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
              required
            />
          </div>
          
          <button 
            type="submit"
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
            onClick={register}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register