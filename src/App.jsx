import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { Detail, Home, Project, Transcript, Skill, School, Contact } from './components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Mousewheel, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
  const HomeRef = useRef();
  const DetailRef = useRef();
  const SchoolRef = useRef();
  const SkillRef = useRef();
  const ProjectRef = useRef();
  const TranscriptRef = useRef();
  const ContactRef = useRef();

  const sectionsRefs = [HomeRef, DetailRef, SchoolRef, SkillRef, ProjectRef, TranscriptRef, ContactRef];

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the index of the intersecting element in the refs array
          const index = sectionsRefs.findIndex(ref => ref.current === entry.target);
          // console.log(index);
          setActiveSection(index);
        }
      });
    }, observerOptions);

    // Attach the observer to each section ref
    sectionsRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, [sectionsRefs]);

  return (
    <>
      <Swiper
        direction={'vertical'}
        className="scroll-container"
        speed={1000}
        modules={[Mousewheel, Pagination]}
        mousewheel={{
          invert: false,
          sensitivity: 1,
          eventsTarget: ".scroll-container"
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 1,
            touchRatio: 1
          },
          768: {
            slidesPerView: 1,
            touchRatio: 0
          }
        }}
      >
        <SwiperSlide className="scroll-page" ref={HomeRef}><Home /></SwiperSlide>
        <SwiperSlide className="scroll-page" ref={DetailRef}><Detail /></SwiperSlide>
        <SwiperSlide className="scroll-page" ref={SchoolRef}><School /></SwiperSlide>
        <SwiperSlide className="scroll-page" ref={SkillRef}><Skill /></SwiperSlide>
        <SwiperSlide className="scroll-page" ref={ProjectRef}><Project /></SwiperSlide>
        <SwiperSlide className="scroll-page" ref={ContactRef}><Contact /></SwiperSlide>
        <SwiperSlide className="scroll-page" ref={TranscriptRef}><Transcript /></SwiperSlide>

      </Swiper>
    </>
  );
}

export default App;
