'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const landingPages = [
    { href: "/landingpage/landingpage1", title: "Landing Page 1", img: "/photo_1_2025-04-29_11-02-40.jpg" },
    { href: "/landingpage/landingpage2", title: "Landing Page 2", img: "/photo_1_2025-04-29_11-02-40.jpg" },
    { href: "/landingpage/landingpage3", title: "Landing Page 3", img: "/photo_1_2025-04-29_11-02-40.jpg" },
    { href: "/landingpage/landingpage4", title: "Landing Page 4", img: "/photo_1_2025-04-29_11-02-40.jpg" },
    { href: "/landingpage/landingpage5", title: "Landing Page 5", img: "/photo_1_2025-04-29_11-02-40.jpg" },
  ];

  return (
    <div className="flex flex-col justify-center mt-5 items-center min-h-screen px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
      <motion.h1 
        className="text-3xl md:text-6xl font-extrabold p-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-lime-500 to-green-800 mb-12 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🌿 Discover Stunning Homepage Designs
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {landingPages.map((page, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={page.href} className="group block rounded-3xl backdrop-blur-md bg-white/70 shadow-2xl overflow-hidden transition-all hover:shadow-green-300 border border-green-100">
              <div className="relative w-full h-52">
                <Image
                  src={page.img}
                  alt={page.title}
                  fill
                  sizes="100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-green-700 group-hover:text-green-900 transition-colors duration-300">
                  {page.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm group-hover:text-gray-800 transition-colors duration-300">
                  A modern and elegant homepage to impress your audience.
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
