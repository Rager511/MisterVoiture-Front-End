import React from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
};

const TopNavbar: React.FC<Props> = ({title}) => {
  return (
    <nav className="flex flex-wrap justify-between p-4 rounded-2xl my-5 mr-5 border-gray-200 bg-blue-700">
      <button className="rounded-full text-white transition ease-in-out delay-15 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200" >
        <BiSolidUserCircle size='3em' />
      </button>
      <div className='flex items-center text-white text-2xl font-medium'>
        {title}
      </div>
      <Link to="/authentication/signIn" className="ml-5">
        <button className="w-32 px-5 py-2.5 mx-auto flex items-center justify-between text-white overflow-hidden text-sm font-medium text-gray-900 rounded-lg group transition ease-in-out delay-15 bg-gradient-to-br from-cyan-400 to-blue-600 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200">
          <FaSignOutAlt size="1.8em" />
          Sign Out
        </button>
      </Link>
    </nav>
  );

};

export default TopNavbar;

