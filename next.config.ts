import { NextConfig } from 'next'
 
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
}
 
export default config