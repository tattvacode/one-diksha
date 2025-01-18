import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { courses } from "../assets/data/courseData";

function CoursesSection({ setIndexId }) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const scrollRef = useRef(null); // Reference for the scrollable container
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setAnimationDirection("next");
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setAnimationDirection("");
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setAnimationDirection("prev");
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setAnimationDirection("");
      }, 300);
    }
  };

  // Mouse events for drag-to-scroll
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX); // Amount of scroll movement
    scrollRef.current.scrollLeft = scrollLeft - walk; // Update scroll position
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const currentItems = courses.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Popular Certification Courses</h2>
        <p className="text-gray-600 mt-2">Fastest way to build your CV</p>

        {/* Scrollable Course Grid */}
        <div
          ref={scrollRef}
          className="overflow-hidden relative mt-8 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
        >
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-300 ${
              animationDirection === "next"
                ? "-translate-x-full"
                : animationDirection === "prev"
                ? "translate-x-full"
                : "translate-x-0"
            }`}
          >
            {currentItems.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
              >
                <Link to="details" onClick={() => setIndexId(course.id)}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">{course.duration}</p>
                    <h3 className="text-lg font-bold text-gray-800 mt-1">{course.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center mt-2">
                      <span className="text-yellow-500 mr-2">★</span> {course.rating} |{" "}
                      {course.learners}
                    </p>
                    <button className="text-blue-500 text-sm font-medium hover:underline mt-2 inline-block">
                      Know more &gt;
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`flex items-center justify-center px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-transform duration-300 ${
              currentPage === 0 ? "cursor-not-allowed opacity-50" : "hover:-translate-x-2"
            }`}
          >
            <FaArrowLeft className="text-gray-600" />
          </button>
          <span className="text-gray-800 font-semibold">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className={`flex items-center justify-center px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-transform duration-300 ${
              currentPage === totalPages - 1
                ? "cursor-not-allowed opacity-50"
                : "hover:translate-x-2"
            }`}
          >
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoursesSection;
