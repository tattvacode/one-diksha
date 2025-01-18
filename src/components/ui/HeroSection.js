import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

function HeroSection() {
  return (

    <div className="w-full mycontainer flex bg-gray-50 py-12 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">

     
        {/* Left Section */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6">
            Kickstart Your Career with <br />
            Our Job Guaranteed Programs.
            <br />
            <div className="pt-4 md:pt-6">
              Join Today and Become a Certified{" "}
              <span className="text-blue-500">Web Developer Today!</span>
            </div>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We are a rapidly growing Ed-Tech company with 100+ hiring partners.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="/login"
              className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-red-500 transition"
            >
              Register as a Student
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
       
      </div>
    </div>
   
  );
}

export default HeroSection;