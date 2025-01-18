import React from 'react';

const JobDetails = () => {
  const jobs = [
    {
      id: 1,
      title: "Business Development Executive",
      company: "Sonam Geda",
      location: "Indore, Khandwa, Dhar, Barwani",
      experience: "0-1 years",
      salary: "₹2,00,000 - 2,00,001",
      type: "Fresher Job",
      posted: "2 days ago",
      activelyHiring: true,
    },
    {
      id: 2,
      title: "Field Sales Executive",
      company: "VedaRx Healthcare Pvt. Ltd.",
      location: "Hyderabad (Hybrid)",
      experience: "0-2 years",
      salary: "₹2,00,000 - 2,00,100",
      type: "Fresher Job",
      posted: "1 week ago",
      activelyHiring: true,
    },
    {
      id: 3,
      title: "Customer Acquisition Manager",
      company: "MiTran Global",
      location: "Pune (Hybrid)",
      experience: "0-4 years",
      salary: "₹2,00,000 - 4,00,000",
      type: "Fresher Job",
      posted: "3 weeks ago",
      activelyHiring: false,
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "Tech Innovators",
      location: "Bangalore",
      experience: "1-3 years",
      salary: "₹6,00,000 - 8,00,000",
      type: "Full-time",
      posted: "4 days ago",
      activelyHiring: true,
    },
    {
      id: 5,
      title: "Digital Marketing Specialist",
      company: "Growth Gurus",
      location: "Mumbai",
      experience: "0-2 years",
      salary: "₹3,00,000 - 5,00,000",
      type: "Full-time",
      posted: "2 weeks ago",
      activelyHiring: true,
    },
    {
      id: 6,
      title: "Graphic Designer",
      company: "Creative Minds",
      location: "Chennai",
      experience: "0-1 years",
      salary: "₹2,50,000 - 3,50,000",
      type: "Full-time",
      posted: "1 month ago",
      activelyHiring: false,
    },
    {
      id: 7,
      title: "Data Analyst",
      company: "Analytics Edge",
      location: "Gurgaon",
      experience: "1-2 years",
      salary: "₹5,00,000 - 7,00,000",
      type: "Full-time",
      posted: "3 days ago",
      activelyHiring: true,
    },
    {
      id: 8,
      title: "HR Manager",
      company: "People Connect",
      location: "Delhi",
      experience: "3-5 years",
      salary: "₹8,00,000 - 10,00,000",
      type: "Full-time",
      posted: "5 days ago",
      activelyHiring: false,
    },
    {
      id: 9,
      title: "Content Writer",
      company: "WriteWise",
      location: "Remote",
      experience: "0-1 years",
      salary: "₹2,00,000 - 4,00,000",
      type: "Part-time",
      posted: "1 week ago",
      activelyHiring: true,
    },
    {
      id: 10,
      title: "UI/UX Designer",
      company: "DesignPros",
      location: "Bangalore",
      experience: "2-4 years",
      salary: "₹7,00,000 - 9,00,000",
      type: "Full-time",
      posted: "2 weeks ago",
      activelyHiring: false,
    },
    {
      id: 11,
      title: "Operations Manager",
      company: "LogiCorp",
      location: "Hyderabad",
      experience: "5+ years",
      salary: "₹12,00,000 - 15,00,000",
      type: "Full-time",
      posted: "3 days ago",
      activelyHiring: true,
    },
    {
      id: 12,
      title: "Technical Support Specialist",
      company: "SupportNow",
      location: "Kolkata",
      experience: "0-2 years",
      salary: "₹2,50,000 - 4,00,000",
      type: "Full-time",
      posted: "1 week ago",
      activelyHiring: true,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Filters */}
      <aside className="w-1/4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Profile</label>
          <input
            type="text"
            placeholder="e.g. Marketing"
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            placeholder="e.g. Delhi"
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Annual salary (in lakhs)</label>
          <input
            type="range"
            min="0"
            max="10"
            className="w-full mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Years of experience</label>
          <select className="w-full border border-gray-300 rounded-md p-2 mt-1">
            <option value="">Select years of experience</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5+">5+ years</option>
          </select>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
          Clear All
        </button>
      </aside>

      {/* Job Listings */}
      <main className="w-3/4 p-6">
        <h2 className="text-xl font-bold mb-6">Available Jobs</h2>
        <div>
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-500">{job.company}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    📍 {job.location} • 💼 {job.experience} • 💰 {job.salary}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {job.type} • {job.posted}
                  </p>
                </div>
                {job.activelyHiring && (
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">
                    Actively Hiring
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JobDetails;
