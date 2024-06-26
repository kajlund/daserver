import http from 'node:http'
import util from 'node:util'

import 'dotenv/config'

import app from './app.js'
import log from './logger.js'

process.on('uncaughtException', (err) => {
  log.fatal(`UNCAUGHT EXCEPTION - ${err.stack || err.message}`)
  process.exit(1)
})

process.on('unhandledRejection', (reason, p) => {
  log.fatal(`UNHANDLED PROMISE REJECTION: ${util.inspect(p)} reason: ${reason}`)
  process.exit(1)
})

log.info('Starting server')
http.createServer(app).listen(process.env.PORT, () => {
  log.info(`Server listening on port ${process.env.PORT}`)
})
