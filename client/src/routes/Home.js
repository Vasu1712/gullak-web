import React from 'react';
import { Link } from 'react-router-dom';
import profileimage from '../assets/images/profile_image.png';
import mockup from '../assets/images/Mockup.png';
import lavanderlogo from '../assets/images/lavanderlogo.png';
import '../App.css'; // Import your CSS file here for additional styles

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-bg1 via-bg2 to-bg1 text-white flex flex-col">
      <nav className="fixed w-full flex justify-between items-center p-4 bg-gradient-to-tl from-bg1 via-bg2 to-bg1 z-10">
        <div className="flex justify-start items-center sm:px-4 gap-x-4">
          <img src={lavanderlogo} alt="App Preview" className="w-12" />
          <div className="hidden sm:text-2xl font-light tracking-wide">Gullak</div>
        </div>
        <div className="flex gap-x-6 sm:gap-x-4 items-center">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/landingPage" className="bg-lavender2 text-white py-2 px-4 rounded-full">Get Onboard</Link>
        </div>
      </nav>
      <div className="pt-20 flex flex-1 flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-3/5 text-center px-8 md:text-left md:px-20">
          <div className="flex justify-center md:justify-start items-center">
            <img src={lavanderlogo} alt="App Preview" className="w-24 sm:w-40" />
            <span className="text-5xl sm:text-8xl font-normal">Gullak</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-light my-4 text-gray-200 tracking-wide">Your financial companion</h1>
          <p className="text-lg md:text-xl my-6 px-4 text-gray-400">Gullak is our solution to efficiently manage your finances hassle-free</p>
          <span className="flex gap-x-0.5 sm:gap-x-1 pt-6 text-light text-sm italic text-gray-400 justify-center md:justify-start">
            <span className="text-yellow-400">★</span>
            This is the mobile web-version of Gullak, so make sure you are you are logging into your Gullak with your mobile screens
          </span>
        </div>
        <div className="hidden md:flex w-2/5 justify-end items-center my-4 px-4">
          <img src={mockup} alt="App Preview" className="w-full" />
        </div>
        <div className="md:hidden flex justify-center items-center my-8 px-4">
          <img src={mockup} alt="App Preview" className="w-full" />
        </div>
        <Link to="/landingpage" className="inline-block bg-white text-black my-6 py-3 px-8 mx-4 rounded-full">Get Onboard</Link>
      </div>
      <footer className="p-4 text-center text-gray-500">
        <p>&copy; 2024 Gullak. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
