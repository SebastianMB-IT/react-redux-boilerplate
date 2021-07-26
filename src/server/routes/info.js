
export default function (server) {
  server.get('/info', () => {
    return {
      data: {
        version: '0.0.1',
        timestamp: Date.now()
      },
      success: true
    }
  })
}
