import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../Redux/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';



const Login = () => {

  const { redirectTo } = useSelector((state) => state?.userlogin);


  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
  
  const dispatch=useDispatch();
  const navigate = useNavigate();
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }));
  };

   //redirect if get the token or not get the token 
   const check =()=>{
    let token = localStorage.getItem("token")
    // let isInLoginPage = window.location.pathname.toLowerCase() === "/login";

    if (token == null || token == undefined || token == "") {
        // window.location.pathname = getPathname;
        navigate("/login");
        
    }
}
useEffect(() => {
    check()
    // redirectUser
    navigate(redirectTo)
}, [redirectTo])


  return (
    <>
       <div className='container'>
      <div className='row mt-5'>
        <div className='col-6 mx-auto mb-5'>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className='card shadow p-3'>
              <div className='card-header' style={{backgroundColor:"#223A66"}}>
                <h4 className='text-center' style={{color:"#FFFFFF"}}>Login</h4>
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-group'>
                      <label className='form-label'><strong>Email</strong></label>
                      <input type="email" name="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} required />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <label className='form-label'><strong>Password</strong></label>
                      <input type="password" name="password" className='form-control' onChange={(e)=>setPassword(e.target.value)} required />
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-footer' style={{backgroundColor:"#F4F9FC"}}>
                <button className='btn btn-info btn-sm' style={{backgroundColor:"#E12454"}}>Login</button>
                <strong><p className='mt-2'>
                  Don't have an account? <Link to="/register">Register here</Link>
                </p></strong>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
