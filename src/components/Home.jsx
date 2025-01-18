import React, { useState } from 'react'
import HeroSection from './ui/HeroSection'
import CoursesSection from './ui/CoursesSection'
import PlacementGuaranteeCourses from './ui/PlacementGuaranteeCourses'
import JobSection from './ui/JobSection'
import TopCompanies from './ui/TopCompanies'
import DoubtsClarified from './ui/DoubtsClarified'
import UpgradesPage from './ui/UpgradesPage'
import CertificationSection from "./ui/CertificationSection";
import FAQs from "./ui/FAQs";
import WhatsAppButton from './ui/Whatsapp'

const Home = ({setIndexId}) => {
 
  return (
    <>
        <HeroSection />
        <CoursesSection setIndexId={setIndexId}/>
        <PlacementGuaranteeCourses />
        {/* <JobSection /> */}
        <TopCompanies />
        <UpgradesPage/>
        <DoubtsClarified/>
        <WhatsAppButton/>
        <CertificationSection />
        <FAQs/>

    </>
  )
}

export default Home