import { Services } from "../../utils";
import { Request } from "../../models/Request";
import React from "react";

interface Props {
    closeModal: () => void;
    request: Request;
}

const RequestDetailsModal: React.FC<Props> = ({ closeModal, request }) => {
    return (
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-max my-6 mx-auto">
                {/*content*/}
                <div className="border-2 border-gray-500 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Request details
                        </h3>
                    </div>
                    {/*body*/}
                    <div className="p-5 flex-auto">
                        <form className="flex space-x-5 w-full" action="#">
                            <div className="w-full">
                                <span className="text-lg font-bold">Information</span>
                                <div className='space-y-3 flex flex-col mt-3 text-sm'>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Request ID</span>
                                        <span className="text-lg text-gray-900">{request.id}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Client Name</span>
                                        <span className="text-lg text-gray-900">{request.clientName}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Client Phone Number</span>
                                        <span className="text-lg text-gray-900">{request.clientPhoneNumber}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Client Email Address</span>
                                        <span className="text-lg text-gray-900">{request.clientEmailAddress}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Garage</span>
                                        <span className="text-lg text-gray-900">{request.garage.name}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Date</span>
                                        <span className="text-lg text-gray-900">{request.preferredDate.toString()}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500">Vehicule</span>
                                        <span className="text-lg text-gray-900">{request.vehicule}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-5">
                                <div className="w-max">
                                    <span className="text-lg font-bold">Services</span>
                                    <div className='space-y-3 w-max'>
                                        {request.services.map((service: Services) => (
                                            <div className="space-y-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                                <span className="ml-2">
                                                    {service}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-max">
                                    <span className="text-lg font-bold">Details</span>
                                    <div className='space-y-3 w-max'>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-500">Created at</span>
                                            <span className="text-lg text-gray-900">{request.time.toString()}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm text-gray-500">Garage Phone Number</span>
                                            <span className="text-lg text-gray-900">{request.garage.phoneNumber}</span>
                                        </div>
                                    </div>
                                </div>
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

export default RequestDetailsModal;