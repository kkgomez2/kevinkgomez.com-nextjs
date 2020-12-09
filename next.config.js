module.exports = {
  async redirects() {
    return [
      {
        source: '/vo',
        destination: '/',
        permanent: true,
      },
    ]
  }
}
