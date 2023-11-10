import React from 'react';
import SideBar from '../../components/navigation/SideBar';
import TopBar from '../../components/navigation/TopBar';
import Pagination from '../../components/navigation/Pagination';
import { BsFillArchiveFill } from 'react-icons/bs';
import { BiAddToQueue } from 'react-icons/bi';
import { FaSquareCheck, FaSquareXmark } from 'react-icons/fa6';
import { AiFillEye } from 'react-icons/ai';
import Footer from '../../components/Footer';
import RequestSearchBar from '../../components/search/RequestSearchBar';
import RequestModal from '../../components/modals/RequestModal';
import RequestDetailsModal from '../../components/modals/RequestDetailsModal';
import { Cost, Services } from '../../utils';
import { LatLng } from 'leaflet';
import { Request, RequestStatus } from '../../models/Request';
import { Garage } from '../../models/Garage';

const mockGarage: Garage = {
  name: 'Garage Allal',
  city: 'Casablanca',
  address: 'Boulevard Abdelmoumen, 3234',
  phoneNumber: '+212611111111',
  cost: Cost.High,
  fulfilledRequests: 230,
  services: [
      Services.Washing,
      Services.WheelRepair
  ],
  location: new LatLng(33.57745, -7.60033)
};

const mockRequest: Request = {
  id: 323,
  clientName: 'Imad Maailil',
  clientPhoneNumber: '+212611111111',
  clientEmailAddress: 'imad.maailil@gmail.com',
  garage: mockGarage,
  preferredDate: new Date(Date.now()),
  vehicule: 'Ford Fiesta 2012',
  status: RequestStatus.Pending,
  time: new Date(Date.now()),
  services: [Services.OilChange, Services.WheelRepair]
};

const mockData = [
  {
    id: 324,
    status: 'Accepted',
    time: '10/30/2023 1:39PM',
    user: 'John Doe',
    garage: 'Garage Allal',
  },
  {
    id: 234,
    status: 'Accepted',
    time: '12/11/2022 6:29PM',
    user: 'John Doe',
    garage: 'Garage Allal',
  },
  {
    id: 121,
    status: 'Rejected',
    time: '10/30/2023 6:39PM',
    user: 'John Doe',
    garage: 'Garage Allal',
  },
  {
    id: 742,
    status: 'Accepted',
    time: '03/22/2021 3:39PM',
    user: 'John Doe',
    garage: 'Garage Allal',
  },
  {
    id: 867,
    status: 'Cancelled',
    time: '01/01/2021 2:25PM',
    user: 'John Doe',
    garage: 'Garage Allal',
  },
  {
    id: 598,
    status: 'Accepted',
    time: '04/03/2020 5:59PM',
    user: 'John Doe',
    garage: 'Garage Allal',
  },
  {
    id: 923,
    status: 'Accepted',
    time: '12/05/2022 9:42AM',
    user: 'John Doe',
    garage: 'Garage Allal',
  },
  {
    id: 433,
    status: 'Rejected',
    time: '08/11/2019 3:15PM',
    garage: 'Garage Allal',
    user: 'John Doe'
  },
  {
    id: 867,
    status: 'Cancelled',
    time: '01/01/2021 2:25PM',
    user: 'John Doe',
    garage: 'Garage Allal'
  },
  {
    id: 234,
    status: 'Accepted',
    time: '12/11/2022 6:29PM',
    user: 'John Doe',
    garage: 'Garage Allal'
  },
];

const RequestsPage: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [showAddModal, setShowAddModal] = React.useState<boolean>(false);
  const [showDetailsModal, setShowDetailsModal] = React.useState<boolean>(false);

  console.log(searchValue);

  const openDetailsModal = () => {
    setShowDetailsModal(true);
  };

  const closeDetailsModal = () => {
    setShowDetailsModal(false);
  };

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  console.log(searchValue);

  return (
    <div className='flex p-5'>
      <SideBar />
      <div style={{ width: "calc(100vw - 23.5rem)" }} className='ml-auto'>
        <TopBar title="Requests" />
        <div className='mt-[6.3rem] space-y-5'>
          {showAddModal && (
            <RequestModal closeModal={closeAddModal} />
          )}
          {showDetailsModal && (
            <RequestDetailsModal request={mockRequest} closeModal={closeDetailsModal} />
          )}
          <button onClick={openAddModal} className='rounded-2xl bg-green-500 p-3 flex items-center space-x-3 shadow-lg'>
            <span>New request</span>
            <BiAddToQueue />
          </button>
          <RequestSearchBar onSearch={handleSearch} />
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
                      Client
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Garage
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='text-gray-900'>
                  {mockData.map((row, index) => (
                    <tr className={`${index !== mockData.length - 1 && "border-b"}`} key={index}>
                      <th scope="row" className="px-6 py-4">
                        {row.id}
                      </th>
                      <td className={`px-6 py-4 text-${row.status === "Accepted" ? "green" : (row.status === "Rejected" || row.status === "Cancelled") && "red"}-500`}>{row.status}</td>
                      <td className="px-6 py-4">{row.time}</td>
                      <td className="px-6 py-4 font-bold">{row.user}</td>
                      <td className="px-6 py-4 font-bold">{row.garage}</td>
                      <td className="px-6 py-4 font-bold space-x-3">
                        <button>
                          <BsFillArchiveFill color="goldenrod" />
                        </button>
                        <button>
                          <FaSquareCheck color="green" />
                        </button>
                        <button>
                          <FaSquareXmark color="red" />
                        </button>
                        <button onClick={openDetailsModal}>
                          <AiFillEye />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RequestsPage;
