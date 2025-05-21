import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import reactjs from "../../public/reactjs.png"
import nextjs from "../../public/nextjs.png.png"
import angular from "../../public/angular.png.png"
import tailwind from "../../public/tailwind.png.png"
import github from "../../public/github.png.png"
import Footer from './Footer'


const Experience = () => {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML",
        },
        {
            id: 2,
            logo: css,
            name: "CSS",
        },
        {
            id: 3,
            logo: javascript,
            name: "JavaScript",
        },
        {
            id: 4,
            logo: reactjs,
            name: "ReactJs",
        },
        {
            id: 5,
            logo: nextjs,
            name: "NextjS",
        },
        {
            id: 6,
            logo: angular,
            name: "AngularJs",
        },
        {
            id: 7,
            logo: tailwind,
            name: "Tailwind Css",
        },
        {
            id: 8,
            logo: github,
            name: "GitHub",
        },
    ];
    return (
        <>
        <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-0'
    style={{
        backgroundImage: "url('/bg-25.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
    }}>
            <div className='py-25 px-8'>
                <h1 className='text-3xl font-bold mb-5 text-indigo-400'><span className='text-6xl '>E</span> x p e r i e n c e</h1>
                <p className='text-white'>I've more than 1 year of experience in below Technologies </p>
                <div  className='grid grid-cols-2 md:grid-cols-4 gap-20 my-20'>
                    {cardItem.map(({id, logo, name}) => (
                        <div className='flex flex-col items-center justify-center rounded-full border-indigo-400 border-[2px] md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 py-2 px-2' key={id}>
                            <img src={logo} className='w-[120px] rounded-full border-indigo-400 ' alt="" />
                            <div>
                                <div className=' text-indigo-200 py-2'>{name}</div>
                                {/* <p className='px-2 text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                            </div>
                            {/* <div className='px-2 py-4 space-x-3 justify-around'>
                                <button className='bg-indigo-400 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded text-sm'>Video</button>
                                <button className='bg-purple-400 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded text-sm'>Source Code</button>
                            </div> */}
                        </div>
                    ))
                    }
                </div>
                <Footer/>
            </div>
        </div>
    </>
    )
}

export default Experience

