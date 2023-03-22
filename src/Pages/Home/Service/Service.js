import React from 'react';
import { service } from '../../../Data';
import './Service.css';


const Service = () => {
    return (
       
       <section className="section mt-5 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       {
        service.map(({img,description,name},index)=>{

            return (
                <div className="service_item" key={index}>

                <img src={img} alt="" className="img_item" />

                     <h2 className="card_title">{name}</h2>
                     <p className="des">{description}</p>
                     
               </div>

               

            )

           
        })
       }

      

    
       </section>

      
   

       
    );
};

export default Service;