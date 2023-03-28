import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../context/AuthProvider'

const SignUp = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {createUser,signInGoogle,updateUser} =useContext(AuthContext);
    const [loginerror,setLoginerror]=useState('');
    const navigate = useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
  const handleSignUp = data =>{
    console.log(data);
    setLoginerror('');
    createUser(data.email,data.password)
    .then(res=>{
        const user=res.user;
        console.log(user);
        navigate(from,{replace:true});
        toast("User Created Succesfully");
        const userInfo={
          displayName:data.name
        }
        updateUser(userInfo)
        .then(() => {
        saveUser(data.name,data.email);
        }).catch((error) => {
          // An error occurred
          // ...
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        // ...
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

const saveUser=(name,email)=>{
  const user={name,email};
  fetch('http://localhost:5000/users',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    //console.log(data);
  getUserToken(email)   
  })


}

const getUserToken=email=>{
  fetch(`http://localhost:5000/jwt?email=${email}`)
  .then(res=>res.json())
  .then(data=>{
    if(data.accesToken){
      localStorage.setItem('accessToken',data.accesToken)

      navigate('/');
  

    }
  })
}


    return (
        <div className='flex justify-center items-center bg-base-100 h-[800px]'>
        <div className='w-96 p-7'>
         <h2 className='text-xl text-center'>Sign Up</h2>
         <form className='bg-base-100 rounded mt-5 my-5 form_input' onSubmit={handleSubmit(handleSignUp)}>

         <div className=" w-full max-w-xs">
           <label className="label"> <span className="label-text">Full Name</span></label>
         <input type="text" {...register("name",{ required:"Name is required"})} className="input input-bordered w-full max-w-xs" />
         {errors.name && <p role="alert">{errors.name?.message}</p>}
        </div>
     
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
         pattern:{value:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,message:"Password should be strong"}
         
         })} className="input input-bordered w-full max-w-xs" />
         {errors.password && <p role="alert">{errors.password?.message}</p>}
         <label className="label"> <span className="label-text">Forget Password</span></label>
        </div>
  <input className='btn btn-primary w-full' value='Sign Up' type="submit" />
  <div>
  {loginerror && <p className='text-primary'>{loginerror}Please give the right Email & Password</p>}
 </div>
     </form>
     <p>Already Have an Account?<Link className='text-secondary' to='/login'>Login Here</Link></p>
     <div className="divider">OR</div>
     <button  onClick={handleGoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
 
        </div>
    );
};

export default SignUp;