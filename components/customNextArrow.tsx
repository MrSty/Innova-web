import React, { MouseEventHandler } from 'react';
import { FaChevronRight } from 'react-icons/fa';

interface CustomNextArrowProps {
    onClick: MouseEventHandler;
}

const CustomNextArrow: React.FC<CustomNextArrowProps> = ({ onClick }) => (
    <div
        onClick={onClick}
        className="custom-next-arrow absolute -right-14 top-1/2 transform -translate-y-1/2 items-center justify-center p-2 inline-block rounded-full hover:bg-neutral-100 bg-white cursor-pointer text-gray-500 shadow-lg shadow-gray-600"
    >
        <FaChevronRight size={35} />
    </div>
);

export default CustomNextArrow;