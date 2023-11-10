import { Link, useLocation } from 'react-router-dom';
import { MdSpaceDashboard, MdCarRepair, MdHomeRepairService } from 'react-icons/md';
import { BsGearWide, BsPersonWorkspace } from 'react-icons/bs';
import Logo from '../../assets/images/Logo.png';
import React from 'react';
import Routes from '../../routes/routes';
import { BiSolidUserCircle } from 'react-icons/bi';

const SideBar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? { background: "linear-gradient(195deg, #49a3f1, #1A73E8" } : {};
  };

  const isInactive = (path: string) => {
    return location.pathname === path ? "" : "hover:bg-gray-600 transition ease-in-out delay-50";
  };

  return (
    <aside style={{ height: "calc(100vh - 2.5rem)", background: "linear-gradient(195deg, #42424a, #191919)" }} className='fixed flex-1 rounded-2xl z-30 p-5 w-[40vh]'>
      <img className="mx-auto" width={85} src={Logo} alt="Logo" />
      <span className="text-xl flex justify-center font-medium text-white">
        MisterVoiture
      </span>
      <hr className='my-3 rounded-2xl'></hr>
      <div className='grid grid-cols-1 h-4/5 content-between'>
        <ul className='flex flex-col space-y-1'>
          <li>
            <Link to={Routes.dashboard}>
              <div style={isActive(Routes.dashboard)} className={`flex items-center h-12 w-full rounded-xl ${isInactive(Routes.dashboard)}`}>
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
            <Link to={Routes.services}>
              <div style={isActive(Routes.services)} className={`flex items-center h-12 w-full rounded-xl ${isInactive(Routes.services)}`}>
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
            <Link to={Routes.garages}>
              <div style={isActive(Routes.garages)} className={`flex items-center h-12 w-full rounded-xl ${isInactive(Routes.garages)}`}>
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
            <Link to={Routes.requests}>
              <div style={isActive(Routes.requests)} className={`flex items-center h-12 w-full rounded-xl ${isInactive(Routes.requests)}`}>
                <span className="ml-3 text-white">
                  <BsGearWide size="1.8em" />
                </span>
                <span className="ml-3 text-white text-sm font-medium">
                  Requests
                </span>
              </div>
            </Link>
          </li>
          <li>
            <div>
              <div className="stripe-1 flex items-center h-12 w-full rounded-xl">
                <span className="ml-3 text-white">
                  <BiSolidUserCircle size="1.8em" />
                </span>
                <span className="ml-3 text-white text-sm font-medium">
                  Clients
                </span>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div className="stripe-1 flex items-center h-12 w-full rounded-xl">
                <span className="ml-3 text-white">
                  <BsPersonWorkspace size="1.8em" />
                </span>
                <span className="ml-3 text-white text-sm font-medium">
                  Admins
                </span>
              </div>
            </div>
          </li>
        </ul>
        <span className='text-white flex justify-center'>Proof of Concept</span>
      </div>
    </aside >
  );
};

export default SideBar;