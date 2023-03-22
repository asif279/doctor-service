import React, { useState } from 'react';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import BannerApp from './BannerApp/BannerApp';

const Appointment = () => {
    const [date,setDate] =useState(new Date());
    return (
        <div>
           <BannerApp date={date} setDate={setDate}/>
           <AvailableAppointment date={date} setDate={setDate}/>
        </div>
    );
};

export default Appointment;