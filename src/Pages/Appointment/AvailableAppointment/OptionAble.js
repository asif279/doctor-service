import React from 'react';


const OptionAble = ({option,setOpt}) => {
    const {name,slots}=option;
    return (
        <div className="card  bg-base-100 shadow-xl mx-4 my-4" >
        <div className="card-body text-center mt-7">
          <h2 className="font-bold text-center text-2xl">{name}</h2>
          <p>{
              slots.length > 0?slots[0]:'No Slots Avialable'
          }</p>
          <p>{slots.length} {slots.lenth>0?'Seats':'Seat'} Available</p>
          <div className="card-actions justify-center">
           
            <label
      
            onClick={()=>setOpt(option)}
      
            disabled={slots.length === 0}
            
            
             htmlFor="booking-modal" className="btn btn-primary">Book Appointment</label>
          </div>
        </div>
    
    
      </div>
    );
};

export default OptionAble;