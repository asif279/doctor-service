import { useEffect, useState } from "react";

const useAdmin=email=>{
    const [isAdmin,setIsAdmin]=useState(false);
    const [IsLoading,setIsLoading]=useState(true);
   useEffect(()=>{
if(email){
    fetch(`http://localhost:5000/user/admin/${email}`)
    .then(res=>res.json())
    .then(data=>{
     
       console.log(data);
        setIsAdmin(data.isAdmin);
        setIsLoading(false);
  
      
    
  
      
    })
}
   },[email])
   return [isAdmin,IsLoading];
}

export default useAdmin;