/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/site',
    assetPrefix: '/site/',
    images: {
        unoptimized: true,
        path: '/site/images'
    },
};

export default nextConfig;