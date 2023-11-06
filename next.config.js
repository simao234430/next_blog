/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
// @ts-check
const { withContentlayer } = require('next-contentlayer')
module.exports = withContentlayer({
  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname: '**',
          port: '',
          pathname: '**',
      },
  ],
    domains: ['pbs.twimg.com', 'avatars.githubusercontent.com', 'i.imgur.com'],
  },
  headers: async () => [{
    source: '/:path*',
    headers: [
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      { key: 'Cross-Origin-Embedder-Policy', value: 'same-origin' },
    ],
  }],
})

