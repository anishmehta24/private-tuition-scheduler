"use client";

import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Fullscreen Hero Section */}
      <section
        className="h-screen flex flex-col lg:flex-row items-center justify-between px-8 py-32 lg:px-16 bg-gradient-to-r from-gray-900 via-black to-gray-900"
        id="hero"
      >
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.span className="block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              Welcome!
            </motion.span>
            <motion.span className="block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
              I'm <span className="text-purple-500">[Full Name]</span>, your Physics Teacher
            </motion.span>
          </motion.h1>
          <p className="text-gray-300 text-lg md:text-xl mb-6">
            Dedicated to teaching <strong>Physics</strong> with passion and
            clarity. Specializing in guiding students from grades
            <strong> 9th to 12th</strong> toward excellence in academics and
            competitive exams.
          </p>
          <a
            href="#about"
            className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-bold text-white transition-transform transform hover:scale-105"
          >
            Learn More About Me
          </a>
        </div>

        {/* Image Placeholder */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="w-64 h-64 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden bg-gray-800 border-4 border-purple-600 shadow-lg">
            <div className="flex items-center justify-center w-full h-full text-2xl text-gray-500">
              Image Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
  id="about"
  className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-8 py-16 lg:px-16"
>
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
    About Me
  </h2>
  <div className="space-y-10">
    {/* Specialization Section */}
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 cursor-default"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-2xl font-bold mb-4">Specialization</h3>
      <p className="text-gray-300 text-lg leading-relaxed">
        I specialize in teaching <strong>Physics</strong> to students from 
        <strong> 9th to 12th grade</strong>, focusing on developing a deep 
        conceptual understanding of the subject. My teaching approach emphasizes 
        clarity and precision, helping students build a strong foundation for 
        excelling in competitive exams like <strong>JEE</strong> and 
        <strong> NEET</strong>. With an interactive and student-centered 
        methodology, I aim to make complex concepts simple and relatable, ensuring 
        that every student gains confidence in tackling challenging problems.
      </p>
    </motion.div>

    {/* Achievements Section */}
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 cursor-default"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3 className="text-2xl font-bold mb-4">Achievements</h3>
      <ul className="list-disc pl-6 text-gray-300 space-y-3">
        <li>
          <span className="font-bold text-purple-400">National Science Olympiad Winner:</span>{" "}
          Secured <strong>1st position</strong> in the state-level Physics Olympiad.
        </li>
        <li>
          <span className="font-bold text-purple-400">JEE Top Mentor:</span> Mentored 
          <strong> 100+ students</strong>, with several scoring ranks under 500 in JEE Advanced.
        </li>
        <li>
          <span className="font-bold text-purple-400">Published Author:</span> Co-authored 
          a book on advanced Physics concepts for competitive exams.
        </li>
      </ul>
    </motion.div>

    {/* Qualifications Section */}
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 cursor-default"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h3 className="text-2xl font-bold mb-4">Qualifications</h3>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* Circular Placeholder for Images */}
        <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-lg">Image</span>
        </div>
        <ul className="list-disc pl-6 text-gray-300 space-y-3">
          <li>
            <span className="font-bold text-purple-400">M.Sc. in Physics:</span> Graduated 
            with distinction from XYZ University.
          </li>
          <li>
            <span className="font-bold text-purple-400">Teaching Certification:</span> Certified 
            by ABC Institution for excellence in Physics education.
          </li>
          <li>
            <span className="font-bold text-purple-400">Professional Experience:</span> 
            Over <strong>5 years</strong> of teaching experience with proven results.
          </li>
        </ul>
      </div>
    </motion.div>
  </div>
</section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-8 py-16 lg:px-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
          What Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-300 italic">
              "The best Physics teacher I’ve ever had! Concepts are crystal
              clear now."
            </p>
            <span className="block mt-4 text-purple-500 font-bold">
              - Student 1
            </span>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-300 italic">
              "Thanks to their guidance, I excelled in my board exams and
              competitive tests."
            </p>
            <span className="block mt-4 text-purple-500 font-bold">
              - Student 2
            </span>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-300 italic">
              "Learning Physics has never been this easy and fun. Highly
              recommended!"
            </p>
            <span className="block mt-4 text-purple-500 font-bold">
              - Student 3
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
