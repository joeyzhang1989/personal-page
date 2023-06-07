/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "./";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
}
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
  assetPrefix: assetPrefix,
};
module.exports = nextConfig;
