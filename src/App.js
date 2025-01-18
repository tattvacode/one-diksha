import React, { useState } from "react";
import Navbar from "./components/ui/Navbar";
import HeroSection from "./components/ui/HeroSection";
import PlacementGuaranteeCourses from "./components/ui/PlacementGuaranteeCourses";
import CoursesSection from "./components/ui/CoursesSection";
import JobSection from "./components/ui/JobSection";
import TopCompanies from "./components/ui/TopCompanies";
import DoubtsClarified from "./components/ui/DoubtsClarified";
import CertificationSection from "./components/ui/CertificationSection";
import { Routes, Route } from "react-router-dom";


import ContactForm from "./components/ui/ContactForm";
import Footer from "./components/ui/Footer";
import Login from "./components/ui/Login";
import Signup from "./components/ui/Signup";
import Home from "./components/Home";
import DetailsPage from "./components/DetailsPage";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Course from "./components/Course";





function App() {
  const [indexId, setIndexId] = useState(-1)
  console.log(indexId)

  return (
    <div className="bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setIndexId={setIndexId} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/courses" element={<Course indexId={indexId} setIndexId={setIndexId}/>} />
        <Route path="/details" element={<DetailsPage indexId={indexId} />} />
        
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App
