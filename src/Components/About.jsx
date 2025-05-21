import React from "react";
import pic from "../../public/bg-20.png";
import Footer from "./Footer";


const About = () => {
return (
    <>
<div
className="max-w-screen-2xl mx-auto px-4 md:px-25 text-white flex-col overflow-hidden"
style={{
backgroundImage: "url('/bg-25.jpg')",
backgroundSize: "cover",
backgroundPosition: "top",
}}
>
<div className="md:w- h-full flex-col py-35 text-justify">
<h1 className="text-4xl font-semibold mb-10 text-indigo-300 tracking-widest">
SKILLS & STORY :{" "}
</h1>
<p className="text-md text-justify">
{" "}
Hello, I'm Usama Khan, a passionate Web developer with a keen eye for
MERN Stack . With a background in IT, I strive to create impactful and
visually stunning Software solutions that leave a lasting impression.
</p>
    <div
            className="md:w-full md:ml-15 md:mt-0 order-1"
            style={{
            backgroundImage: "url('/bg-16 png.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "600px",

            }}
        >
        </div>
<h1 className="text-2xl font-semibold text-indigo-300 ">
{" "}
Education & Training
</h1>
<p className="text-justify text-md my-5">
[ B.com/Graduation ] [ Karachi University ] [ 2013 ] <br />
[ Web & Mobile App Development ] [ Smit/Aptech ] [ 2024 ] <br />[
Relevant Course ] [ Graphic Designing , Web App & Mobile App
Development]
</p>
<h1 className="text-2xl font-semibold text-indigo-300 mt-10">
Skills & Expertise
</h1>
<p className="text-justify text-md my-5">
Proficient in [JavaScript] Experienced with [ HTML , CSS , JavaScript ,
React js , Next Js , Angular js,Tailwind Css, Node Js, Express , Moongo
DB , Adobe Photoshop , Adobe Illustrator , C R M , Avaya , etc ] Strong
grasp of [ Design Principles/Concepts] Excellent problem solving skills
Effective communicator and collaborator.
</p>
<h1 className="text-2xl font-semibold text-indigo-300 mt-10">
Professional Experience
</h1>
<p className="text-justify text-md my-5">
[ MOBILINK GSM ] <br />
[ Customer Care Representative ] [ 2013 Till 2017 ] <br />
Responsibilities : Understand customer concerns and provide accurate
solutions. Troubleshoot and resolve customer problems efficiently.{" "}
<br />
[ SILK BANK ] <br />
[ Complaint Management Unit ] [2017 till 2024] <br />
Responsibilities : Address and resolve customer grievances with patience
and empathy.
<br />
[ SERVICE NOW ] <br />
[ Freelance Developer ] [2024 till May 2025] <br /> Responsibilities:
Served as a freelance web developer, contributing to dynamic and
user-focused projects using AngularJS, HTML, and CSS.I developed responsive interfaces and efficient front-end
architectures. My work combined visual appeal with functional design,
delivering seamless user experiences and scalable solutions. Passionate
about building impactful digital products that align with modern web
.
</p>
<h1 className="text-2xl font-semibold text-indigo-300 mt-10">
Achievements & Awards
</h1>
<p className="text-justify text-md my-5">
Mobilink GSM : <br />
Achieved the Best Upselling Award for consistently exceeding sales targets and demonstrating exceptional customer engagement skills.
<br />
Silkbank :<br />
Awarded for Best KPIs Achievement and Best Customer Service Experience, recognizing outstanding performance, service quality, and client satisfaction.
<br />
Service Now : <br />
Received appreciation for early and accurate task completion, consistently being the first to deliver assigned projects with precision and efficienc
</p>
<h1 className="text-2xl font-semibold text-indigo-300 ">
{" "}
Mission Statement
</h1>
<p className="text-justify text-md my-10 ">
My mission is to leverage my skills and creativity to deliver innovative{" "}
<span className="text-purple-300 font-extrabold">
    [web & Mobile Application Development , Programming , IT , AI]
</span>{" "}
solutions that exceed client expectations and contribute positively to
the digital landscape. I am committed to continuous learning and growth,
always seeking new challenges and opportunities to expand my horizons.
</p>
</div>
<Footer/>
    </div>
</>
);
};

export default About;
