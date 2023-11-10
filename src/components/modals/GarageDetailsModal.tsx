import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "../map/LocationMarker";
import { Services } from "../../utils";
import React from "react";
import { Garage } from "../../models/Garage";

interface Props {
    closeModal: () => void;
    garage: Garage;
}

const GarageDetailsModal: React.FC<Props> = ({ closeModal, garage }) => {
    return (
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-3/4 my-6 mx-auto">
                {/*content*/}
                <div className="border-2 border-gray-500 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Garage details
                        </h3>
                    </div>
                    {/*body*/}
                    <div className="p-5 flex-auto">
                        <form className="flex space-x-5 w-full" action="#">
                            <div className="w-full">
                                <span className="text-lg font-bold">Information</span>
                                <div className='space-y-3 flex flex-col mt-3 text-sm'>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Name</span>
                                        <span className="text-lg text-gray-900">{garage.name}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">City</span>
                                        <span className="text-lg text-gray-900">{garage.city}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Address</span>
                                        <span className="text-lg text-gray-900">{garage.address}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Phone Number</span>
                                        <span className="text-lg text-gray-900">{garage.phoneNumber}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Email Address</span>
                                        <span className="text-lg text-gray-900">{garage.emailAddress}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Cost</span>
                                        <span className="text-lg text-gray-900">{garage.cost}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-max">
                                <span className="text-lg font-bold">Services</span>
                                <div className='space-y-3 w-max'>
                                    {garage.services.map((service: Services) => (
                                        <div className="space-y-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                            <span className="ml-2">
                                                {service}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full">
                                <span className="text-lg font-bold">Location</span>
                                <MapContainer center={garage.location} zoom={15} scrollWheelZoom={false} className='h-[450px] w-[700px]'>
                                    <TileLayer
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <LocationMarker editable={false} position={garage.location} name={garage.name} />
                                </MapContainer>
                            </div>
                        </form>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
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

export default GarageDetailsModal;