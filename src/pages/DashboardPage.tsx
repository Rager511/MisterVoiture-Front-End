import React from 'react';
import NavMenu from '../components/Navmenu';
import TopNavbar from '../components/TopNavbar';


const DashboardPage: React.FC = () => {
  return (
    <div className='flex'>
      <div className='flex-none'>
        <NavMenu />
      </div>
      <div className='flex-auto flex-col'>
        <TopNavbar title="Dashboard" />
        <div className='bg-red-900 h-[70vh] mr-5 rounded-2xl p-5'>aaa</div>
      </div>
    </div>
  );
};

export default DashboardPage;
