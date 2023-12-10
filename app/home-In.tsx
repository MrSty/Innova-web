import BenefitsItem from "@/components/benefitsItem";
import { useState, useEffect } from 'react';
import { PiShieldCheck, PiCurrencyDollarBold, PiListChecks, PiArrowsClockwiseBold } from "react-icons/pi";
import CardElement from "@/components/cardElemnt";
import imageCard from "@/assets/images/Recurso-3.webp";
import Image from "next/image";
import imageLogo1 from "@/assets/images/Recurso-5.webp"
import imageLogo2 from "@/assets/images/Recurso-6.webp"
import imageLogo3 from "@/assets/images/Recurso-7.webp"

const HomeIn = () => {


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


    return (
        <div id="Home">
            <div className="flex flex-col space-y-10 xl:space-y-0 mt-32 lg:mx-14 xl:mx-0 xl:ml-16 lg:mt-[5.3rem]">

                <div className="flex flex-col lg:flex-row mt-24 space-y-12 lg:space-y-0 md:items-center">

                    <div className="lg:w-1/2 flex flex-col space-y-8 md:items-start md:pl-0 md:pr-10 md:mx-10 ">
                        <div className="w-full md:w-2/3 md:pl-0 pl-4">
                            <p className="md:text-[2rem] text-lg">
                                More than a <strong className="text-primary font-normal">screen</strong>
                            </p>
                            <p className="font-bold text-[3rem] md:text-[4.7rem] w-[25rem]">Make Your Phone Safer</p>
                            <hr className="border-t-[0.25rem] w-72 border-tertiary " />
                            <hr className="border-t-[0.25rem] w-72 border-primary " />
                        </div>
                        <p className="lg:w-3/4 md:px-0 px-6 md:text-xl text-gray-500">The Magic Box is not just a screen protector; it&apos;s a shield of innovation. Using advanced
                            nanotechnology, The Magic Box creates an invisible layer of protection on your device&apos;s screen.
                            This layer safeguards your screen from scratches, impacts, and daily wear and tear, all while
                            maintaining the crystal-clear visual experience you love.</p>
                    </div>
                    <div className="lg:w-1/2 md:px-0 px-6 md:flex md:flex-col">
                        <CardElement image={imageCard} />
                    </div>
                </div>

                <div className="lg:relative lg:z-30 md:bottom-0 xl:bottom-10 sm:px-0 px-10 lg:mx-0 w-full lg:justify-center lg:px-10 xl:px-20 flex lg:space-y-0 space-y-5 flex-col lg:flex-row lg:space-x-20 md:ml-0">
                    <BenefitsItem
                        content="You can get this product safely on
          the Amazon website."
                        title="YOU CAN GET IT"
                        icon={<Image src={imageLogo1} alt="logo1" height={isMobile ? 60 : 80 }/>}
                    />
                    <BenefitsItem
                        content="Considered one of the most affordable
          products on the market."
                        title="CHEAPER"
                        icon={<Image src={imageLogo2} alt="logo1" height={isMobile ? 60 : 80 }/>}
                    />
                    <BenefitsItem
                        content="Guaranteed security on each of your
          devices. Avoid scratches and fractures
          on your screens"
                        title="SAFER"
                        icon={<Image src={imageLogo3} alt="logo1" height={isMobile ? 60 : 80 }/>}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeIn;