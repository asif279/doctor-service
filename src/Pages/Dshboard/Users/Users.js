import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const Users = () => {
    const {data:user=[],refetch}=useQuery({
        queryKey:['user'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/user');
            const data=await res.json();
            return data;
        }
    });

    const handleAdmin=id=>{

        fetch(`http://localhost:5000/user/admin/${id}`,

        {method:'PUT',
        headers:{
            authorization:`bearer ${localStorage.getItem('accesToken')}`
        }
    
    }
        )
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.madifiedCount>0){
                toast.success("Now this user is Admin")
                refetch();
            }
        })

    }
    return (
        <div className=''>
        <h2 className="text-2xl"> Users</h2>

        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        user.map((users,i)=> <tr key={users._id}>
        <th>{i+1}</th>
        <td>{users.name}</td>
        <td>{users.email}</td>
    <td>{users?.role !=='admin' && <button onClick={()=>handleAdmin(users._id)} className='btn btn-xs btn-primary'>Admin</button>}</td>
        <td><button className="btn btn-xs btn-danger">Delete</button></td>
      </tr>)
     }
      
     
    </tbody>
  </table>
</div>

       
            
        </div>
    );
};

export default Users;