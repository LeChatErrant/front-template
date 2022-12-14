const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
])

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  /**
   * Changed the default mui style engine (emotion) by an implementation using styled components
   */
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    }
    return config
  },
}

module.exports = withTM(nextConfig)
