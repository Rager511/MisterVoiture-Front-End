import React from 'react';
import SideBar from '../../components/navigation/SideBar';
import TopBar from '../../components/navigation/TopBar';
import Pagination from '../../components/navigation/Pagination';
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import 'leaflet/dist/leaflet.css'
import GarageModal from '../../components/modals/GarageModal';
import GarageDetailsModal from '../../components/modals/GarageDetailsModal';
import { Garage } from '../../models/Garage';
import { Cost, Services } from '../../utils';
import { LatLng } from 'leaflet';
import Footer from '../../components/Footer';
import GarageSearchBar from '../../components/search/GarageSearchBar';

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

const mockGarages: Garage[] = [
    {
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
    },
    {
        name: 'Bakiz',
        city: 'Khemisset',
        address: 'Avenue Simolayf, 1221',
        phoneNumber: '+212611111111',
        cost: Cost.High,
        fulfilledRequests: 212,
        services: [
            Services.Washing,
        ],
        location: new LatLng(33.57745, -7.60033)
    },
    {
        name: 'Auto Magrizi',
        city: 'Taddart',
        address: 'Rue Sardines, 1234',
        phoneNumber: '+212611111111',
        cost: Cost.High,
        fulfilledRequests: 199,
        services: [
            Services.OilChange,
            Services.TechnicalVisit
        ],
        location: new LatLng(33.57745, -7.60033)
    },
    {
        name: 'Tibba Motors',
        city: 'Tokyo',
        address: 'Shibuya, 23144',
        phoneNumber: '+212611111111',
        cost: Cost.Medium,
        fulfilledRequests: 196,
        services: [
            Services.TechnicalVisit,
            Services.WheelRepair
        ],
        location: new LatLng(33.57745, -7.60033)
    },
    {
        name: 'Sinko',
        city: 'Marrakech',
        address: 'Avenue Doha 2, 9433',
        phoneNumber: '+212611111111',
        cost: Cost.Medium,
        fulfilledRequests: 163,
        services: [
            Services.TechnicalVisit,
            Services.WheelRepair,
            Services.Washing,
            Services.OilChange
        ],
        location: new LatLng(33.57745, -7.60033)
    },
    {
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
    },
    {
        name: 'Bakiz',
        city: 'Khemisset',
        address: 'Avenue Simolayf, 1221',
        phoneNumber: '+212611111111',
        cost: Cost.High,
        fulfilledRequests: 212,
        services: [
            Services.Washing,
        ],
        location: new LatLng(33.57745, -7.60033)
    },
    {
        name: 'Auto Magrizi',
        city: 'Taddart',
        address: 'Rue Sardines, 1234',
        phoneNumber: '+212611111111',
        cost: Cost.High,
        fulfilledRequests: 199,
        services: [
            Services.OilChange,
            Services.TechnicalVisit
        ],
        location: new LatLng(33.57745, -7.60033)
    },
    {
        name: 'Tibba Motors',
        city: 'Tokyo',
        address: 'Shibuya, 23144',
        phoneNumber: '+212611111111',
        cost: Cost.Medium,
        fulfilledRequests: 196,
        services: [
            Services.TechnicalVisit,
            Services.WheelRepair
        ],
        location: new LatLng(33.57745, -7.60033)
    },
    {
        name: 'Sinko',
        city: 'Marrakech',
        address: 'Avenue Doha 2, 9433',
        phoneNumber: '+212611111111',
        cost: Cost.Medium,
        fulfilledRequests: 163,
        services: [
            Services.TechnicalVisit,
            Services.WheelRepair,
            Services.Washing,
            Services.OilChange
        ],
        location: new LatLng(33.57745, -7.60033)
    }
];

const GaragesPage: React.FC = () => {
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

    return (
        <div className='flex p-5'>
            <SideBar />
            <div style={{ width: "calc(100vw - 23.5rem)" }} className='ml-auto'>
                <TopBar title="Garages" />
                <div className='mt-[6.3rem] space-y-5'>
                    {showAddModal && (
                        <GarageModal closeModal={closeAddModal} />
                    )}
                    {showDetailsModal && (
                        <GarageDetailsModal garage={mockGarage} closeModal={closeDetailsModal} />
                    )}
                    <button onClick={openAddModal} className='rounded-2xl bg-green-500 p-3 flex items-center space-x-3 shadow-lg'>
                        <span>Add a garage</span>
                        <BiAddToQueue />
                    </button>
                    <GarageSearchBar onSearch={handleSearch} />
                    <div className='bg-white p-5 h-auto rounded-2xl flex flex-col justify-center shadow-lg'>
                        <div className="relative overflow-x-auto flex justify-center">
                            <table className="w-full text-sm text-left">
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
                                        <th scope="col" className="px-6 py-3">
                                            Fulfilled Requests
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Actions
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
                                            <td className="px-6 py-4">
                                                {row.services.includes(Services.Washing) && row.services.includes(Services.WheelRepair) && row.services.includes(Services.OilChange) && row.services.includes(Services.TechnicalVisit)
                                                    ? 'All'
                                                    : row.services.join(', ')}
                                            </td>
                                            <td className="px-6 py-4">{row.fulfilledRequests}</td>
                                            <td className="px-6 py-4 space-x-3">
                                                <button>
                                                    <AiFillDelete color="red" />
                                                </button>
                                                <button>
                                                    <AiFillEdit onClick={openAddModal} color="orange" />
                                                </button>
                                                <button>
                                                    <AiFillEye onClick={openDetailsModal} />
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

export default GaragesPage;