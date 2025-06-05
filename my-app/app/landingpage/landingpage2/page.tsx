'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-teal-400">

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url("/home/hero-image.jpg")' }}>
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
  <div className="relative z-10 text-center text-white px-8 py-12">
    <motion.h1 
      className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight mb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Empower Your Health Journey
    </motion.h1>
    <p className="text-lg md:text-2xl font-light mb-6 max-w-lg mx-auto">
      Leveraging technology and care to transform healthcare and improve lives.
    </p>
    <motion.button 
      className="bg-green-500 hover:bg-green-600 text-xl text-white px-12 py-5 rounded-full shadow-2xl transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Join Us Today
    </motion.button>
  </div>
</section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-semibold text-gray-800 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Why Choose Us?
          </motion.h2>
          <p className="text-lg text-gray-700 mb-6">We provide personalized, expert healthcare with a patient-first approach.</p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Cutting-Edge Technology', 'Expert Doctors', 'Comprehensive Care'].map((feature, idx) => (
              <motion.div
                key={idx}
                className="max-w-xs text-center p-6 bg-gray-50 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800">{feature}</h3>
                <p className="text-gray-600 mt-3">We ensure the highest quality care with a focus on your needs.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-teal-400 to-blue-500 text-white text-center">
        <h2 className="text-4xl font-semibold mb-8">What Our Patients Say</h2>
        <div className="flex justify-center gap-8">
          {['Amazing care!', 'Professional and reliable!', 'Best healthcare experience.'].map((quote, idx) => (
            <motion.div
              key={idx}
              className="max-w-xs bg-white p-6 rounded-lg shadow-lg text-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg italic">"{quote}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Take the First Step Toward Better Health</h2>
        <motion.button
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-xl px-10 py-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Appointment
        </motion.button>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-12">Meet Our Experts</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {['Dr. John Doe', 'Dr. Jane Smith', 'Dr. Mike Johnson'].map((doctor, idx) => (
              <motion.div
                key={idx}
                className="text-center bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={`/home/doctor-${idx + 1}.jpg`}
                  alt={doctor}
                  width={250}
                  height={250}
                  className="mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{doctor}</h3>
                <p className="text-gray-600">Specialist in {['Cardiology', 'Neurology', 'Pediatrics'][idx]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { question: 'What are your working hours?', answer: 'We are open from 8 AM to 8 PM daily.' },
              { question: 'Do you accept insurance?', answer: 'Yes, we accept various insurance plans.' },
              { question: 'How can I book an appointment?', answer: 'You can book an appointment online or by calling us.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-gray-800">{item.question}</h4>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <p className="text-sm">© 2025 Your Health Clinic. All rights reserved.</p>
      </footer>

    </div>
  );
}
