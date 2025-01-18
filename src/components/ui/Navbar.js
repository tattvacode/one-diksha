import React, { useState } from "react";
import logo from "../assets/image/onediksha.png"; // Replace with your logo file path
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ fullName: "", email: "", phone: "", course: "" });
    setIsModalOpen(false);
    alert("Enrollment Successful!");
  };


  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
       {isModalOpen && 
            (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  >
                    &times;
                  </button>
      
                  <h2 className="mb-4 text-2xl font-bold text-center text-gray-700">
                    Enrollment Form
                  </h2>
      
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
      
                    <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
                      Email ID
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
      
                    <label htmlFor="phone" className="block mt-4 text-sm font-medium text-gray-600">
                      Phone No.
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    />
      
                    <label htmlFor="course" className="block mt-4 text-sm font-medium text-gray-600">
                      Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    >
                      <option value="" disabled>
                        Select a course
                      </option>
                      <option value="webDevelopment">Web Development</option>
                      <option value="aiMl">AI & ML</option>
                      <option value="dataScience">Data Science</option>
                    </select>
      
                    <button
                      type="submit"
                      className="w-full px-4 py-2 mt-6 text-white bg-green-500 rounded-lg hover:bg-green-600"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            
      )}
      <div className="container mx-auto px-6 py-3 flex justify-between items-center w-full">
        {/* Left Section */}
        <div className="flex items-center gap-5">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-gray-800">
            <img
              src={logo}
              alt="Logo"
              className="h-[50px]" // Adjust height as needed
            />
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium underline decoration-4 decoration-red-500 underline-offset-4"
                  : "text-gray-600 hover:text-blue-500 font-medium"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium underline decoration-4 decoration-red-500 underline-offset-4"
                  : "text-gray-600 hover:text-blue-500 font-medium"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium underline decoration-4 decoration-red-500 underline-offset-4"
                  : "text-gray-600 hover:text-blue-500 font-medium"
              }
            >
              Courses
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium underline decoration-4 decoration-red-500 underline-offset-4"
                  : "text-gray-600 hover:text-blue-500 font-medium"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Request a Callback Button */}
          <button onClick={() => setIsModalOpen(true)} className="hidden lg:inline-block bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-red-500 transition">
            Request a Callback
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center text-gray-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium underline decoration-4"
                  : "text-gray-600 hover:text-blue-500 font-medium"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium underline"
                  : "text-gray-600 hover:text-blue-500 font-medium"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium underline"
                  : "text-gray-600 hover:text-blue-500 font-medium"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-medium underline"
                  : "text-gray-600 hover:text-blue-500 font-medium"
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded shadow active:bg-red-500 transition">
              Request a Callback
            </button>

          </div>
        </div>

      )}
    </nav>
  );
}

export default Navbar;