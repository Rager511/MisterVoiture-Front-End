import { Link, useLocation } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';
import { MdSpaceDashboard, MdCarRepair, MdHomeRepairService, MdEngineering } from 'react-icons/md';
import { BsGearWide } from 'react-icons/bs';
import Logo from '../assets/images/Logo.png';
import React from 'react';
import { routes } from '../routes/routes';

const NavMenu: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? { background: "linear-gradient(195deg, #49a3f1, #1A73E8" } : {};
  };

  return (
    <nav style={{ height: "calc(100vh - 2.5rem)", background: "linear-gradient(195deg, #42424a, #191919)" }} className='fixed flex-1 rounded-2xl m-5 p-5 w-[40vh]'>
      <img className="mx-auto" width={85} src={Logo} alt="Logo" />
      <span className="text-xl flex justify-center font-medium text-white">
        MisterVoiture
      </span>
      <div>
        <hr className='my-3 rounded-2xl'></hr>
        <ul className='flex flex-col space-y-1'>
          <li>
            <Link to={routes.dashboard}>
              <div style={isActive(routes.dashboard)} className="flex items-center h-12 w-full rounded-xl">
                <span className="ml-3 text-white">
                  <MdSpaceDashboard size="1.8em" />
                </span>
                <span className="ml-3 text-white text-sm font-medium">
                  Dashboard
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={routes.notifications}>
              <div style={isActive(routes.notifications)} className="flex items-center h-12 w-full rounded-xl">
                <span className="ml-3 text-white">
                  <IoIosNotifications size="1.8em" />
                </span>
                <span className="ml-3 text-white text-sm font-medium">
                  Notifications
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={routes.garages}>
              <div style={isActive(routes.garages)} className="flex items-center h-12 w-full rounded-xl">
                <span className="ml-3 text-white">
                  <MdCarRepair size="1.8em" />
                </span>
                <span className="ml-3 text-white text-sm font-medium">
                  Garages
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={routes.services}>
              <div style={isActive(routes.services)} className="flex items-center h-12 w-full rounded-xl">
                <span className="ml-3 text-white">
                  <MdHomeRepairService size="1.8em" />
                </span>
                <span className="ml-3 text-white text-sm font-medium">
                  Services
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={routes.technicians}>
              <div style={isActive(routes.technicians)} className="flex items-center h-12 w-full rounded-xl">
                <span className="ml-3 text-white">
                  <MdEngineering size="1.8em" />
                </span>
                <span className="ml-3 text-white text-sm font-medium">
                  Technicians
                </span>
              </div>
            </Link>
          </li>
          <li>
            <Link to={routes.requests}>
              <div style={isActive(routes.requests)} className="flex items-center h-12 w-full rounded-xl">
                <span className="ml-3 text-white">
                  <BsGearWide size="1.8em" />
                </span>
                <span className="ml-3 text-white text-sm font-medium">
                  Requests
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav >
  );
};

export default NavMenu;