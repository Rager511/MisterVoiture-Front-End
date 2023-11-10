import React from 'react';
import SideBar from '../../components/navigation/SideBar';
import TopBar from '../../components/navigation/TopBar';
import { BiSolidCarMechanic, BiSolidCarWash } from 'react-icons/bi';
import { GiCarWheel } from 'react-icons/gi';
import { GrLinkNext } from 'react-icons/gr';
import { FaOilCan } from 'react-icons/fa';
import { Services } from '../../utils';
import { Link } from 'react-router-dom';
import Routes from '../../routes/routes';
import Footer from '../../components/Footer';

const mockBestGarages = [
    {
        name: 'Garage Allal',
        city: 'Casablanca',
        address: 'Boulevard Abdelmoumen, 3234',
        category: 'Car Wash, Car Repair'
    },
    {
        name: 'Bakiz',
        city: 'Khemisset',
        address: 'Avenue Simolayf, 1221',
        category: 'Car Wash'
    },
    {
        name: 'Auto Magrizi',
        city: 'Taddart',
        address: 'Rue Sardines, 1234',
        category: 'Car Repair'
    },
    {
        name: 'Tibba Motors',
        city: 'Tokyo',
        address: 'Shibuya, 23144',
        category: 'Spare Parts, Car Repair'
    },
    {
        name: 'Sinko',
        city: 'Marrakech',
        address: 'Avenue Doha 2, 9433',
        category: 'Wrapping, Car Repair'
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
                                Washing refers to the process of cleaning a vehicle's exterior and, in some cases, its interior. This service typically involves washing the car's body, windows, and wheels, and may include vacuuming or cleaning the interior cabin. Car washing not only enhances the vehicle's appearance but also helps remove dirt, grime, and contaminants that can accumulate on the surface, preserving the car's paint and finish.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <span className='text-gray-700 text-xl font-bold mt-3'>Best Garages</span>
                        <Link to={Routes.garages} className='flex items-center'>
                            <span className='mr-3'>View all garages</span>
                            <GrLinkNext />
                        </Link>
                    </div>
                    <table className="w-full text-sm text-left mt-3">
                        <thead className="text-xs text-gray-400">
                            <tr className='border-b'>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    City
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-900'>
                            {mockBestGarages.map((row, index) => (
                                <tr className={`${index !== mockBestGarages.length - 1 && "border-b"}`} key={index}>
                                    <th scope="row" className="px-6 py-4">
                                        {row.name}
                                    </th>
                                    <td className="px-6 py-4">{row.city}</td>
                                    <td className="px-6 py-4">{row.address}</td>
                                    <td className="px-6 py-4">{row.category}</td>
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
                                Wheel repair involves the inspection, maintenance, and restoration of a car's wheels and rims. This service may address issues such as bent or damaged rims, balancing problems, and alignment issues. Wheel repair is essential for ensuring that the wheels are in good condition, which contributes to safe and smooth driving.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <span className='text-gray-700 text-xl font-bold mt-3'>Best Garages</span>
                        <Link to={Routes.garages} className='flex items-center'>
                            <span className='mr-3'>View all garages</span>
                            <GrLinkNext />
                        </Link>
                    </div>
                    <table className="w-full text-sm text-left mt-3">
                        <thead className="text-xs text-gray-400">
                            <tr className='border-b'>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    City
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-900'>
                            {mockBestGarages.map((row, index) => (
                                <tr className={`${index !== mockBestGarages.length - 1 && "border-b"}`} key={index}>
                                    <th scope="row" className="px-6 py-4">
                                        {row.name}
                                    </th>
                                    <td className="px-6 py-4">{row.city}</td>
                                    <td className="px-6 py-4">{row.address}</td>
                                    <td className="px-6 py-4">{row.category}</td>
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
                                An oil change is a routine maintenance service that involves draining the old engine oil from a car's engine and replacing it with fresh oil. This process helps lubricate the engine's moving parts, reduce friction, and remove contaminants from the oil. Regular oil changes are crucial for the longevity and performance of the engine.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <span className='text-gray-700 text-xl font-bold mt-3'>Best Garages</span>
                        <Link to={Routes.garages} className='flex items-center'>
                            <span className='mr-3'>View all garages</span>
                            <GrLinkNext />
                        </Link>
                    </div>
                    <table className="w-full text-sm text-left mt-3">
                        <thead className="text-xs text-gray-400">
                            <tr className='border-b'>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    City
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-900'>
                            {mockBestGarages.map((row, index) => (
                                <tr className={`${index !== mockBestGarages.length - 1 && "border-b"}`} key={index}>
                                    <th scope="row" className="px-6 py-4">
                                        {row.name}
                                    </th>
                                    <td className="px-6 py-4">{row.city}</td>
                                    <td className="px-6 py-4">{row.address}</td>
                                    <td className="px-6 py-4">{row.category}</td>
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
                                A technical visit refers to a comprehensive inspection and diagnostic examination of a vehicle by experienced technicians. During a technical visit, trained mechanics assess the car's overall condition, identify potential issues, and recommend necessary repairs or maintenance services. This visit is essential for keeping a car in good working order and addressing any underlying problems before they become major issues. It often includes checking the engine, transmission, brakes, suspension, and other critical components of the vehicle.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <span className='text-gray-700 text-xl font-bold mt-3'>Best Garages</span>
                        <Link to={Routes.garages} className='flex items-center'>
                            <span className='mr-3'>View all garages</span>
                            <GrLinkNext />
                        </Link>
                    </div>
                    <table className="w-full text-sm text-left mt-3">
                        <thead className="text-xs text-gray-400">
                            <tr className='border-b'>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    City
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-900'>
                            {mockBestGarages.map((row, index) => (
                                <tr className={`${index !== mockBestGarages.length - 1 && "border-b"}`} key={index}>
                                    <th scope="row" className="px-6 py-4">
                                        {row.name}
                                    </th>
                                    <td className="px-6 py-4">{row.city}</td>
                                    <td className="px-6 py-4">{row.address}</td>
                                    <td className="px-6 py-4">{row.category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    </div>
);

export default ServicesPage;