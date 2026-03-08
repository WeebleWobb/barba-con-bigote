import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  sassOptions: {
    includePaths: ['./src/app/styles'],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here if needed
})

export default withMDX(nextConfig)
