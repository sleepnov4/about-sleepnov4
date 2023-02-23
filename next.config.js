// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const nextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = nextra()