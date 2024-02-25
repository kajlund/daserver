export default {
  group: {
    prefix: '',
    middleware: [],
  },
  routes: [
    {
      method: 'get',
      path: '/ping',
      middleware: [],
      handler: (req, res) => res.send('PONG'),
    },
  ],
}
