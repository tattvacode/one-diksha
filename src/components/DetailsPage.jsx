import React, { useState } from "react";
import { courses } from "./assets/data/courseData";
import { Link } from "react-router-dom";
import WhatsAppButton from './ui/Whatsapp';

function DetailsPage({ indexId }) {
  const [course] = useState(courses[indexId - 1]);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);

    // Trigger brochure download
    const link = document.createElement("a");
    link.href = course.brochure;
    link.download = `${course.title}_brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert("Details submitted successfully. Your brochure is downloading!");
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Course Header */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl p-4 font-bold text-gray-800">{course.title}</h1>
            <hr />
            <p className="text-gray-600 p-4 mt-2">{course.description}</p>
            <p className="text-gray-600 p-4 mt-2">{course.subdescription}</p>
            <div className="flex items-center p-4 mt-4">
              <p className="text-sm text-gray-500">
                Duration: <span className="font-medium text-gray-700">{course.duration}</span>
              </p>
              <p className="text-sm text-gray-500 mx-4">
                Rating:{" "}
                <span className="text-yellow-500 font-medium">
                  ★ {course.rating}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Level: <span className="font-medium text-gray-700">{course.level}</span>
              </p>
            </div>
            <div className="flex items-center mt-4 p-4">
              <p className="text-sm text-gray-500">
                Learners: <span className="font-medium text-gray-700">{course.learners}</span>
              </p>
              <p className="text-sm text-gray-500 mx-4">
                Certificate:{" "}
                <span className="font-medium text-green-600">
                  {course.certificate ? "Yes" : "No"}
                </span>
              </p>
              <p className="text-sm text-gray-500">
                Price: <span className="font-medium text-gray-700">{course.price}</span>
              </p>
            </div>
            <a
              href="https://forms.gle/LM4RTGzSDEtRJoYQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 ml-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 "
            >
              Enroll now
            </a>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 ml-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 "
            >
              Download Brochure
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white shadow-md rounded-lg mt-8 p-6">
          <h2 className="text-xl font-bold text-gray-800">Student Reviews</h2>
          <div className="mt-4">
            {course.reviews.map((review, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:mb-0 last:pb-0"
              >
                <p className="text-gray-700 font-medium">{review.name}</p>
                <p className="text-sm text-yellow-500">Rating: {"★".repeat(review.rating)}</p>
                <p className="text-gray-600 mt-1">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Enter Your Details
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <WhatsAppButton />
    </div>
  );
}

export default DetailsPage;
