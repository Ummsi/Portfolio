import React from 'react'
import java from "../../public/java.png"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"
import python from "../../public/python.webp"
import nodejs from "../../public/node.png"
import mongodb from "../../public/mongodb.jpg"
import javascript from "../../public/javascript.png"
import oracle from "../../public/oracle.png"
import Todo from "../../public/Todo.png"
import reactthreedrei  from "../../public/React-Three-Drei.png"
import weatherapp  from "../../public/WeatherApp.png"
import docs  from "../../public/docs.png"
import lettercount  from "../../public/LetterCount.png"
import ochi  from "../../public/ochi.png"
import youtube  from "../../public/youTube.png"
import Food  from "../../src/assets/food.PNG"

import Footer from './Footer'
const Portfolio = () => {
    const cardItem = [
        {
            id: 1,
            logo: Todo,
            name: "Todo App",
            projectLink: "https://todo-ummsi.vercel.app/",
            text: "A simple task manager app using React and local storage.an interactive experience"
        },
        {
            id: 2,
            logo: weatherapp,
            name: "Weather App",
            projectLink: "https://weather-3d7qxf3p1-ummsi-khans-projects.vercel.app/",
            text: "Real-time weather app using OpenWeatherMap API and React.an interactive experience"
        },
        {
            id: 3,
            logo: reactthreedrei ,
            name: "React-Three-Drie",
            projectLink: "https://react-three-drei.vercel.app/",
            text: "3D visualization with React Three Fiber and Drei helpers. an interactive experience"
        },
        {
            id: 4,
            logo: docs,
            name: "Docs",
            projectLink: "https://docs-olive-seven.vercel.app/",
            text: "React project.It draggable cards that can be freely moved around an interactive experience",
        },
        {
            id: 5,
            logo: lettercount,
            name: "Letter Count",
            projectLink:"https://letter-count-phi.vercel.app/",
            text: "Counts letters, words, and characters from user input. an interactive experience"
        },
        {
            id: 6,
            logo: ochi,
            name: "Ochi",
            projectLink: "https://ochi-website-one.vercel.app/",
            text: "A modern UI/UX landing page inspired by Ochi design is under development and not yet complete."
        },
        {
            id: 7,
            logo: youtube,
            name: "Youtube",
            projectLink:"https://you-tube-clone-kappa-seven.vercel.app/",
            text: "A YouTube UI clone built with React.This is currently under development and not yet complete."
        },
        {
            id: 8,
            logo: Food,
            name: "Food",
            projectLink: "https://food-online-lime.vercel.app/",
            text: "Responsive food delivery website using HTML, CSS, JavaScript.an interactive experience"
        },
    ];
    return (
        <>
        <div name="Portfolio" className='max-w-screen-2xl py-25 container mx-auto md:px-20 '
        style={{ backgroundImage: "url('/bg-25.jpg')",backgroundSize:"cover", backgroundPosition: "center",}}>
            <div className='mb-30 '>
                <h1 className='text-3xl font-bold px-5 text-indigo-400'> <span className='text-6xl'>P</span> r o j e c t s</h1>
                <span className='text-lg font-semi-bold px-5 text-white'>Featured Projects</span>
                <div  className='grid grid-cols-1 md:grid-cols-4 gap-10 my-20'>
                    {cardItem.map(({id, logo, name, projectLink, text, }) => (
                        <div className='md:w-[280px] h-[300px] border-indigo-400 border-[1px] rounded-lg shadow-lg p-1 cursor-pointe hover:scale-110 duration-300 py-2 px-2' key={id}>
                            <img src={logo} className='w-[100px] h-[100px] p-1 rounded-full border-indigo-200 border-[1px]' alt="" />
                            <div>
                                <div className='px-2 font-bold text-xl mb-8 mt-4 text-indigo-300'>{name}</div>
                                <p className='px-1 text-white text-sm'>{text}</p>
                            </div>
                            <div className='px-2 py-2 space-x-3 justify-around'>
                                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                                <button className='bg-indigo-400 hover:bg-indigo-600 text-white font-extralight px-4 py-2 rounded text-sm'>Project</button></a>
                                {/* <button className='bg-purple-400 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded text-sm'>Source Code</button> */}
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    </>
    )
}
<hr/>

export default Portfolio

