'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const heroImages = [
  '/home/photo_3_2025-04-22_22-05-16.jpg',
  '/home/photo_4_2025-04-22_22-05-16.jpg',
  '/home/photo_5_2025-04-22_22-05-16.jpg',
  '/home/photo_25_2025-04-22_22-05-17.jpg',
];

export default function Page() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-800 scroll-smooth">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-green-100 to-lime-200 border-b-4 border-green-300">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold text-green-700">Nurturing Health, Building Trust</h1>
            <p className="mt-5 text-lg text-gray-700 max-w-xl">
              Personalized family medicine, pediatric care, and women’s health, all under one roof.
            </p>
            <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-xl text-lg shadow hover:bg-green-700 transition-all">
              Visit Us Today
            </button>
          </motion.div>

          <motion.div 
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          >
            <Image
              src={heroImages[heroIndex]}
              alt="Hero"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl border-4 border-green-300 object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 bg-green-50 border-b-4 border-green-200">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            '/service/photo_6_2025-04-22_22-05-17.jpg',
            '/service/photo_11_2025-04-22_22-05-17.jpg',
            '/service/photo_19_2025-04-22_22-05-17.jpg'
          ].map((img, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-xl p-6 border border-green-200 hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <h4 className="text-xl font-semibold text-green-700 mb-4">
                {['Elderly & Outpatient Care', 'Pediatrics', 'Compassionate Physicians'][i]}
              </h4>
              <div className="relative w-full h-48 rounded-xl overflow-hidden">
                <Image
                  src={img}
                  alt={`service-${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-white border-b-4 border-green-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-700">
            We are committed to your wellness. Our team of healthcare professionals offers high-quality, comprehensive services tailored to you and your family’s needs. Experience care rooted in compassion, innovation, and community values.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-20 bg-green-100 border-b-4 border-green-300">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Sarah T.", feedback: "Amazing service. They treat you like family!" },
            { name: "David R.", feedback: "Professional doctors and welcoming staff. Highly recommend." },
            { name: "Lina M.", feedback: "The pediatricians here are so good with children. 10/10." }
          ].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg border border-green-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <p className="text-gray-700 italic">“{t.feedback}”</p>
              <p className="mt-4 text-green-800 font-bold">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-green-600 to-green-700 text-white text-center border-b-4 border-green-800">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Prioritize Your Health?</h2>
        <p className="mb-8 text-lg">Schedule your visit today and let us take care of the rest.</p>
        <button className="bg-white text-green-800 px-8 py-3 rounded-xl font-bold hover:bg-green-100 transition-all">
          Book Appointment
        </button>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-20 bg-green-50 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-10">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg border border-green-300" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-green-300" />
          <textarea placeholder="Message" rows={5} className="w-full p-3 rounded-lg border border-green-300"></textarea>
          <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center bg-green-700 text-white">
        <p>&copy; {new Date().getFullYear()} GreenMed Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
}
