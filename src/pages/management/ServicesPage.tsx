import React from 'react';
import TopNavbar from '../../components/TopNavbar';
import NavMenu from '../../components/Navmenu';

const ServicesPage: React.FC = () => {
    return (
        <div className='flex'>
            <div className='flex-none'>
                <NavMenu />
            </div>
            <div className='flex-auto'>
                <TopNavbar title="Services" />
            </div>
        </div>
    );
};

export default ServicesPage;