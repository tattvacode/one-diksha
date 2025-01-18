import React from "react";

const UpgradesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 mycontainer2 px-6">
      <div className="text-center">
        <span className="bg-orange-500 text-white text-xs uppercase px-3 py-1 rounded-full">
          New
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mt-4">
          The All New <span className="text-blue-500">O<span className="text-red-500">ne</span> Diksha</span>  Platform Upgrades to <br />
          <span className="underline decoration-purple-400">
            Supercharge Your Career
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
        <div className="flex items-start space-x-4">
          <img
            src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/live-streaming-3.0-upgrades.png"
            alt="Live Sessions Icon"
            className="w-14 h-14"
          />
          <div>
            <h3 className="text-lg font-bold">Live Sessions (Monday to Friday)</h3>
            <p className="text-gray-600">
              To learn coding best practices, get interview tips, discuss doubts,
              and more from experts.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img
            src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-placements-success-manager-icon.png"
            alt="Success Coach Icon"
            className="w-14 h-14"
          />
          <div>
            <h3 className="text-lg font-bold">Dedicated Success Coach for Every Student</h3>
            <p className="text-gray-600">
              To guide you and ensure a smooth learning journey.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img
            src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/3.0-upgrades-personal-success-coach.png"
            alt="Placement Manager Icon"
            className="w-14 h-14"
          />
          <div>
            <h3 className="text-lg font-bold">Placement Success Manager</h3>
            <p className="text-gray-600">
              To give feedback on your interview performance and boost your confidence.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img
            src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/intensive/3.0-upgrades-offline-drives.png"
            alt="Placement Drives Icon"
            className="w-14 h-14"
          />
          <div>
            <h3 className="text-lg font-bold">Mega Offline Placement Drives</h3>
            <p className="text-gray-600">
              Once in every 3 months.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="text-blue-500 hover:underline font-medium">
          Show all Upgrades
        </button>
      </div>
    </div>
  );
};

export default UpgradesPage;