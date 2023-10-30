import React from 'react';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const ProfilePage: React.FC = () => {
    return (
        <div className='flex p-5'>
            <SideBar />
            <div style={{ width: "calc(100vw - 23.5rem)" }} className='ml-auto'>
                <TopBar title="Profile" />
                <div className='mt-[6.3rem]'>
                    <div className='bg-white p-5 h-auto rounded-2xl flex flex-col shadow-lg'>
                        <div className='h-24 flex space-x-5'>
                            <div className='h-20 w-20 rounded-full bg-blue-700 my-auto'></div>
                            <span className='text-grey-700 text-2xl font-medium my-auto'>Imad Maailil</span>
                        </div>
                        <hr className='my-3 rounded-2xl'></hr>
                        <div className='space-y-5'>
                            <div>
                                <span className='text-grey-700 text-lg font-medium my-auto'>About Me</span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, metus in sagittis cursus, nisi risus feugiat magna, nec viverra quam justo eget quam. Duis luctus neque et tincidunt pulvinar. Phasellus nec posuere orci, tempor blandit ex. Nulla facilisi. Cras nec nunc tempus, tempor arcu vel, luctus lectus. Curabitur ultrices finibus justo eget vestibulum. Praesent pharetra metus magna, at mollis ipsum pulvinar eu.
                                </p>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 space-y-5'>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Department</span>
                                        <span className='text-grey-700'>IT</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Role</span>
                                        <span className='text-grey-700'>Admin</span>
                                    </div><div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Last Sign In</span>
                                        <span className='text-grey-700'>10/30/2023 6:39PM</span>
                                    </div>
                                </div>
                                <div className='w-1/2 space-y-5'>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>First Name</span>
                                        <span className='text-grey-700'>Imad</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Last Name</span>
                                        <span className='text-grey-700'>Maailil</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Phone Number</span>
                                        <span className='text-grey-700'>063423239</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Email</span>
                                        <span className='text-grey-700'>imad.maailil@mistervoiture.com</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Location</span>
                                        <span className='text-grey-700'>Marrakech</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default ProfilePage;