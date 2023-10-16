import { Link } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';
import { MdSpaceDashboard, MdCarRepair, MdHomeRepairService, MdEngineering } from 'react-icons/md';
import { BsGearWide } from 'react-icons/bs';
import Logo from '../assets/images/Logo.png';

const NavMenu: React.FC = () => {
  return (
    <nav className='bg-blue-700 rounded-2xl m-5 p-5'>
      <div className="">
        <img className="mx-auto" width={85} src={Logo} alt="Logo" />
        <span className="text-xl flex justify-center font-medium text-white">
          MisterVoiture
        </span>
        <div>
          <hr className='my-3 rounded-2xl'></hr>
          <ul className='h-[70vh]'>
            <li>
              <Link to="/dashboard" className="">
                <button className="w-40 h-16 px-5 py-2.5 mx-auto flex items-center justify-between mb-5 text-white overflow-hidden text-sm font-medium rounded-lg group transition ease-in-out delay-15 bg-gradient-to-br from-cyan-400 to-blue-600 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200">
                  <MdSpaceDashboard size="1.8em" />
                  Dashboard
                </button>
              </Link>
            </li>
            <li>
              <Link to="/notifications" className="">
                <button className="w-40 h-16 px-5 py-2.5 mx-auto flex items-center justify-between mb-5 text-white overflow-hidden text-sm font-medium rounded-lg group transition ease-in-out delay-15 bg-gradient-to-br from-cyan-400 to-blue-600 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200">
                  <IoIosNotifications size="1.8em" />
                  Notifications
                </button>
              </Link>
            </li>
            <li>
              <Link to="/garages" className="">
                <button className="w-40 h-16 px-5 py-2.5 mx-auto flex items-center justify-between mb-5 text-white overflow-hidden text-sm font-medium rounded-lg group transition ease-in-out delay-15 bg-gradient-to-br from-cyan-400 to-blue-600 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200">
                  <MdCarRepair size="1.8em" />
                  Garages
                </button>
              </Link>
            </li>
            <li>
              <Link to="/services" className="">
                <button className="w-40 h-16 px-5 py-2.5 mx-auto flex items-center justify-between mb-5 text-white overflow-hidden text-sm font-medium rounded-lg group transition ease-in-out delay-15 bg-gradient-to-br from-cyan-400 to-blue-600 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200">
                  <MdHomeRepairService size="1.8em" />
                  Services
                </button>
              </Link>
            </li>
            <li>
              <Link to="/technicians" className="">
                <button className="w-40 h-16 px-5 py-2.5 mx-auto flex items-center justify-between mb-5 text-white overflow-hidden text-sm font-medium rounded-lg group transition ease-in-out delay-15 bg-gradient-to-br from-cyan-400 to-blue-600 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200">
                  <MdEngineering size="1.8em" />
                  Technicians
                </button>
              </Link>
            </li>
            <li>
              <Link to="/requests" className="">
                <button className="w-40 h-16 px-5 py-2.5 mx-auto flex items-center justify-between mb-5 text-white overflow-hidden text-sm font-medium rounded-lg group transition ease-in-out delay-15 bg-gradient-to-br from-cyan-400 to-blue-600 hover:ring-4 hover:ring-green-200 focus:ring-4 focus:outline-none focus:ring-green-200">
                  <BsGearWide size="1.8em" />
                  Requests
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;