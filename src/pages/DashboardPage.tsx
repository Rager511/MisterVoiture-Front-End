import React from 'react';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
    return (
        <div>
            <nav className='bg-blue-700 w-56 rounded-2xl m-5 p-5'>
                <div className="">
                    <img className="mx-auto" width={85} src={Logo} />
                    <span className="text-xl flex justify-center font-medium text-white">
                        MisterVoiture
                    </span>
                </div>
                <hr className='my-3 rounded-2xl'></hr>
                <ul style={{ height: "70vh" }}>
                    <li>
                        <Link to="/dashboard" className="">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    Dashboard
                                </span>
                            </button></Link>
                    </li>
                    <li>
                        <Link to="/notifications" className="">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    Notifications
                                </span>
                            </button></Link>
                    </li>
                    <li>
                        <Link to="/garages" className="">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    Garages
                                </span>
                            </button></Link>
                    </li>
                    <li>
                        <Link to="/services" className="">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    Services
                                </span>
                            </button></Link>
                    </li>
                    <li>
                        <Link to="/requests" className="">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                    Requests
                                </span>
                            </button></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardPage;