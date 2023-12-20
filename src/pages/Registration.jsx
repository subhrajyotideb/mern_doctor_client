import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { register } from '../Redux/RegSlice';




const Registration = () => {
     
    const { redirectReg } = useSelector((state) => state?.USER);


      const[name,setName]=useState();
      const[email,setEmail]=useState();
      const[phone,setPhone]=useState();
      const[password,setPassword]=useState();
      const[forget,setForget]=useState();
      const[image,setImage]=useState("");


      const dispatch=useDispatch();
      let navigate=useNavigate();


      const handleSubmit=(e)=>{
            e.preventDefault();
            dispatch(register({name,email,phone,password,forget,image}));   
        }

        
        const redirectUser = () => {
            if (redirectReg === '/login') {
                navigate('/login');
              } else {
                navigate('/register');
              }
          }
        
          useEffect(() => {
            redirectUser()
          }, [redirectReg])
      
    return (
        
       
       
       <div className='container'>
        <div className='row mt-5'>
            
            <div className='col-6 mx-auto mb-5'>
                <form   onSubmit={(e)=>handleSubmit(e)}>
                    <div className='card shadow p-3'>
                        <div className='card-header' style={{backgroundColor:"#223A66"}}>
                            <h4 className='text-center' style={{color:"#FFFFFF"}}>Registration</h4>

                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='form-group'>
                                        <label className='form-label'><strong>Name</strong> <span className='err-msg'>*</span></label>
                                        <input type="text" name='name' onChange={(e)=>setName(e.target.value)} className='form-control'  pattern=".{3,}" title="three or more characters" required/>
                                    </div>
                                </div>
                               
                                <div className='col-12'>
                                        <label className='form-label'><strong>Email</strong> <span className='err-msg'>*</span></label>
                                        <input  type="email"  name='email'  onChange={(e)=>setEmail(e.target.value)} className='form-control'  required/>
                                </div>
                                <div className='col-12'>
                                        <label className='form-label'><strong>Password</strong> <span className='err-msg'>*</span></label>
                                        <input  type="password"  name='password'  onChange={(e)=>setPassword(e.target.value)} className='form-control'  required/>
                                </div>
                                <div className='col-12'>
                                        <label className='form-label'><strong>Phone</strong><span className='err-msg'>*</span></label>
                                        <input  type="tel"  name='phone'  onChange={(e)=>setPhone(e.target.value)} className='form-control'   pattern="[0-9]{10}" title="Ten characters" required/>
                                </div>
                                <div className='col-12'>
                                <div className='form-group'>
                                    <label className='form-label'><strong>Image</strong></label>
                                    <input
                                        type="file"
                                        name="img"
                                        onChange={(e) => setImage(e.target.files[0])}
                                        accept="image/*"
                                        className='form-control'
                                        required
                                    />
                                    {image && <img src={URL.createObjectURL(image)} alt="Preview" className="img-preview mt-2" style={{ width: '80px', height: '80px' }}/>}
                                </div>
                                </div>

                                <div className='col-12'>
                                        <label className='form-label'><strong>Answer</strong><span className='err-msg'>*</span></label>
                                        <input  type="text"  name='forget'  onChange={(e)=>setForget(e.target.value)} className='form-control'   required/>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer' style={{backgroundColor:"#F4F9FC"}}>
                        <button  className='btn btn-info btn-sm' style={{backgroundColor:"#E12454"}}>Register</button>
                        <strong><p className='mt-2'>
                  Already have an account? <Link to="/login">Login here</Link>
                </p></strong>
                        </div>
                    </div>
                </form>
            </div>
            <div className='row mt-5'></div>
        </div>
    </div>
    
    )
}

export default Registration
