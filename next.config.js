const withPWA = require('next-pwa')
const path = require('path')

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
})
