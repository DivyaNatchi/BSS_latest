// App.jsx

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechlogosSection from "./components/TechLogosSection";
import AboutSection from "./components/AboutSection";
import WhyUsSection from "./components/WhyUsSection";
import SkillsSection from "./components/SkillsSection";
import ServicesSection from "./components/ServicesSection";
import CallToActionSection from "./components/CallToActionSection";
import PortfolioSection from "./components/Portfolio/PortfolioSection";
import TeamSection from "./components/TeamSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/Testimonials/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import NewsLetterSection from "./components/NewsLetterSection";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

export default function () {
  const [testimonialModalOpen, setTestimonialModalOpen] = useState(false);
  const [portfolioModalOpen, setPortfolioModalOpen] = useState(false);

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleTestimonialModal = (testimonial = null) => {
    setSelectedTestimonial(testimonial);
    setTestimonialModalOpen(!testimonialModalOpen); // Toggle testimonial modal
  };

  const togglePortfolioModal = (project = null) => {
    setSelectedProject(project);
    setPortfolioModalOpen(!portfolioModalOpen); // Toggle portfolio modal
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Control animation duration
      easing: "ease-out", // Smooth easing
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <TechlogosSection />
      <AboutSection />
      <WhyUsSection />
      {/* <SkillsSection /> */}
      <ServicesSection />
      {/* <CallToActionSection /> */}
      <PortfolioSection
        toggleModal={togglePortfolioModal} // Pass toggleModal for Portfolio
        modalOpen={portfolioModalOpen}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject} // Pass state and setter for selected project
      />
      <TeamSection />
      {/* <PricingSection /> */}
      <TestimonialsSection
        toggleModal={toggleTestimonialModal} // Pass toggleModal for Testimonials
        modalOpen={testimonialModalOpen}
        selectedTestimonial={selectedTestimonial}
        setSelectedTestimonial={setSelectedTestimonial} // Pass state and setter for selected testimonial
      />
      <ContactSection />
      <NewsLetterSection />
      <Footer
        testimonialModalOpen={testimonialModalOpen}
        portfolioModalOpen={portfolioModalOpen}
      />
    </>
  );
}
