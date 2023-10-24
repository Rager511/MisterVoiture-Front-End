import React from 'react';
import TopNavbar from '../../components/TopNavbar';
import NavMenu from '../../components/Navmenu';

const GaragesPage: React.FC = () => {
    return (
        <div className='flex'>
            <div className='flex-none'>
                <NavMenu />
            </div>
            <div className='flex-auto flex-col'>
                 <TopNavbar title="Garages" />
                <div className='bg-white-900 h-[70vh] mr-5 rounded-2xl p-5'></div>
            </div>
        </div>
    );
};

export default GaragesPage;