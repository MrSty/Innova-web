import BenefitsItem from "@/components/benefitsItem";
import { useState, useEffect } from 'react';
import { PiShieldCheck, PiCurrencyDollarBold, PiListChecks, PiArrowsClockwiseBold } from "react-icons/pi";
import CardElement from "@/components/cardElemnt";
import imageCard from "@/assets/images/Recurso-1.webp";

const AbtUs = () => {


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
        <div id="AboutUs" className="mb-40">

            <div className="flex flex-col space-y-10 xl:space-y-0 md:mt-32 lg:mx-14 xl:mx-0 xl:ml-16 lg:mt-[5.3rem]">

                <div className="flex flex-col 2xl:flex-row mt-24 space-y-12 lg:space-x-40 lg:space-y-0 md:items-center mb-10">

                    <div className="2xl:w-1/2 flex flex-col py-10 md:items-start text-justify px-10  md:mx-10 rounded-[3rem] shadow-gray-900 shadow-2xl bg-white">
                        <div className="w-full md:w-2/3 md:pl-0 pl-4 mb-3">
                            <h2 className="md:text-[1.3rem] text-lg font-bold ml-5">ABOUT US</h2>
                        </div>
                        <div className="space-y-10">
                            <p className="md:px-0 md:text-lg text-gray-500">Innova is company that has managed to stand out in the competitive world of
                                e-commerce by distributing high-quality screen protectors at aordable prices
                                through the leading platform, Amazon. Their commitment to innovation is re
                                ected not only in the exceptional quality of their products, but also in their
                                strategic approach to delivering screen protection solutions that go beyond
                                customer expectations. With a wide range of protectors designed to adapt to
                                various devices, from smartphones to tablets and laptops,
                                Innova has positioned itself as a benchmark in the market.</p>
                            <p className="md:px-0 md:text-lg text-gray-500">What sets Innova apart from its competitors is its constant pursuit of
                                excellence in terms of materials used and manufacturing processes. Using
                                cutting-edge technologies and collaborating with industry-leading suppliers, the

                                company guarantees that each screen protector will provide optimal visual
                                clarity, scratch resistance and long-term durability. Additionally, Innova prides
                                itself on maintaining competitive prices without compromising on quality,

                                which has built a loyal customer base and contributed to the company&apos;s consistent growth.</p>
                            <p className="md:px-0 md:text-lg text-gray-500">Innova&apos;s presence on Amazon is not only limited to selling products, but is also
                                notable for its exceptional customer service. Their customer service team is
                                highly trained to oer expert advice and resolve any concerns customers may
                                have. Transparency and honesty are core values for Innova, and this is reected

                                in the positive reviews and overall satisfaction of customers who have experienced the company&apos;s quality and service.</p>
                            <p className="md:px-0 md:text-lg text-gray-500">In summary, Innova has become a benchmark in the screen protector industry,

                                fusing innovation with accessibility to oer customers a complete and satisfactory experience in protecting their electronic devices through the leading

                                e-commerce platform. . , Amazon.</p>
                        </div>
                    </div>
                    <div className="relative lg:w-1/2 md:px-0 flex flex-col pt-20">
                        {/* Círculo pequeño */}
                        <div className="bg-white w-40 h-40 lg:absolute bottom-[50%] -left-16 xl:flex hidden rounded-full shadow-gray-700 shadow-2xl">
                            {/* Contenido del círculo pequeño */}
                        </div>
                        {/* Círculo pequeño */}
                        <div className="bg-white w-40 h-40 lg:absolute bottom-[50%] -right-16   xl:flex hidden rounded-full shadow-gray-700 shadow-2xl">
                            {/* Contenido del círculo pequeño */}
                        </div>
                        <CardElement other={true} image={imageCard} customSizeImg={740} className="rounded-bl-[5rem] py-5 md:py-0 h-auto" classImg="-mt-20" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AbtUs;