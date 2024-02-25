import cors from 'cors'
import express from 'express'

import Router from './router.js'

class App {
  constructor(router) {
    this.app = express()
    this.router = router
  }

  #setupMiddleware() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(cors())
  }

  #setupRoutes() {
    this.router.initializeRouter(this.app)
  }

  initialize() {
    this.#setupMiddleware()
    this.#setupRoutes()
  }
}

const expressApp = new App(Router)
expressApp.initialize()

export default expressApp.app
