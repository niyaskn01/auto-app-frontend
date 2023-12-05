import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useSearch } from '../context/search'

function Home() {
  const [auto,setAuto]=useState([])
  const getAuto=async()=>{
    const {data}=await axios('http://localhost:5000/get-auto')
    setAuto(data.auto)
  }
  useEffect(()=>{
    getAuto()
  })
  return (
    <Layout>
    <div className="col-md-12">
          <h1 className='heading text-center'>Autos near you</h1>
          <div className='d-flex flex-wrap'>

            {auto.map((a)=>(
                <div key={a._id} className="card det m-2 d-flex flex-wrap justify-center align-items-center" style={{width: '18rem'}}>
                      <div className="card-body desc" >
                        <h4 className="card-title">{a.name}</h4>
                        <p>{a.color}</p>
                        <p>{a.registerNumber}</p>
                        <p>{a.location}</p>
                        <img src={`http://localhost:5000/get-photo/${a._id}`}
                        style={{height:'150px',width:'180px'}} alt="no photo" />
                      </div>
                      <div className="card-body">
                        <button className='btn btn-primary' 
                        >book now</button>
                      </div>
                    </div>
                ))
              }
          </div>
          <div className="m-2 p-2">
            
          </div>
        </div>
      </Layout>
  )
}

export default Home