import React from 'react';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const mockGarages = [
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
    },
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

const GaragesPage: React.FC = () => {
    const [searchValue, setSearchValue] = React.useState<string>("");
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [showAddModal, setShowAddModal] = React.useState(false);

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
                <TopBar title="Garages" />
                <div className='mt-[6.3rem] space-y-5'>
                    <button onClick={() => setShowAddModal(true)} className='rounded-2xl bg-green-500 p-3 flex items-center space-x-3 shadow-lg'>
                        <span>Add a garage</span>
                        <BiAddToQueue />
                    </button>
                    {showAddModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        {/*header*/}
                                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Add a garage
                                            </h3>
                                        </div>
                                        {/*body*/}
                                        <div className="p-5 flex-auto">
                                            <form className="flex space-x-5" action="#">
                                                <div className='space-y-5'>
                                                    <input
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                        placeholder="Name"
                                                        required
                                                    />
                                                    <input
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                        placeholder="City"
                                                        required
                                                    />
                                                    <input
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                        placeholder="Address"
                                                        required
                                                    />
                                                    <input
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                        placeholder="Category"
                                                        required
                                                    />
                                                    <input
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                        placeholder="Phone Number"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <div>Pick the garage's location</div>
                                                    <MapContainer style={{height: "500px", width: "500px"}}>
                                                        <TileLayer
                                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                        />
                                                    </MapContainer>
                                                </div>
                                            </form>
                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-5 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-green-500 bg-green-200 rounded-2xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowAddModal(false)}
                                            >
                                                Add
                                            </button>
                                            <button
                                                className="text-red-500 bg-red-200 rounded-2xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowAddModal(false)}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                    <SearchBar onSearch={handleSearch} />
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
                                            Category
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
                                            <td className="px-6 py-4">{row.category}</td>
                                            <td className="px-6 py-4 space-x-3">
                                                <button>
                                                    <AiFillDelete color="red" />
                                                </button>
                                                <button>
                                                    <AiFillEdit color="orange" />
                                                </button>
                                                <button>
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

export default GaragesPage;