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
    "headers": [
        {
            "source": "/api/(.*)",
            "headers": [
                { "key": "Access-Control-Allow-Credentials", "value": "true" },
                { "key": "Access-Control-Allow-Origin", "value": "*" },
                { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
            ]
        }
    ]
}

module.exports = nextConfig
