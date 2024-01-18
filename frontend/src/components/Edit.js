import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    const {id}=useParams();
    const [values,setValues]=useState([]);
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/edit/'+id,values).
        then((res)=>{
            console.log(res);
            navigate('/');
        }).catch(err=>{
            console.log(err);
        });
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
        <div className='bg-white w-50 rounded p-3'>
            <form onSubmit={handleSubmit} method='post'>
                <h2>Edit student Details</h2>
                <div className='mb-2'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Name' name='name' className='form-control'
                    onChange={e=>setValues({...values,name:e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter email' name='email' className='form-control'
                    onChange={e=>setValues({...values,email:e.target.value})}/>
                </div>
                <button className='btn btn-success' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}
