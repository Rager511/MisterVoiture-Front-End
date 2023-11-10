import { LatLng } from "leaflet";
import { Cost, Services } from "../../utils";
import React from "react";
import { Garage } from "../../models/Garage";

interface Props {
    closeModal: () => void;
}

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

const RequestModal: React.FC<Props> = ({ closeModal }) => {
    return (
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto">
                {/*content*/}
                <div className="border-2 border-gray-500 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            New request
                        </h3>
                    </div>
                    {/*body*/}
                    <div className="p-5 flex-auto">
                        <form className="flex space-x-5" action="#">
                            <div>
                                <span className="text-lg font-bold">Information</span>
                                <div className='space-y-3 overflow-y-auto h-52'>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Client Full Name"
                                        value={""}
                                        required
                                    />
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Client Phone Number"
                                        value={""}
                                        required
                                    />
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Client Email Address"
                                        value={""}
                                        required
                                    />
                                    <select
                                        id="countries"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    >
                                        <option disabled selected>Garage</option>
                                        {mockGarages.map((garage: Garage) => (
                                            <option value={garage.name}>{garage.name}</option>
                                        ))}
                                    </select>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        type="date"
                                    />
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Vehicule"
                                        value={""}
                                        required
                                    />
                                </div>
                                <hr className='my-3'></hr>
                                <span className="text-lg font-bold">Services</span>
                                <div className='space-y-3'>
                                    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <input
                                            id="bordered-checkbox-1"
                                            type="checkbox"
                                            defaultValue=""
                                            name={Services.Washing}
                                            className="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="bordered-checkbox-1"
                                            className="w-full ml-2"
                                        >
                                            {Services.Washing}
                                        </label>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <input
                                            id="bordered-checkbox-2"
                                            type="checkbox"
                                            defaultValue=""
                                            name={Services.WheelRepair}
                                            className="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="bordered-checkbox-2"
                                            className="w-full ml-2"
                                        >
                                            {Services.WheelRepair}
                                        </label>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <input
                                            id="bordered-checkbox-3"
                                            type="checkbox"
                                            defaultValue=""
                                            name={Services.OilChange}
                                            className="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="bordered-checkbox-3"
                                            className="w-full ml-2"
                                        >
                                            {Services.OilChange}
                                        </label>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <input
                                            id="bordered-checkbox-4"
                                            type="checkbox"
                                            defaultValue=""
                                            name={Services.TechnicalVisit}
                                            className="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="bordered-checkbox-4"
                                            className="w-full ml-2"
                                        >
                                            {Services.TechnicalVisit}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-green-500 bg-green-200 rounded-2xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={closeModal}
                        >
                            Add
                        </button>
                        <button
                            className="text-red-500 bg-red-200 rounded-2xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RequestModal;