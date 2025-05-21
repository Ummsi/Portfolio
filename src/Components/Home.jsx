import React from "react";
import pic from "../../public/bg-20.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import Footer from "./Footer";

import { ReactTyped, Typed } from "react-typed";

const Home = () => {
return (
<>
    <div
    name="Home"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-white "
    style={{
        backgroundImage: "url('/bg-25.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }}
    >
    <div className="flex flex-col md:flex-row px-8 ">
        <div className="md:w-1/2 py-15 md:mt-35 space-y-5 order-2 md:order-1">
        <span className="text-xl">Welcome In My Feed</span>
        <div className="flex space-x-2 mt-10 text-2xl md:text-4xl mb-5">
            <h1>Hello, I'm a </h1>
            {/* <span className='text-red-700 font-bold '> Developer</span> */}
            <ReactTyped
            className="text-indigo-400 font-bold"
            // typedRef={setTyped}
            strings={[
                "Developer...",
                "Programmer...",
                "Coder...",
                "Usama Khan...",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
            />
        </div>
        <p className="text-sm md:text-md text-justify">
            I fell in love with programming, and I believe I've learned quite
            a bit along the way. 🤷‍♂️ I am fluent in classics like JavaScript,
            React.js, and React Native. My interests lie in building new web
            technologies and products, as well as exploring deep learning and
            natural language processing. Whenever possible, I apply my passion
            for developing products using modern JavaScript libraries and
            frameworks like React.js, constantly exploring new versions and
            improvements.
        </p>
        <br />
        {/* Social Media Icon */}
        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className=" space-y-2">
            <h1 className="font-bold text-center">Available On</h1>
            <ul className="flex space-x-2">
                <li>
                <a href="https://www.facebook.com/" target="_blank">
                    <FaFacebookSquare className=" text-2xl cursor-pointer" />
                </a>
                </li>

                <li>
                <a href="https://pk.linkedin.com/" target="_blank">
                    <FaLinkedin className=" text-2xl cursor-pointer" />
                </a>
                </li>
                <li>
                <a href="https://www.youtube.com/" target="_blank">
                    <FaYoutube className=" text-2xl cursor-pointer" />
                </a>
                </li>
                <li>
                <a href="https://web.telegram.org/" target="_blank">
                    <FaTelegram className=" text-2xl cursor-pointer" />
                </a>
                </li>
                <li>
                <a href="https://www.instagram.com/" target="_blank">
                    <FaSquareInstagram className=" text-2xl cursor-pointer" />
                </a>
                </li>
            </ul>
            </div>
            <div className="space-y-2">
            <h1 className="font-bold text-center">Working On</h1>
            <div className="flex space-x-2">
                <SiMongodb className="text-xl md:text-2xl hover:scale-110 duration-200 rounded-ful ]" />
                <SiExpress className="text-xl md:text-2xl hover:scale-110 duration-200 rounded-ful ]" />
                <IoLogoReact className="text-xl md:text-2xl hover:scale-110 duration-200 rounded-ful ]" />
                <FaNodeJs className="text-xl md:text-2xl hover:scale-110 duration-200 rounded-ful ]" />
                <SiNextdotjs className="text-xl md:text-2xl hover:scale-110 duration-200 rounded-ful ]" />
            </div>
            </div>
        </div>
        </div>
        <div className="lg: w-full md:w-1/2 md:ml-20 md:mt-30 mt-15 order-1 mb-5">
        <img src={pic} className=" md:w-[600px] h-[500px]" alt="" />
        </div>
    </div>
    <hr  className="text-indigo-400"/>
    <div>
        <div className="flex flex-col md:flex-row px-8">
        <div className=" md:w-1/2 md:mt-20 space-y-5 order-2 md:order-1 py-15">
            <div className="flex space-x-2 text-2xl md:text-4xl mb-5 py-10">
            <h1>Let’s Get <span className="text-indigo-400"> Acquainted </span>{" "}
            </h1>
            {/* <span className='text-red-700 font-bold '> Developer</span> */}
            {/* <ReactTyped
                        className='text-indigo-400 font-bold'
                        // typedRef={setTyped}
                        strings={["Developer...", "Programmer...", "Coder...","Usama Khan..."]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    /> */}
            </div>
            <p className="text-sm md:text-md text-justify ">
            My journey into programming began with a spark of curiosity —
            and quickly turned into a full-blown passion. Over time, I’ve
            become fluent in core technologies like JavaScript, React.js,
            and React Native, allowing me to build responsive and
            user-centric web applications. I’m deeply interested in
            developing modern web solutions and enjoy exploring fields like
            deep learning and natural language processing. I constantly
            strive to stay updated with the latest trends and improvements
            in the JavaScript and React ecosystem. Whether it’s
            experimenting with new frameworks or optimizing performance, I
            love bringing ideas to life through clean, efficient code.
            </p>
        </div>
        <div
            className="lg: w-full md:w-1/2 md:ml-10 md:mt-20 mt-5 order-1 overflow-hidden"
            style={{
            backgroundImage: "url('/bg-26.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            }}
        >
        </div>
        </div>
    </div>
    <Footer/>
    </div>
</>
);
};

export default Home;
