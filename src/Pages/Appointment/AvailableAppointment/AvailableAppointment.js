import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookModal from '../BookModal/BookModal';

const AvailableAppointment = ({date}) => {
    const [treat,setTreat]=useState([]);
   
    useEffect( ()=>{
        fetch('treatment.json')
        .then(res=>res.json())
        .then(data=>setTreat(data))
    },[])
    return (
        <section className='mt-16'>
        <p className="text-center text-primary font-bold">Available Services on  {format(date,'PP')}</p>
        <h4 className="text-center text-secondary">Please select a service.</h4>
  <div className='mt-5 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

  {
   treat && treat.map(({name,slots},index)=>{

     

        return (
            <div className="card  bg-base-100 shadow-xl mx-4 my-4" key={index}>
  <div className="card-body text-center mt-7">
    <h2 className="font-bold text-center text-2xl">{name}</h2>
    <p>{
        slots.length > 0?slots[0]:'No Slots Avialable'
    }</p>
    <p>{slots.length} {slots.lenth>0?'Seats':'Seat'} Available</p>
    <div className="card-actions justify-center">
     
      <label

      onClick={()=>setTreat(treat)}

      disabled={slots.length === 0}
      
      
       htmlFor="booking-modal" className="btn btn-primary">Book Appointment</label>
    </div>
  </div>
  {
    treat &&
    <BookModal

    date={date}
  
   treat={treat}
   setTreat={setTreat}
   
   />}
</div>
        )
    })
  }
    
  </div>
            
        </section>
    );
};

export default AvailableAppointment;