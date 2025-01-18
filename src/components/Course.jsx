import React from 'react';
import DetailsPage from './DetailsPage'
import WhatsAppButton from './ui/Whatsapp'



import { courses } from "./assets/data/courseData"
import { Link } from 'react-router-dom';

const Courses = ({setIndexId,indexId}) => {
  console.log(indexId)
  return (
    <div className="flex min-h-screen bg-gray-100 p-6">


      {/* Courses Grid */}
      <div className="w-screen flex justify-center items-center border flex-col">
        <Link to={"/details"}>
        <h2 className="text-2xl font-bold mb-6 border">Most Popular Courses</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 border w-[95%]">
          {courses.map((course) => (
            <div key={course.id} className="bg-white w-[400px] rounded-lg shadow-md overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-[25%] object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{course.duration}</p>
                <p className="text-yellow-500 font-bold text-sm mb-4">⭐ {course.rating}</p>
                <p className="text-gray-600 text-sm mb-4">{course.learners} learners</p>
                <button className="text-blue-500 font-semibold hover:underline" onClick={()=>setIndexId(course.id)}>
                  {/* <DetailsPage/> */} know more
                </button>
              </div>

            </div>
          ))}
        </div>
       
        </Link>
        
      </div>
      <WhatsAppButton/>
    </div>
    
  );
};

export default Courses;
