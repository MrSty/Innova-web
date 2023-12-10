"use client";
import { FaFacebookF, FaAmazon, FaInstagram } from "react-icons/fa";
import HomeIn from "../home-In";
import AbtProduct from "../aboutProduct";
import AbtUs from "../aboutUs";

export default function Home() {



  return (

    <div>
      <div className="bg-primary z-30 lg:flex hidden flex-col space-y-8 items-center justify-center h-72 mt-40 w-16 rounded-e-3xl fixed left-0 top-44">
        <a href=""><FaFacebookF className="text-white" size={40} /></a>
        <a href=""><FaInstagram className="text-white" size={40} /></a>
        <a href=""><FaAmazon className="text-white" size={40} /></a>
      </div>
      <div className="bg-white w-40 h-40 lg:absolute md:z-50 -top-5 -left-10 xl:flex hidden rounded-full shadow-gray-700 shadow-2xl">

      </div>
      <div className="bg-white w-40 h-40 lg:absolute -bottom-20 -left-10 xl:flex hidden rounded-full shadow-gray-700 shadow-2xl">

      </div>
      <HomeIn />
      <AbtProduct/>
      <AbtUs/>
    </div>
  );
}