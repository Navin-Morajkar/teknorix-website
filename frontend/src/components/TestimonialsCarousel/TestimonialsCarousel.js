import React, { useState, useEffect } from 'react';
import { RightCircleFilled } from '@ant-design/icons';

const testimonialsData = [
  { name: 'Macleane', 
    text: '“Global client exposure, supportive Tek family, and new learning challenges at every stage. What else could I ask for?”', 
    photo: 'https://www.teknorix.com/wp-content/uploads/2023/08/Macleane-500x500.jpg' },
  { name: 'Prajkta', 
    text: '“What I love about my Job as a Project Manager is that we are the pioneers in adopting to latest technologies.”', 
    photo: 'https://www.teknorix.com/wp-content/uploads/2023/08/Teknorix-day-2-0422-500x500.jpg' },
  { name: 'Denstan', 
    text: '“Working at Teknorix has been a great pleasure and privilege. I am surrounded by a wonderful and diverse team.”', 
    photo: 'https://www.teknorix.com/wp-content/uploads/2023/08/Denstan-500x500.jpg' },
  { name: 'Aditya', 
    text: '“Every day is a new opportunity to learn, and every challenge is a new opportunity to grow.”', 
    photo: 'https://www.teknorix.com/wp-content/uploads/2023/08/Aditya-500x500.jpg' },
  { name: 'Prinoy', 
    text: '“It’s been 8 years since I joined Teknorix, and I am convinced that this is the best career decision I made.”', 
    photo: 'https://www.teknorix.com/wp-content/uploads/2023/08/Prinoy-500x500.jpg' },
  // ... more testimonials
];

const Testimonial = ({ name, text }) => (
  <div className="text-left m-0 mx-auto p-8 border border-white border-solid bg-blue-50">
    <p className="text-2xl italic text-slate-500 pb-8 mb-8">{text}</p>
    <p className="text-2xl font-bold pt-8">{name}</p>
  </div>
);

const PaginationDots = ({ testimonials, currentIdx, onDotClick }) => {
  const numTestimonials = testimonials.length;
  const dotsToShow = [];

  for (let i = currentIdx; i < currentIdx + 3; i++) {
    dotsToShow.push(i % numTestimonials);
  }

  return (
    <div className="flex w-24 h-24">
      {dotsToShow.map((idx) => (
        <img
          key={idx}
          src={testimonials[idx].photo}
          alt={testimonials[idx].name}
          width={100}
          className="rounded-full m-1.5 border-2 border-blue-600 cursor-pointer"
          onClick={() => onDotClick(idx)}
        />
      ))}
    </div>
  );
};

const TestimonialsCarousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => {
    setCurrentIdx((currentIdx + 1) % testimonialsData.length);
  };

  const handleDotClick = (dotIndex) => {
    setCurrentIdx(dotIndex);
  };

  useEffect(() => {
    const AUTO_CHANGE_INTERVAL = 5000; // 5 seconds
    const intervalId = setInterval(handleNext, AUTO_CHANGE_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIdx]);

  useEffect(() => {
    // Check if the screen is small (tailwind class `md:hidden` hides the element on medium and larger screens)
    const isSmallScreen = window.innerWidth < 768; // Adjust the breakpoint as needed

    if (!isSmallScreen) {
      const PaginationDots = ({ testimonials, currentIdx, onDotClick }) => {
        const numTestimonials = testimonials.length;
        const dotsToShow = [];
      
        for (let i = currentIdx; i < currentIdx + 1; i++) {
          dotsToShow.push(i % numTestimonials);
        }
      
        return (
          <div className="flex w-24 h-24">
            {dotsToShow.map((idx) => (
              <img
                key={idx}
                src={testimonials[idx].photo}
                alt={testimonials[idx].name}
                width={100}
                className="rounded-full m-1.5 border-2 border-blue-600 cursor-pointer"
                onClick={() => onDotClick(idx)}
              />
            ))}
          </div>
        );
      };
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="relative flex flex-col items-center">
      <Testimonial {...testimonialsData[currentIdx]} />

      <div className="absolute bottom-0 right-0 md:right-48 flex justify-end items-end">
        <PaginationDots testimonials={testimonialsData} currentIdx={currentIdx} onDotClick={handleDotClick} />
        <RightCircleFilled
          onClick={handleNext}
          className="w-12 h-12 cursor-pointer mt-2"
          style={{ fontSize: '5rem', color: '#ffc801', marginRight: '4rem' }}
        />
      </div>
    </div>
  );
};

export default TestimonialsCarousel;