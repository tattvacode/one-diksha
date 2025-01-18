import React from "react";
import certificate from "../assets/image/certificate.jpeg";

const CertificationSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">
            Get <span className="underline decoration-purple-500">Certified</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Yes, you’ll get a certificate representing your Industry Readiness once you submit
            your projects and clear the pre-placement test.
          </p>
          <div className="mt-8 space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <img
                src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/certificate-icon.png?auto=format,compress&q=80"
                alt="icon"
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Industry-Ready Certification [IRC]
                </h3>
                <p className="text-gray-600">
                  Unlike any academic certificate, for the first time in India, IRC certifies your
                  job readiness.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <img
                src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/shareable.png?auto=format,compress&q=80"
                alt="icon"
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Shareable, Credible, and Official
                </h3>
                <p className="text-gray-600">
                  Add it to your LinkedIn, share it on Twitter & WhatsApp, or via Email. Make your
                  profile stand out everywhere.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/440/513/original/business-insights-intelligence-information-for-competitive-advantage-and-win-competition-discover-business-solution-concept-business-people-team-looking-at-lightbulb-floating-from-magnifying-glass-vector.jpg"
                alt="icon"
                className="w-10 h-10"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Let companies compete for you
                </h3>
                <p className="text-gray-600">
                  IRC certifies your industry-readiness and gets you placed with higher salaries.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8">
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
              <p className="text-gray-600">Next batch starts on Jan 13th</p>
            </div>
            <a
              href="https://forms.gle/LM4RTGzSDEtRJoYQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 bg-purple-600 text-white text-lg font-medium rounded-lg hover:bg-red-700 transition inline-block"
            >
              Book a Free Demo
            </a>
          </div>
        </div>

        {/* Right Section: Certificate Image */}
        <div className="md:w-1/2 flex justify-center min-w-[250px] p-0 sm:p-10">
          <img
            src={certificate}
            alt="Certificate Preview"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificationSection;

