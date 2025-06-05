'use client'
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home4() {
  useEffect(() => {
    document.title = "Responsive Landing Page";
  }, []);

  return (
    <main className="font-sans bg-gradient-to-b from-white to-purple-100 text-gray-800">
      <header className="py-6 shadow-md bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">Electh.</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-purple-600">Courses</a>
            <a href="#" className="hover:text-purple-600">Teacher</a>
            <a href="#" className="hover:text-purple-600">Student</a>
            <a href="#" className="hover:text-purple-600">Blog</a>
            <a href="#" className="hover:text-purple-600">About</a>
          </nav>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">Login</button>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Develop your skills in a new and unique way</h2>
          <p className="text-lg mb-6">Learn from industry experts with interactive video courses and certifications.</p>
          <div className="space-x-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded">Join Now</button>
            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded">Explore</button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="border-4 border-gray-300 rounded-lg overflow-hidden">
            <Image src="/hero-image.jpg" alt="Hero" width={500} height={500} />
          </div>
        </motion.div>
      </section>

      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center mb-10">Our Popular Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map((item) => (
              <motion.div 
                key={item} 
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg border border-gray-200"
                whileHover={{ scale: 1.05 }}
              >
                <div className="border-4 border-gray-300 mb-4">
                  <Image src={`/course-${item}.jpg`} alt={`Course ${item}`} width={300} height={200} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Course Title {item}</h4>
                <p className="text-sm text-gray-600 mb-2">Brief course description goes here.</p>
                <span className="text-purple-600 font-semibold">$99.00</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">If You Are A Certified Teacher Then Discover A Platform</h3>
          <p className="mb-6">Enjoy many perks like income, visibility, networking, and more.</p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded">Join as Teacher</button>
        </div>
      </section>

      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-10">Students Testimonial</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((testimonial) => (
              <motion.div 
                key={testimonial} 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                whileHover={{ y: -5 }}
              >
                <p className="mb-4">“This platform changed my career. I learned so much!”</p>
                <div className="flex items-center space-x-4">
                  <div className="border-4 border-gray-300 rounded-full overflow-hidden">
                    <Image src={`/user-${testimonial}.jpg`} alt="User" width={50} height={50} />
                  </div>
                  <div>
                    <h5 className="font-semibold">Student {testimonial}</h5>
                    <p className="text-sm text-gray-500">Course Graduate</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white py-6 text-center text-sm text-gray-500 border-t mt-12">
        &copy; 2025 Electh. All rights reserved.
      </footer>
    </main>
  );
}
