import { FaInstagram, FaAmazon, FaFacebook } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="bg-primary md:flex lg:hidden flex-col pt-5 space-y-5 pb-5 rounded-t-[2rem]">
            <p className="text-2xl ml-10 text-white font-bold">VISIT US</p>

            <div className="flex flex-row items-center justify-center space-x-10">
                <a href="https://www.facebook.com/" target="_blank">
                    <div className="flex flex-col text-primary bg-white bg-opacity-[0.9] items-center p-2 rounded-2xl">
                        <FaFacebook className="text-[3rem] opacity-100" />
                        <p className="">Facebook</p>
                    </div>
                </a>

                <a href="https://www.instagram.com/" target="_blank">
                    <div className="flex flex-col text-primary bg-white bg-opacity-[0.9] items-center p-2 rounded-xl">
                        <FaInstagram className="text-[3rem]" />
                        <p>Instagram</p>
                    </div>
                </a>

                <a href="https://www.amazon.com/" target="_blank">
                    <div className="flex flex-col text-primary bg-white bg-opacity-[0.9] items-center p-2 rounded-xl px-3">
                        <FaAmazon className="text-[3rem]" />
                        <p>Amazon</p>
                    </div>
                </a>

            </div>
        </div>
    );
}

export default ContactUs;