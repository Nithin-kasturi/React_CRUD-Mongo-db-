import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Create() {
    const [values,setValues]=useState({
        name:'',
        email:'',
    });
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
        axios.post('http://localhost:8000/student',values)
        .then((res)=>{
            console.log(res);
            navigate('/');
        })
        .catch(err=>console.log(err));
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
        <div className='bg-white w-50 rounded p-3'>
            <form onSubmit={handleSubmit} method='post'>
                <h2>Add a student</h2>
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
