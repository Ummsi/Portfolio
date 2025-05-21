import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Footer from "./Footer";

const Contact = () => {
const {
register,
handleSubmit,
watch,
formState: { errors },
} = useForm();
const onSubmit = async (data) => {
const userInfo = {
    name: data.name,
    email: data.email,
    message: data.message,
};
try {
    await axios.post("https://getform.io/f/anlqjjza", userInfo);
    toast.success("Your message has been sent");
} catch (error) {
    console.log(error);
    toast.error("Something Went Wrong");
}
};
return (
<>
    <div
    name="Contact"
    className="max-w-screen-2xl container mx-auto px-4 md:px-30 "
    style={{
        backgroundImage: "url('/bg-25.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }}
    >
    <div className="w-full h-auto py-25 ">
        <h1 className="text-3xl font-bold my-2 text-indigo-400">
        <span className="text-6xl text-indigo-400">C</span> o n t a c t M e{" "}
        </h1>
        <span className="text-white px-2">
        Please fill out the form below to contact me
        </span>
        <div className="flex flex-col items-center justify-center mt-20">
        <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/anlqjjza"
            // method="POST"
            className="bg-indigo-300 border-3 border-indigo-400 w-90 px-8 py-5 rounded-4xl">
            <h1 className="text-xl font-semibold mb-4 text-indigo-950">
            Send your Message
            </h1>
            <div className="flex flex-col mb-5 ">
            <label className="block text-indigo-950 text-sm font-semi-bold mb-2">
                Full Name
            </label>
            <input
                {...register("name", { required: true })}
                className="shadow appearance-none rounded-lg w-full py-2 px-2 text-black leading-tight bg-white"
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Full  Name"
            />
            {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
            <label className="block text-indigo-950 text-sm font-semi-bold mb-2">
                Email Address
            </label>
            <input
                {...register("email", { required: true })}
                className="shadow appearance-none rounded-lg w-full py-2 px-3 text-black leading-tight bg-white"
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email Address"
            />
            {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
            <label className="block text-indigo-950 text-sm font-semi-bold mb-4">
                Message
            </label>
            <textarea
                {...register("message", { required: true })}
                className="shadow appearance-none rounded-lg w-full py-2 px-3 text-black leading-tight bg-white"
                type="text"
                id="message"
                name="message"
                placeholder="Enter your Query"
            />
            {errors.message && <span>This field is required</span>}
            </div>
            <button
            type="submit"
            className="bg-indigo-500 text-white rounded-xl px-3 py-2 hover:bg-indigo-700 duration-300"
            >
            Send
            </button>
        </form>
        </div>
    </div>
    <Footer />
    </div>
</>
);
};

export default Contact;
