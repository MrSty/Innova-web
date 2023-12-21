"use client";
import { FaFacebookF, FaAmazon, FaInstagram } from "react-icons/fa";
import HomeIn from "../home-In";
import AbtProduct from "../aboutProduct";
import AbtUs from "../aboutUs";
import ContactUs from "@/components/contact";

export default function Home() {





  return (

    <div className="other2xl overflow-x-hidden">
      <div className="bg-primary z-30 lg:flex hidden flex-col space-y-8 items-center justify-center h-72 mt-40 w-16 rounded-e-3xl fixed left-0 top-44">
        <a href="https://www.facebook.com/profile.php?id=100071151394747&mibextid=9R9pXO" target="_blank"><FaFacebookF className="text-white" size={40} /></a>
        <a href="https://www.instagram.com" target="_blank"><FaInstagram className="text-white" size={40} /></a>
        <a href="https://www.amazon.com" target="_blank"><FaAmazon className="text-white" size={40} /></a>
      </div>
      <div className="bg-white w-40 h-40 lg:absolute md:-z-50 real-2xl 3xl:z-50 -top-5 -left-10 xl:flex hidden rounded-full shadow-gray-700 shadow-2xl">

      </div>
      <div className="bg-white w-40 h-40 lg:absolute -bottom-40 -left-10 xl:flex hidden rounded-full shadow-gray-700 shadow-2xl">

      </div>
      <HomeIn />
      <AbtProduct/>
      <AbtUs/>
      <ContactUs/>
    </div>
  );
}
