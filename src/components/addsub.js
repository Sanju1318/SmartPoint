import React, { useState ,useEffect} from 'react';

const Addsub = () => {
  const [name, setname] = useState();
  const [file, setfile] = useState();
  const [price, setprice] = useState();
    const [off, setoff] = useState();
  const [cid,setcid]=useState();
  const[show,setshow]=useState([])

  const submit=async ()=>
  {
    const formdata=new FormData()

    formdata.append('name',name)
     formdata.append('price',price)
      formdata.append('off',off)
    formdata.append('file',file)
    formdata.append('cid',cid)

    const result=await fetch("http://localhost:4000/addsub",{
        method:'post',
        body:formdata
    })
    const rest=await result.json()

    if(rest.statuscode===1)
    {
        alert('data send')
    }
    else
    {
        alert('not send')
    }
  }
  useEffect(()=>
  {
    view()
  },[])
  
  const view=async()=>
  {
    const result=await fetch("http://localhost:4000/showcat",{
      method:'get'
    })
  
    const rest=await result.json()
  
    if(rest.statuscode===1)
    {
      setshow(rest.data)
    }
    else{
      alert("not show")
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', paddingTop: '150px', backgroundColor: '#f7f7f7' }}>
      <div className="col-lg-8 col-md-7" style={{ width: '100%', maxWidth: '700px', background: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <div className="contact-form">
          <div className="contact-title mb-30" style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '600', color: '#333', marginBottom: '20px', textAlign: 'center' }}>Get In Touch</h2>
          </div>
          <div
            className="contact-form-style"
          
          >
             <div class="col-md-12">


                            <div class="form-box">
                                <label   class="form-label">select category</label>

<select onChange={(e)=>setcid(e.target.value)}  class="form-control">

<option>select category</option>
{show.map((c)=>
<option value={c._id}>{c.name}</option>
)}
    
</select>


                             </div>
                        </div>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div className="col-lg-6" style={{ flex: '1 1 48%' }}>
                <input
                  name="name"
                  placeholder="Product Name*"
                  type="text"
                  onChange={(e) => setname(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 15px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    fontSize: '16px',
                  }}
                />
              </div>
              <div className="col-lg-6" style={{ flex: '1 1 48%' }}>
                <input
                  name="price"
                  placeholder="Product of price*"
                  type="text"
                  onChange={(e) => setprice(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 15px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    fontSize: '16px',
                  }}
                />
              </div>
                 <div className="col-lg-6" style={{ flex: '1 1 48%' }}>
                <input
                  name="discount"
                  placeholder="Product of discount*"
                  type="text"
                  onChange={(e) => setoff(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 15px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    fontSize: '16px',
                  }}
                />
              </div>
              
              <div className="col-lg-6" style={{ flex: '1 1 48%' }}>
                <input
                  name="file"
                  placeholder="file*"
                  type="file"
                  onChange={(e) => setfile(e.target.files[0])}
                  style={{
                    width: '100%',
                    padding: '10px 15px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    fontSize: '16px',
                    backgroundColor: '#fff',
                  }}
                />
              </div>
              <div className="col-lg-12" style={{ flex: '1 1 100%' }}>
                <button
                  className="submit"
                  type="submit" onClick={submit}
                  style={{
                    width: '100%',
                    padding: '12px 20px',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#fff',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background 0.3s',
                  }}
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
          <p className="form-messege" style={{ marginTop: '15px', color: '#28a745' }}></p>
        </div>
      </div>
    </div>
  );
};

export default Addsub;
