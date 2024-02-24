import cors from 'cors'
import express from 'express'

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
    this.app.get('/ping', (req, res) => res.send('PONG'))
  }

  initialize() {
    this.#setupMiddleware()
    this.#setupRoutes()
  }
}

export default App
