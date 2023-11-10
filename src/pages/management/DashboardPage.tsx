import React from 'react';
import SideBar from '../../components/navigation/SideBar';
import TopBar from '../../components/navigation/TopBar';
import { Services } from '../../utils';
import { BiSolidCarWash, BiSolidCarMechanic, BiSolidCarGarage } from 'react-icons/bi';
import { GiCarWheel } from 'react-icons/gi';
import { FaOilCan } from 'react-icons/fa';
import StatisticCard from '../../components/cards/StatisticCard';
import { BarChart } from '../../components/charts/BarChart';
import { LineChart } from '../../components/charts/LineChart';
import Footer from '../../components/Footer';

const mockRecentRequests = [
  {
    price: 6,
    service: Services.Washing,
    date: '21 DEC 7:20 PM'
  },
  {
    price: 30,
    service: Services.TechnicalVisit,
    date: '21 DEC 9:20 AM'
  },
  {
    price: 30,
    service: Services.TechnicalVisit,
    date: '21 DEC 7:50 AM'
  },
  {
    price: 60,
    service: Services.OilChange,
    date: '20 DEC 2:40 PM'
  },
  {
    price: 30,
    service: Services.WheelRepair,
    date: '20 DEC 7:29 AM'
  }
];

const mockGarages = [
  {
    name: 'Garage Allal',
    city: 'Casablanca',
    address: 'Boulevard Abdelmoumen, 3234',
    category: 'Washing, Wheel Repair'
  },
  {
    name: 'Bakiz',
    city: 'Khemisset',
    address: 'Avenue Simolayf, 1221',
    category: 'Washing'
  },
  {
    name: 'Auto Magrizi',
    city: 'Taddart',
    address: 'Rue Sardines, 1234',
    category: 'Oil Change, Technical Visit'
  },
  {
    name: 'Tibba Motors',
    city: 'Tokyo',
    address: 'Shibuya, 23144',
    category: 'Technical Visit, Wheel Repair'
  },
  {
    name: 'Sinko',
    city: 'Marrakech',
    address: 'Avenue Doha 2, 9433',
    category: 'All'
  },
  {
    name: 'Sinko',
    city: 'Marrakech',
    address: 'Avenue Doha 2, 9433',
    category: 'All'
  }
];

const DashboardPage: React.FC = () => {
  return (
    <div className='flex p-5'>
      <SideBar />
      <div style={{ width: "calc(100vw - 23.5rem)" }} className='ml-auto'>
        <TopBar title="Dashboard" />
        <div className='mt-[6.3rem] grid grid-cols-1 gap-5'>
          <div className='grid grid-flow-col gap-5 justify-stretch'>
            <StatisticCard title={Services.Washing} statistic={127} style={{ background: "linear-gradient(195deg, #42424a, #191919)" }} icon={<BiSolidCarWash size={27} color='white' />} />
            <StatisticCard title={Services.WheelRepair} statistic={201} style={{ background: "linear-gradient(195deg, #49a3f1, #1A73E8)" }} icon={<GiCarWheel size={27} color='white' />} />
            <StatisticCard title={Services.OilChange} statistic={12} style={{ background: "linear-gradient(195deg, #66BB6A, #43A047)" }} icon={<FaOilCan size={27} color='white' />} />
            <StatisticCard title={Services.TechnicalVisit} statistic={2} style={{ background: "linear-gradient(195deg, #EC407A, #D81B60)" }} icon={<BiSolidCarMechanic size={27} color='white' />} />
          </div>
          <div className='grid grid-flow-col gap-5 justify-stretch'>
            <div className='bg-white p-5 h-auto rounded-2xl flex flex-col justify-center shadow-lg'>
              <BarChart />
              <span className='text-gray-700 text-xl font-bold flex justify-center'>
                Service Requests Per Weekday
              </span>
            </div>
            <div className='bg-white p-5 h-auto rounded-2xl flex flex-col justify-center shadow-lg'>
              <LineChart />
              <span className='text-gray-700 text-xl font-bold flex justify-center'>
                Validated Requests Per Month
              </span>
            </div>
            <div className='bg-white p-5 rounded-2xl flex flex-col justify-center shadow-lg'>
              <LineChart />
              <span className='text-gray-700 text-xl font-bold flex justify-center'>
                Cancelled Requests Per Month
              </span>
            </div>
          </div>
          <div className='flex flex-row space-x-5 w-full'>
            <div className='bg-white p-5 rounded-2xl flex flex-col shadow-lg w-full'>
              <span className='text-gray-700 text-xl font-bold'>
                Top Rated Garages
              </span>
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
                      Services
                    </th>
                  </tr>
                </thead>
                <tbody className='text-gray-900'>
                  {mockGarages.map((row, index) => (
                    <tr className={`${index !== mockGarages.length - 1 && "border-b"}`} key={index}>
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
            <div className='bg-white p-5 rounded-2xl flex flex-col shadow-lg'>
              <div className='w-max'>
                <span className='text-gray-700 text-xl font-bold'>
                  Recent Requests
                </span>
                <ol className="relative text-gray-500 border-l mt-3 border-gray-200 ml-5">
                  {mockRecentRequests.map((row, index) => (
                    <li className={`ml-6 ${index !== mockRecentRequests.length - 1 && "mb-10"}`} key={index}>
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-[#66BB6A] text-white rounded-full -left-4">
                        <BiSolidCarGarage />
                      </span>
                      <h3 className="font-medium leading-tight text-gray-900">${row.price}, {row.service}</h3>
                      <p className="text-sm">{row.date}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardPage;
