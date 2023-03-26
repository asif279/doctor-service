import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthProvider';

const MyApp = () => {
    const {user}=useContext(AuthContext);
    const url=`http://localhost:5000/booked?email=${user?.email}`;

    const {data:booked=[]}=useQuery({
        queryKey:['booked',user?.email],
        queryFn:async ()=>{
            const res=await fetch(url);
            const data=await res.json();
            return data;
        }
    })
    return (
        <div className='bg-primary'>
        <h3 className="text-3xl mb-5">My Appointment</h3>
        <div className="overflow-x-auto ">
  <table className="table w-full bg-accent">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      
    {
       booked.map((booki,i)=>
       <tr>
        <th>{i+1}</th>
        <td>{booki.patient}</td>
        <td>{booki.treatment}</td>
        <td>{booki.appointDate}</td>
        <td>{booki.slot}</td>
      </tr>
       
       )
           
    
    }
    
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyApp;