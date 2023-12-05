import axios from 'axios';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import toast from 'react-hot-toast';

function CreateAuto() {
  const [name,setName]=useState('')
  const [registerNumber,setRegisterNumber]=useState('')
  const [location,setLocation]=useState('')
  const [data,setData]=useState({})
  const [photo,setPhoto]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const formData=new FormData()
    formData.append('name',name)
    formData.append('location',location)
    formData.append('registerNumber',registerNumber)
    formData.append('photo',photo)

    try{
      const {data}=await axios.post('http://localhost:5000/create',formData)
      if(data.success){
        setName('')
        setLocation('')
        setRegisterNumber('')
        setPhoto('')
        setTimeout(() => {
          toast.success(data.message)
        }, 500);

      }
      else{
        setTimeout(() => {
          toast.error(data.message)
        }, 500);
      }
      
      setData(data)
    }catch(err){
      console.log(err);
    }
  }
  return (
    <Layout>
    <div className="col-md-12">
      <div className='d-flex flex-wrap justify-content-center align-items-center vh-100'>        
        <form>
          <div className="mb-3">
          <h3>create new details</h3>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
             placeholder='name' className="form-control mb-3 mt-2" />
            <input type="text" value={registerNumber} onChange={(e)=>setRegisterNumber(e.target.value)}
             placeholder='register number' className="form-control mb-3" />
            <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)}
             placeholder='location' className="form-control mb-3" />
             <input type="file" onChange={(e)=>setPhoto(e.target.files[0])}
             placeholder='add an image' name="photo" accept='image/*' className="form-control" />
          </div>
          <button onClick={handleSubmit}
           type='submit' className="btn btn-primary">Submit</button>
           {data.name}
        </form>
      </div>
    </div>
    </Layout>
  );
}

export default CreateAuto;
