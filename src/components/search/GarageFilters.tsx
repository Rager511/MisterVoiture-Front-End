import React from 'react';
import { Services } from '../../utils';

interface Props {
    closeModal: () => void;
}

interface GarageFilter {
    sortBy: SortBy;
    services: Services[];
    descending: boolean;
}

enum SortBy {
    Name = "name",
    City = "city",
    Address = "address",
    FulfilledRequests = "fulfilledRequests"
}

// This is technically a modal but whatever
const GarageFilters: React.FC<Props> = ({ closeModal }) => {
    const [garageFilter, setGarageFilter] = React.useState<GarageFilter>({
        sortBy: SortBy.FulfilledRequests,
        services: [Services.Washing, Services.WheelRepair, Services.OilChange, Services.TechnicalVisit],
        descending: true
    });

    React.useEffect(() => {
        console.log(garageFilter);
    }, [garageFilter]);

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
                            Garage filters
                        </h3>
                    </div>
                    {/*body*/}
                    <div className="p-5 flex space-x-5">
                        <div>
                            <h3 className="mb-4 font-semibold text-gray-900">
                                Sort by
                            </h3>
                            <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                                <li className="w-full border-b border-gray-200 rounded-t-lg">
                                    <div className="flex items-center pl-3">
                                        <input
                                            id="list-radio-1"
                                            type="radio"
                                            defaultValue=""
                                            name="list-radio"
                                            onClick={() => setGarageFilter({ ...garageFilter, sortBy: SortBy.Name })}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="list-radio-1"
                                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                                        >
                                            Name
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 rounded-t-lg">
                                    <div className="flex items-center pl-3">
                                        <input
                                            id="list-radio-2"
                                            type="radio"
                                            defaultValue=""
                                            name="list-radio"
                                            onClick={() => setGarageFilter({ ...garageFilter, sortBy: SortBy.City })}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="list-radio-2"
                                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                                        >
                                            City
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 rounded-t-lg">
                                    <div className="flex items-center pl-3">
                                        <input
                                            id="list-radio-3"
                                            type="radio"
                                            defaultValue=""
                                            name="list-radio"
                                            onClick={() => setGarageFilter({ ...garageFilter, sortBy: SortBy.Address })}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="list-radio-3"
                                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                                        >
                                            Address
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 rounded-t-lg">
                                    <div className="flex items-center pl-3">
                                        <input
                                            id="list-radio-4"
                                            type="radio"
                                            defaultValue=""
                                            name="list-radio"
                                            onClick={() => setGarageFilter({ ...garageFilter, sortBy: SortBy.FulfilledRequests })}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="list-radio-4"
                                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                                        >
                                            Fulfilled Requests
                                        </label>
                                    </div>
                                </li>
                            </ul>
                            <div className='inline-flex space-x-3 mt-3'>
                                <span className="ml-3 text-sm font-medium text-gray-900">
                                    Descending
                                </span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        defaultValue=""
                                        onClick={() => setGarageFilter({ ...garageFilter, descending: !garageFilter.descending })}
                                        className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                                </label>
                                <span className="text-sm font-medium text-gray-900">
                                    Ascending
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold text-gray-900">
                                Services
                            </h3>
                            <div className='space-y-3'>
                                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <input
                                        id="bordered-checkbox-1"
                                        type="checkbox"
                                        defaultValue=""
                                        defaultChecked 
                                        name={Services.Washing}
                                        onClick={() => setGarageFilter({ ...garageFilter, services: garageFilter.services.includes(Services.Washing) ? garageFilter.services.filter(service => service !== Services.Washing) : [...garageFilter.services, Services.Washing] })}
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
                                        defaultChecked 
                                        name={Services.WheelRepair}
                                        onClick={() => setGarageFilter({ ...garageFilter, services: garageFilter.services.includes(Services.WheelRepair) ? garageFilter.services.filter(service => service !== Services.WheelRepair) : [...garageFilter.services, Services.WheelRepair] })}
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
                                        defaultChecked 
                                        name={Services.OilChange}
                                        onClick={() => setGarageFilter({ ...garageFilter, services: garageFilter.services.includes(Services.OilChange) ? garageFilter.services.filter(service => service !== Services.OilChange) : [...garageFilter.services, Services.OilChange] })}
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
                                        defaultChecked 
                                        name={Services.TechnicalVisit}
                                        onChange={() => setGarageFilter({ ...garageFilter, services: garageFilter.services.includes(Services.TechnicalVisit) ? garageFilter.services.filter(service => service !== Services.TechnicalVisit) : [...garageFilter.services, Services.TechnicalVisit] })}
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
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-3 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-green-500 bg-green-200 rounded-2xl font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={closeModal}
                        >
                            Set Filter
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
    );
};

export default GarageFilters;