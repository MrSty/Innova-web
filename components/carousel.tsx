import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomNextArrow from "./customNextArrow";
import CustomPrevArrow from "./customPrevArrow";
import Image from "next/image";
import carousel1 from "@/assets/images/carousel1.webp";
import carousel2 from "@/assets/images/carousel2.webp";
import carousel3 from "@/assets/images/carousel3.webp";
import carousel4 from "@/assets/images/carousel4.webp";
import carousel5 from "@/assets/images/carousel5.webp";
import carousel6 from "@/assets/images/carousel6.webp";



export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots:true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,

            nextArrow: <CustomNextArrow onClick={function (event: React.MouseEvent<Element, MouseEvent>): void {
                throw new Error("Function not implemented.");
            }} />,
            prevArrow: <CustomPrevArrow onClick={function (event: React.MouseEvent<Element, MouseEvent>): void {
                throw new Error("Function not implemented.");
            }} />

        };
        return (
            <div className="relative">
                <Slider {...settings}>
                    
                    <div className="flex flex-col h-full">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="flex flex-col items-center w-3/4 h-full rounded-[5rem]">
                                <Image src={carousel1}  alt="f" className="rounded-[5rem] shadow-md shadow-gray-700" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="flex flex-col items-center w-3/4 h-full rounded-[5rem]">
                                <Image src={carousel2}  alt="f" height={370} className="rounded-[5rem] shadow-md shadow-gray-700" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <div className="flex flex-col items-center justify-centerw-full">
                            <div className="flex flex-col items-center w-3/4 h-full rounded-[5rem]">
                                <Image src={carousel6} alt="f" height={500} className="rounded-[5rem] shadow-md shadow-gray-700" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="flex flex-col items-center w-3/4 h-full rounded-[5rem]">
                                <Image src={carousel3} alt="f" height={370} className="rounded-[5rem] shadow-md shadow-gray-700" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="flex flex-col items-center w-3/4 h-full rounded-[5rem]">
                                <Image src={carousel5} alt="f" height={500} className="rounded-[5rem] shadow-md shadow-gray-700" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="flex flex-col items-center w-3/4 h-full rounded-[5rem]">
                                <Image src={carousel4} alt="f" height={370} className="rounded-[5rem] shadow-md shadow-gray-700" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}