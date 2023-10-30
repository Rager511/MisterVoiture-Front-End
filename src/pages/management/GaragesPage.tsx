import React from 'react';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

const GaragesPage: React.FC = () => {
    return (
        <div className='flex p-5'>
            <SideBar />
            <div style={{ width: "calc(100vw - 23.5rem)" }} className='ml-auto'>
                <TopBar title="Garages" />
                <div className='mt-[6.3rem] grid grid-cols-1 gap-5'>
                </div>
                <div className='flex justify-between mt-5'>
                    <span>© 2023, made by Imad Maailil for a better world.</span>
                    <div className='flex space-x-5'>
                        <span>About Us</span>
                        <span>Terms & Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GaragesPage;