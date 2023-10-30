import React from 'react';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from 'react-icons/ai';

const NotificationPage: React.FC = () => {
  return (
    <div className='flex p-5'>
      <SideBar />
      <div style={{ width: "calc(100vw - 23.5rem)" }} className='ml-auto'>
        <TopBar title="Notifications" />
        <div className='mt-[6.3rem] space-y-5'>
          <form>
            <div className="flex">
              <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                Your Email
              </label>
              <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 space-x-1 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">
                <span>Filters</span>
                <AiOutlineDown />
              </button>
              <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">
                      Mockups
                    </button>
                  </li>
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">
                      Templates
                    </button>
                  </li>
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">
                      Design
                    </button>
                  </li>
                  <li>
                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100">
                      Logos
                    </button>
                  </li>
                </ul>
              </div>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <AiOutlineSearch />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
          <div className='bg-white p-5 h-auto rounded-2xl flex flex-col justify-center shadow-lg'>
            <div className="relative overflow-x-auto flex justify-center">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-400">
                  <tr className='border-b'>
                    <th scope="col" className="px-6 py-3">
                      Request ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      User
                    </th>
                  </tr>
                </thead>
                <tbody className='text-gray-900'>
                  <tr className="border-b">
                    <th scope="row" className="px-6 py-4">
                      324
                    </th>
                    <td className="px-6 py-4 text-green-500">Accepted</td>
                    <td className="px-6 py-4">10/30/2023 1:39PM</td>
                    <td className="px-6 py-4 font-bold">Imad Maailil</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="px-6 py-4">
                      234
                    </th>
                    <td className="px-6 py-4 text-green-500">Accepted</td>
                    <td className="px-6 py-4">12/11/2022 6:29PM</td>
                    <td className="px-6 py-4 font-bold">Houssam Bajaj</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="px-6 py-4">
                      121
                    </th>
                    <td className="px-6 py-4 text-red-500">Rejected</td>
                    <td className="px-6 py-4">10/30/2023 6:39PM</td>
                    <td className="px-6 py-4 font-bold">Imad Maailil</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="px-6 py-4">
                      742
                    </th>
                    <td className="px-6 py-4 text-green-500">Accepted</td>
                    <td className="px-6 py-4">03/22/2021 3:39PM</td>
                    <td className="px-6 py-4 font-bold">Imad Maailil</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="px-6 py-4 ">
                      867
                    </th>
                    <td className="px-6 py-4 text-red-500">Cancelled</td>
                    <td className="px-6 py-4">01/01/2021 2:25PM</td>
                    <td className="px-6 py-4 font-bold">Imad Maailil</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="px-6 py-4">
                      598
                    </th>
                    <td className="px-6 py-4 text-green-500">Accepted</td>
                    <td className="px-6 py-4">04/03/2020 5:59PM</td>
                    <td className="px-6 py-4 font-bold">Hamza Lghali</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="px-6 py-4 ">
                      923
                    </th>
                    <td className="px-6 py-4 text-green-500">Accepted</td>
                    <td className="px-6 py-4">12/05/2022 9:42AM</td>
                    <td className="px-6 py-4 font-bold">Hamza Lghali</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="px-6 py-4">
                      433
                    </th>
                    <td className="px-6 py-4 text-red-500">Rejected</td>
                    <td className="px-6 py-4">08/11/2019 3:15PM</td>
                    <td className="px-6 py-4 font-bold">John Doe</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="px-6 py-4 ">
                      867
                    </th>
                    <td className="px-6 py-4 text-red-500">Cancelled</td>
                    <td className="px-6 py-4">01/01/2021 2:25PM</td>
                    <td className="px-6 py-4 font-bold">Imad Maailil</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="px-6 py-4">
                      234
                    </th>
                    <td className="px-6 py-4 text-green-500">Accepted</td>
                    <td className="px-6 py-4">12/11/2022 6:29PM</td>
                    <td className="px-6 py-4 font-bold">Houssam Bajaj</td>
                  </tr>
                  <tr className="border-b">
                    <th scope="row" className="px-6 py-4">
                      121
                    </th>
                    <td className="px-6 py-4 text-red-500">Rejected</td>
                    <td className="px-6 py-4">10/30/2023 6:39PM</td>
                    <td className="px-6 py-4 font-bold">Imad Maailil</td>
                  </tr>
                  <tr className="">
                    <th scope="row" className="px-6 py-4">
                      598
                    </th>
                    <td className="px-6 py-4 text-green-500">Accepted</td>
                    <td className="px-6 py-4">04/03/2020 5:59PM</td>
                    <td className="px-6 py-4 font-bold">Hamza Lghali</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <nav className='flex justify-center'>
            <ul className="flex items-center -space-x-px h-10 text-base">
              <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                  <span className="sr-only">Previous</span>
                  <AiOutlineLeft />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  1
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  2
                </a>
              </li>
              <li>
                <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">
                  3
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  4
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                  5
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                  <span className="sr-only">Next</span>
                  <AiOutlineRight />
                </a>
              </li>
            </ul>
          </nav>
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

export default NotificationPage;
