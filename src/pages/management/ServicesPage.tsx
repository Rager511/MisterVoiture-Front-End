import React from 'react';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import { BiSolidCarMechanic, BiSolidCarWash } from 'react-icons/bi';
import { GiCarWheel } from 'react-icons/gi';
import { FaOilCan } from 'react-icons/fa';

const ServicesPage: React.FC = () => {
    return (
        <div className='flex p-5'>
            <SideBar />
            <div style={{ width: "calc(100vw - 23.5rem)" }} className='ml-auto'>
                <TopBar title="Services" />
                <div className='mt-[6.3rem] grid grid-cols-1 gap-5'>
                    <div className="rounded-2xl flex p-5 bg-white shadow-lg">
                        <div style={{ background: "linear-gradient(195deg, #42424a, #191919)" }} className='h-[9vh] w-[9vh] rounded-2xl p-5'>
                            <BiSolidCarWash size={27} color='white' />
                        </div>
                        <div className='ml-5'>
                            <span className='text-gray-700 text-xl font-bold'>Washing</span>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, metus in sagittis cursus, nisi risus feugiat magna, nec viverra quam justo eget quam. Duis luctus neque et tincidunt pulvinar. Phasellus nec posuere orci, tempor blandit ex. Nulla facilisi. Cras nec nunc tempus, tempor arcu vel, luctus lectus. Curabitur ultrices finibus justo eget vestibulum. Praesent pharetra metus magna, at mollis ipsum pulvinar eu.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-2xl p-5 flex bg-white shadow-lg">
                        <div style={{ background: "linear-gradient(195deg, #49a3f1, #1A73E8)" }} className='h-[9vh] w-[9vh] rounded-2xl p-5'>
                            <GiCarWheel size={27} color='white' />
                        </div>
                        <div className='ml-5'>
                            <span className='text-gray-700 text-xl font-bold'>Wheel Repair</span>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, metus in sagittis cursus, nisi risus feugiat magna, nec viverra quam justo eget quam. Duis luctus neque et tincidunt pulvinar. Phasellus nec posuere orci, tempor blandit ex. Nulla facilisi. Cras nec nunc tempus, tempor arcu vel, luctus lectus. Curabitur ultrices finibus justo eget vestibulum. Praesent pharetra metus magna, at mollis ipsum pulvinar eu.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-2xl p-5 flex bg-white shadow-lg">
                        <div style={{ background: "linear-gradient(195deg, #66BB6A, #43A047)" }} className='h-[9vh] w-[9vh] rounded-2xl p-5'>
                            <FaOilCan size={27} color='white' />
                        </div>
                        <div className='ml-5'>
                            <span className='text-gray-700 text-xl font-bold'>Oil Change</span>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, metus in sagittis cursus, nisi risus feugiat magna, nec viverra quam justo eget quam. Duis luctus neque et tincidunt pulvinar. Phasellus nec posuere orci, tempor blandit ex. Nulla facilisi. Cras nec nunc tempus, tempor arcu vel, luctus lectus. Curabitur ultrices finibus justo eget vestibulum. Praesent pharetra metus magna, at mollis ipsum pulvinar eu.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-2xl p-5 flex bg-white shadow-lg">
                        <div style={{ background: "linear-gradient(195deg, #EC407A, #D81B60)" }} className='h-[9vh] w-[9vh] rounded-2xl p-5'>
                            <BiSolidCarMechanic size={27} color='white' />
                        </div>
                        <div className='ml-5'>
                            <span className='text-gray-700 text-xl font-bold'>Technical Visit</span>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, metus in sagittis cursus, nisi risus feugiat magna, nec viverra quam justo eget quam. Duis luctus neque et tincidunt pulvinar. Phasellus nec posuere orci, tempor blandit ex. Nulla facilisi. Cras nec nunc tempus, tempor arcu vel, luctus lectus. Curabitur ultrices finibus justo eget vestibulum. Praesent pharetra metus magna, at mollis ipsum pulvinar eu.
                            </p>
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

export default ServicesPage;