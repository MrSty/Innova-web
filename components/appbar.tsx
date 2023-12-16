// appbar.tsx
"use client";
import { useState, useEffect } from 'react';
import InLogo from '@/assets/images/Recurso 4.svg'
import Image, { StaticImageData } from "next/image";


export const Appbar = () => {
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
        <div className="fixed top-0 left-0 right-0 z-50 bg-white w-screen">
            <div className={isMobile ? 'block' : 'hidden'}>
                <div className="container flex flex-col md:flex-row items-start md:ml-4 space-y-3 md:space-y-0 md:space-x-3">
                    <Image src={InLogo} height={70} alt="adsaf"/>
                </div>
            </div>
            <div className={isMobile ? 'hidden' : 'block'}>
                <div className="container mx-auto flex flex-col md:flex-row md:items-end md:space-x-20">
                    <Image src={InLogo} height={80} alt="adsaf"/>
                    <div className="space-x-20 text-[1.1rem] flex items-end font-extrabold">
                        <a href="#Home" className="text-black">HOME</a>
                        <a href="#AboutPrd" className="text-black">ABOUT THE PRODUCT</a>
                        <a href="#AboutUs" className="text-black">ABOUT US</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
