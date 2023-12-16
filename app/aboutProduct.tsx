import BenefitsItem from "@/components/benefitsItem";
import { useState, useEffect } from 'react';
import { PiShieldCheck, PiCurrencyDollarBold, PiListChecks, PiArrowsClockwiseBold } from "react-icons/pi";
import CardElement from "@/components/cardElemnt";
import imageCard from "@/assets/images/011NV.webp";
import image1 from "../assets/images/Recurso-1.webp"
import SimpleSlider from "@/components/carousel";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const AbtProduct = () => {
    const { ref, inView } = useInView({
        threshold: 0.5, // Opcional, define cuándo se considera visible
    });

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isTablet, setIsTablet] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Puedes ajustar el umbral según tus necesidades
            setIsTablet(window.innerWidth < 900)
        };

        // Llamamos a la función de manejo de tamaño al cargar la página
        handleResize();

        // Agregamos el oyente del evento de cambio de tamaño
        window.addEventListener('resize', handleResize);

        // Limpiamos el oyente del evento cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const images = [
        '/assets/images/Recurso-1.webp',
        '/assets/images/Recurso-3.webp',
        // Agrega más rutas de imágenes según sea necesario
    ];


    return (
        <div id="AboutPrd" className="bg-tertiary relative overflow-hidden mt-20">
            <div className="absolute bg-primary h-[35rem] w-[35rem] -bottom-40 -left-40 rounded-full opacity-70 blur-3xl">

            </div>
            <div className="absolute bg-primary h-[30rem] w-[30rem] -top-40 -right-40 rounded-full opacity-70 blur-3xl">

            </div>
            <div className="flex flex-col justify-end lg:h-screen space-y-10 xl:space-y-0 lg:mx-14 xl:mx-0 xl:ml-16">
                <div className="h-1/2 flex flex-col items-center justify-center mt-14">
                    <div className="w-[70%] lg:w-[90%]">
                        <SimpleSlider mobile={isMobile}/>
                    </div>

                </div>
                <div    
                className="h-1/2 flex py-10 md:py-0 z-40 flex-col lg:items-center lg:justify-center">
                    <motion.div 
                    ref={ref}
                    initial={{scale:1.3}}
                    animate={inView ? { scale: 1 } : { scale: 0.9}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}     
                    className="md:ml-[7rem] md:w-[80%] 2xl:w-[45%] rounded-[4rem] bg-white shadow-gray-500 shadow-xl py-10 px-10 flex flex-col space-y-5">
                        <h2 className="text-[1.3rem] font-bold">ABOUT THE PRODUCT</h2>
                        <p className="md:mx-[5.7rem] text-justify text-gray-500">The Magic Box is not just a screen protector; it&apos;s a shield of innovation. Using

                            advanced nanotechnology, The Magic Box creates an invisible layer of protection on your device&apos;s screen. This layer safeguards your screen from scratches,

                            impacts, and daily wear and tear, all while maintaining the crystal-clear visual
                            experience you love.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default AbtProduct;