
import second from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';


const BannerApp = ({date,setDate}) => {


  return (
    <header className="my-6 flex ">
      <div className="hero ">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <img
            src={second} alt=''
            className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl"
          />
         
          <div>

          <DayPicker className="mr-6 bg-orange-400 rounded"

mode="single"
selected={date}
      onSelect={setDate}
          />


           
          </div>
         
        </div>
        
      </div>
    </header>
  );
};

export default BannerApp;
