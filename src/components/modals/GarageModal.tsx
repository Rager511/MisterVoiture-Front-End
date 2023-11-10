import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "../map/LocationMarker";
import { Services, defaultCenter } from "../../utils";
import React from "react";

interface Props {
    closeModal: () => void;
}

const GarageModal: React.FC<Props> = ({ closeModal }) => {
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
                            Add a garage
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
                                        placeholder="Name"
                                        value={""}
                                        required
                                    />
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="City"
                                        value={""}
                                        required
                                    />
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Address"
                                        value={""}
                                        required
                                    />
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Phone Number"
                                        value={""}
                                        required
                                    />
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Email Address"
                                        value={""}
                                        required
                                    />
                                    <div>
                                        <div className="flex items-center">
                                            <input
                                                id="list-radio-1"
                                                type="radio"
                                                name="list-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="list-radio-1"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                $
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="list-radio-2"
                                                type="radio"
                                                name="list-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="list-radio-2"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                $$
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="list-radio-2"
                                                type="radio"
                                                defaultValue=""
                                                name="list-radio"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="list-radio-2"
                                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                $$$
                                            </label>
                                        </div>
                                    </div>
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
                            <div>
                                <span className="text-lg font-bold">Pick the garage's location</span>
                                <MapContainer center={defaultCenter} zoom={5} scrollWheelZoom={true} className='h-[450px] w-[400px]'>
                                    <TileLayer
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <LocationMarker editable={true} position={defaultCenter} />
                                </MapContainer>
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

export default GarageModal;