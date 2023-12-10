"use client";
import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Image, { StaticImageData } from "next/image";

interface CardElementProps {
    image: StaticImageData;
    className?: string;
    customSizeImg?:number;
    classImg?:string;
}
const CardElement: React.FC<CardElementProps> = ({
    image,
    className,
    customSizeImg,
    classImg
}) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={twMerge(`flex flex-col items-center bg-gradient-to-br from-gradientStart to-gradientEnd rounded-tl-[5rem] rounded-br-[5rem]`, className)}>
            <Image className={twMerge(`z-10`, classImg)} src={image} height={isMobile ? 350 : customSizeImg!= null? customSizeImg:700} alt="" />

            {/* Círculo pequeño */}
            <div className="bg-white w-40 h-40 lg:absolute top-[23%] right-[43%] xl:flex hidden rounded-full shadow-gray-700 shadow-2xl">
                {/* Contenido del círculo pequeño */}
            </div>
            {/* Círculo pequeño */}
            <div className="bg-white w-40 h-40 lg:absolute top-[23%] -right-16 xl:flex hidden rounded-full shadow-gray-700 shadow-2xl">
                {/* Contenido del círculo pequeño */}
            </div>

            {/* Círculo grande */}
            <div className="bg-white w-[50rem] h-[50rem] lg:absolute top-[30%] right-[5%] xl:flex hidden rounded-full shadow-gray-700 shadow-2xl">
                {/* Contenido del círculo grande */}
            </div>
        </div>
    );
}

export default CardElement;