import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 py-2 bg-white/5 backdrop-blur-md backdrop-filter shadow-lg flex justify-around items-center">
      <Link to="/tasks" className="text-gray-500">
        <Icon icon="carbon:task-star" width="28" className="my-auto hover:text-deepblue2"/>
      </Link>
      <Link to="/transactions" className="text-gray-500">
        <Icon icon="fluent:history-32-filled" width="28" className="my-auto hover:text-deepblue2"/>
      </Link>
      <Link to="/profile">
        <div className="mt-[-40px] z-10 bg-gradient-to-b from-deepblue1 to-deepblue2 h-16 w-16 flex justify-center items-center text-white rounded-full shadow-xl">
          <Icon icon="mdi:rupee" width="36" className="my-auto text-white"/>
        </div>
      </Link>
      <Link to="/blogspace" className="text-gray-500">
        <Icon icon="hugeicons:quill-write-02" width="28" className="my-auto hover:text-deepblue2"/>
      </Link>
      <Link to="/statistics" className="text-gray-500">
        <Icon icon="octicon:graph-24" width="28" className="my-auto hover:text-deepblue2"/>
      </Link>
    </div>
  );
};

export default Footer;
