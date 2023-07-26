/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    project: "1yAR0vQ6Di6va7X4Rtd-004iajFdNSH_v",
    mapsKey: "AIzaSyDVLquTAWKVDTDeJn9_HRK6OAemT_UOb14",
  },
  images: {
    domains: ["api.doc2.site"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
