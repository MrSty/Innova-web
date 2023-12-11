"use client";
import { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Image, { StaticImageData } from "next/image";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CardElementProps {
    image: StaticImageData;
    className?: string;
    customSizeImg?: number;
    classImg?: string;
    other?:boolean;
}
const CardElement: React.FC<CardElementProps> = ({
    image,
    className,
    customSizeImg,
    classImg,
    other
}) => {
    const { ref, inView } = useInView({
        threshold: 0.5, // Opcional, define cuándo se considera visible
    });


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
            <Image className={twMerge(`z-10`, classImg)} src={image} height={isMobile ? 500 : customSizeImg != null ? customSizeImg : 700} alt="" />

            {/* Círculo pequeño */}
            <motion.div
                ref={ref}
                animate={inView ? { y:[0,100,0] } : { y: 0}}
                transition={{ duration: 3, ease: "easeInOut", repeat:Infinity, repeatDelay:10}}    
                className={`bg-white md:w-[7rem] md:h-[7rem] xl:w-40 xl:h-40 lg:absolute top-[20%] -left-16 ${!other?'lg:flex':''} hidden rounded-full shadow-gray-700 shadow-2xl`}>
                {/* Contenido del círculo pequeño */}
            </motion.div>
            {/* Círculo pequeño */}
            <motion.div 
            ref={ref}
            animate={inView ? { x:[0,-100,0] } : { y: 0}}
            transition={{ duration: 3, ease: "easeInOut", repeat:Infinity, repeatDelay:10, delay:1,}}
            className={`bg-white md:w-[7rem] md:h-[7rem] xl:w-40 xl:h-40 lg:absolute top-[20%] -right-10 xl:-right-16 ${!other?'lg:flex':''} hidden rounded-full shadow-gray-700 shadow-2xl`}>
                {/* Contenido del círculo pequeño */}
            </motion.div>

            {/* Círculo grande */}
            <div className={`bg-white 2xl:w-[80%] 2xl:h-[100%] md:w-[90%] md:h-[70%] lg:absolute top-[40%] right-[1%] xl:top-[30%] xl:right-[10%] ${!other?'lg:flex':''} hidden rounded-full shadow-gray-700 shadow-2xl`}>
                {/* Contenido del círculo grande */}
            </div>
        </div>
    );
}

export default CardElement;