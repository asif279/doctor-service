import icon1 from './assets/icons/clock.svg';
import icon2 from './assets/icons/marker.svg';
import icon3 from './assets/icons/phone.svg';
import cav1 from './assets/images/cavity.png';
import cav2 from './assets/images/whitening.png';
import cav3 from './assets/images/fluoride.png';


export const cardInfo=[
    {
        id:1,
        name:"Opening Hour "
        ,
        description:"24/7 4.00AM TO 4.00PM",
        icon:icon1,
       
       bgClass:'bg-accent'
        
    }
    ,
    {
        id:2,
        name:"Visit Our Location "
        ,
        description:"Dhaka,Bangladesh",
        icon:icon2,
        bgClass:'bg-neutral'
    },
    {
        id:3,
        name:"Contact Us "
        ,
        description:"+8801965888888",
        icon:icon3,
        bgClass:'bg-accent-focus'
    }
]


export const service=[
    {
        name:"Cavity Treatment",
        img:cav1,
        description:"A dentist can prescribe fluoride treatments like mouthwash or varnish to reverse early tooth decay."

    },
    {
        name:"Dribble Treatment",
        img:cav2,
        description:"A dentist can prescribe fluoride treatments like mouthwash or varnish to reverse early tooth decay."

    },
    {
        name:"Fluride Treatment",
        img:cav3,
        description:"A dentist can prescribe fluoride treatments like mouthwash or varnish to reverse early tooth decay."

    }
]
