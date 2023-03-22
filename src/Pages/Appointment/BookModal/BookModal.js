import React from 'react';
import { format } from 'date-fns';

const BookModal = ({treat,setTreat,date}) => {
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
            treatment:name,
            patient:name,
            phone:phone,
            slot:slot,
            email:email
          }
          console.log(booked);
          setTreat('');
          
    }
  
  
   
    return (
        <div>
       {
        treat.map(({name,slots},index)=>{
            return (
                <div  key={index} >
                <input type="checkbox" id="booking-modal" className="modal-toggle"  />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{name}</h3>
   <form action="" onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-8'>
   <input type="text" disabled value={format(date,'PP')} name='date'  className="input input-bordered w-full" required />
   <select name='slot' className="select select-bordered w-full ">
                  {
                    slots.map((slot,index)=>  <option 
                    
                    key={index}
                    value={slot}>{slot}</option>)
                  }
</select>
            <input type="text" name='name' placeholder="Full Name" required className="input  w-full input-bordered" />
            <input type="text" name='phone' placeholder="Phone" required className="input w-full input-bordered" />
            <input type="text" name='email' placeholder="Email" required className="input w-full input-bordered" />
            <input className=" w-full btn-accent input-bordered"  type="submit" value="Submit" />

   </form>
  </div>
</div>
</div>
            )
        })
       }
            
        </div>
    );
};

export default BookModal;