 import './App.css';
 import Siterouter from './components/siterouter';
 import usercontext from './components/context';
import { useEffect, useState } from 'react';
import AdminHeader from './components/adminheader';
import Userheader from './components/userheader';

function App() {
const[tprice,settprice]=useState()
const[flag,setflag]=useState(()=>sessionStorage.getItem('flag'))
const[usertype,setusertype]=useState()



  useEffect(()=>{

if(flag==="admin"){
  setusertype("admin")
}
else if(flag==="user"){
  setusertype("user")
}
  },[flag])



  return (
   <>

<usercontext.Provider value={{settprice,tprice,setflag}}>

 
 {usertype==="admin"?<AdminHeader />:<Userheader />}

    <Siterouter/>
 </usercontext.Provider>
  {/* <Register/> */}
  {/* <Login/>
  <Siterouter /> */}
    </>
  );
}

export default App;
