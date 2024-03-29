/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // output: "export",
  /**
   * Disable server-based image optimization.
   *
   * @see https://nextjs.org/blog/next-12-3#disable-image-optimization-stable
   */
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/personal-page/" : "",
  basePath: isProd ? "/personal-page" : ""
};
module.exports = nextConfig;
