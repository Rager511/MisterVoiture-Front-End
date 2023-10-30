import React from 'react';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import { BiSolidCarWash, BiSolidCarMechanic, BiSolidCarGarage } from 'react-icons/bi';
import { GiCarWheel } from 'react-icons/gi';
import { FaOilCan } from 'react-icons/fa';
import StatisticCard from '../../components/StatisticCard';
import { BarChart } from '../../components/charts/BarChart';
import { LineChart } from '../../components/charts/LineChart';

const DashboardPage: React.FC = () => {
  return (
    <div className='flex p-5'>
      <SideBar />
      <div style={{ width: "calc(100vw - 23.5rem)" }} className='ml-auto'>
        <TopBar title="Dashboard" />
        <div className='mt-[6.3rem] grid grid-cols-1 gap-5'>
          <div className='grid grid-flow-col gap-5 justify-stretch'>
            <StatisticCard title="Washing" statistic={127} style={{ background: "linear-gradient(195deg, #42424a, #191919)" }} icon={<BiSolidCarWash size={27} color='white' />} />
            <StatisticCard title="Wheel Repair" statistic={201} style={{ background: "linear-gradient(195deg, #49a3f1, #1A73E8)" }} icon={<GiCarWheel size={27} color='white' />} />
            <StatisticCard title="Oil Change" statistic={12} style={{ background: "linear-gradient(195deg, #66BB6A, #43A047)" }} icon={<FaOilCan size={27} color='white' />} />
            <StatisticCard title="Technical Visit" statistic={2} style={{ background: "linear-gradient(195deg, #EC407A, #D81B60)" }} icon={<BiSolidCarMechanic size={27} color='white' />} />
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
          <div className='grid grid-flow-col gap-5 justify-stretch'>
            <div className='bg-white p-5 h-auto rounded-2xl flex flex-col shadow-lg'>
              <span className='text-gray-700 text-xl font-bold'>
                Top Rated Mechanics
              </span>
              <div className="relative overflow-x-auto flex justify-center">
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
                    <tr className="border-b">
                      <th scope="row" className="px-6 py-4">
                        Mohamed
                      </th>
                      <td className="px-6 py-4 text-green-500">Yes</td>
                      <td className="px-6 py-4">Excellent</td>
                      <td className="px-6 py-4">$$$</td>
                    </tr>
                    <tr className="border-b">
                      <th scope="row" className="px-6 py-4">
                        Ali
                      </th>
                      <td className="px-6 py-4 text-green-500">Yes</td>
                      <td className="px-6 py-4">Excellent</td>
                      <td className="px-6 py-4">$$$</td>
                    </tr>
                    <tr className="border-b">
                      <th scope="row" className="px-6 py-4">
                        Said
                      </th>
                      <td className="px-6 py-4 text-red-500">No</td>
                      <td className="px-6 py-4">Good</td>
                      <td className="px-6 py-4">$$</td>
                    </tr>
                    <tr className="border-b">
                      <th scope="row" className="px-6 py-4">
                        Youssef
                      </th>
                      <td className="px-6 py-4 text-green-500">Yes</td>
                      <td className="px-6 py-4">Good</td>
                      <td className="px-6 py-4">$$$</td>
                    </tr>
                    <tr className="border-b">
                      <th scope="row" className="px-6 py-4 ">
                        Anas
                      </th>
                      <td className="px-6 py-4 text-red-500">No</td>
                      <td className="px-6 py-4">Excellent</td>
                      <td className="px-6 py-4">$</td>
                    </tr>
                    <tr className="">
                      <th scope="row" className="px-6 py-4">
                        Hamza
                      </th>
                      <td className="px-6 py-4 text-green-500">Yes</td>
                      <td className="px-6 py-4">Good</td>
                      <td className="px-6 py-4">$$$</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='bg-white p-5 h-auto rounded-2xl flex flex-col shadow-lg'>
              <span className='text-gray-700 text-xl font-bold'>
                Requests Overview
              </span>
              <ol className="relative text-gray-500 border-l mt-3 border-gray-200 mx-auto">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#66BB6A] text-white rounded-full -left-4">
                    <BiSolidCarGarage />
                  </span>
                  <h3 className="font-medium leading-tight text-gray-900">$6, Washing</h3>
                  <p className="text-sm">21 DEC 7:20 PM</p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#66BB6A] text-white rounded-full -left-4">
                    <BiSolidCarGarage />
                  </span>
                  <h3 className="font-medium leading-tight text-gray-900">$30, Technical visit</h3>
                  <p className="text-sm">21 DEC 9:20 AM</p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#66BB6A] text-white rounded-full -left-4">
                    <BiSolidCarGarage />
                  </span>
                  <h3 className="font-medium leading-tight text-gray-900">$30, Technical visit</h3>
                  <p className="text-sm">21 DEC 7:50 AM</p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#66BB6A] text-white rounded-full -left-4">
                    <BiSolidCarGarage />
                  </span>
                  <h3 className="font-medium leading-tight text-gray-900">$60, Oil change</h3>
                  <p className="text-sm">20 DEC 2:40 PM</p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-[#66BB6A] text-white rounded-full -left-4">
                    <BiSolidCarGarage />
                  </span>
                  <h3 className="font-medium leading-tight text-gray-900">$30, Tire change</h3>
                  <p className="text-sm">20 DEC 7:29 AM</p>
                </li>
              </ol>
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

export default DashboardPage;
