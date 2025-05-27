import { NextConfig } from 'next'
import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const withMDX = createMDX({
  extension: /\.mdx?$/,
})

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ordpwm1r5u.ufs.sh",
        pathname: "/f/*",
      },
    ],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  experimental: {
    viewTransition: true
  }
}
 
export default withMDX(config)