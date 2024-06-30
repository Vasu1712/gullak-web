import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import gullakNameLogo from '../assets/images/gullak_name_logo.png'; 
import coins from '../assets/images/coins.svg'; 

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3">
      <div className="text-center justify-center items-center max-w-xs">
        <p className="text-2xl font-light text-gray-700 mb-10 mt-2">
          Seamlessly manage your Finances with
        </p>
        <div className="flex flex-col justify-center items-center mb-8">
          <img src={gullakNameLogo} alt="Gullak Logo" className="h-32 mb-10" />
          <img src={coins} alt="Coins" className="h-60" />
        </div>
        <p className="text-lg font-light italic text-gray-800 mb-8">
          Discover the revolutionary semi-automated financial management experience.
        </p>
      </div>
      <Link to="/signup" className="flex justify-center items-center w-40 gap-x-2 text-white py-2 px-3 rounded-lg bg-gradient-to-b from-deepblue1 to-deepblue2 hover:bg-blue-700 transition duration-300">
        <p className="">Get Started </p>
        <Icon icon="heroicons:arrow-right-16-solid" width="24" style={{ color: "#ffffff" }} />
      </Link>
    </div>
  );
};

export default LandingPage;
