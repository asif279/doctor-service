import React, { useContext, useState } from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {signInUser,signInGoogle} =useContext(AuthContext);
    const [loginerror,setLoginerror]=useState('');
    const [cemail,setCemail]=useState('');
    const [token]=useToken(cemail);
    const navigate = useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';

    if(token){
      navigate(from,{replace:true});
    }
  const handleLogin = data =>{
    console.log(data);
    setLoginerror('');
    signInUser(data.email,data.password)
    .then(res=>{
      const user=res.user;
      console.log(user);
      setCemail(data.email);
    
     toast("User Login Successfully");
  })
  .catch((error) => {
      
      const errorMessage = error.message;
      setLoginerror(errorMessage);
      console.log(errorMessage);
      
    });

    }
    const handleGoogle =()=>{
      signInGoogle()
      .then(res=>{
        const user=res.user;
        console.log(user);
        navigate(from,{replace:true})
      })
      .catch((error) => {
      
        const errorMessage = error.message;
        setLoginerror(errorMessage);
        console.log(errorMessage);
        
      });
  }
    return (
       <div className='flex justify-center items-center bg-base-100 h-[800px]'>
       <div className='w-96 p-7'>
        <h2 className='text-xl text-center'>Login</h2>
        <form className='bg-base-100 rounded mt-5 my-5 form_input' onSubmit={handleSubmit(handleLogin)}>
    
      <div className=" w-full max-w-xs">
          <label className="label"> <span className="label-text">Email</span></label>
        <input type="text" {...register("email",{ required:"Email Address is required",
         pattern:{value:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Email should be in this format"}
        })} className="input input-bordered w-full max-w-xs" />
        {errors.email && <p role="alert">{errors.email?.message}</p>}
       </div>
       <div className="form-control w-full max-w-xs">
          <label className="label"> <span className="label-text">Password</span></label>
        <input type="password" {...register("password",{ required: "password is required"
        ,minLength:{value:6,message:"Password Must be 6 Character Long"},
        pattern:{value:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,message:"Password Must be Strong"}
        
        })} className="input input-bordered w-full max-w-xs" />
        {errors.password && <p role="alert">{errors.password?.message}</p>}
        <label className="label"> <span className="label-text">Forget Password</span></label>
       </div>
 <input className='btn btn-primary w-full' value='Login' type="submit" />

 <div>
  {loginerror && <p className='text-primary'>{loginerror}Please give the right Email & Password</p>}
 </div>
    </form>
    <p>New to Doctor Service?<Link className='text-secondary' to='/signup'>Create an Account</Link></p>
    <div className="divider">OR</div>
    <button onClick={handleGoogle}  className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
       </div>

       </div>
    );
};

export default Login;