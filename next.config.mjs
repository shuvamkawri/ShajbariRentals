// Static export so the site can be hosted anywhere (GitHub Pages, Netlify, cPanel…).
// For GitHub Pages the workflow sets NEXT_PUBLIC_BASE_PATH=/ShajbariRentals.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
