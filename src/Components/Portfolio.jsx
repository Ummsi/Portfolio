import React from 'react'
import java from "../../public/java.png"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"
import python from "../../public/python.webp"
import nodejs from "../../public/node.png"
import mongodb from "../../public/mongodb.jpg"
import javascript from "../../public/javascript.png"
import oracle from "../../public/oracle.png"

const Portfolio = () => {
    const cardItem = [
        {
            id: 1,
            logo: mongodb,
            name: "MongoDB",
        },
        {
            id: 2,
            logo: express,
            name: "Express",
        },
        {
            id: 3,
            logo: reactjs,
            name: "ReactJs",
        },
        {
            id: 4,
            logo: nodejs,
            name: "NodeJs",
        },
        {
            id: 5,
            logo: python,
            name: "Python",
        },
        {
            id: 6,
            logo: java,
            name: "Java",
        },
        {
            id: 7,
            logo: oracle,
            name: "Oracle",
        },
        {
            id: 8,
            logo: javascript,
            name: "JavaScript",
        },
    ];
    return (
        <>
        <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
            <div className='mb-30'>
                <h1 className='text-3xl font-bold mb-5 '> <span className='text-6xl'>P</span>o r t f o l i o</h1>
                <span className='text-lg font-semibold text-gray-500 '>Featured Projects</span>
                <div  className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                    {cardItem.map(({id, logo, name}) => (
                        <div className='md:w-[280px] h-[280px] border-indigo-200 border-[1px] rounded-lg shadow-lg p-1 cursor-pointe hover:scale-110 duration-300 py-2 px-2' key={id}>
                            <img src={logo} className='w-[100px] h-[100px] p-1 rounded-full border-indigo-200 border-[1px]' alt="" />
                            <div>
                                <div className='px-2 font-bold text-xl mb-3 mt-3 text-gray-800'>{name}</div>
                                <p className='px-2 text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className='px-2 py-4 space-x-3 justify-around'>
                                <button className='bg-indigo-400 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded text-sm'>Video</button>
                                <button className='bg-purple-400 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded text-sm'>Source Code</button>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    </>
    )
}
<hr/>

export default Portfolio

