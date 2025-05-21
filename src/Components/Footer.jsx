import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";



const Footer = () => {
    return (
        <>
            <footer className='py-20' >
            <hr className='text-purple-400' />
                <div className="flex flex-col py-2 space-y-4 mt-10 ">
                            <h1 className="font-bold text-3xl leading-6 tracking-wide text-center text-white">Find<span className="text-indigo-400"> Me </span>On</h1>
                            <ul className="flex justify-center space-x-3 ">
                                <li className="transition duration-600 hover:scale-120 hover:shadow-lg hover:shadow-white rounded">
                                <a href="https://www.facebook.com/" target="_blank">
                                    <FaFacebookSquare className=" text-2xl cursor-pointer text-indigo-400"/>
                                </a>
                                </li>
                
                                <li className="transition duration-600 hover:scale-120 hover:shadow-lg hover:shadow-white rounded">
                                <a href="https://pk.linkedin.com/" target="_blank">
                                    <FaLinkedin className=" text-2xl cursor-pointer text-indigo-400 " />
                                </a>
                                </li>
                                <li className="transition duration-600 hover:scale-120 hover:shadow-lg hover:shadow-white rounded">
                                <a href="https://www.youtube.com/" target="_blank">
                                    <FaYoutube className=" text-2xl cursor-pointer text-indigo-400" />
                                </a>
                                </li >
                                <li className="transition duration-600 hover:scale-120 hover:shadow-lg hover:shadow-white rounded">
                                <a href="https://web.telegram.org/" target="_blank">
                                    <FaTelegram className=" text-2xl cursor-pointer text-indigo-400" />
                                </a>
                                </li>
                                <li className="transition duration-600 hover:scale-120 hover:shadow-lg hover:shadow-white rounded">
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FaSquareInstagram className=" text-2xl cursor-pointer text-indigo-400" />
                                </a>
                                </li>
                            </ul>
                            </div>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                    <div className='flex flex-col items-center justify-center'>
                        {/* <div className='flex space-x-4'>
                        <FaFacebookSquare size={24} />
                        <FaLinkedin size={24} />
                        <FaTwitter size={24} />
                        <FaSquareInstagram size={24}/>
                        </div> */}
                        <div className='border-t border-purple-600  pt-3 flex flex-col items-center'>
                            <p className='text-sm text-white'>
                                &copy; 2025 Ummsi..!|.All rights reserved.
                            </p>
                            <p className='text-sm text-white'>Regards by Usama Khan</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
