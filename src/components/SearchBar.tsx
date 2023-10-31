import React, { ChangeEvent } from "react";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";

interface Props {
    onSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        onSearch(value); // Call the callback to update the search value in the parent component
    };

    return (
        <div className="flex">
            <button className="z-30 p-3 rounded-l-2xl w-1/12 transition ease-in-out delay-50 space-x-1 space-y-1 flex justify-center text-sm font-medium text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500" type="button">
                <span>Filters</span>
                <AiOutlineDown />
            </button>
            <div className="flex w-full">
                <div className="bg-white w-11/12 z-20">
                    <input
                        onChange={handleInputChange}
                        className="text-sm p-3 w-full text-gray-900 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                </div>
                <button type="submit" className="flex p-3 z-30 w-1/12 justify-center rounded-r-2xl text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <AiOutlineSearch />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;