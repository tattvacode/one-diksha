import React, { useState } from "react";
import { jobsData } from "../../jobdata/jobsData";

function JobSection() {
  const [tag, setTag] = useState("Job");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 4; // Number of jobs to display per page

  // Filter jobs based on the selected tag
  const filteredJobs = tag === "All" ? jobsData : jobsData.filter((job) => job.type === tag);

  // Get the total number of pages
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Get the jobs to display for the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  function buttonClass(buttonTag) {
    return `px-4 py-2 rounded-full text-sm mx-2 ${tag === buttonTag ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`;
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Latest jobs </h2>

        <div className="flex flex-wrap justify-center mt-4">
          <button onClick={() => setTag("All")} className={buttonClass("All")}>
            All
          </button>
          <button onClick={() => setTag("Job")} className={buttonClass("Job")}>
            Job
          </button>
          <button onClick={() => setTag("Internship")} className={buttonClass("Internship")}>
            Internship
          </button>
          <button onClick={() => setTag("Part-Time")} className={buttonClass("Part-Time")}>
            Part-time
          </button>
          <button onClick={() => setTag("Freelancing")} className={buttonClass("Freelancing")}>
            Freelancing
          </button>
          <button onClick={() => setTag("Work From Home")} className={buttonClass("Work From Home")}>
            Work From Home
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {currentJobs.map((job, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
              {job.activelyHiring && (
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full inline-block mb-2">
                  Actively hiring
                </span>
              )}
              <div className="flex items-center">
                <img src={job.logo} alt={job.company} className="w-10 h-10 rounded-full object-cover mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">{job.company}</p>
              <p className="text-sm text-gray-600 flex items-center mt-1">
                📍 {job.location}
              </p>
              <p className="text-sm text-gray-600 flex items-center mt-1">
                💰 {job.salary}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">Job</span>
                <a href={job.link} className="text-blue-500 text-sm font-medium hover:underline">
                  View details &gt;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center items-center mt-6">
          <button onClick={handlePrevPage} className="px-3 py-1 bg-gray-200 text-gray-600 rounded-l-md" disabled={currentPage === 1}>
            ❮
          </button>
          <span className="px-4 py-2 bg-blue-500 text-white">{currentPage}</span>
          <button onClick={handleNextPage} className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r-md" disabled={currentPage === totalPages}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobSection;
