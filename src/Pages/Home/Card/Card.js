import React from 'react';
import { cardInfo } from '../../../Data';
import './Card.css';



const Card = () => {
    
       
   
    return (
        <section className=" card grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " id='card'>
           
    {
        cardInfo.map(({icon,name,description,bgClass},index)=>{
            return (
               
                <div className='card_item sm:grid-cols-1' key={index}>
                    <img src={icon} alt="" className='img_card'/>
                    <div className="card_content">
                        <h2 className="card_title">{name}</h2>
                        <p className="des">{description}</p>
                    </div>
             

                </div>
            )
        })
    }
            
        </section>
    );
};

export default Card;