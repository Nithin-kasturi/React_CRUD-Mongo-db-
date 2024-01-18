import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
export default function Read() {
    const {id}=useParams();
    const [studentDetails,setStudentDetails]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/read/'+id).
        then((res)=>{
            console.log(res.data);
            setStudentDetails(res.data);
            // console.log(studentDetails);    
        })
        .catch(err=>{console.log(err)});
    },[])
  return (
<div className='d-flex justify-content-center align-items-center bg-black vh-100'>
      <div className='bg-white w-50 rounded p-3'>
          <h2>Student Details</h2>
          <h2>Id: {studentDetails.Id}</h2>
          <h2>Name: {studentDetails.Name}</h2>
          <h2>Email: {studentDetails.Email}</h2>
          <Link to='/' className='btn btn-primary me-2 pt-2'>Back</Link>
          <Link to={(`/edit/${studentDetails.Id}`)} className='btn btn-info'>Edit</Link>

      </div>
    </div>
  )
}
