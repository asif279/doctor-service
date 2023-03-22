import React from 'react';
import './AppointBanner.css';
import doctor from '../../../assets/images/doctor-small.png'
import { Link } from 'react-router-dom';
const AppointBanner = () => {
    return (
       <section className="section abanner" id="abanner lg:flex-row flex-col">
        <div className="img_div">
            <img src={doctor} alt="" className='img_doctor hidden md:block lg:w-1/2' />
        </div>
        <div className="abanner_left">
            <h4 className='title1'>Appointment</h4>
            <h2 className='title2'>Make an appointment Today</h2>
            <p className='ds'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <Link to="/appointment" ><button className="btn_des">Get Started</button></Link>
        </div>
       </section>
    );
};

export default AppointBanner;