/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
        domains: [
            'facebook.com',
            'fbcdn.net',
            'images.unsplash.com',
            'i.ytimg.com',
            'vabadus.es',
            'miro.medium.com'
        ],
    },
}

module.exports = nextConfig
