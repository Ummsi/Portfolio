import React, { useState } from 'react'
import pic from '../../public/logo-3.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const navItems = [
        { id: 1, text: "Home", path: "/home" },
        { id: 2, text: "About", path: "/about" },
        { id: 3, text: "Projects", path: "/projects" },
        { id: 4, text: "Experience", path: "/experience" },
        { id: 5, text: "Contact", path: "/contact" },

    ]
    return (
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-15 shadow-md fixed top-0 left-0 right-0 backdrop-blur-md'>
            <div className='flex justify-between items-center h-15 px-5'>
                <div className='flex space-x-2 justify-center items-center'>
                    <img src={pic} className='h-15 w-15 rounded-full' alt="" />
                    <h1 className='font-bold text-xl cursor-pointer'>
                        <span className='text-indigo-400 text-3xl'>U</span><span className='text-indigo-400'>mmsi</span><span className='text-indigo-400 text-2xl'>... |<span className='text-purple-400'>|</span></span>
                    </h1>
                </div>
                {/* Desktop Navbar */}  
                <div>
                    <ul className='hidden md:flex space-x-10 text-indigo-400 text-md'>
                        {navItems.map(( {id , text} ) => (
                        <li className='hover:scale-125 duration-300 cursor-pointer' key={id}>
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-50}
                            activeClass="active"
                            >{text}</Link>
                        </li>
                        ))}
                    </ul>
                    <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                    {menu?<IoMdClose size={24} color='white' />:<GiHamburgerMenu size={24} color='white'/>}</div>
                </div>
            </div>
            {/* Mobile Navbar  */}
            {menu &&(
            <div className='bg-purple-500 rounded-2xl overflow-hidden'>
                <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl '>
                {navItems.map(( {id , text} ) => (
                        <li className='hover:scale-305 duration-300 font-semibold cursor-pointer ' key={id}>
                            <Link 
                        onClick={()=>setMenu(!menu)} 
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                        >{text}</Link></li>
                        ))}
                        
                </ul>
            </div>
            )}

        </div>
    )
}

export default Navbar
