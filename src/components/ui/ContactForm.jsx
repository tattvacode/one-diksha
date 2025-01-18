import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    program: "",
    qualification: "",
    state: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Clear mobile number error when the user starts typing
    if (name === "mobile") {
      setMobileError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mobile number validation (10 digits)
    const mobilePattern = /^[0-9]{10}$/;
    if (!formData.mobile || !mobilePattern.test(formData.mobile)) {
      setMobileError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Check if all fields are filled and checkbox is checked
    if (
      !formData.name ||
      !formData.mobile ||
      !formData.program ||
      !formData.qualification ||
      !formData.state ||
      !isChecked
    ) {
      setErrorMessage("Please fill in all fields and agree to the Terms & Conditions.");
      setSuccessMessage("");
      setShowModal(false);
      return;
    }

    // Reset error messages and show success message
    setErrorMessage("");
    setMobileError("");
    setSuccessMessage("Form submitted successfully!");
    setShowModal(true);

    // Reset form data
    setFormData({ name: "", mobile: "", program: "", qualification: "", state: "" });
    setIsChecked(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className={"min-h-screen flex items-center justify-center"}>
      <div className="bg-white shadow-md rounded-lg p-10 relative w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          Book a Live Demo <span className="text-blue-500 underline">For Free!</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          We assure you that we practice a strict "NO-SPAM" policy
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            />
          </div>

          {/* Mobile Number Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Mobile Number (WhatsApp Number)
            </label>
            <div className="flex">
              <select className="border-r px-2 py-2 border border-gray-300 rounded-l-lg focus:outline-none">
                <option value="IN">IN</option>
              </select>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                placeholder="+91 Enter Mobile Number"
                className="flex-grow px-4 py-2 border rounded-r-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>
            {/* Mobile number error message */}
            {mobileError && <p className="text-red-500 text-sm">{mobileError}</p>}
          </div>

          {/* Selected Program */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Selected Program</label>
            <select
              name="program"
              value={formData.program}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            >
              <option disabled>--Select A Program--</option>
              <option value="full-stack">Full Stack Developer Program (Java/Python/JavaScript)</option>
              <option value="frontend">Frontend Developer (ReactJS)</option>
              <option value="backend">Backend Developer (Java/Python)</option>
              <option value="mern">MERN Stack Developer</option>
              <option value="mean">MEAN Stack Developer</option>
              <option value="data-scientist">Data Scientist</option>
              <option value="data-analyst">Data Analyst</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="ai-ml">AI/ML</option>
              <option value="business-analyst">Business Analyst</option>
              <option value="business-development">Business Development Associate</option>
            </select>
          </div>

          {/* Highest Qualification */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Highest Qualification</label>
            <select
              name="qualification"
              value={formData.qualification}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            >
              <option>Select Highest Qualification</option>
              <option>High School</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
            </select>
          </div>

          {/* Native State */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Native State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              placeholder="Enter your State"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={handleChange}
            />
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-500 border-gray-300 rounded"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="text-blue-500 underline">Terms & Conditions</span> and{" "}
              <span className="text-blue-500 underline">Privacy Policy</span>.
            </label>
          </div>

          {/* Error Message */}
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mt-4"
          >
            Book My Demo
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          onClick={handleModalClose}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-green-500">Success!</h2>
            <p className="text-sm text-gray-700 mt-2">Your form has been submitted successfully.</p>
            <button
              onClick={handleModalClose}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

