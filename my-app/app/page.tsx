'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FreelanceLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-6 py-16">
      {/* HERO SECTION */}
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center relative overflow-hidden group transition-all duration-300"
        whileHover={{ scale: 1.05 }} // example hover effect
      >
        {/* Decorative Blobs */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-50 group-hover:scale-105 transition" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 group-hover:scale-105 transition" />

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            Bring Your Vision to Life
          </h1>

          <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
            I craft digital experiences that look amazing and convert — landing pages, websites, and branding with soul.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              Let’s Work Together
            </Link>
          </div>

          {/* Trusted Clients */}
          <div className="flex items-center gap-4 mt-10 justify-center md:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((_, i) => (
                <Image
                  key={i}
                  src="/home/photo_3_2025-04-22_22-05-16.jpg"
                  alt="Client Avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white shadow"
                />
              ))}
            </div>
            <p className="text-gray-700 font-medium text-sm md:text-base">Trusted by <span className="font-semibold">50+ clients</span></p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-80 h-80 mt-10 md:mt-0 flex-shrink-0 shadow-xl rounded-2xl bg-gray-100 overflow-hidden ring-1 ring-gray-200 z-10">
          <Image
            src="/Cropped_20241022_094725.jpg"
            alt="Freelance Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />

          {/* Floating Profile Card */}
          <div className="absolute bottom-3 right-4 bg-white p-3 rounded-2xl shadow-md flex flex-col items-start text-left space-y-1">
            <p className="font-bold text-gray-800 text-sm">Mike</p>
            <p className="text-gray-500 text-xs">WEB-DEV</p>
            <p className="text-emerald-600 text-sm font-semibold">$25/project</p>
          </div>
        </div>
      </motion.div>

      {/* POPULAR SERVICES */}
      <div className="mt-14">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
  My Most Popular Services
</h2>

{/* Message */}
<p className="text-xl text-red-600 mb-10 text-center font-semibold uppercase tracking-wider shadow-lg p-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl">
  Choose one of the services below
</p>



  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Service Card 1 */}
    <Link href="/landingpage">
      <motion.div
        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.03] transition transform hover:shadow-2xl duration-300 cursor-pointer"
        whileHover={{ scale: 1.03 }} // example hover effect
      >
        <Image
          src="/indiviuall.jpg"
          alt="Landing Page Design"
          width={500}
          height={500}
          className="object-cover w-full h-56"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Landing Page Design</h3>
          <p className="text-gray-600 text-sm">
            High-converting, polished landing pages that drive results and build trust.
          </p>
        </div>
      </motion.div>
    </Link>

    {/* Service Card 2 */}
    <motion.div
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.03] transition transform hover:shadow-2xl duration-300 cursor-pointer"
      whileHover={{ scale: 1.03 }} // example hover effect
    >
      <Image
        src="/photo_6_2025-04-29_11-02-40.jpg"
        alt="Custom Website Development"
        width={800}
        height={400}
        className="object-cover w-full h-56"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Website Development</h3>
        <p className="text-gray-600 text-sm">
          Pixel-perfect, responsive websites tailored to your brand’s voice and purpose.
        </p>
      </div>
    </motion.div>
  </div>
</div>

    </div>
  );
}
