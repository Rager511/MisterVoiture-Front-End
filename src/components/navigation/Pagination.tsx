import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Props {
    currentPage: number;
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, onPageChange }) => {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        onPageChange(currentPage + 1);
    };

    return (
        <nav className='flex justify-center'>
            <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                    <a href="#" onClick={handlePreviousPage} className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white rounded-l-2xl hover:bg-gray-100 hover:text-gray-700">
                        <span className="sr-only">Previous</span>
                        <AiOutlineLeft />
                    </a>
                </li>
                <li>
                    <a href="#" aria-current="page"  className="flex items-center justify-center px-4 h-10 leading-tight text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">
                        1
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">
                        2
                    </a>
                </li>
                <li>
                    <a href="#" className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700">
                        3
                    </a>
                </li>
                <li>
                    <a href="#" onClick={handleNextPage} className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white rounded-r-2xl hover:bg-gray-100 hover:text-gray-700">
                        <span className="sr-only">Next</span>
                        <AiOutlineRight />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;