import React from "react";

const companies = [
  {
    name: "Reform",
    logo: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-white.svg",
  },
  {
    name: "Tuple",
    logo: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg",
  },
  {
    name: "Laravel",
    logo: "https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg",
  },
];

function TopCompanies() {
  return (
    <main className="relative w-full mx-auto min-h-[600px] border-t border-gray-500 bg-blue-500 overflow-hidden flex flex-col items-center">
      {/* Heading */}
      <div className="text-center max-w-xl mx-auto mt-12 px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-200">
          We have Clients from All Over the World
        </h1>
        <p className="text-gray-300 text-lg">
          Partnering with top companies to deliver cutting-edge solutions.
        </p>
      </div>

      {/* Logo Section */}
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-center space-x-8 flex-wrap">
          {companies.map((company, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={company.logo}
                alt={company.name}
                className="h-16 mx-auto md:h-20 lg:h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default TopCompanies;