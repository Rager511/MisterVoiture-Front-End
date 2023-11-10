import React from 'react';
import SideBar from '../components/navigation/SideBar';
import TopBar from '../components/navigation/TopBar';
import { Admin } from '../models/Admin';
import Footer from '../components/Footer';

const profile: Admin = {
    firstName: "Imad",
    lastName: "Maailil",
    phoneNumber: "063423239",
    emailAddress: "imad.maailil@mistervoiture.com",
    location: "Marrakech",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, metus in sagittis cursus, nisi risus feugiat magna, nec viverra quam justo eget quam. Duis luctus neque et tincidunt pulvinar. Phasellus nec posuere orci, tempor blandit ex. Nulla facilisi. Cras nec nunc tempus, tempor arcu vel, luctus lectus. Curabitur ultrices finibus justo eget vestibulum. Praesent pharetra metus magna, at mollis ipsum pulvinar eu.",
    department: "IT",
    role: "Admin",
    lastSignIn: new Date(Date.now())
};

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
                            <span className='text-grey-700 text-2xl font-medium my-auto'>{profile.firstName} {profile.lastName}</span>
                        </div>
                        <hr className='my-3 rounded-2xl'></hr>
                        <div className='space-y-5'>
                            <div>
                                <span className='text-grey-700 text-lg font-medium my-auto'>About Me</span>
                                <p>
                                    {profile.bio}
                                </p>
                            </div>
                            <div className='flex'>
                                <div className='w-1/2 space-y-5'>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Department</span>
                                        <span className='text-grey-700'>{profile.department}</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Role</span>
                                        <span className='text-grey-700'>{profile.role}</span>
                                    </div><div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Last Sign In</span>
                                        <span className='text-grey-700'>{profile.lastSignIn.toString()}</span>
                                    </div>
                                </div>
                                <div className='w-1/2 space-y-5'>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>First Name</span>
                                        <span className='text-grey-700'>{profile.firstName}</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Last Name</span>
                                        <span className='text-grey-700'>{profile.lastName}</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Phone Number</span>
                                        <span className='text-grey-700'>{profile.phoneNumber}</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Email</span>
                                        <span className='text-grey-700'>{profile.emailAddress}</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-grey-700 text-lg font-medium my-auto'>Location</span>
                                        <span className='text-grey-700'>{profile.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ProfilePage;