/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/site',
    assetPrefix: '/site/',
    images: {
        unoptimized: true,
    },
};

export default nextConfig; 