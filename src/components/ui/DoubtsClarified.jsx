import React, { useState } from "react";
import ContactForm from "./ContactForm";

const DoubtsClarified = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pop, setPop] = useState(true);
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
    <div className="bg-gray-50 py-12 px-6 md:px-16 lg:px-32">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Get Your <span className="text-blue-600">Doubts Clarified</span>
        </h1>
        <p className="text-lg text-gray-600">Faster than in Offline Classes</p>
        <p className="text-sm text-gray-500 mt-2">
          Our highly motivated team of experts are ready to help you with your doubts from{" "}
          <span className="font-semibold text-gray-700">9AM - 9PM Everyday</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* First Section */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full">
          <img
            src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-book-a-free-demo-illustration.png"
            alt="Mentors"
            className="w-64 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">
            1500+ Mentors to Resolve Your Doubts
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Including Subject Matter Experts, IITians, Teaching Assistants, etc.
          </p>
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Enroll Now
            </button>
          </div>
        </div>

        {/* Second Section */}
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.eNyGe9kPydRguzyL2jGHMAHaFU&pid=Api&P=0&h=220"
            alt="Doubts Resolved"
            className="w-64 mb-4"
          />
          <h2 className="text-xl font-bold text-orange-400">1000+ Doubts</h2>
          <p className="text-lg text-center font-semibold">
            are resolved within <span className="text-yellow-400">15 minutes Everyday!</span>
          </p>
        </div>
      </div>

      {/* Modal */}
      <div className="relative">
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
      </div>
    </div>
  );
};

export default DoubtsClarified;
