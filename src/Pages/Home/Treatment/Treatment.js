import React from 'react';
import './Treatment.css';
import treatment from '../../../assets/images/treatment.png';
const Treatment = () => {
    return (
        <section className="mt-5 grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2" id="treatment">
            <div className="leftW">

            <img src={treatment} className='img_treatment' alt="" />

            </div>
            <div className="rightW">
            <h1 className='title'>Exceptional Dental<br/>Care,On your Terms</h1>
            <p className="des">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page </p>

            <button className="btn_des">Get Started</button>

            </div>
        </section>
    );
};

export default Treatment;