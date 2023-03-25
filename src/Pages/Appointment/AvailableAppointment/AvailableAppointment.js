import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Laoding from '../../Shared/Loading/Laoding';
import BookModal from '../BookModal/BookModal';
import OptionAble from './OptionAble';

const AvailableAppointment = ({date}) => {
   // const [treat,setTreat]=useState([]);
    const [opt,setOpt]=useState(null);
    const datee=format(date,'PP');

    const {data:treat=[],refetch,isLoading}=useQuery({
      queryKey:['treatment',datee],
      queryFn:async()=>{
    const res= await fetch(`http://localhost:5000/treatment?datee=${datee}`)
      const data= await res.json();
      return data}
    })

    if(isLoading){
      return <Laoding></Laoding>
    }
   
    // useEffect( ()=>{
    //     fetch('http://localhost:5000/treatment')
    //     .then(res=>res.json())
    //     .then(data=>setTreat(data))
    // },[])
    return (
        <section className='mt-16'>
        <p className="text-center text-primary font-bold">Available Services on  {format(date,'PP')}</p>
        <h4 className="text-center text-secondary">Please select a service.</h4>
  <div className='mt-5 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

  {

    treat.map(option=><OptionAble
    
    key={option._id}
    option={option}
    setOpt={setOpt}
    refetch={refetch}
    ></OptionAble>)
  }

 
 
 
    
  </div>
 {opt &&
  
   <BookModal
      
      date={date}
    
       opt={opt}
       setOpt={setOpt}
     
     
     />}
            
        </section>
    );
};

export default AvailableAppointment;