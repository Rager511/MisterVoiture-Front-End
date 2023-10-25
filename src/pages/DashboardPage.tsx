import React from 'react';
import NavMenu from '../components/Navmenu';
import TopNavbar from '../components/TopNavbar';
import { BiSolidCarWash } from 'react-icons/bi';
import { GiCartwheel } from 'react-icons/gi';
import { FaOilCan } from 'react-icons/fa';
import { AiOutlineCarryOut } from 'react-icons/ai';

const DashboardPage: React.FC = () => {
  return (
    <div className='flex bg-gray-200'>
      <NavMenu />
      <div className='ml-auto'>
        <TopNavbar title="Dashboard" />
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div>asdasda</div>
        <div className='bg-red-700 rounded-2xl p-5 mr-5 flex'>
          <div className='relative'>
            <div className='bg-blue-700 h-[20vh] w-[38vh] rounded-2xl p-5'>
              <p className='text-white text-xl absolute top-5 right-12'>Washing</p>
            </div>
            <div className='absolute top-[-20px] left-5'>
              <div className='bg-gradient-to-br from-cyan-400 to-blue-600 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200 h-[9vh] w-[9vh] mr-5 rounded-2xl p-5'>
                <BiSolidCarWash size={27  } color='white' />
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='bg-blue-700 h-[20vh] w-[38vh] rounded-2xl p-5'>
              <p className='text-white text-xl absolute top-5 right-12'>Wheel</p>
            </div>
            <div className='absolute top-[-20px] left-5'>
              <div className='bg-gradient-to-br from-cyan-400 to-blue-600 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200 h-[9vh] w-[9vh] mr-5 rounded-2xl p-5'>
                <GiCartwheel size={27} color='white' />
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='bg-blue-700 h-[20vh] w-[38vh] rounded-2xl p-5'>
              <p className='text-white text-xl absolute top-5 right-12'>Oil Change</p>
            </div>
            <div className='absolute top-[-20px] left-5'>
              <div className='bg-gradient-to-br from-cyan-400 to-blue-600 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200 h-[9vh] w-[9vh] mr-5 rounded-2xl p-5'>
                <FaOilCan size={27} color='white' />
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='bg-blue-700 h-[20vh] w-[38vh] rounded-2xl p-5'>
              <p className='text-white text-xl absolute top-5 right-12'>Technical Visit</p>
            </div>
            <div className='absolute top-[-20px] left-5'>
              <div className='bg-gradient-to-br from-cyan-400 to-blue-600 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200 h-[9vh] w-[9vh] mr-5 rounded-2xl p-5'>
                <AiOutlineCarryOut size={27} color='white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
