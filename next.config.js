/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol:'http',
            hostname:'localhost',
            port:'8000',
            pathname:'/**',
          },
          {
            protocol:'https',
            hostname:'"i.imgur.com',
            port:'',
            pathname:'/**',
          }
        ],
      },
}

module.exports = nextConfig
