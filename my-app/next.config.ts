/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <<< Add this line
  images: {
    domains: ['i.pravatar.cc', 'images.unsplash.com'], // Allow external images (removed duplicate)
    unoptimized: true, // Add this so images work with static export
  },
};

module.exports = nextConfig;
