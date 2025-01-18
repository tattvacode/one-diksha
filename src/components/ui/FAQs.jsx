import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to control the modal visibility

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is this program about?",
      answer:
        "This program is designed to equip you with industry-ready skills and certifications that improve your job prospects.",
    },
    {
      question: "Who is eligible for the program?",
      answer:
        "Anyone with a keen interest in learning and improving their skills can join. Basic computer knowledge is recommended.",
    },
    {
      question: "How can I get a certificate?",
      answer:
        "You will receive a certificate upon successfully completing all projects and clearing the pre-placement test.",
    },
    {
        question: "What kind of support is provided?",
        answer:
          "We provide mentorship, doubt-clearing sessions, and access to learning resources to help you succeed.",
      },
      {
        question: "What are the fees for the program?",
        answer:
          "The fees vary depending on the module you choose. Contact our team for detailed information.",
      }
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Your question has been submitted!"); // Replace this with actual form handling logic
    setShowModal(false); // Close modal after submission
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
              >
                {faq.question}
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 text-gray-600 bg-gray-100 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ask a Question Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Ask a Question
          </button>
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
                Submit Your Question
              </h2>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="question"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Question
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
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
      </div>
    </div>
  );
};

export default FAQs;
