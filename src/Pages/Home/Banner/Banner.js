import React from 'react';
import './Banner.css';
import Chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <section className="section  container" id="banner">
            <div className="left mt-5">
            <h1 className="title">
                Your new smile starts <br/>Here
            </h1>
            <p className="description">
            Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study,
            </p>
            <button className="btn_des">Get Started</button>


            </div>
            <div className="right">
            <img src={Chair} alt="" className="img_banner" />

            </div>
        </section>
    );
};

export default Banner;