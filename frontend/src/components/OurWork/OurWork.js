import React from "react";
import Styles from "../OurJobs/OurJobs.module.css"; 
import { useRouter } from 'next/router';

const OurWork = () => {
  const router = useRouter();

  const navigateToSpecificEntry = () => {
    router.push("/our-works");
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 ">
      <div className="relative w-80 h-80 bg-green-500 border border-gray-300 transition-transform duration-300 transform flex flex-col items-center justify-center group">
        <h1 className="text-2xl font-bold text-white">Our Work</h1>
        <button
          onClick={navigateToSpecificEntry}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Explore now
        </button>
      </div>
    </div>
  );
};

export default OurWork;
