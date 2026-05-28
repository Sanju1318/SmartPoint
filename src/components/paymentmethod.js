import React, { useContext, useState } from 'react';
import usercontext from './context';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

const PaymentMethod = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [bankname, setBankname] = useState('');
    const [accountno, setAccountno] = useState('');
    const [expirydate, setExpirydate] = useState('');
    const [phone, setPhone] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});
    const { tprice } = useContext(usercontext);
    const navigate=useNavigate()

    // Validation functions
    const validateForm = () => {
        const newErrors = {};
        
        // Name validation
        if (!name.trim()) {
            newErrors.name = 'Name is required';
        } else if (name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }
        
        // Address validation
        if (!address.trim()) {
            newErrors.address = 'Address is required';
        } else if (address.trim().length < 10) {
            newErrors.address = 'Address must be at least 10 characters';
        }
        
        // Phone validation
        const phoneRegex = /^[0-9]{10}$/;
        if (!phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!phoneRegex.test(phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }
        
        // Bank name validation
        if (!bankname.trim()) {
            newErrors.bankname = 'Bank name is required';
        }
        
        // Account number validation
        const accountRegex = /^[0-9]{9,18}$/;
        if (!accountno.trim()) {
            newErrors.accountno = 'Account number is required';
        } else if (!accountRegex.test(accountno)) {
            newErrors.accountno = 'Account number must be 9-18 digits';
        }
        
        // Expiry date validation
        const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
        if (!expirydate.trim()) {
            newErrors.expirydate = 'Expiry date is required';
        } else if (!expiryRegex.test(expirydate)) {
            newErrors.expirydate = 'Expiry date must be in MM/YY format';
        } else {
            // Check if card is expired
            const [month, year] = expirydate.split('/');
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear() % 100;
            const currentMonth = currentDate.getMonth() + 1;
            
            if (parseInt(year) < currentYear || 
                (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
                newErrors.expirydate = 'Card has expired';
            }
        }
        
        // CVV validation
        const cvvRegex = /^[0-9]{3,4}$/;
        if (!cvv.trim()) {
            newErrors.cvv = 'CVV is required';
        } else if (!cvvRegex.test(cvv)) {
            newErrors.cvv = 'CVV must be 3 or 4 digits';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const payment = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            alert('Please fix the errors in the form');
            return;
        }
        
        const data = {
            name,
            address,
            phone,
            bankname,
            accountno,
            expirydate,
            cvv,
            totalprice: tprice
        };

        try {
            const result = await fetch('http://localhost:4000/payment', {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const rest = await result.json();

            if (rest.statuscode === 1) {
                alert("Payment successful! Banking details sent.");
                // Reset form
                setName('');
                setAddress('');
                setPhone('');
                setBankname('');
                setAccountno('');
                setExpirydate('');
                setCvv('');
                navigate('/landing')
            } else {
                alert("Payment failed. Please try again.");
            }
        } catch (error) {
            console.error('Payment error:', error);
            alert("An error occurred during payment. Please try again.");
        }
    };

    return (
        <div>
            <div style={{
                maxWidth: '600px',
                marginTop: '130px',
                padding: '20px',
                fontFamily: 'Arial, sans-serif',
                marginLeft: '500px'
            }}>
                <h2 style={{ textAlign: 'center', color: '#333' }}>Payment Details</h2>
                
                <form onSubmit={payment}>
                    <div style={{ marginBottom: '15px' }}>
                        <h3>Personal Information</h3>
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                marginBottom: '5px',
                                border: errors.name ? '1px solid red' : '1px solid #ccc'
                            }}
                        />
                        {errors.name && <div style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>{errors.name}</div>}
                        
                        <input 
                            type="text" 
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} 
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                marginBottom: '5px',
                                border: errors.address ? '1px solid red' : '1px solid #ccc'
                            }}
                        />
                        {errors.address && <div style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>{errors.address}</div>}
                        
                        <input 
                            type="tel" 
                            placeholder="Phone Number" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                marginBottom: '5px',
                                border: errors.phone ? '1px solid red' : '1px solid #ccc'
                            }}
                        />
                        {errors.phone && <div style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>{errors.phone}</div>}
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <h3>Bank Details</h3>
                        <input 
                            type="text" 
                            placeholder="Bank Name" 
                            value={bankname}
                            onChange={(e) => setBankname(e.target.value)}
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                marginBottom: '5px',
                                border: errors.bankname ? '1px solid red' : '1px solid #ccc'
                            }}
                        />
                        {errors.bankname && <div style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>{errors.bankname}</div>}
                        
                        <input 
                            type="text" 
                            placeholder="Account Number" 
                            value={accountno}
                            onChange={(e) => setAccountno(e.target.value)}
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                marginBottom: '5px',
                                border: errors.accountno ? '1px solid red' : '1px solid #ccc'
                            }}
                        />
                        {errors.accountno && <div style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>{errors.accountno}</div>}
                        
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <div style={{ width: '50%' }}>
                                <input 
                                    type="text" 
                                    placeholder="Expiry Date (MM/YY)" 
                                    value={expirydate}
                                    onChange={(e) => setExpirydate(e.target.value)}
                                    style={{ 
                                        width: '100%', 
                                        padding: '10px',
                                        border: errors.expirydate ? '1px solid red' : '1px solid #ccc'
                                    }}
                                />
                                {errors.expirydate && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.expirydate}</div>}
                            </div>
                            <div style={{ width: '50%' }}>
                                <input 
                                    type="text" 
                                    placeholder="CVV" 
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    style={{ 
                                        width: '100%', 
                                        padding: '10px',
                                        border: errors.cvv ? '1px solid red' : '1px solid #ccc'
                                    }}
                                />
                                {errors.cvv && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{errors.cvv}</div>}
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <h3>Order Summary</h3>
                        <input 
                            type="text" 
                            placeholder="Total Price" 
                            value={tprice}
                            readOnly
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                marginBottom: '10px',
                                backgroundColor: '#f5f5f5'
                            }}
                        />
                    </div>

                    <button 
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }} 
                    >
                        Complete Payment
                    </button>
                </form>
            </div>
            <Footer/>
        </div>
    );
};

export default PaymentMethod;