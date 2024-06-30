import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import profileimage from '../assets/images/profile_image.png';
import coins from '../assets/images/coins.svg'; 
import pot from '../assets/images/pot_icon.png';
import rewards from '../assets/images/rewards_icon.png';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-grad1 via-grad2 to-grad3 p-4">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-start gap-x-4 mt-4">
          <img src={profileimage} alt="Profile" className="h-12 rounded-full" />
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-xl font-semibold">Jassi Chaudhary</h2>
            <p className="text-gray-500">Welcome Back!</p>
          </div>
        </div>
        <div className="my-auto justify-start">
          <Icon icon="heroicons-outline:menu-alt-1" width="28" className="my-auto text-deepblue2"/>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-6 gap-x-4">
        <div className="flex gap-x-2 bg-gradient-to-br from-lavender1 to-lavender2 px-4 py-2 rounded-xl drop-shadow-lg">
          <Icon icon="mdi:arrow-up-box" width="36" className="my-auto text-white"/>
          <div className="flex flex-col">
            <h3 className="text-white font-light text-sm">Income</h3>
            <p className="text-md text-white font-semibold">₹21,0000</p>
          </div>
        </div>
        <div className="flex gap-x-2 bg-gradient-to-br from-pink1 to-pink2 px-4 py-2 rounded-xl drop-shadow-lg">
          <Icon icon="mdi:arrow-down-box" width="36" className="my-auto text-white"/>
          <div className="flex flex-col">
            <h3 className="text-white font-light text-sm">Expenditure</h3>
            <p className="text-md text-white font-semibold">₹11,0000</p>
          </div>
        </div>
      </div>


      <div className="mt-6 w-full max-w-md overflow-x-auto flex gap-x-3">
        <div className="min-w-[200px] h-32 bg-gradient-to-br from-pink1 to-pink2 p-4 rounded-xl mb-4 flex flex-col justify-between drop-shadow-lg border-b-2 border-y-rose-800">
          <h4 className="text-white font-light">Featured Task</h4>
          <span>
          <p className="mt-2 font-semibold text-gray-700 py-1 text-lg">Reception Dusting</p>
          <p className="text-sm text-gray-100 flex">Potential Reward: <img src={coins} alt="coins" className="h-4"/> 100</p>
          </span>
        </div>
        <div className="min-w-[200px] h-32 bg-gradient-to-br from-pink1 to-pink2 p-4 rounded-xl mb-4 flex flex-col justify-between ">
          <h4 className="text-white font-light">Upcoming Task</h4>
          <span>
          <p className="mt-2 font-semibold text-gray-700 py-1 text-lg">Tuition Classes</p>
          <p className="text-sm text-gray-100 flex">Potential Reward: <img src={coins} alt="coins" className="h-4"/> 100</p>
          </span>
        </div>
        <div className="min-w-[200px] h-32 bg-gradient-to-br from-pink1 to-pink2 p-4 rounded-xl mb-4 flex flex-col justify-between">
          <h4 className="text-white font-light">Featured Task</h4>
          <span>
          <p className="mt-2 font-semibold text-gray-700 py-1 text-lg">Reception Dusting</p>
          <p className="text-sm text-gray-100 flex">Potential Reward: <img src={coins} alt="coins" className="h-4"/> 100</p>
          </span>
        </div>
      </div>

      {/* target div: scrolling elements inside this div */}
      <div className="mt-6 w-full max-w-md overflow-x-auto">
      <p className="text-xl font-semibold text-gray-800 mb-4">Explore</p>
      <div className="flex gap-3">
        <div className="min-w-[230px] bg-purple-100 h-32 px-4 py-2 rounded-xl flex gap-8 justify-between items-center mb-4 shadow-md">
            <div className="flex-col justify-between items-start gap-y-4">
                <h4 className="text-deepblue2 font-bold text-2xl">MyPot</h4>
                <span className="text-xs text-gray-500 flex-col">Total coins earned
                    <span className="flex">
                    <img src={coins} alt="coins" className="h-6"/> 
                    <p className="text-darkpurple text-lg">100</p>
                    </span>
                </span>
            </div>
            <img src={pot} alt="pot" className="h-12"/>
        </div>
        <div className="min-w-[230px] h-32 bg-purple-100 p-4 rounded-xl flex justify-between items-center mb-4">
        <div className="flex-col justify-between">
                <h4 className="text-deepblue2 font-bold text-2xl">Rewards</h4>
                <span className="text-xs text-gray-500 flex-col">Check your rewards
                    <span className="flex">
                    
                    </span>
                </span>
            </div>
            <img src={rewards} alt="coins" className="h-12"/>
        </div>
      </div>
      </div>

      <div className="mt-6 w-full max-w-md">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Transactions</h4>
        <ul className="space-y-2">
          <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
            <div>
              <h5 className="font-md text-lg">Puran's Store</h5>
              <p className="text-sm text-gray-500">02 July 2023 | 10:00</p>
            </div>
            <p className="text-red-500">₹202</p>
          </li>
          <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
            <div>
              <h5 className="font-md text-lg">Excitel Wi-Fi Bill</h5>
              <p className="text-sm text-gray-500">29 June 2023 | 14:40</p>
            </div>
            <p className="text-red-500">₹120</p>
          </li>
          <li className="flex justify-between items-center bg-white px-4 py-2 rounded-xl">
            <div>
              <h5 className="font-md text-lg">Stipend</h5>
              <p className="text-sm text-gray-500">24 June 2023 | 12:10</p>
            </div>
            <p className="text-green-500">₹100000</p>
          </li>
          <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <div>
              <h5 className="font-bold">Monthly Subscription</h5>
              <p className="text-sm text-gray-500">22 June 2023 | 10:00</p>
            </div>
            <p className="text-red-500">₹699</p>
          </li>
        </ul>
      </div>

      <div className="fixed bottom-0 left-0 w-full px-4 py-2 bg-white shadow-lg flex justify-around items-center">
        <Link to="/tasks" className="text-gray-500 hover:text-purple-500">
        <Icon icon="carbon:task-star" width="28" className="my-auto hover:text-deepblue2"/>
        </Link>
        <Link to="/history" className="text-gray-500 hover:text-purple-500">
        <Icon icon="fluent:history-32-filled" width="28" className="my-auto"/>
        </Link>
        <div className="bg-gradient-to-b from-deepblue1 to-deepblue2 h-16 w-16 flex justify-center align-center text-white rounded-full shadow-xl">
        <Icon icon="mdi:rupee" width="36" className="my-auto text-white"/>
        </div>
        <Link to="/blogspace" className="text-gray-500 hover:text-purple-500">
        <Icon icon="hugeicons:quill-write-02" width="28" className="my-auto"/>
        </Link>
        <Link to="/statistics" className="text-gray-500 hover:text-purple-500">
        <Icon icon="octicon:graph-24" width="28" className="my-auto"/>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;