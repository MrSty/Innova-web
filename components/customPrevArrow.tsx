import React, { MouseEventHandler } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

interface CustomPrevArrowProps {
    onClick: MouseEventHandler;
}
const CustomPrevArrow: React.FC<CustomPrevArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        className="custom-prev-arrow absolute -left-14 top-1/2 z-50 transform -translate-y-1/2 items-center justify-center p-2 inline-block rounded-full hover:bg-neutral-100 bg-white cursor-pointer text-gray-500 shadow-lg shadow-gray-600"
    >
        <FaChevronLeft size={35} />
    </div>
);


export default CustomPrevArrow;