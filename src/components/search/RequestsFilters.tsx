import React from 'react';

interface Props {
    closeModal: () => void;
}

interface RequestFilter {
    sortBy: SortBy;
    descending: boolean;
}

enum SortBy {
    ID = "id",
    Status = "status",
    Time = "time",
    Client = "client",
    Admin = "admin"
}

// This is technically a modal but whatever
const RequestsFilters: React.FC<Props> = ({ closeModal }) => {
    const [requestFilter, setRequestFilter] = React.useState<RequestFilter>({
        sortBy: SortBy.Time,
        descending: true
    });

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
                            Requests filters
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
                                            onClick={() => setRequestFilter({ ...requestFilter, sortBy: SortBy.ID })}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="list-radio-1"
                                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                                        >
                                            Request ID
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
                                            onClick={() => setRequestFilter({ ...requestFilter, sortBy: SortBy.Status })}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="list-radio-2"
                                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                                        >
                                            Status
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
                                            onClick={() => setRequestFilter({ ...requestFilter, sortBy: SortBy.Time })}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="list-radio-3"
                                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                                        >
                                            Time
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
                                            onClick={() => setRequestFilter({ ...requestFilter, sortBy: SortBy.Client })}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="list-radio-4"
                                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                                        >
                                            Client
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
                                            onClick={() => setRequestFilter({ ...requestFilter, sortBy: SortBy.Admin })}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="list-radio-4"
                                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
                                        >
                                            Admin
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
                                        onClick={() => setRequestFilter({ ...requestFilter, descending: !requestFilter.descending })}
                                        className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
                                </label>
                                <span className="text-sm font-medium text-gray-900">
                                    Ascending
                                </span>
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

export default RequestsFilters;