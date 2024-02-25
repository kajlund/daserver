import express from 'express'

import log from './logger.js'
import rootRoutes from './root.routes.js'

class Router {
  constructor() {
    this.router = express.Router()
    this.rootRoutes = [rootRoutes]
    this.apiRoutes = []
  }

  #attachRoutes(routeGroups, prefix = '') {
    routeGroups.forEach(({ group, routes }) => {
      routes.forEach(({ method, path, middleware = [], handler }) => {
        log.info(`Route: ${method} ${prefix}${group.prefix}${path}`)
        this.router[method](prefix + group.prefix + path, [...(group.middleware || []), ...middleware], handler)
      })
    })
  }

  initializeRouter(app) {
    this.#attachRoutes(this.rootRoutes, '')
    this.#attachRoutes(this.apiRoutes, '/api/v1')

    // register router
    app.use(this.router)
  }
}

export default new Router()
