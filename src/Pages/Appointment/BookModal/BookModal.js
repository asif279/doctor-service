import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const BookModal = ({opt,setOpt,date,refetch}) => {

  const {name:treatName,slots}=opt;
  const {user}=useContext(AuthContext);
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
          const name=form.name.value;
          const email=form.email.value;
          const slot=form.slot.value;
          const phone=form.phone.value;
          const date=form.date.value;
         
          const booked= {
            appointDate:date,
            treatment:treatName,
            patient:name,
            phone:phone,
            slot:slot,
            email:email
          }

          fetch('http://localhost:5000/booked',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(booked)
          })

          .then(res=>res.json())
          .then(data=>{
            console.log(data);


           if(data.acknowledged){

            setOpt(null);
            toast.success("Booking Confirmed");
            refetch();
           } else{
            toast.error(data.message)
          }
          
        })
        
         
          
    }
  
  
   
    return (
        <div>
       
       
                <div   >
                <input type="checkbox" id="booking-modal" className="modal-toggle"  />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{treatName}</h3>
   <form action="" onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-8'>
   <input type="text" disabled value={format(date,'PP')} name='date'  className="input input-bordered w-full" required />
   <select name='slot' className="select select-bordered w-full ">
                  {
                    slots.map((slot,index)=>  <option 
                    
                    key={index}
                    value={slot}>{slot}</option>)
                  }
</select>
            <input type="name" defaultValue={user?.displayName} name='name' placeholder="Full Name" required className="input  w-full input-bordered" />
            <input type="text" name='phone' placeholder="Phone" required className="input w-full input-bordered" />
            <input type="email" disabled defaultValue={user?.email} name='email' placeholder="Email" required className="input w-full input-bordered" />
            <input className=" w-full btn-accent input-bordered"  type="submit" value="Submit" />

   </form>
  </div>
</div>
</div>
          
      
      
            
        </div>
    );
};

export default BookModal;