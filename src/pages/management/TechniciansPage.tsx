import React from 'react';
import NavMenu from '../../components/Navmenu';
import TopNavbar from '../../components/TopNavbar';

const TechniciansPage: React.FC = () => {
    return (
        <div className='flex'>
            <div className='flex-none'>
                <NavMenu />
            </div>
            <div className='flex-auto'>
                <TopNavbar title="Technicians" />
            </div>
        </div>
    );
};

export default TechniciansPage;