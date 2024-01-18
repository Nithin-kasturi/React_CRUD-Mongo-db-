import React, { useEffect,useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function Home() {
  const [data,setData]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:8000/').then((res)=>setData(res.data)).catch(err=>console.log(err));
  },[]);
  const handleDelete=(id)=>{
    axios.delete('http://localhost:8000/delete/'+id).then((res)=>{
      window.location.reload();      
    })
  }
  return (
    <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
      <div className='bg-white w-50 rounded p-3'>
          <h2>List of Students</h2>
          <div className='d-flex justify-content-end'>
              <Link to='/create' className='btn btn-success'>Create</Link>
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
                {
                  data.map((student,index)=>{
                      return (
                        <tr key={index}>
                          <td>{student.Id}</td>
                          <td>{student.Name}</td>
                          <td>{student.Email}</td>
                          <td>
                          <Link to={(`/read/${student.Id}`)} className='btn btn-sm btn-info'>Read</Link>
                            <Link to={(`/edit/${student.Id}`)} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                            <button onClick={()=>handleDelete(student.Id)} className='btn btn-sm btn-danger'>Delete</button>
                            
                          </td>
                        </tr>
                      )
                  })
                }
            </tbody>
          </table>

      </div>
    </div>
  )
}
