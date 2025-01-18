import React from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "./ui/Whatsapp";

const About = () => {
  return (
    <div className="mycontainer3 py-10">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">
          Empowering Careers Through Education & Opportunity
        </h1>
        <p className="mt-4 text-lg">
          The world of technology is evolving faster than ever, yet countless
          aspiring professionals struggle to find the right path into the
          industry. <br />
          Traditional education is failing them—outdated curriculums,
          theoretical learning, and a lack of real-world exposure leave
          graduates unprepared for the job market. <br />
          At One Diksha, we believe in a new era of education—one that is
          practical, career-focused, and guarantees employment. <br />
          We have designed a job-secured learning experience that doesn’t just
          teach you to code but ensures you start your career in tech with
          confidence. <br />
          We don’t sell dreams; we deliver results. <br />
          Unlike generic coding bootcamps or expensive degrees, our platform is
          built with one goal in mind: to get you hired and help you thrive in
          the tech industry. <br />
          From the moment you enroll, your job is secured for the next 12
          months, ensuring you gain both the skills and the industry experience
          necessary for long-term career success.
        </p>
        <br />
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold">
          <Link to="/courses">Explore Our Courses</Link>
        </button>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center">Our Mission & Vision</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="mt-4 text-gray-700">
              Our mission is clear and ambitious: <br />
              To eliminate unemployment in the tech industry by creating a
              risk-free, guaranteed career pathway for aspiring professionals.
              To make tech education accessible, practical, and
              results-oriented. To build a global ecosystem where students,
              mentors, and hiring partners work together to drive innovation,
              skill development, and career success. We believe that true
              learning happens through experience, which is why our program is
              designed around real-world projects, industry mentorship, and
              hands-on coding challenges. Every student graduates with a strong
              portfolio, interview experience, and a guaranteed job offer—not
              just a certificate.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="mt-4 text-gray-700">
              We envision a future where:
              <br /> ✅ Education guarantees employment – No more uncertainty,
              no more waiting, no more struggling with endless job applications.{" "}
              <br />✅ Anyone can break into the software industry – Whether
              you're a fresh graduate, a career switcher, or someone with zero
              coding experience, we provide a structured and personalized
              roadmap to success. <br />✅ Employers find job-ready talent – We
              are creating a talent pipeline where companies hire skilled
              professionals who are fully trained, industry-ready, and
              experienced from Day 1. <br />✅ Learning is outcome-driven, not
              certificate-driven – Unlike traditional courses that leave
              students with just a certificate, we deliver tangible results: A
              job. A career. A future.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-white py-10">
        <h2 className="text-3xl font-bold text-center">What We Offer</h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Industry-Relevant Courses</h3>
            <p className="mt-2 text-gray-200">
              From Full-Stack Development to Data Science, our courses are
              designed to make you job-ready.
            </p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">
              Wide Range of Job Opportunities
            </h3>
            <p className="mt-2 text-gray-200">
              Get access to top companies hiring for full-time, part-time, and
              freelance positions.
            </p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Placement Assistance</h3>
            <p className="mt-2 text-gray-200">
              We guide you every step of the way, from resume building to
              interview preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-500 text-white py-10">
        <h2 className="text-3xl font-bold">Ready to Kickstart Your Career?</h2>
        <p className="mt-4">Join 100,000+ learners and professionals today!</p>
        <a
          href="https://forms.gle/LM4RTGzSDEtRJoYQ6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-red-700 transition inline-block"
        >
          Start Learning
        </a>
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default About;
