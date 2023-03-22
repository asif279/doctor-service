import React from 'react';
import './Testimonial.css';
import quote from '../../../assets/icons/quote.svg';
import p1 from '../../../assets/images/people1.png';
import p2 from '../../../assets/images/people2.png';
import p3 from '../../../assets/images/people3.png';

const Testimonial = () => {
    const review=[
        {
            _id:1,
            name:'Winson Herry',
            rev:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            loc:'California',
            img:p1

        },
        {
            _id:2,
            name:'Winson Herry',
            rev:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            loc:'California',
            img:p2

        },
        {
            _id:3,
            name:'Winson Herry',
            rev:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            loc:'California',
            img:p3

        }

    ]
    return (
       <section className='my-16'>
        <div className='flex justify-between '>
        <div>
            <h4 className="text-xl text-primary font-bold">
                Testimonial
            </h4>
            <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
            <img className='w-24 lg:w-48' src={quote} alt="" />
        </figure>

        </div>



        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        {
            review.map(({img,rev,_id,name,loc},index)=>{
                return (
                    <div key={index} className="card bg-base-200  shadow-xl">
                      <div className="card-body">
                
                  <p>{rev}</p>
                <div className="flex items-center mt-6 ">
                <div className="avatar mr-6">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt='' />
  </div>
</div>
<div>
    <h5 className="text-lg">{name}</h5>
                  <p>{loc}</p>
</div>
              </div>
              </div>
</div>
                )
            })
        }



        </div>
       </section>
    );
};

export default Testimonial;