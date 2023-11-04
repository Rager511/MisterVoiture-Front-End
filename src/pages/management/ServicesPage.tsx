import React from 'react';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import { BiSolidCarMechanic, BiSolidCarWash } from 'react-icons/bi';
import { GiCarWheel } from 'react-icons/gi';
import { GrLinkNext } from 'react-icons/gr';
import { FaOilCan } from 'react-icons/fa';
import { Cost, Ratings, Services } from '../../utils';
import { Link } from 'react-router-dom';
import Routes from '../../routes/routes';

const mockTopRatedMechanics = [
    {
        name: 'Ali',
        available: true,
        rating: Ratings.Excellent,
        cost: Cost.Medium
    },
    {
        name: 'Said',
        available: false,
        rating: Ratings.Excellent,
        cost: Cost.High
    },
    {
        name: 'Youssef',
        available: true,
        rating: Ratings.Good,
        cost: Cost.Medium
    },
    {
        name: 'Anas',
        available: false,
        rating: Ratings.Good,
        cost: Cost.Medium
    },
    {
        name: 'Hamza',
        available: true,
        rating: Ratings.Good,
        cost: Cost.High
    }
];

const ServicesPage: React.FC = () => (
    <div className='flex p-5'>
        <SideBar />
        <div style={{ width: "calc(100vw - 23.5rem)" }} className='ml-auto'>
            <TopBar title="Services" />
            <div className='mt-[6.3rem] grid grid-cols-1 gap-5'>
                <div className="rounded-2xl p-5 bg-white shadow-lg">
                    <div className='flex mb-5'>
                        <div style={{ background: "linear-gradient(195deg, #42424a, #191919)" }} className='h-[9vh] w-[9vh] rounded-2xl p-5'>
                            <BiSolidCarWash size={27} color='white' />
                        </div>
                        <div className='ml-5'>
                            <span className='text-gray-700 text-xl font-bold'>{Services.Washing}</span>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, metus in sagittis cursus, nisi risus feugiat magna, nec viverra quam justo eget quam. Duis luctus neque et tincidunt pulvinar. Phasellus nec posuere orci, tempor blandit ex. Nulla facilisi. Cras nec nunc tempus, tempor arcu vel, luctus lectus. Curabitur ultrices finibus justo eget vestibulum. Praesent pharetra metus magna, at mollis ipsum pulvinar eu.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <span className='text-gray-700 text-xl font-bold mt-3'>Best Garages</span>
                        <Link to={Routes.garages} className='flex'>
                            <span>View all garages</span>
                            <GrLinkNext />
                        </Link>
                    </div>
                    <table className="w-full text-sm text-left mt-3">
                        <thead className="text-xs text-gray-400">
                            <tr className='border-b'>
                                <th scope="col" className="px-6 py-3">
                                    Mechanic
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Available
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Budget
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-900'>
                            {mockTopRatedMechanics.map((row, index) => (
                                <tr className={`${index !== mockTopRatedMechanics.length - 1 && "border-b"}`} key={index}>
                                    <th scope="row" className="px-6 py-4">
                                        {row.name}
                                    </th>
                                    <td className={`px-6 py-4 ${row.available ? "text-green-500" : "text-red-500"}`}>{row.available ? "Yes" : "No"}</td>
                                    <td className="px-6 py-4">{row.rating}</td>
                                    <td className="px-6 py-4">{row.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="rounded-2xl p-5 bg-white shadow-lg">
                    <div className='flex mb-5'>
                        <div style={{ background: "linear-gradient(195deg, #49a3f1, #1A73E8)" }} className='h-[9vh] w-[9vh] rounded-2xl p-5'>
                            <GiCarWheel size={27} color='white' />
                        </div>
                        <div className='ml-5'>
                            <span className='text-gray-700 text-xl font-bold'>{Services.WheelRepair}</span>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, metus in sagittis cursus, nisi risus feugiat magna, nec viverra quam justo eget quam. Duis luctus neque et tincidunt pulvinar. Phasellus nec posuere orci, tempor blandit ex. Nulla facilisi. Cras nec nunc tempus, tempor arcu vel, luctus lectus. Curabitur ultrices finibus justo eget vestibulum. Praesent pharetra metus magna, at mollis ipsum pulvinar eu.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <span className='text-gray-700 text-xl font-bold mt-3'>Best Garages</span>
                        <Link to={Routes.garages} className='flex'>
                            <span>View all garages</span>
                            <GrLinkNext />
                        </Link>
                    </div>
                    <table className="w-full text-sm text-left mt-3">
                        <thead className="text-xs text-gray-400">
                            <tr className='border-b'>
                                <th scope="col" className="px-6 py-3">
                                    Mechanic
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Available
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Budget
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-900'>
                            {mockTopRatedMechanics.map((row, index) => (
                                <tr className={`${index !== mockTopRatedMechanics.length - 1 && "border-b"}`} key={index}>
                                    <th scope="row" className="px-6 py-4">
                                        {row.name}
                                    </th>
                                    <td className={`px-6 py-4 ${row.available ? "text-green-500" : "text-red-500"}`}>{row.available ? "Yes" : "No"}</td>
                                    <td className="px-6 py-4">{row.rating}</td>
                                    <td className="px-6 py-4">{row.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="rounded-2xl p-5 bg-white shadow-lg">
                    <div className='flex mb-5'>
                        <div style={{ background: "linear-gradient(195deg, #66BB6A, #43A047)" }} className='h-[9vh] w-[9vh] rounded-2xl p-5'>
                            <FaOilCan size={27} color='white' />
                        </div>
                        <div className='ml-5'>
                            <span className='text-gray-700 text-xl font-bold'>{Services.OilChange}</span>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, metus in sagittis cursus, nisi risus feugiat magna, nec viverra quam justo eget quam. Duis luctus neque et tincidunt pulvinar. Phasellus nec posuere orci, tempor blandit ex. Nulla facilisi. Cras nec nunc tempus, tempor arcu vel, luctus lectus. Curabitur ultrices finibus justo eget vestibulum. Praesent pharetra metus magna, at mollis ipsum pulvinar eu.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <span className='text-gray-700 text-xl font-bold mt-3'>Best Garages</span>
                        <Link to={Routes.garages} className='flex'>
                            <span>View all garages</span>
                            <GrLinkNext />
                        </Link>
                    </div>
                    <table className="w-full text-sm text-left mt-3">
                        <thead className="text-xs text-gray-400">
                            <tr className='border-b'>
                                <th scope="col" className="px-6 py-3">
                                    Mechanic
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Available
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Budget
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-900'>
                            {mockTopRatedMechanics.map((row, index) => (
                                <tr className={`${index !== mockTopRatedMechanics.length - 1 && "border-b"}`} key={index}>
                                    <th scope="row" className="px-6 py-4">
                                        {row.name}
                                    </th>
                                    <td className={`px-6 py-4 ${row.available ? "text-green-500" : "text-red-500"}`}>{row.available ? "Yes" : "No"}</td>
                                    <td className="px-6 py-4">{row.rating}</td>
                                    <td className="px-6 py-4">{row.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="rounded-2xl p-5 bg-white shadow-lg">
                    <div className='flex mb-5'>
                        <div style={{ background: "linear-gradient(195deg, #EC407A, #D81B60)" }} className='h-[9vh] w-[9vh] rounded-2xl p-5'>
                            <BiSolidCarMechanic size={27} color='white' />
                        </div>
                        <div className='ml-5'>
                            <span className='text-gray-700 text-xl font-bold'>{Services.TechnicalVisit}</span>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum, metus in sagittis cursus, nisi risus feugiat magna, nec viverra quam justo eget quam. Duis luctus neque et tincidunt pulvinar. Phasellus nec posuere orci, tempor blandit ex. Nulla facilisi. Cras nec nunc tempus, tempor arcu vel, luctus lectus. Curabitur ultrices finibus justo eget vestibulum. Praesent pharetra metus magna, at mollis ipsum pulvinar eu.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <span className='text-gray-700 text-xl font-bold mt-3'>Best Garages</span>
                        <Link to={Routes.garages} className='flex'>
                            <span>View all garages</span>
                            <GrLinkNext />
                        </Link>
                    </div>
                    <table className="w-full text-sm text-left mt-3">
                        <thead className="text-xs text-gray-400">
                            <tr className='border-b'>
                                <th scope="col" className="px-6 py-3">
                                    Mechanic
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Available
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Budget
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-900'>
                            {mockTopRatedMechanics.map((row, index) => (
                                <tr className={`${index !== mockTopRatedMechanics.length - 1 && "border-b"}`} key={index}>
                                    <th scope="row" className="px-6 py-4">
                                        {row.name}
                                    </th>
                                    <td className={`px-6 py-4 ${row.available ? "text-green-500" : "text-red-500"}`}>{row.available ? "Yes" : "No"}</td>
                                    <td className="px-6 py-4">{row.rating}</td>
                                    <td className="px-6 py-4">{row.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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

export default ServicesPage;